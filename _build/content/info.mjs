import { UPDATED, finalCta, article, faq } from "./components.mjs";

const about = {
  path: "/about/",
  kind: "page",
  updated: UPDATED,
  title: "About Emergency Plumbers London | West London Plumbers",
  description: "Who we are and how we work: a West London emergency plumbing service focused on evenings, nights and weekends, with honest timings and prices agreed first.",
  eyebrow: "About us",
  h1: "About Emergency Plumbers London",
  lead: "We're an emergency plumbing service based in West London. We do one thing: stop water where it shouldn't be, and fix the cause properly.",
  crumbs: [["About", "/about/"]],
  body: (c) => article(c, {
    sections: `
<h2>Why we exist</h2>
<p>Plumbing emergencies rarely happen during office hours. A pipe splits on a Sunday night; a toilet blocks the evening the guests arrive; water comes through the ceiling at 2am. That's when many plumbers aren't answering, and when it's easy to end up with a call centre that sends whoever is free, at whatever price.</p>
<p>Emergency Plumbers London is set up for exactly those hours. We take enquiries at any time, with the emphasis on evenings, overnight, weekends and bank holidays.</p>

<h2>How we work</h2>
<ul>
  <li><strong>WhatsApp first.</strong> A photo or short video tells us more than a phone description, so we can judge the problem and bring the right parts.</li>
  <li><strong>Honest timing.</strong> We tell you how soon we can realistically get to you — and if we can't, we say so.</li>
  <li><strong>Price before we set off.</strong> You know the charge for your time of day before you agree to anything.</li>
  <li><strong>Make safe, then fix.</strong> Water off first. Then we find the cause and repair what can be repaired safely on the visit.</li>
  <li><strong>Plain explanations.</strong> If something needs a return visit or a different trade, we explain why.</li>
</ul>

<h2>West and Central London plumbing</h2>
<p>We're based in West London and have worked on the buildings here for many years: converted Victorian terraces, red-brick mansion blocks, stucco houses split into lateral flats, mews houses and new riverside developments. Much of what makes emergency plumbing difficult in London is the buildings themselves — shared supplies, stopcocks in odd places, communal tanks and soil stacks serving several flats. Knowing how these buildings are put together is what lets us find and stop leaks quickly.</p>

<h2>What we don't do</h2>
<p>We don't do gas work, boiler repairs or bathroom refurbishments. We're an emergency plumbing service. If you need a Gas Safe engineer, an electrician or a roofer, we'll tell you.</p>
${c.config.legalName ? `<h2>Who runs the business</h2><p>Emergency Plumbers London is a trading name of ${c.esc(c.config.legalName)}.</p>` : ""}`,
    related: [["Out-of-hours plumber", "/out-of-hours-plumber/"], ["How our pricing works", "/emergency-plumber-prices/"], ["Areas we cover", "/areas/"]],
  }) + finalCta(c, ""),
};

const contact = {
  path: "/contact/",
  kind: "page",
  updated: UPDATED,
  title: "Contact Emergency Plumbers London | WhatsApp or Call",
  description: "Contact Emergency Plumbers London by WhatsApp or phone. What to send so we can give you an arrival time and price straight away, day or night.",
  eyebrow: "Contact",
  h1: "Contact us",
  lead: "WhatsApp is quickest — send your postcode, what's happening and a photo. If water is pouring and you can't stop it, call.",
  crumbs: [["Contact", "/contact/"]],
  body: (c) => article(c, {
    sections: `
<h2>What to send us</h2>
<ol>
  <li>Your postcode.</li>
  <li>What's happening, in a sentence — "pipe burst under the kitchen sink", "water coming through the bedroom ceiling".</li>
  <li>Whether water is still escaping, and whether you've managed to turn it off.</li>
  <li>A photo or short video of the problem, and of the stopcock if you can find it.</li>
  <li>Anything about access: flat number, porter, gate codes, parking.</li>
</ol>
<p>WhatsApp messages from our website start with a short template to fill in, but they can't attach photos for you — please add them to the chat yourself.</p>

<h2>Check we cover you</h2>
${c.checker("")}
${c.config.email ? `<h2>Email</h2><p>For non-urgent questions, email <a href="mailto:${c.esc(c.config.email)}">${c.esc(c.config.email)}</a>. Please don't email emergencies — we may not see it in time.</p>` : ""}

<h2>Gas or electrics?</h2>
<p>If you can smell gas, leave the property and call the National Gas Emergency Service on 0800 111 999. For a power cut or damaged electricity supply, call 105.</p>`,
    related: [["Emergency prices", "/emergency-plumber-prices/"], ["Areas we cover", "/areas/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"]],
  }),
};

const privacy = {
  path: "/privacy/",
  kind: "page",
  updated: UPDATED,
  heroCta: false,
  title: "Privacy and Cookies | Emergency Plumbers London",
  description: "How Emergency Plumbers London handles personal information from WhatsApp messages, calls and website visits, and why this website sets no cookies.",
  eyebrow: "Privacy",
  h1: "Privacy and cookies",
  crumbs: [["Privacy and cookies", "/privacy/"]],
  body: (c) => `<div class="wrap prose" style="max-width:48rem;padding-bottom:4rem">
<p><strong>Last updated:</strong> 1 November 2026.</p>
<h2>Who we are</h2>
<p>This website is run by ${c.config.legalName ? c.esc(c.config.legalName) + ", trading as Emergency Plumbers London" : "Emergency Plumbers London"}${c.config.email ? `. You can contact us about privacy at <a href="mailto:${c.esc(c.config.email)}">${c.esc(c.config.email)}</a>` : ""}.</p>
<h2>Information you send us</h2>
<p>When you contact us by WhatsApp or phone, we receive the information you choose to give: your name, number, address or postcode, a description of the problem, and any photos or videos. We use it to respond to your enquiry, attend the job, invoice you and keep a record of the work. We keep job records for as long as we need them for accounting, insurance and legal purposes, and then delete them.</p>
<p>WhatsApp is run by WhatsApp LLC (part of Meta) and messages are subject to its own privacy policy. Phone calls are handled by our phone provider.</p>
<h2>Cookies and analytics</h2>
<p>This website does not set cookies and does not currently use analytics or advertising trackers. If that changes, we'll update this page first.</p>
<h2>Hosting</h2>
<p>The website is hosted on GitHub Pages. Like most web hosts, GitHub may log technical information such as IP addresses for security purposes, under its own privacy statement.</p>
<h2>Your rights</h2>
<p>Under UK data protection law you can ask to see the personal information we hold about you, ask us to correct or delete it, or object to how we use it. If you're unhappy with how we've handled your information, you can complain to the Information Commissioner's Office (ico.org.uk).</p>
</div>`,
};

const terms = {
  path: "/terms/",
  kind: "page",
  updated: UPDATED,
  heroCta: false,
  title: "Service Terms | Emergency Plumbers London",
  description: "How emergency call-outs from Emergency Plumbers London work: confirming the charge before attendance, parts, return visits, access and payment.",
  eyebrow: "Service information",
  h1: "Service terms",
  crumbs: [["Terms", "/terms/"]],
  body: (c) => `<div class="wrap prose" style="max-width:48rem;padding-bottom:4rem">
<p>A short, plain-English summary of how our emergency service works. We'll confirm the key points with you in writing before we attend.</p>
<h2>Before we attend</h2>
<ul>
  <li>We tell you the charge for your time band, and how time after the first hour is charged, before anyone sets off. Nothing is booked until you agree.</li>
  <li>Arrival times are estimates based on the information at the time. We'll keep you updated if anything changes.</li>
</ul>
<h2>On the visit</h2>
<ul>
  <li>Our first priority is making the situation safe, which may mean isolating water to part or all of the property.</li>
  <li>We agree any parts with you before fitting them.</li>
  <li>If a full repair isn't possible on the visit — because a part isn't available at night or the fault needs more extensive work — we'll explain the options and any cost before arranging a return visit.</li>
  <li>We don't carry out gas work or electrical work.</li>
</ul>
<h2>Access</h2>
<p>Please make sure we can reach the problem and the stopcock, and arrange access to communal areas or neighbouring flats where needed.</p>
<h2>Payment</h2>
<p>We'll confirm how to pay when we confirm the visit. You'll receive a written record of the work and charges.</p>
<h2>Cancelling</h2>
<p>If you no longer need us, please tell us as soon as possible. If you cancel once we're already on the way, we'll explain any charge before you decide.</p>
</div>`,
};

const notFound = {
  path: "/404.html",
  kind: "page",
  updated: UPDATED,
  noindex: true,
  inSitemap: false,
  title: "Page Not Found | Emergency Plumbers London",
  description: "This page doesn't exist. If you have a plumbing emergency, contact Emergency Plumbers London by WhatsApp or phone, or choose your emergency below.",
  eyebrow: "404",
  h1: "This page has gone down the drain",
  lead: "The page you're looking for doesn't exist. If you have a plumbing emergency, contact us now — or pick your problem below.",
  body: (c) => `<section class="section"><div class="wrap"><ul class="chips">
${[["Burst pipe", "/burst-pipe-repair/"], ["Water through the ceiling", "/leaking-ceiling/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Leaking radiator", "/leaking-radiator-repair/"], ["Stopcock", "/emergency-stopcock-repair/"], ["Areas", "/areas/"], ["Home", "/"]]
  .map(([n, p]) => `<li><a href="${c.link(p)}">${n}</a></li>`).join("")}</ul></div></section>`,
};

// ---------- advice ----------
const adv = (o) => ({ kind: "article", updated: UPDATED, navPath: "/advice/", crumbs: [["Advice", "/advice/"], [o.crumb, o.path]], ...o });

const burstNight = adv({
  path: "/advice/burst-pipe-at-night/",
  crumb: "Burst pipe at night",
  title: "Burst Pipe at Night? What to Do in the First 10 Minutes",
  description: "A pipe has burst at night. A minute-by-minute guide to stopping the water, staying safe around electrics, limiting damage and what to tell the plumber.",
  eyebrow: "Advice",
  h1: "Burst pipe at night: the first 10 minutes",
  lead: "What you do in the first few minutes decides how much damage a burst pipe causes. Here's the order to do things in.",
  waIssue: "burst pipe",
  body: (c) => article(c, {
    issue: "burst pipe",
    sections: `
<h2>Minute 0–2: stop the water</h2>
<p>Find the main stopcock and turn it clockwise until it stops. In flats it's often under the kitchen sink, in a hallway or airing cupboard, or where the supply pipe comes up through the floor. If you can't find it or it won't turn, look for a small isolating valve on the pipe nearest the leak — a slot you turn a quarter-turn with a screwdriver.</p>
<p>If your water comes from a tank in the loft (common in older houses with a hot water cylinder), closing the valve on the pipe coming out of the tank also stops the flow.</p>

<h2>Minute 2–4: stay safe</h2>
<p>If water is near sockets, light fittings or the consumer unit, don't touch them. Only switch off the electricity at the consumer unit if you can reach it without standing in water. If a ceiling light is dripping, stay out of that room.</p>

<h2>Minute 4–6: drain the system</h2>
<p>Open all the cold taps and flush each toilet once. That empties the pipes so less water escapes. If the burst is on a hot pipe or the heating, turn off the boiler and the immersion heater too.</p>

<h2>Minute 6–8: limit the damage</h2>
<ul>
  <li>Put buckets, bowls and towels down; move rugs, electronics and furniture.</li>
  <li>If you're in a flat, knock on the door below or call them — they may be getting water through their ceiling.</li>
  <li>If the ceiling is bulging, keep people out from underneath it.</li>
</ul>

<h2>Minute 8–10: get help</h2>
<p>Take photos and a short video of the leak, the damage and the stopcock, then send them to us with your postcode. Tell us whether water is still coming out after you've turned the stopcock. Those photos also help with an insurance claim.</p>

<h2>If the water won't stop</h2>
<p>If water is still pouring after you've closed the stopcock, the stopcock may not be working, the pipe may be fed from a tank, or it may be on a shared supply in a block. Call us rather than messaging. In a block, contact the porter or managing agent's emergency line too.</p>`,
    related: [["Burst pipe repair", "/burst-pipe-repair/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"]],
  }),
});

const stopcockGuide = adv({
  path: "/advice/turn-off-water-london-flat/",
  crumb: "Turning off the water in a London flat",
  title: "How to Turn Off the Water in a London Flat | Stopcock Guide",
  description: "Where to find the stopcock in a London flat, converted house or mansion block, how to turn it off, and what to do when it's shared, seized or missing.",
  eyebrow: "Advice",
  h1: "How to turn off the water in a London flat",
  lead: "In a London flat, the stopcock is rarely where you'd expect. Finding it now — before anything goes wrong — is the single most useful thing you can do.",
  body: (c) => article(c, {
    sections: `
<h2>Where to look</h2>
<ol>
  <li><strong>Under the kitchen sink.</strong> The most common place, usually on the pipe that feeds the cold tap.</li>
  <li><strong>Where the supply comes in.</strong> Look for a pipe coming up through the floor — in a hallway, under the stairs, or in a cupboard near the front door.</li>
  <li><strong>In an airing cupboard</strong> near the hot water cylinder, if you have one.</li>
  <li><strong>Behind a panel</strong> — a bath panel, a kickboard under kitchen units or a boxed-in pipe run.</li>
  <li><strong>Outside the flat.</strong> In converted houses, an upper flat's stopcock can be in the communal hallway, under the stairs or in the basement flat.</li>
</ol>

<h2>Turning it off</h2>
<p>Turn the handle clockwise until it stops — "righty-tighty". Don't force it with tools if it won't move; old stopcocks can snap. Then open a cold tap to check the water has stopped. Some water will drain out of the pipes for a minute or two.</p>
<p>Newer installations may have a lever valve instead: turn the lever so it's across the pipe, not along it.</p>

<h2>Mansion blocks and converted houses</h2>
<p>Many London blocks are supplied from communal tanks or a pumped riser. Your flat may have its own stopcock, but some flats — especially in older blocks — rely on a valve in a riser cupboard, on the landing or in the basement. Ask your porter, managing agent or freeholder now where the valve for your flat is and who holds the key.</p>
<p>In converted houses, check that your stopcock actually controls only your flat. Some conversions have one stopcock for the whole building.</p>

<h2>The outside stop tap</h2>
<p>There's usually a stop tap under a small cover in the pavement outside, which belongs to the water company. It needs a special key and can be stiff or buried. It's useful in an emergency, but don't force it.</p>

<h2>Test it before you need it</h2>
<p>Once or twice a year, turn your stopcock off and on again. If it's stiff, seized or leaks when you turn it, get it replaced before an emergency — see <a href="/emergency-stopcock-repair/">stopcock repair</a>.</p>`,
    related: [["Stopcock won't turn off", "/emergency-stopcock-repair/"], ["Burst pipe at night", "/advice/burst-pipe-at-night/"], ["Water through the ceiling", "/leaking-ceiling/"]],
  }),
});

const overnight = adv({
  path: "/advice/overnight-call-out/",
  crumb: "What happens on an overnight call-out",
  title: "What Happens on an Overnight Plumbing Call-Out?",
  description: "What to expect from an overnight plumbing call-out in London: what we'll ask, how the charge is agreed, what gets fixed at night and what may need a return visit.",
  eyebrow: "Advice",
  h1: "What happens on an overnight plumbing call-out",
  lead: "If you've never called a plumber at 3am, it helps to know what to expect — from the first message to the plumber leaving.",
  body: (c) => article(c, {
    sections: `
<h2>1. The first message</h2>
<p>We'll ask for your postcode, what's happening, whether water is still escaping and whether you've turned it off. A photo or video makes a big difference. If water is pouring, call rather than message.</p>
<h2>2. Time and price</h2>
<p>We reply with a realistic arrival estimate and the charge for the overnight band. Nothing is booked until you say yes. If we think it can safely wait until morning, we'll tell you — a daytime visit costs less.</p>
<h2>3. While we're on the way</h2>
<p>We'll talk you through anything useful: finding the stopcock, draining the pipes, protecting the ceiling below. Clear a path to the leak and the stopcock, and arrange access to any communal areas.</p>
<h2>4. On arrival</h2>
<p>The plumber checks the water is off — or isolates it — then finds the cause. We protect floors and finishes, and open up as little as possible.</p>
<h2>5. The repair</h2>
<p>Many repairs are done on the spot: replacing a section of pipe, a failed fitting, a hose or a valve; clearing a blocked toilet or waste. If a specific part isn't available at night, we isolate the fault and, where possible, restore water and heating to the rest of the property.</p>
<h2>6. Before we leave</h2>
<p>We test everything we've touched, explain what failed and why, and agree any follow-up. You'll get a written record of the work and the charge, which is useful for insurance.</p>`,
    related: [["Out-of-hours plumber", "/out-of-hours-plumber/"], ["Emergency prices", "/emergency-plumber-prices/"], ["Is it an emergency?", "/advice/can-it-wait-until-morning/"]],
  }),
});

const canWait = adv({
  path: "/advice/can-it-wait-until-morning/",
  crumb: "Can it wait until morning?",
  title: "Plumbing Problem: Emergency or Can It Wait Until Morning?",
  description: "How to tell whether a plumbing problem needs an emergency plumber tonight or can safely wait for a cheaper daytime visit, with what to do in each case.",
  eyebrow: "Advice",
  h1: "Is it an emergency, or can it wait until morning?",
  lead: "Night and weekend call-outs cost more, so it's worth knowing which problems really can't wait. Here's how to decide.",
  body: (c) => article(c, {
    sections: `
<h2>Get help tonight if…</h2>
<ul>
  <li><strong>Water is escaping and you can't stop it</strong> — the stopcock won't close, or the leak is on a supply you can't isolate.</li>
  <li><strong>Water is coming through a ceiling</strong>, especially near light fittings, or the ceiling is bulging.</li>
  <li><strong>Your only toilet is blocked</strong> or is overflowing.</li>
  <li><strong>Sewage is backing up</strong> into a bath, shower or floor drain.</li>
  <li><strong>A hot water cylinder or tank is leaking.</strong></li>
  <li><strong>Water is leaking into another flat</strong> and the source is in yours.</li>
  <li><strong>You have no water</strong>, the neighbours do, and you have vulnerable people in the home.</li>
</ul>

<h2>It can probably wait if…</h2>
<ul>
  <li>A tap is dripping and you can close its isolating valve.</li>
  <li>A leak has stopped completely since you turned the water off, and you can manage without water until morning.</li>
  <li>A basin is draining slowly but still draining.</li>
  <li>One toilet is blocked but another works.</li>
  <li>A radiator is weeping slowly and you've isolated it.</li>
</ul>

<h2>The in-between cases</h2>
<p>If you've stopped the leak by turning off the main stopcock, you have a choice: get someone tonight to repair it and restore your water, or manage without water until a daytime visit. That depends on who's in the home, whether you have a working toilet, and how long until morning.</p>
<p>Send us a photo. We'll tell you honestly whether it's worth paying for a night visit.</p>

<h2>Gas, electrics and roofs</h2>
<p>If you can smell gas, leave and call 0800 111 999. Water in light fittings or the consumer unit needs an electrician. Water that only comes in during rain is usually a roof or gutter problem.</p>`,
    related: [["All emergencies", "/emergency-plumbing/"], ["Emergency prices", "/emergency-plumber-prices/"], ["Out-of-hours plumber", "/out-of-hours-plumber/"]],
  }),
});

const advicePages = [burstNight, stopcockGuide, overnight, canWait];

const adviceHub = {
  path: "/advice/",
  kind: "hub",
  updated: UPDATED,
  title: "Emergency Plumbing Advice | What to Do Before We Arrive",
  description: "Practical emergency plumbing advice for London homes: stopping a burst pipe at night, finding the stopcock in a flat, and knowing what can wait until morning.",
  eyebrow: "Advice",
  h1: "Emergency plumbing advice",
  lead: "Short, practical guides for the moments that matter — written for London flats and houses.",
  heroCta: false,
  crumbs: [["Advice", "/advice/"]],
  body: (c) => `<section class="section" style="padding-top:0"><div class="wrap"><div class="grid grid-2">${advicePages
    .map((a) => `<a class="card" href="${c.link(a.path)}"><h2 style="font-size:1.4rem;font-weight:900;margin:0 0 .5rem">${a.h1}</h2><p>${a.description}</p><span class="more">Read ${c.icon.arrow}</span></a>`)
    .join("")}</div></div></section>` + finalCta(c, ""),
};

export const infoPages = [about, contact, adviceHub, ...advicePages, privacy, terms, notFound];
