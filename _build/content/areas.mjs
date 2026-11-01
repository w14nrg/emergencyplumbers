import { UPDATED, priceText, finalCta, article, areaChips } from "./components.mjs";

// Each area page is written individually. Shared structure, but the substance — buildings,
// typical faults and access — is specific to the area.
function area(o) {
  return {
    kind: "area",
    updated: UPDATED,
    navPath: "/areas/",
    crumbs: [["Areas", "/areas/"], [o.areaName, o.path]],
    eyebrow: `Emergency plumber · ${o.postcodes}`,
    service: `Emergency plumber in ${o.areaName}`,
    serviceArea: { "@type": "Place", name: `${o.areaName}, London ${o.postcodes}` },
    waIssue: "",
    ...o,
    body: (c) =>
      article(c, {
        issue: "",
        sections: `
<h2>${o.homesTitle}</h2>
${o.homes}
<h2>Emergencies we see in ${o.short}</h2>
${o.faults}
<h2>Getting to you</h2>
${o.access}
<h2>Coverage</h2>
<p>${o.postcodes} is in our core area, which means it's one of the areas we can reach most reliably out of hours. When you contact us we'll give you a realistic arrival time for that night — we don't quote fixed response times on the website because they depend on traffic, time and what else is going on.</p>
${c.checker("")}
<h2>What it costs</h2>
${priceText(c)}
<h2>Nearby areas</h2>
${areaChips(c, o.path)}`,
        related: o.related,
      }) + finalCta(c, "", `Emergency in ${o.short}?`, `Send your postcode and a photo on WhatsApp, or call. We'll tell you how soon we can get to ${o.short} and what it will cost.`),
  };
}

const westKen = area({
  path: "/emergency-plumber-west-kensington.html",
  areaName: "West Kensington",
  short: "West Kensington",
  postcodes: "W14",
  title: "Emergency Plumber West Kensington W14 | Barons Court, Olympia",
  description: "Emergency plumber for West Kensington, Barons Court and Olympia (W14). Leaks in converted flats and mansion blocks, burst pipes and blocked toilets, day and night.",
  h1: "Emergency plumber in West Kensington, W14",
  lead: "West Kensington, Barons Court and Olympia are our home ground. That means short journeys at night and a good knowledge of how the buildings here are plumbed.",
  homesTitle: "Converted terraces and mansion flats",
  homes: `<p>Much of W14 is Victorian terraced housing split into two, three or four flats, alongside red-brick mansion blocks such as those around Queen's Club Gardens and a number of large post-war estates. Each comes with its own plumbing quirks:</p>
<ul>
  <li><strong>Converted houses:</strong> the flats often share one rising main, and the stopcock for an upper flat can be in the hallway, under the stairs or in the basement flat. Waste pipes from upper bathrooms frequently run through the flats below.</li>
  <li><strong>Mansion blocks:</strong> supplies typically come from communal tanks or a pumped riser, with isolation valves in a riser cupboard rather than in each flat.</li>
  <li><strong>Estates:</strong> purpose-built blocks with communal heating or shared stacks, where some valves are controlled by the estate's maintenance team.</li>
</ul>`,
  faults: `<p>The callouts we expect most here are water coming through a ceiling from the flat above, leaks from old waste pipes that pass through other flats, stopcocks that haven't been turned in decades and seize when they're needed, and blocked toilets on shared soil stacks — where the lower flat floods first.</p>
<p>In converted houses, it's worth knowing before an emergency where your stopcock is and whether it actually controls only your flat. See our guide to <a href="/advice/turn-off-water-london-flat/">turning off the water in a London flat</a>.</p>`,
  access: `<p>Tell us when you message if we need to get into a communal riser, a basement or a neighbouring flat. For mansion blocks, the porter or the managing agent's out-of-hours number can make the difference between isolating a leak in minutes or an hour. Parking in W14 is mostly controlled by residents' permit zones; we'll sort out where to park.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Burst pipe repair", "/burst-pipe-repair/"]],
});

const kensington = area({
  path: "/emergency-plumber-kensington.html",
  areaName: "Kensington",
  short: "Kensington",
  postcodes: "W8",
  title: "Emergency Plumber Kensington W8 | Leaks, Bursts, Blockages",
  description: "Emergency plumber in Kensington W8: mews houses, mansion blocks and basement conversions. Burst pipes, ceiling leaks and blocked toilets, evenings and overnight.",
  h1: "Emergency plumber in Kensington, W8",
  lead: "Mews houses, portered mansion blocks and period houses with deep basements — Kensington's buildings are distinctive, and so are the ways water finds its way through them.",
  homesTitle: "Mews, mansion blocks and basements",
  homes: `<p>W8 runs from Kensington High Street up through Kensington Church Street and the streets around Phillimore Gardens and Campden Hill. The housing is a mix of large Victorian and Georgian houses, many divided into lateral flats; mews houses converted from old stables; and red-brick mansion blocks around Kensington Court and the High Street.</p>
<ul>
  <li><strong>Mews houses</strong> often have tight, boxed-in pipe runs and bathrooms squeezed into former hay lofts, so leaks can be hard to reach without care.</li>
  <li><strong>Mansion blocks</strong> usually have communal supplies, risers and porters, which affects how quickly water can be isolated.</li>
  <li><strong>Basement extensions</strong> are common. Basement bathrooms and kitchens often drain to a pump rather than by gravity — if the pump fails, toilets and showers back up.</li>
</ul>`,
  faults: `<p>Typical emergencies here include leaks from upper-floor bathrooms into finished rooms below, failed basement pumps causing toilets or showers to back up, burst pipes in boxed-in runs, and seized stopcocks in older houses. Where interiors are expensive, the priority is stopping water quickly and protecting finishes while we work — we use dust sheets and floor protection and open up as little as possible.</p>
<p>If you have a basement pump, tell us when you message. Many pump failures are electrical or need the pump manufacturer; we'll say honestly whether it's something we can deal with that night.</p>`,
  access: `<p>Many W8 mansion blocks and managed buildings have porters or concierge desks. At night, let them know we're coming, or tell us who to call. For mews properties, let us know about any gates or access codes. Much of Kensington is in conservation areas, which is another reason we avoid cutting into ceilings and walls unless it's unavoidable.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Shower leaking below", "/emergency-shower-leaks/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Burst pipe repair", "/burst-pipe-repair/"]],
});

const hammersmith = area({
  path: "/emergency-plumber-hammersmith.html",
  areaName: "Hammersmith",
  short: "Hammersmith",
  postcodes: "W6",
  title: "Emergency Plumber Hammersmith W6 | Brook Green, Ravenscourt",
  description: "Emergency plumber for Hammersmith W6, Brook Green, Brackenbury and Ravenscourt Park. Burst pipes, ceiling leaks, blocked toilets and stopcocks, day and night.",
  h1: "Emergency plumber in Hammersmith, W6",
  lead: "From the terraces of Brackenbury Village to the riverside flats, W6 is close to our base, which helps when a leak can't wait until morning.",
  homesTitle: "Terraces, mansion blocks and riverside flats",
  homes: `<p>Hammersmith's housing ranges from Victorian and Edwardian terraced houses around Brackenbury Village, Ravenscourt Park and Stamford Brook, to mansion blocks near Brook Green and modern riverside apartment buildings.</p>
<ul>
  <li><strong>Family terraces:</strong> often extended at the back and into the loft, with bathrooms added well away from the original soil stack — which means long waste runs and more joints that can leak.</li>
  <li><strong>Houses split into flats:</strong> upper and lower flats sharing a supply and a soil stack.</li>
  <li><strong>Riverside and newer blocks:</strong> plastic pipework, communal plant rooms and concierge access.</li>
</ul>`,
  faults: `<p>Common emergencies in W6 include leaks from loft-conversion bathrooms, waste joints failing on long runs through extensions, push-fit plastic fittings coming apart in newer buildings, and blocked toilets in houses where the soil stack serves two flats. In older houses, we also see seized stopcocks and pinhole leaks in ageing copper under floors.</p>`,
  access: `<p>For riverside and managed blocks, tell us about concierge, gates or fob access when you message. In terraces, it helps if you know whether the flat above or below shares your supply. Most W6 streets have residents' parking controls; that's our problem to solve, not yours.</p>`,
  related: [["Burst pipe repair", "/burst-pipe-repair/"], ["Blocked sink or waste", "/emergency-drain-unblocking/"], ["Leaking radiator", "/leaking-radiator-repair/"], ["Blocked toilet", "/blocked-toilet-emergency/"]],
});

const fulham = area({
  path: "/emergency-plumber-fulham.html",
  areaName: "Fulham",
  short: "Fulham",
  postcodes: "SW6",
  title: "Emergency Plumber Fulham SW6 | Parsons Green, Sands End",
  description: "Emergency plumber in Fulham SW6, Parsons Green and Sands End. Leaks between converted flats, burst pipes and blocked toilets, evenings, overnight and weekends.",
  h1: "Emergency plumber in Fulham, SW6",
  lead: "Fulham's long streets of terraced houses, many split into upper and lower flats, mean one leak often becomes two households' problem. Speed matters.",
  homesTitle: "Fulham terraces and conversions",
  homes: `<p>Much of SW6 — around Parsons Green, Fulham Broadway and the streets off the Fulham Road and New King's Road — is late-Victorian terraced housing. A large share has been converted into upper and lower flats, extended into the side return and the loft. Towards Sands End and the river, there are newer developments such as those around Imperial Wharf, with concierge and communal plant.</p>
<ul>
  <li><strong>Upper and lower flat conversions:</strong> the upper flat's bathroom and kitchen wastes often run through or past the lower flat, and both may share a rising main.</li>
  <li><strong>Side-return and loft extensions:</strong> new bathrooms and kitchens a long way from the original drain.</li>
  <li><strong>Riverside developments:</strong> plastic pipework, booster pumps and shared risers.</li>
</ul>`,
  faults: `<p>The emergencies we expect most in Fulham are leaks from an upper flat's bathroom into the lower flat's ceiling, shower and bath waste leaks, burst pipes in loft bathrooms, and blocked toilets on shared stacks. Seized and leaking stopcocks are also common in houses where the stopcock sits under the stairs or in the lower flat.</p>
<p>If water is coming through your ceiling from the flat above, see <a href="/leaking-ceiling/">water coming through the ceiling</a> for what to do while you wait.</p>`,
  access: `<p>If the leak is coming from the upper flat and they're away, tell us — we'll check whether the supply can be isolated without getting in. For newer riverside blocks, let us know about concierge or fob access. We'll deal with parking.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Shower leaking below", "/emergency-shower-leaks/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"]],
});

const chelsea = area({
  path: "/emergency-plumber-chelsea.html",
  areaName: "Chelsea",
  short: "Chelsea",
  postcodes: "SW3 · SW10",
  title: "Emergency Plumber Chelsea SW3 & SW10 | Night & Weekend",
  description: "Emergency plumber in Chelsea SW3 and SW10: portered mansion blocks, garden squares and period houses. Leaks, bursts and blocked toilets, evenings and overnight.",
  h1: "Emergency plumber in Chelsea, SW3 and SW10",
  lead: "Chelsea's portered blocks and period houses often have high-value interiors and complicated shared plumbing. The job is to stop the water fast and keep the damage small.",
  homesTitle: "Portered blocks, garden squares and period houses",
  homes: `<p>SW3 takes in the King's Road, Sloane Avenue, Cheyne Walk and the streets around Chelsea Green; SW10 covers West Brompton, the World's End, Redcliffe Square and Chelsea Harbour. The housing includes:</p>
<ul>
  <li><strong>Red-brick mansion blocks</strong> with porters, communal tanks and supplies isolated from riser cupboards.</li>
  <li><strong>Stucco and brick period houses</strong>, many converted into flats, with pipework that has been altered many times over the years.</li>
  <li><strong>Modern riverside developments</strong> at Chelsea Harbour and around Lots Road, with concierge and plant rooms.</li>
  <li><strong>Large estates</strong> such as the World's End, where some valves and stacks are managed by the estate.</li>
</ul>`,
  faults: `<p>We expect most Chelsea callouts to be water coming through ceilings in mansion blocks, shower and bath leaks into finished rooms below, leaking hot water cylinders in older flats, and failed stopcocks. In blocks with communal supplies, part of the job is often working out with the porter which valve controls which flat.</p>
<p>With expensive finishes, we protect floors and furniture, isolate first and open up as little as possible.</p>`,
  access: `<p>Let the porter or concierge know we're coming, or give us the managing agent's out-of-hours number if we need a riser or plant room opened. For SW10 estates, tell us if the estate has its own repairs line. We'll handle parking — much of SW3 has tight residents' controls.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Shower leaking below", "/emergency-shower-leaks/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"], ["Burst pipe repair", "/burst-pipe-repair/"]],
});

const earlsCourt = area({
  path: "/emergency-plumber-earls-court.html",
  areaName: "Earl's Court",
  short: "Earl's Court",
  postcodes: "SW5",
  title: "Emergency Plumber Earl's Court SW5 | Flats & Conversions",
  description: "Emergency plumber in Earl's Court SW5. Leaks in converted stucco houses and small flats, shared risers, burst pipes and blocked toilets, evenings and overnight.",
  h1: "Emergency plumber in Earl's Court, SW5",
  lead: "Earl's Court has some of the most densely converted buildings in London. When one flat leaks, several can be affected — so finding the right valve quickly is everything.",
  homesTitle: "Tall stucco houses, many flats",
  homes: `<p>Earl's Court is dominated by tall Victorian stucco terraces around squares such as Nevern Square and Earl's Court Square, many divided into five, ten or more small flats and studios, alongside hotels and a few mansion blocks.</p>
<ul>
  <li>Many flats share one rising main and one or two soil stacks.</li>
  <li>Supplies often come from communal tanks at roof level, so a leak on an upper floor may need isolating at the tank.</li>
  <li>Decades of alterations mean pipework is a mix of old copper, plastic and sometimes lead or galvanised steel.</li>
  <li>Stopcocks for individual flats can be in communal hallways, under stairs or not present at all.</li>
</ul>`,
  faults: `<p>We expect leaks travelling through several floors, blocked shared soil stacks flooding lower flats, overflowing communal tanks, and seized or missing stopcocks to be the most common Earl's Court emergencies. Tracing a leak in a building like this means working floor by floor and fitting by fitting.</p>
<p>If you rent, tell your landlord or agent as soon as you can — but don't wait for them if water is still coming in.</p>`,
  access: `<p>The hardest part in SW5 is often getting into the flat above, the roof space or a locked communal cupboard. If you can, find out who has keys — a managing agent, freeholder or neighbour — while we're on the way.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"]],
});

const southKen = area({
  path: "/emergency-plumber-south-kensington.html",
  areaName: "South Kensington",
  short: "South Kensington",
  postcodes: "SW7",
  title: "Emergency Plumber South Kensington SW7 | Gloucester Road",
  description: "Emergency plumber for South Kensington and Gloucester Road (SW7): lateral flats, mews and portered blocks. Burst pipes, ceiling leaks and blockages, day and night.",
  h1: "Emergency plumber in South Kensington, SW7",
  lead: "Lateral flats in white stucco houses, mews and portered blocks around Queen's Gate and Gloucester Road — where leaks are rarely just one household's problem.",
  homesTitle: "Stucco houses, lateral flats and mews",
  homes: `<p>SW7 covers the streets around South Kensington station, Gloucester Road, Queen's Gate, Onslow Gardens and Thurloe Square. Most of the large stucco houses here are now lateral flats, one or two per floor, with mews houses behind them and several portered mansion blocks.</p>
<ul>
  <li><strong>Lateral flats</strong> often have bathrooms stacked directly above each other, so a shower or bath leak comes straight through the ceiling below.</li>
  <li><strong>Lower-ground flats</strong> sit below the street with vaults under the pavement, and can be the first to flood when a drain or stack blocks.</li>
  <li><strong>Mews houses</strong> have compact, boxed-in pipework.</li>
  <li>The area also has many student lets and short lets, where nobody may know where the stopcock is.</li>
</ul>`,
  faults: `<p>We expect bathroom leaks into flats below, blocked stacks backing up into lower-ground flats, burst pipes in boxed-in runs, and leaking cylinders in older flats to be common here. Gloucester Road and Cromwell Road flats are often let or managed, which means we may need to coordinate with an agent.</p>`,
  access: `<p>For portered and managed buildings, tell us who to contact out of hours. For lower-ground flats, tell us about separate area-steps entrances. If you're a guest or tenant and don't know where the stopcock is, send a photo of the kitchen and bathroom pipework and we'll help you look.</p>`,
  related: [["Shower leaking below", "/emergency-shower-leaks/"], ["Water through the ceiling", "/leaking-ceiling/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Burst pipe repair", "/burst-pipe-repair/"]],
});

const nottingHill = area({
  path: "/emergency-plumber-notting-hill.html",
  areaName: "Notting Hill & Holland Park",
  short: "Notting Hill",
  postcodes: "W11",
  title: "Emergency Plumber Notting Hill & Holland Park W11",
  description: "Emergency plumber in Notting Hill and Holland Park (W11): converted villas, garden-square flats and family houses. Leaks, bursts and blocked toilets, day or night.",
  h1: "Emergency plumber in Notting Hill and Holland Park, W11",
  lead: "Converted stucco villas, communal garden squares and large family houses with basements — W11's buildings are grand, old and often heavily altered.",
  homesTitle: "Villas, garden squares and family houses",
  homes: `<p>W11 includes the Ladbroke estate's crescents and garden squares, the streets around Portobello Road and Westbourne Grove, and the larger houses of Holland Park. There are also several post-war estates towards North Kensington.</p>
<ul>
  <li><strong>Converted villas:</strong> large houses divided into flats over many decades, with pipework that has been extended, rerouted and boxed in many times.</li>
  <li><strong>Family houses:</strong> often with basement extensions, multiple bathrooms and large hot water cylinders.</li>
  <li><strong>Estates:</strong> communal systems managed by the estate or council.</li>
</ul>`,
  faults: `<p>The callouts we expect most in W11 are leaks from bathrooms into flats below, leaking unvented or vented hot water cylinders in larger houses, failures on long pipe runs to extension bathrooms, and blocked toilets in converted buildings. In houses with several bathrooms, it's worth knowing which isolating valves control which room.</p>`,
  access: `<p>Many W11 streets have gated communal gardens and side entrances; tell us about gates, codes and the best way in. For flats in converted villas, tell us whether the supply is shared and who holds keys to communal cupboards. We'll handle parking.</p>`,
  related: [["Water through the ceiling", "/leaking-ceiling/"], ["Burst pipe repair", "/burst-pipe-repair/"], ["Leaking radiator", "/leaking-radiator-repair/"], ["Shower leaking below", "/emergency-shower-leaks/"]],
});

const shepherdsBush = area({
  path: "/emergency-plumber-shepherds-bush.html",
  areaName: "Shepherd's Bush",
  short: "Shepherd's Bush",
  postcodes: "W12",
  title: "Emergency Plumber Shepherd's Bush W12 | White City, Askew",
  description: "Emergency plumber for Shepherd's Bush, White City and the Askew Road area (W12). Burst pipes, leaks, blocked toilets and stopcocks, evenings, overnight and weekends.",
  h1: "Emergency plumber in Shepherd's Bush, W12",
  lead: "Victorian terraces, large estates and brand-new towers at White City — W12 has almost every kind of London plumbing, sometimes on the same street.",
  homesTitle: "Terraces, estates and new builds",
  homes: `<p>W12 covers Shepherd's Bush Green, the streets off the Uxbridge Road, Goldhawk Road and Askew Road, the White City and Wormholt estates, and the new developments around White City.</p>
<ul>
  <li><strong>Victorian terraces:</strong> many split into flats, with shared supplies and stacks, and some original lead or iron supply pipe.</li>
  <li><strong>Large estates:</strong> purpose-built blocks where communal pipework and some valves are managed by the council or housing association.</li>
  <li><strong>New-build towers:</strong> plastic push-fit pipework, booster pumps and building management teams.</li>
</ul>`,
  faults: `<p>We expect leaks between flats in converted terraces, push-fit fittings coming apart in newer flats, blocked toilets and wastes, and seized stopcocks in older houses to be the most common emergencies in W12. In a council or housing association flat, a communal pipe or stack may be the landlord's responsibility — call their emergency repairs line too, but don't wait if water is coming in.</p>`,
  access: `<p>For new-build developments, tell us about concierge, fobs and car-park access. For estates, tell us which block and entrance. In terraced streets, let us know if the flat above or below shares your supply.</p>`,
  related: [["Burst pipe repair", "/burst-pipe-repair/"], ["Blocked toilet", "/blocked-toilet-emergency/"], ["Blocked sink or waste", "/emergency-drain-unblocking/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"]],
});

export const areaPages = [westKen, kensington, hammersmith, fulham, chelsea, earlsCourt, southKen, nottingHill, shepherdsBush];

export const areasHub = {
  path: "/areas/",
  kind: "hub",
  updated: UPDATED,
  title: "Areas We Cover | Emergency Plumber West & Central London",
  description: "Where we attend plumbing emergencies: core coverage across West and Central London, wider London by arrangement. Check your postcode before you contact us.",
  eyebrow: "Areas",
  h1: "Where we cover",
  lead: "We're based in West London, so that's where we can attend most reliably at night. Here's our coverage, honestly described.",
  crumbs: [["Areas", "/areas/"]],
  body: (c) => {
    const core = c.config.coverage.core, arr = c.config.coverage.arrangement;
    return article(c, {
      sections: `
<h2>Check your postcode</h2>
${c.checker("")}
<h2>Core area</h2>
<p>These districts are close enough for us to reach reliably out of hours. We'll still confirm the arrival time for your postcode when you contact us.</p>
<ul class="chips">${core.map((d) => `<li><span>${d}</span></li>`).join("")}</ul>
<h3>Area pages</h3>
${areaChips(c)}
<h2>By arrangement</h2>
<p>We can often attend in these districts, depending on the time and what else is happening that night. Send your postcode and we'll tell you straight away.</p>
<ul class="chips">${arr.map((d) => `<li><span class="soft">${d}</span></li>`).join("")}</ul>
<h2>Elsewhere in London</h2>
<p>We can't currently guarantee attendance outside these areas. You're still welcome to message us — if we can't help, we'll say so quickly so you can find someone who can.</p>
<h2>How coverage works at night</h2>
<p>We don't show live engineer locations or fixed arrival times, because they would be guesses. What we do is tell you, for your postcode and the time you contact us, how soon we can realistically get there — before you agree to anything.</p>`,
      related: [["Out-of-hours plumber", "/out-of-hours-plumber/"], ["Emergency prices", "/emergency-plumber-prices/"], ["All emergencies", "/emergency-plumbing/"]],
    }) + finalCta(c, "");
  },
};
