import { UPDATED, SERVICES, serviceCards, areaChips, priceText, faq, finalCta, article, moreSection, ELECTRICS } from "./components.mjs";

const homeFaq = (c) => [
  ["Do you really come out at night?", "<p>Yes. We take emergency enquiries at any time and put particular weight on evenings, overnight, weekends and bank holidays — the times when most plumbers aren't answering. We'll always tell you honestly how soon we can get to you before you agree to anything.</p>"],
  ["How quickly can you get here?", "<p>It depends on where you are, the time and what else is happening that night, so we don't promise a fixed arrival time on the website. Send your postcode and we'll give you a realistic estimate straight away. If we can't get to you in time, we'll say so.</p>"],
  ["What should I do while I wait?", `<p>Turn off the water at the stopcock, open the cold taps to drain the pipes, and keep away from any wet electrics. Our guide to <a href="${c.link("/advice/turn-off-water-london-flat/")}">turning off the water in a London flat</a> covers where to look.</p>`],
  ["How much does an emergency call-out cost?", `<p>It depends on the time of day. We tell you the charge before anyone sets off, so there are no surprises. See <a href="${c.link("/emergency-plumber-prices/")}">how our pricing works</a>.</p>`],
  ["Do you do boiler or gas work?", "<p>No. We're an emergency plumbing service: leaks, bursts, blockages and water supply. For anything involving gas, use a Gas Safe registered engineer. If you can smell gas, call the National Gas Emergency Service on 0800 111 999.</p>"],
  ["Is this a call centre?", "<p>No. We're not a national booking line or a directory selling your details. Your message comes to the plumbing team that will attend.</p>"],
];

const home = {
  path: "/",
  kind: "home",
  title: "Emergency Plumber London | Night, Weekend & Bank Holiday",
  ogTitle: "Emergency Plumbers London — burst pipes, leaks and blocked toilets",
  description: "Emergency plumber for West and Central London: burst pipes, leaks through ceilings and blocked toilets, evenings, overnight and weekends. Price agreed first.",
  h1: "Burst pipe? Water everywhere?",
  hero: false,
  updated: UPDATED,
  waIssue: "",
  body: (c) => `
<section class="home-hero">
  <div class="wrap home-hero-grid">
    <div>
      <span class="pill">${c.icon.pin} Emergency plumbers · London</span>
      <h1 class="display">Burst pipe? <em>Water everywhere?</em></h1>
      <p class="lead">Emergency plumbing help across West and Central London, day and night. Send us your postcode and a photo on WhatsApp, or call directly for urgent attendance.</p>
      ${c.cta("")}
      <ul class="ticks"><li>Leaks</li><li>Burst pipes</li><li>Blocked toilets</li><li>Emergency repairs</li></ul>
    </div>
    <div>${c.checker("")}</div>
  </div>
</section>
<section class="strip"><ul><li>Evenings · Overnight · Weekends</li><li>Price before we set off</li><li>Plumbing only — no gas</li><li>Send a photo first</li></ul></section>

<section class="section"><div class="wrap">
  <div class="section-head"><div><p class="eyebrow">What's happening?</p><h2 class="section-title">Pick your emergency.</h2></div><p>Each page tells you what to do in the next five minutes, what we'll check when we arrive, and what can usually be fixed on the night.</p></div>
  ${serviceCards(c)}
</div></section>

<section class="section section-hot"><div class="wrap home-hero-grid">
  <div><p class="eyebrow">When everyone else has gone home</p><h2 class="section-title" style="color:#fff">Evenings. Overnight. Sundays. Bank holidays.</h2>
  <p class="lead" style="color:rgba(255,255,255,.85)">Pipes don't burst by appointment. We're set up for the hours when a leak through the ceiling or a blocked only toilet can't wait until Monday morning.</p>
  <div class="cta-row"><a class="btn btn-ghost btn-lg" href="${c.link("/out-of-hours-plumber/")}">How night call-outs work ${c.icon.arrow}</a></div></div>
  <div class="fault-grid">
    <a class="fault" href="${c.link("/burst-pipe-repair/")}">Water pouring from a pipe</a>
    <a class="fault" href="${c.link("/leaking-ceiling/")}">Water through the ceiling</a>
    <a class="fault" href="${c.link("/blocked-toilet-emergency/")}">Only toilet blocked</a>
    <a class="fault" href="${c.link("/emergency-stopcock-repair/")}">Stopcock won't turn off</a>
    <a class="fault" href="${c.link("/leaking-radiator-repair/")}">Radiator valve leaking</a>
    <a class="fault" href="${c.link("/emergency-shower-leaks/")}">Shower leaking downstairs</a>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="section-head"><div><p class="eyebrow">Why people message us</p><h2 class="section-title">Straight answers at 2am.</h2></div><p>No call-centre script, no vague promises. Just what we can do, when, and what it costs.</p></div>
  <div class="grid grid-4">
    <div class="card-flat"><h3>See it before we come</h3><p>A photo or short video on WhatsApp lets us judge the problem and bring the right parts.</p></div>
    <div class="card-flat"><h3>Price before we set off</h3><p>You know the charge for your time of day before you say yes. Parts are agreed before fitting.</p></div>
    <div class="card-flat"><h3>Honest about timing</h3><p>We give a realistic estimate for your postcode — and tell you if we can't get there in time.</p></div>
    <div class="card-flat"><h3>Plumbing, not upselling</h3><p>We stop the water, fix what can be fixed safely on the night and explain anything that needs a return visit.</p></div>
  </div>
</div></section>

<section class="section section-ice"><div class="wrap">
  <div class="section-head"><div><p class="eyebrow">What happens next</p><h2 class="section-title">From message to make-safe.</h2></div><p>No forms, no accounts, no booking flow to get through while water is coming in.</p></div>
  <ol class="steps">
    <li><h3>Message or call</h3><p>WhatsApp your postcode, what's happening and a photo. If water is pouring, call.</p></li>
    <li><h3>We reply with time and price</h3><p>A realistic arrival estimate and the charge for your time band.</p></li>
    <li><h3>Isolate and make safe</h3><p>We stop the water first, then find the cause.</p></li>
    <li><h3>Repair or plan</h3><p>Most leaks and blockages are fixed on the visit. If not, we explain the next step.</p></li>
  </ol>
</div></section>

<section class="section"><div class="wrap home-hero-grid">
  <div><p class="eyebrow">Emergency pricing</p><h2 class="section-title">Know the cost before we knock.</h2></div>
  <div class="prose">${priceText(c)}<p>We don't advertise "no call-out fee" or "fixed price" deals, because emergency work rarely fits them honestly.</p></div>
</div></section>

<section class="section section-navy"><div class="wrap">
  <div class="section-head"><div><p class="eyebrow">Where we work</p><h2 class="section-title" style="color:#fff">West and Central London first.</h2></div><p>We're based in West London, so these are the areas we can reach most reliably at night. Further across London? Send your postcode and we'll tell you honestly.</p></div>
  ${areaChips(c)}
</div></section>

<section class="section"><div class="wrap" style="max-width:52rem">
  <p class="eyebrow">Questions</p><h2 class="section-title" style="margin-bottom:2rem">Before you call.</h2>
  ${faq(homeFaq(c))}
</div></section>
${finalCta(c, "", "Don't wait for the ceiling to come down.")}`,
};

const hub = {
  path: "/emergency-plumbing/",
  kind: "hub",
  title: "Emergency Plumbing Services in London | Leaks & Bursts",
  description: "Which plumbing problems are real emergencies, what to do first, and how we handle burst pipes, leaks, blocked toilets and failed stopcocks across London.",
  eyebrow: "Emergency plumbing",
  h1: "Emergency plumbing services",
  lead: "If water is escaping and you can't stop it, that's an emergency. So is a blocked only toilet, a stopcock that won't close, or a leak into the flat below. Here's what to do and how we deal with each one.",
  crumbs: [["Emergency plumbing", "/emergency-plumbing/"]],
  service: "Emergency plumbing",
  updated: UPDATED,
  body: (c) => article(c, {
    now: [
      "Turn off the water at the stopcock. In most flats it's under the kitchen sink, in a hallway cupboard or where the pipe enters the property.",
      "Open the cold taps to drain water out of the pipes.",
      "If the leak is from heating pipes or a radiator, turn the boiler off.",
      "Keep away from wet sockets and light fittings.",
      "Take photos and a short video, then message or call us.",
    ],
    sections: `
<h2>Is it an emergency?</h2>
<p>A plumbing problem is an emergency when waiting will cause damage, leave you without basic facilities, or put someone at risk. As a rule of thumb:</p>
<div class="compare">
  <div><h3>Call tonight</h3><ul><li>Water escaping that you can't stop</li><li>Water coming through a ceiling or into another flat</li><li>Your only toilet is blocked or overflowing</li><li>The stopcock won't close or is itself leaking</li><li>No water at all, and the neighbours have water</li><li>A leaking cylinder or tank</li></ul></div>
  <div><h3>Usually fine until morning</h3><ul><li>A dripping tap you can turn off at its isolating valve</li><li>A slow-draining basin when other basins work</li><li>A small weep you can catch in a bowl and isolate</li><li>A second toilet that's blocked when another works</li><li>Low pressure that hasn't changed</li></ul></div>
</div>
<p>If you're not sure, send us a photo. We'll tell you honestly whether it needs someone tonight or can wait for a cheaper daytime visit.</p>

<h2>The emergencies we deal with</h2>
${serviceCards(c, "", { cols: 2 })}

<h2>What we don't do</h2>
<p>We don't do gas work of any kind, including boiler repairs; that needs a Gas Safe registered engineer. If you can smell gas, leave the property and call 0800 111 999. If a blockage turns out to be in the underground drain and needs jetting or a camera survey, we'll tell you and point you to the right people.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>London properties make leaks harder</h2>
<p>Much of West and Central London is converted period houses and mansion blocks. That means shared supply pipes, stopcocks in odd places, communal tanks in the roof and soil stacks that serve several flats. A leak in one flat often shows up in another. We're used to tracing water through these buildings and working with porters and managing agents to reach risers and plant rooms at night.</p>`,
    related: SERVICES.slice(0, 5).map((s) => [s.name, s.path]),
  }) + finalCta(c, ""),
};

const outOfHours = {
  path: "/out-of-hours-plumber/",
  kind: "service",
  title: "Out-of-Hours Plumber London | Night, Sunday & Bank Holiday",
  description: "Late-night, overnight, Sunday and bank holiday plumber in West and Central London. How night call-outs work, what counts as urgent and how charges are set.",
  eyebrow: "Out of hours",
  h1: "Out-of-hours plumber in London",
  lead: "Late at night, at the weekend or on a bank holiday, you want two things: someone who answers, and an honest idea of when they'll arrive and what it will cost.",
  crumbs: [["Out-of-hours plumber", "/out-of-hours-plumber/"]],
  service: "Out-of-hours emergency plumbing",
  waIssue: "out-of-hours emergency",
  updated: UPDATED,
  body: (c) => article(c, {
    issue: "out-of-hours emergency",
    now: [
      "If water is escaping, turn off the stopcock first and open the cold taps.",
      "Message us your postcode, what's happening and a photo — or call if it's pouring.",
      "Tell us whether water is still coming out, and whether it's reaching another flat.",
      "Clear a path to the leak and the stopcock so we can get straight to work.",
    ],
    sections: `
<h2>How a night call-out works</h2>
<ol>
  <li><strong>You contact us.</strong> WhatsApp is quickest because a photo tells us so much. If water is pouring and you can't stop it, call instead.</li>
  <li><strong>We reply with timing and the charge.</strong> You'll get a realistic arrival estimate for your postcode and the charge for that time band. Nothing is booked until you agree.</li>
  <li><strong>We make it safe.</strong> First job is always stopping the water: isolating the pipe, the cylinder or the whole supply.</li>
  <li><strong>We fix what can be fixed safely tonight.</strong> Most leaks, failed fittings and blockages are repaired on the visit. If something needs parts that aren't available at night, we leave it isolated and safe, and explain the follow-up.</li>
</ol>

<h2>What's worth a night call-out?</h2>
<p>Night and bank holiday time costs more, so it should be spent on problems that genuinely can't wait. Call us out of hours for water you can't stop, water coming through a ceiling, a blocked only toilet, a stopcock that won't close, or a leaking cylinder or tank. A drip you can isolate at a valve, or a second toilet that's blocked, can usually wait until a daytime visit. Send a photo and we'll tell you honestly which it is.</p>

<h2>Weekends, Sundays and bank holidays</h2>
<p>We take enquiries every day of the year, including Sundays, Christmas and Easter. Bank holidays are often when things go wrong — guests, extra showers and baths, and heating left on for long periods all put extra strain on old pipework and wastes.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>What we can and can't do at night</h2>
<p>Most emergency repairs use standard copper and plastic fittings, valves and waste parts that we can carry. The exceptions are specific parts — a particular cylinder, an unusual concealed shower valve, a bespoke radiator — which may need ordering. In those cases we isolate the fault so the rest of your water and heating work, and come back once the part is in.</p>

<h2>In a flat or mansion block?</h2>
<p>If the leak is in a communal area, a shared riser or a flat you can't get into, tell us when you message. At night we may need the porter, the managing agent's out-of-hours line or a neighbour to give access. We'll tell you what we need so you can arrange it while we're on the way.</p>`,
    related: [["Burst pipe repair", "/burst-pipe-repair/"], ["Water through the ceiling", "/leaking-ceiling/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Emergency prices", "/emergency-plumber-prices/"], ["What happens on an overnight call-out", "/advice/overnight-call-out/"]],
  }) + moreSection(c, "") + finalCta(c, "out-of-hours emergency", "Up late with a leak?"),
};

const prices = {
  path: "/emergency-plumber-prices/",
  kind: "service",
  title: "Emergency Plumber Prices London | How Call-Out Charges Work",
  description: "How emergency plumbing charges work in London: time bands, first-hour charge, half-hourly time and parts. You get the price before anyone sets off.",
  eyebrow: "Prices",
  h1: "Emergency plumber prices",
  lead: "You'll know what you're paying before we set off. Here's how emergency charges are worked out, and what affects the final bill.",
  crumbs: [["Prices", "/emergency-plumber-prices/"]],
  updated: UPDATED,
  body: (c) => {
    const p = c.config.pricing;
    const table = c.pricingApproved
      ? `<div class="table-wrap"><table><thead><tr><th>Time band</th><th>When</th><th>First hour</th><th>Each further 30 min</th></tr></thead><tbody>${p.bands
          .map((b) => `<tr><td><strong>${c.esc(b.name)}</strong></td><td>${c.esc(b.hours)}</td><td class="num">£${b.firstHour}</td><td class="num">£${b.perHalfHour}</td></tr>`)
          .join("")}</tbody></table></div>${p.vatNote ? `<p>${c.esc(p.vatNote)}</p>` : ""}`
      : `<div class="note">Our current rates for each time band are confirmed with you before anyone sets off. Send your postcode and the time you need us, and we'll reply with the exact charge.</div>`;
    return article(c, {
      sections: `
<h2>Charges by time band</h2>
${table}
<p>The first-hour charge covers getting to you, finding the problem and the first hour of work. After that, time is charged in half hours. Many emergency visits — isolating a burst, replacing a failed fitting, clearing a blocked WC — are finished within the first hour or two.</p>

<h2>What's included, and what isn't</h2>
<ul>
  <li><strong>Included:</strong> travel to you, diagnosis, the time worked, and standard consumables such as jointing compound and PTFE tape.</li>
  <li><strong>Parts:</strong> fittings, valves, pipe and replacement parts are charged on top, and we agree them with you before they're fitted.</li>
  <li><strong>Parking:</strong> where we can't park legally for free, we'll tell you in advance if a parking cost will apply.</li>
</ul>

<h2>Why we don't advertise "no call-out fee"</h2>
<p>Some firms advertise no call-out fee and recover it through a higher hourly rate or a long minimum charge. Others show a low headline price that only applies in office hours. We'd rather tell you the real charge for your time of night up front, so you can decide whether it's worth it or whether the problem can wait until morning.</p>

<h2>When a problem can wait</h2>
<p>If your problem can be safely isolated — a dripping tap with its own valve, a second toilet when another works — a daytime visit will cost less. Send a photo and we'll tell you honestly if it's worth waiting.</p>

<h2>Paying</h2>
<p>We'll explain how to pay when we confirm the visit. You'll get a written record of the work done and the charge.</p>`,
      related: [["Out-of-hours plumber", "/out-of-hours-plumber/"], ["Burst pipe repair", "/burst-pipe-repair/"], ["Water through the ceiling", "/leaking-ceiling/"], ["Is it an emergency?", "/advice/can-it-wait-until-morning/"]],
    }) + finalCta(c, "", "Want the exact price?", "Send your postcode and the time you need us. We'll reply with the charge before anyone sets off.");
  },
};

export const corePages = [home, hub, outOfHours, prices];
export { ELECTRICS };
