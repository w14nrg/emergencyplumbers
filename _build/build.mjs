#!/usr/bin/env node
// Static site generator for emergencyplumbers.london.
// Usage:
//   node _build/build.mjs                 draft build into the repo root (noindex + draft banner if contact details missing)
//   node _build/build.mjs --release       production build; fails unless phone is set and every check passes
//   node _build/build.mjs --preview DIR   preview build with relative links into DIR (for an off-site preview)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./content/pages.mjs";
import { runChecks } from "./check.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const args = process.argv.slice(2);
const release = args.includes("--release");
const previewIdx = args.indexOf("--preview");
const preview = previewIdx !== -1;
const outDir = preview ? path.resolve(args[previewIdx + 1] || "preview") : root;
const config = JSON.parse(fs.readFileSync(path.join(here, "site.config.json"), "utf8"));

const waReady = Boolean(config.whatsapp?.verified && config.whatsapp?.e164);
const phoneReady = Boolean(config.phone?.e164 && config.phone?.display);
const draft = !phoneReady;
if (release && draft) {
  console.error("RELEASE BLOCKED: phone is not set in _build/site.config.json. Nothing was written.");
  process.exit(1);
}

// ---------- helpers ----------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fileFor = (p) => (p.endsWith("/") ? p.slice(1) + "index.html" : p.slice(1));
const absUrl = (p) => config.domain + p;

function makeLinker(fromPath) {
  const fromFile = fileFor(fromPath);
  const fromDir = path.posix.dirname(fromFile);
  return (to) => {
    const [p, hash] = to.split("#");
    if (!preview) return to;
    let rel = path.posix.relative(fromDir, fileFor(p || "/"));
    if (!rel) rel = path.posix.basename(fileFor(p || "/"));
    return rel + (hash ? "#" + hash : "");
  };
}

const waText = (issue, postcode) =>
  [
    "Hi Emergency Plumbers London. I need help with an emergency plumbing problem.",
    `My postcode is: ${postcode || ""}`,
    `The problem is: ${issue || ""}`,
    "Is water still escaping (yes/no)? ",
    "Have you been able to turn the water off (yes/no)? ",
    "I'll attach photos or a short video now.",
  ].join("\n");
const waHref = (issue, postcode) => `https://wa.me/${config.whatsapp.e164.replace(/\D/g, "")}?text=${encodeURIComponent(waText(issue, postcode))}`;

const icon = {
  wa: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"/></svg>',
  phone: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/></svg>',
  arrow: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z"/></svg>',
  pin: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
};

function cta(issue, { size = "lg", light = false } = {}) {
  const parts = [];
  if (waReady)
    parts.push(`<a class="btn btn-wa btn-${size}" href="${esc(waHref(issue))}" target="_blank" rel="noopener" data-track="whatsapp">${icon.wa}<span>WhatsApp an emergency</span></a>`);
  if (phoneReady)
    parts.push(`<a class="btn ${waReady ? (light ? "btn-ghost-light" : "btn-ghost") : "btn-hot"} btn-${size}" href="tel:${esc(config.phone.e164)}" data-track="phone">${icon.phone}<span>Call ${esc(config.phone.display)}</span></a>`);
  if (!parts.length)
    parts.push(`<span class="btn btn-pending btn-${size}" role="note">Contact buttons appear once the new number is added</span>`);
  return `<div class="cta-row">${parts.join("")}</div>`;
}

function checker(issue = "") {
  return `<div class="checker" data-checker data-issue="${esc(issue)}">
  <div class="checker-head"><span class="checker-pin">${icon.pin}</span><div><p class="eyebrow">Coverage check</p><p class="checker-q">Can we get to you?</p></div></div>
  <form class="checker-form" novalidate>
    <label class="sr-only" for="pc-${issue ? issue.replace(/\W+/g, "-") : "main"}">Your postcode</label>
    <input id="pc-${issue ? issue.replace(/\W+/g, "-") : "main"}" name="postcode" inputmode="text" autocomplete="postal-code" placeholder="e.g. SW6 or W14 9AB" maxlength="9" required>
    <button type="submit" class="btn btn-hot">Check</button>
  </form>
  <div class="checker-result" aria-live="polite"></div>
  <noscript><p class="checker-noscript">Send us your postcode and we'll confirm whether we can attend.</p></noscript>
</div>`;
}

// ---------- layout ----------
const nav = [
  ["Emergencies", "/emergency-plumbing/"],
  ["Out of hours", "/out-of-hours-plumber/"],
  ["Prices", "/emergency-plumber-prices/"],
  ["Areas", "/areas/"],
  ["Advice", "/advice/"],
  ["About", "/about/"],
];

function header(link, current) {
  const items = nav.map(([l, h]) => `<a href="${link(h)}"${current === h ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  const headerCta = phoneReady ? `<a class="btn btn-hot btn-sm header-call" href="tel:${esc(config.phone.e164)}" data-track="phone">${icon.phone}<span>${esc(config.phone.display)}</span></a>` : "";
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${link("/")}" aria-label="Emergency Plumbers London home">
      <svg class="brand-mark" viewBox="0 0 40 48" aria-hidden="true"><path d="M20 2C20 2 4 20 4 31a16 16 0 0 0 32 0C36 20 20 2 20 2Z" fill="#ffd84d" stroke="#0a1933" stroke-width="3"/><path d="M13 31a7 7 0 0 0 7 7" fill="none" stroke="#ff5a36" stroke-width="3.5" stroke-linecap="round"/></svg>
      <span class="brand-word"><span class="hot">EMERGENCY</span> PLUMBERS<span class="brand-tag">London</span></span>
    </a>
    <nav class="nav-desktop" aria-label="Primary">${items}</nav>
    ${headerCta}
    <details class="nav-mobile">
      <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
      <nav aria-label="Mobile">${items}</nav>
    </details>
  </div>
</header>`;
}

function footer(link) {
  const svc = [
    ["Burst pipes", "/burst-pipe-repair/"],
    ["Water through the ceiling", "/leaking-ceiling/"],
    ["Blocked toilets", "/blocked-toilet-emergency/"],
    ["Blocked sinks and wastes", "/emergency-drain-unblocking/"],
    ["Leaking radiators", "/leaking-radiator-repair/"],
    ["Stopcocks and no water", "/emergency-stopcock-repair/"],
    ["Shower leaks", "/emergency-shower-leaks/"],
  ];
  const areas = pages.filter((p) => p.kind === "area").map((p) => [p.areaName, p.path]);
  const li = (arr) => arr.map(([l, h]) => `<li><a href="${link(h)}">${esc(l)}</a></li>`).join("");
  const contact = [];
  if (phoneReady) contact.push(`<li><a href="tel:${esc(config.phone.e164)}" data-track="phone">${esc(config.phone.display)}</a></li>`);
  if (waReady) contact.push(`<li><a href="${esc(waHref(""))}" target="_blank" rel="noopener" data-track="whatsapp">WhatsApp</a></li>`);
  if (config.email) contact.push(`<li><a href="mailto:${esc(config.email)}">${esc(config.email)}</a></li>`);
  if (config.address) {
    const a = config.address;
    const label = a.type === "trading" ? "" : a.type === "registered" ? "Registered office: " : "Correspondence address: ";
    contact.push(`<li>${label}${esc([a.streetAddress, a.addressLocality, a.postalCode].filter(Boolean).join(", "))}</li>`);
  }
  const legal = config.legalName ? `Emergency Plumbers London is a trading name of ${esc(config.legalName)}.` : "Emergency Plumbers London.";
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div><p class="footer-brand"><span class="hot">EMERGENCY</span> PLUMBERS LONDON</p><p class="muted">Burst pipes, leaks, blocked toilets and urgent plumbing repairs across West and Central London — evenings, overnight, weekends and bank holidays.</p>${contact.length ? `<ul class="footer-list">${contact.join("")}</ul>` : ""}</div>
    <div><p class="footer-h">Emergencies</p><ul class="footer-list">${li(svc)}</ul></div>
    <div><p class="footer-h">Areas</p><ul class="footer-list">${li(areas)}<li><a href="${link("/areas/")}">All areas</a></li></ul></div>
    <div><p class="footer-h">Information</p><ul class="footer-list">${li([["Out-of-hours plumber", "/out-of-hours-plumber/"], ["Prices", "/emergency-plumber-prices/"], ["Advice", "/advice/"], ["About", "/about/"], ["Contact", "/contact/"], ["Privacy and cookies", "/privacy/"], ["Terms", "/terms/"]])}</ul></div>
  </div>
  <div class="wrap footer-base"><p>${legal}</p><p>We don't carry out gas work.</p></div>
</footer>`;
}

function mobileBar(issue) {
  const b = [];
  if (waReady) b.push(`<a class="btn btn-wa" href="${esc(waHref(issue))}" target="_blank" rel="noopener" data-track="whatsapp">${icon.wa}<span>WhatsApp</span></a>`);
  if (phoneReady) b.push(`<a class="btn btn-hot" href="tel:${esc(config.phone.e164)}" data-track="phone">${icon.phone}<span>Call now</span></a>`);
  return b.length ? `<div class="mobile-bar">${b.join("")}</div>` : "";
}

function breadcrumbs(link, crumbs) {
  if (!crumbs?.length) return "";
  const all = [["Home", "/"], ...crumbs];
  return `<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${all
    .map(([n, p], i) => (i === all.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${link(p)}">${esc(n)}</a></li>`))
    .join("")}</ol></nav>`;
}

function schemaFor(page) {
  const org = {
    "@type": "Plumber",
    "@id": config.domain + "/#business",
    name: config.siteName,
    url: config.domain + "/",
    image: config.domain + "/og.png",
    areaServed: ["Kensington", "West Kensington", "Chelsea", "Fulham", "Hammersmith", "Earl's Court", "South Kensington", "Notting Hill", "Holland Park", "Shepherd's Bush", "Westminster", "Paddington", "London"].map((n) => ({ "@type": "Place", name: n })),
  };
  if (phoneReady) org.telephone = config.phone.e164;
  if (config.email) org.email = config.email;
  if (config.legalName) org.legalName = config.legalName;
  if (config.address && config.address.type === "trading")
    org.address = { "@type": "PostalAddress", streetAddress: config.address.streetAddress, addressLocality: config.address.addressLocality, postalCode: config.address.postalCode, addressCountry: "GB" };
  const graph = [org, { "@type": "WebSite", "@id": config.domain + "/#website", url: config.domain + "/", name: config.siteName, publisher: { "@id": org["@id"] } }];
  if (page.crumbs?.length)
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [["Home", "/"], ...page.crumbs].map(([n, p], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: absUrl(p) })),
    });
  if (page.service)
    graph.push({ "@type": "Service", name: page.service, serviceType: page.service, provider: { "@id": org["@id"] }, areaServed: page.serviceArea || { "@type": "City", name: "London" }, url: absUrl(page.path) });
  if (page.kind === "article")
    graph.push({ "@type": "Article", headline: page.h1, url: absUrl(page.path), dateModified: page.updated, author: { "@id": org["@id"] }, publisher: { "@id": org["@id"] } });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function render(page) {
  const link = makeLinker(page.path);
  const ctx = { link, cta, checker, esc, icon, config, waReady, phoneReady, pages, pricingApproved: Boolean(config.pricing?.approved) };
  const body = typeof page.body === "function" ? page.body(ctx) : page.body;
  const noindex = draft || page.noindex;
  const canonical = absUrl(page.path);
  const css = link("/assets/site.css");
  const js = link("/assets/site.js");
  const fictional = phoneReady && /^\+447700900/.test(config.phone.e164);
  const banner = draft
    ? `<div class="draft-banner" role="note">Draft preview — not yet live. Contact buttons appear once the new mobile number is added.</div>`
    : preview
    ? `<div class="draft-banner" role="note">Preview — not the live site.${fictional ? " 07700 900123 is a fictional test number used to show the buttons." : ""}</div>`
    : "";
  // Preview builds rewrite any root-relative link written directly in content.
  const fix = (html) => (preview ? html.replace(/href="(\/[^"]*)"/g, (m, u) => `href="${link(u)}"`) : html);
  const hero = page.hero === false ? "" : `<section class="page-hero ${page.heroClass || ""}"><div class="wrap">${page.eyebrow ? `<p class="eyebrow">${esc(page.eyebrow)}</p>` : ""}<h1 class="display">${page.h1Html || esc(page.h1)}</h1>${page.lead ? `<p class="lead">${page.lead}</p>` : ""}${page.heroCta === false ? "" : cta(page.waIssue || "")}${page.heroNote ? `<p class="hero-note">${page.heroNote}</p>` : ""}</div></section>`;
  return fix(`<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${noindex ? '<meta name="robots" content="noindex, nofollow">' : ""}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${page.kind === "article" ? "article" : "website"}">
<meta property="og:site_name" content="${esc(config.siteName)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${config.domain}/og.png">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0a1933">
<link rel="icon" href="${link("/favicon.svg")}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${link("/apple-touch-icon.png")}">
<link rel="stylesheet" href="${css}">
<script type="application/ld+json">${schemaFor(page)}</script>
</head>
<body class="${page.kind || "page"}">
${banner}
${header(link, page.navPath || page.path)}
${breadcrumbs(link, page.crumbs)}
<main id="main">
${hero}
${body}
</main>
${footer(link)}
${mobileBar(page.waIssue || "")}
<script>window.EPL=${JSON.stringify({ wa: waReady ? config.whatsapp.e164.replace(/\D/g, "") : null, tel: phoneReady ? config.phone.e164 : null, telDisplay: phoneReady ? config.phone.display : null, core: config.coverage.core, arrangement: config.coverage.arrangement })};</script>
<script src="${js}" defer></script>
</body>
</html>
`);
}

function redirectStub(from, to) {
  const target = preview ? makeLinker(from)(to) : absUrl(to);
  return `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><title>Moved</title>
<link rel="canonical" href="${absUrl(to)}">
<meta http-equiv="refresh" content="0; url=${target}">
<meta name="robots" content="noindex">
</head><body><p>This page has moved to <a href="${target}">${absUrl(to)}</a>.</p></body></html>
`;
}

// Old URLs from the previous site that no longer exist. /index.html is NOT here: GitHub Pages
// serves it as the homepage itself, so it is handled by the homepage canonical instead.
export const redirects = {
  "/about.html": "/about/",
  "/contact.html": "/contact/",
  "/booking.html": "/contact/",
  "/service.html": "/emergency-plumbing/",
  "/team.html": "/about/",
  "/testimonial.html": "/",
  "/sla.html": "/",
};

// ---------- write ----------
const manifestPath = path.join(here, ".generated.json");
if (!preview && fs.existsSync(manifestPath)) {
  for (const f of JSON.parse(fs.readFileSync(manifestPath, "utf8"))) {
    const fp = path.join(root, f);
    if (fs.existsSync(fp)) fs.rmSync(fp);
  }
}
if (preview) fs.rmSync(outDir, { recursive: true, force: true });
const written = [];
function write(rel, content) {
  const fp = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content);
  written.push(rel);
}

for (const page of pages) write(fileFor(page.path), render(page));
for (const [from, to] of Object.entries(redirects)) write(fileFor(from), redirectStub(from, to));

// static assets
for (const f of fs.readdirSync(path.join(here, "assets"))) {
  const target = ["favicon.svg", "og.png", "apple-touch-icon.png"].includes(f) ? f : "assets/" + f;
  write(target, fs.readFileSync(path.join(here, "assets", f)));
}

// robots + sitemap (only canonical, indexable pages)
const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex && p.inSitemap !== false);
write("robots.txt", draft ? "User-agent: *\nDisallow: /\n" : `User-agent: *\nAllow: /\n\nSitemap: ${config.domain}/sitemap.xml\n`);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => `  <url><loc>${absUrl(p.path)}</loc><lastmod>${p.updated || today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
if (preview) {
  for (const f of ["CNAME", "googleb347dcd6249648e2.html"]) write(f, fs.readFileSync(path.join(root, f)));
}

if (!preview) fs.writeFileSync(manifestPath, JSON.stringify(written.sort(), null, 2) + "\n");

const problems = runChecks({ outDir, pages, redirects, config, release, draft, preview });
console.log(`Built ${written.length} files into ${outDir} (${draft ? "DRAFT: noindex, contact details missing" : "release-ready contact details"}${preview ? ", preview links" : ""}).`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n- ` + problems.join("\n- "));
  process.exit(1);
}
console.log("All checks passed.");
