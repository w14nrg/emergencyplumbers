// Output checks run after every build. Any problem makes the build exit non-zero.
import fs from "node:fs";
import path from "node:path";

// Details that belong to other businesses or to the old template. None may appear in the output.
const BANNED = [
  /kensington plumbing/i, /kensington\.biz/i, /\bKPS\b/, /gunterstone/i, /W14\s*9BP/i,
  /7371\s*3333/, /73713333/, /07949/, /7949\s*537/, /949537/, /02448533299/,
  /chelsea plumbers/i, /chelsea\.biz/i, /since 1962/i, /family[- ]run/i,
  /kensington bathrooms/i, /kensingtonbathrooms/i, /en-suites?\s*&\s*bathrooms/i, /en-suite\.co\.uk/i, /munster road/i, /SW6\s*6BW/i,
  /bad\s*boiler/i, /badboiler/i,
  /plumberz/i, /html\s*codex/i, /012\s*345\s*6789/, /lorem ipsum/i,
  /\[postcode\]/i, /\[issue\]/i, /TODO/, /\bTBC\b/,
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "_build" || e.name === "node_modules") continue;
    const fp = path.join(dir, e.name);
    e.isDirectory() ? walk(fp, out) : out.push(fp);
  }
  return out;
}

export function runChecks({ outDir, pages, redirects, config, release, draft, preview }) {
  const problems = [];
  const files = walk(outDir);
  const rel = (fp) => path.relative(outDir, fp).split(path.sep).join("/");
  const textFiles = files.filter((f) => /\.(html|xml|txt|css|js|svg|json)$/.test(f) || path.basename(f) === "CNAME");

  // 1. banned strings anywhere in published output
  for (const f of textFiles) {
    const s = fs.readFileSync(f, "utf8");
    for (const re of BANNED) if (re.test(s)) problems.push(`Banned text ${re} found in ${rel(f)}`);
  }

  // 2. per-page SEO checks
  const titles = new Map(), descs = new Map();
  for (const p of pages) {
    const file = p.path.endsWith("/") ? p.path.slice(1) + "index.html" : p.path.slice(1);
    const fp = path.join(outDir, file);
    if (!fs.existsSync(fp)) { problems.push(`Missing page ${p.path}`); continue; }
    const s = fs.readFileSync(fp, "utf8");
    const h1 = (s.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) problems.push(`${p.path} has ${h1} H1 headings`);
    const t = (s.match(/<title>(.*?)<\/title>/) || [])[1] || "";
    const d = (s.match(/<meta name="description" content="(.*?)">/) || [])[1] || "";
    if (t.length < 20 || t.length > 65) problems.push(`${p.path} title length ${t.length}: "${t}"`);
    if (d.length < 80 || d.length > 165) problems.push(`${p.path} description length ${d.length}`);
    if (titles.has(t)) problems.push(`Duplicate title on ${p.path} and ${titles.get(t)}`);
    if (descs.has(d)) problems.push(`Duplicate description on ${p.path} and ${descs.get(d)}`);
    titles.set(t, p.path); descs.set(d, p.path);
    const canon = (s.match(/<link rel="canonical" href="(.*?)">/) || [])[1];
    if (canon !== config.domain + p.path) problems.push(`${p.path} canonical is ${canon}`);
    // heading order: no h3 before the first h2
    const heads = [...s.matchAll(/<h([1-4])[\s>]/g)].map((m) => +m[1]);
    for (let i = 1; i < heads.length; i++) if (heads[i] > heads[i - 1] + 1) { problems.push(`${p.path} skips heading level h${heads[i - 1]}→h${heads[i]}`); break; }
    for (const m of s.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) problems.push(`${p.path} image without alt`);
    try { for (const m of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(m[1]); }
    catch { problems.push(`${p.path} invalid JSON-LD`); }
    if (release && /noindex/.test(s) && !p.noindex) problems.push(`${p.path} is noindex in a release build`);
    if (release && /draft-banner/.test(s)) problems.push(`${p.path} still shows the draft banner`);
  }

  // 3. every internal link and asset reference resolves to a file in the output
  for (const f of files.filter((x) => x.endsWith(".html"))) {
    const s = fs.readFileSync(f, "utf8");
    for (const m of s.matchAll(/\s(?:href|src)="([^"#?]*)(?:[#?][^"]*)?"/g)) {
      const u = m[1];
      if (!u || /^(https?:|mailto:|tel:|data:)/.test(u)) continue;
      let target = u.startsWith("/") ? path.join(outDir, u) : path.resolve(path.dirname(f), u);
      if (u.endsWith("/") || fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
      if (!fs.existsSync(target)) problems.push(`Broken link in ${rel(f)} → ${u}`);
    }
  }

  // 4. preserved files
  const cname = path.join(outDir, "CNAME");
  if (!fs.existsSync(cname) || fs.readFileSync(cname, "utf8").trim() !== "emergencyplumbers.london") problems.push("CNAME missing or changed");
  const gv = path.join(outDir, "googleb347dcd6249648e2.html");
  if (!fs.existsSync(gv) || fs.readFileSync(gv, "utf8").trim() !== "google-site-verification: googleb347dcd6249648e2.html") problems.push("Google verification file missing or changed");
  for (const keep of ["/", "/emergency-plumber-kensington.html", "/emergency-plumber-chelsea.html", "/emergency-plumber-fulham.html", "/emergency-plumber-hammersmith.html"])
    if (!pages.some((p) => p.path === keep)) problems.push(`Preserved URL ${keep} has no page`);

  // 5. sitemap lists only real, indexable pages and never /index.html
  const sm = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
  if (/index\.html/.test(sm)) problems.push("sitemap lists index.html");
  for (const m of sm.matchAll(/<loc>(.*?)<\/loc>/g)) if (!pages.some((p) => config.domain + p.path === m[1] && !p.noindex)) problems.push(`sitemap lists unknown ${m[1]}`);
  for (const from of Object.keys(redirects)) if (sm.includes(from)) problems.push(`sitemap lists redirect ${from}`);

  // 6. contact rules
  if (!config.whatsapp?.verified) {
    for (const f of files.filter((x) => x.endsWith(".html"))) if (/wa\.me\//.test(fs.readFileSync(f, "utf8"))) problems.push(`WhatsApp link rendered before verification in ${rel(f)}`);
  }
  return problems;
}
