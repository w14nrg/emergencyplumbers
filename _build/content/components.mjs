// Shared building blocks for page bodies. Every function receives the render context `c`.
export const UPDATED = "2026-11-01";

export const SERVICES = [
  { path: "/burst-pipe-repair/", name: "Burst pipe", blurb: "Split pipes, failed joints and water you can't stop." },
  { path: "/leaking-ceiling/", name: "Water through the ceiling", blurb: "Drips, stains, a bulging ceiling or water from the flat above." },
  { path: "/blocked-toilet-emergency/", name: "Blocked or overflowing toilet", blurb: "Your only WC is blocked, or it's rising when you flush." },
  { path: "/emergency-drain-unblocking/", name: "Blocked sink or waste", blurb: "Kitchen sinks, basins, baths and showers that won't drain." },
  { path: "/leaking-radiator-repair/", name: "Leaking radiator", blurb: "Valves, joints and heating pipework leaking onto the floor." },
  { path: "/emergency-stopcock-repair/", name: "Stopcock won't turn off", blurb: "A seized or leaking stopcock, or no water at all." },
  { path: "/emergency-shower-leaks/", name: "Shower leaking below", blurb: "Water showing in the room or flat underneath." },
];

export const AREA_LINKS = [
  ["West Kensington", "/emergency-plumber-west-kensington.html"],
  ["Kensington", "/emergency-plumber-kensington.html"],
  ["Hammersmith", "/emergency-plumber-hammersmith.html"],
  ["Fulham", "/emergency-plumber-fulham.html"],
  ["Chelsea", "/emergency-plumber-chelsea.html"],
  ["Earl's Court", "/emergency-plumber-earls-court.html"],
  ["South Kensington", "/emergency-plumber-south-kensington.html"],
  ["Notting Hill & Holland Park", "/emergency-plumber-notting-hill.html"],
  ["Shepherd's Bush", "/emergency-plumber-shepherds-bush.html"],
];

export function serviceCards(c, exclude = "", { cols = 3 } = {}) {
  return `<div class="grid grid-${cols}">${SERVICES.filter((s) => s.path !== exclude)
    .map((s) => `<a class="card" href="${c.link(s.path)}"><h3>${s.name}</h3><p>${s.blurb}</p><span class="more">What to do ${c.icon.arrow}</span></a>`)
    .join("")}</div>`;
}

export function areaChips(c, exclude = "") {
  return `<ul class="chips">${AREA_LINKS.filter(([, p]) => p !== exclude)
    .map(([n, p]) => `<li><a href="${c.link(p)}">${n}</a></li>`)
    .join("")}<li><a href="${c.link("/areas/")}">All areas</a></li></ul>`;
}

export function priceText(c) {
  if (c.pricingApproved) {
    const from = Math.min(...c.config.pricing.bands.map((x) => x.firstHour));
    return `<p>Call-outs from <strong>£${from}</strong> for the first hour. Evenings, overnight and bank holidays cost more. Parts are extra and agreed before they're fitted. <a href="${c.link("/emergency-plumber-prices/")}">See all prices</a>.</p>`;
  }
  return `<p>Charges are set in time bands — weekday daytime, evenings and weekends, overnight, and bank holidays — with a first-hour charge and then half-hourly time. We tell you the charge for your time of day <strong>before anyone sets off</strong>, and any parts are agreed before they're fitted. <a href="${c.link("/emergency-plumber-prices/")}">How our pricing works</a>.</p>`;
}

export function faq(items) {
  return `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><div>${a}</div></details>`).join("")}</div>`;
}

function sideCard(c, issue, related) {
  return `<div class="side-card"><p class="h">Need someone now?</p><p class="muted" style="font-weight:700;font-size:.95rem">Send your postcode and a photo, or call. We'll tell you honestly how soon we can get there and what it will cost.</p>${c.cta(issue, { size: "sm" })}</div>
${c.checker(issue)}
<div class="side-card"><p class="h">Related emergencies</p><ul>${related.map(([n, p]) => `<li><a href="${c.link(p)}">${n}</a></li>`).join("")}</ul></div>`;
}

// Standard two-column layout for service, area and advice pages.
export function article(c, { issue = "", now, nowTitle = "Do this now", sections, related = [], after = "" }) {
  const nowBox = now ? `<div class="now-box"><h2>${nowTitle}</h2><ol>${now.map((s) => `<li>${s}</li>`).join("")}</ol></div>` : "";
  return `<div class="wrap content-grid">
  <div class="prose">${nowBox}${sections}</div>
  <aside class="aside">${sideCard(c, issue, related)}</aside>
</div>${after}`;
}

export function finalCta(c, issue = "", title = "Water where it shouldn't be?", text = "Send us your postcode and a photo on WhatsApp, or call. If water is pouring and you can't stop it, call.") {
  return `<section class="section section-yellow final"><div class="wrap"><h2 class="display">${title}</h2><p class="lead">${text}</p>${c.cta(issue)}</div></section>`;
}

export function moreSection(c, exclude, heading = "Other emergencies we deal with") {
  return `<section class="section section-ice"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Also urgent</p><h2 class="section-title">${heading}</h2></div><p>Each page explains what to do straight away, what we check and what can usually be fixed on the night.</p></div>${serviceCards(c, exclude)}</div></section>`;
}

export const ELECTRICS =
  `<div class="warn">If water is near sockets, light fittings or the consumer unit, don't touch them. Only switch the electricity off at the consumer unit if you can reach it without standing in water or touching anything wet. If you can't, keep everyone away from that area and get an electrician. If the power supply itself looks damaged, the free 105 line reaches your local electricity network.</div>`;
