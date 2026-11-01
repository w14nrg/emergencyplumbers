import { UPDATED, priceText, faq, finalCta, article, moreSection, ELECTRICS } from "./components.mjs";

const base = (o) => ({ kind: "service", updated: UPDATED, ...o, crumbs: [["Emergency plumbing", "/emergency-plumbing/"], [o.crumb, o.path]], navPath: "/emergency-plumbing/" });

const burst = base({
  path: "/burst-pipe-repair/",
  crumb: "Burst pipe repair",
  title: "Burst Pipe Repair London | Emergency Plumber, Day & Night",
  description: "Burst pipe in London? Turn off the stopcock, drain the pipes, then message us. How we isolate, find and repair split pipes and failed joints, day or night.",
  eyebrow: "Burst pipes",
  h1: "Burst pipe repair",
  lead: "Water spraying from a pipe, pouring from a joint or running down a wall needs stopping now. Turn the water off first, then send us a photo or call.",
  service: "Burst pipe repair",
  waIssue: "burst pipe",
  body: (c) => article(c, {
    issue: "burst pipe",
    now: [
      "Turn off the water at the main stopcock (clockwise). If it won't move, see <a href=\"" + c.link("/emergency-stopcock-repair/") + "\">stopcock won't turn off</a>.",
      "Open all the cold taps to drain the pipes, and flush the toilets once.",
      "If the burst is on heating pipework, turn the boiler off. If you have a hot water cylinder, switch off the immersion heater.",
      "Keep away from wet sockets, switches and light fittings.",
      "Move valuables, put down towels and buckets, and warn the flat below.",
      "Photograph the damage for your insurer, then contact us.",
    ],
    sections: `
${ELECTRICS}
<h2>Is it really a burst?</h2>
<p>"Burst pipe" covers several different faults, and the fix depends on which one you have:</p>
<div class="compare">
  <div><h3>Split pipe</h3><p>A crack along copper or plastic pipe, often from frost, a nail or screw through a floor, or old pipe wearing thin. Usually sprays hard.</p></div>
  <div><h3>Failed joint</h3><p>A compression nut that has worked loose, a soldered joint that has let go, or a push-fit fitting that has slipped. Often a steady pour.</p></div>
  <div><h3>Pinhole leak</h3><p>A tiny hole in old copper, common under floors and in walls. Can drip unnoticed for weeks before it shows on a ceiling.</p></div>
  <div><h3>Flexible hose</h3><p>The braided hoses under sinks and on taps, toilets and washing machines. When they fail, they fail suddenly and at full mains pressure.</p></div>
</div>

<h2>What we do when we arrive</h2>
<ol>
  <li><strong>Make sure the water is off.</strong> If the main stopcock isn't holding, we isolate further back — at the outside stop tap, the communal valve in a mansion block, or on the tank feed.</li>
  <li><strong>Find exactly where it's leaking.</strong> Often obvious; sometimes it means lifting a floorboard or removing a bath panel. We open up as little as possible.</li>
  <li><strong>Repair it.</strong> We cut out the damaged section and replace it with new pipe and fittings, or replace the failed joint or hose.</li>
  <li><strong>Turn the water back on and test.</strong> We restore the supply slowly, check every joint we've touched and check the rest of the run for weeping.</li>
</ol>

<h2>What can be fixed on the night</h2>
<p>Most bursts on standard 15mm and 22mm copper or plastic pipe, failed fittings and burst hoses can be repaired on the visit. Things that may need a return visit:</p>
<ul>
  <li>Pipes buried in solid floors or chased into plastered walls, where reaching them properly means more opening up.</li>
  <li>Lead or very old iron supply pipe, where a lasting repair may mean replacing a length of the supply.</li>
  <li>Damage that affects a hot water cylinder or tank.</li>
</ul>
<p>In those cases we make it safe and, where we can, restore water to the rest of the property while the affected section stays isolated.</p>

<h2>Bursts in London flats</h2>
<p>In converted houses and mansion blocks, the stopcock for your flat may not stop the burst at all — especially if the pipe is a shared rising main or the feed to a communal tank. If turning your stopcock doesn't slow the water, tell us straight away. We may need the porter, managing agent or a neighbour to reach the right valve.</p>

<h2>Frozen pipes</h2>
<p>A frozen pipe usually bursts when it thaws, not when it freezes. If a pipe is frozen, turn off the water before it thaws and warm it gently with a hairdryer or warm cloths, working from the tap end back. Never use a blowtorch or naked flame.</p>

<h2>Insurance</h2>
<p>Most home insurance covers "escape of water" damage, but usually not the cost of the repair to the pipe itself. Photograph the damage before you clear up, keep wet items if you can, and ask us for a written note of what failed and what we did.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Can I use a pipe repair clamp or tape?", "<p>An emergency clamp or self-amalgamating tape can slow a small leak on a straight run of pipe until we arrive. It won't hold on a joint or on high-pressure sprays, and it isn't a permanent repair.</p>"],
  ["Should I turn the boiler off?", "<p>If the leak is on heating pipework or near the boiler, yes. If it's a cold supply pipe, turning off the main stopcock is the priority. With the water off, a combi boiler can't heat water anyway.</p>"],
  ["Why does water keep coming after I've turned off the stopcock?", "<p>Some water drains out of the pipes for a few minutes. If it keeps flowing, the stopcock may not be closing fully, the leak may be fed from a tank in the loft, or it may be on a shared supply. Tell us which and we'll advise.</p>"],
])}`,
    related: [["Water through the ceiling", "/leaking-ceiling/"], ["Stopcock won't turn off", "/emergency-stopcock-repair/"], ["Burst pipe at night: first 10 minutes", "/advice/burst-pipe-at-night/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"]],
  }) + moreSection(c, "/burst-pipe-repair/") + finalCta(c, "burst pipe", "Pipe burst?"),
});

const ceiling = base({
  path: "/leaking-ceiling/",
  crumb: "Water through the ceiling",
  title: "Water Coming Through the Ceiling? London Emergency Plumber",
  description: "Water coming through your ceiling in London? What to do now, how to tell a supply leak from a waste, heating or upstairs leak, and how we trace and stop it.",
  eyebrow: "Ceiling leaks",
  h1: "Water coming through the ceiling",
  lead: "A drip, a spreading stain or a bulging ceiling all mean water is collecting above you. The first job is working out where it's coming from — and whether it's yours or the flat upstairs.",
  service: "Ceiling leak investigation and repair",
  waIssue: "water coming through the ceiling",
  body: (c) => article(c, {
    issue: "water coming through the ceiling",
    now: [
      "If the ceiling is sagging or bulging, keep everyone out from underneath it.",
      "Keep away from wet light fittings. Only switch off the lighting circuit at the consumer unit if you can reach it safely.",
      "If there's a bathroom or kitchen above you in your own home, turn off your stopcock.",
      "If it's coming from a flat above, knock or call them and ask them to stop using water and turn off their stopcock.",
      "Put down buckets and towels, move furniture, and photograph the damage.",
    ],
    sections: `
${ELECTRICS}
<h2>Where is the water coming from?</h2>
<p>How the leak behaves tells us a lot about its source. These are the four we see most:</p>
<div class="compare">
  <div><h3>Pressurised supply leak</h3><p>Constant, whether or not anyone is using water, and doesn't stop at night. Usually a hot or cold supply pipe or fitting. Turning off the stopcock slows it within minutes.</p></div>
  <div><h3>Waste or overflow leak</h3><p>Only happens when a bath, shower, basin or toilet above is used, then stops. Usually a waste joint, a failed seal around a shower tray or bath, or a leaking toilet connection.</p></div>
  <div><h3>Heating leak</h3><p>Warm or discoloured water, often near radiator pipes, and the boiler pressure keeps dropping. Usually a radiator valve, a joint or a pinhole in heating pipework.</p></div>
  <div><h3>From another property</h3><p>Water coming from the flat above, a shared riser, a communal tank or the roof. Your stopcock won't stop it, and you'll need access to the other property.</p></div>
</div>
<p>Rainwater coming in through a roof, gutter or window is a roofing problem rather than plumbing. If the leak only appears during heavy rain, tell us — we'll say if it's worth a plumber attending.</p>

<h2>What we do when we arrive</h2>
<ol>
  <li><strong>Stop or slow the water.</strong> Isolate the supply, the appliance or the heating system — or get access to the property above.</li>
  <li><strong>Trace the source.</strong> We check the room above, run water through individual fittings one at a time, and look at the pattern of wetness. In converted houses the water can travel along joists and appear well away from the actual leak.</li>
  <li><strong>Repair what's reachable.</strong> Waste joints, toilet connections, valves and exposed pipework can usually be fixed on the visit. Concealed pipes may mean lifting a floorboard or removing a bath or shower panel.</li>
  <li><strong>Explain what's left.</strong> If the cause is behind tiles or inside a wall, we isolate it and explain the options.</li>
</ol>

<h2>When the leak is from upstairs</h2>
<p>If the water is coming from a neighbour's flat and you can't get access, we can still help: we'll check whether it's your pipework, confirm the source is above, and where possible isolate the supply to that flat from a communal valve. In mansion blocks the porter or managing agent can often give access to a riser or to the flat itself. Your building insurance or the freeholder may be responsible for leaks from communal pipes.</p>

<h2>A bulging ceiling</h2>
<p>A ceiling that is sagging with water can come down suddenly. Keep people and pets out from underneath. If it's a small, localised bulge and nowhere near a light fitting, some people relieve the pressure with a small hole into a bucket — but if the plaster is cracking, sagging widely or near electrics, stay away and wait for help.</p>

<h2>What it costs</h2>
${priceText(c)}
<p>Tracing a ceiling leak usually takes longer than fixing a visible burst, because the source isn't always where the water appears.</p>

<h2>Questions</h2>
${faq([
  ["Who pays if the leak is from the flat above?", "<p>Usually the owner of the pipe or appliance that leaked, or their insurer — but leases and building policies vary. Photograph everything and keep a note of when it started. We can give you a written note of what we found.</p>"],
  ["Will you need to cut into my ceiling?", "<p>Not usually. We trace leaks from above wherever we can. Cutting a ceiling is only needed if the leak is inside the ceiling void and can't be reached from the floor above.</p>"],
  ["Can a ceiling leak wait until morning?", "<p>If you've turned off the water and the drip has stopped, it may be able to wait. If water is still coming through, the ceiling is bulging, or it's near electrics, call us now.</p>"],
])}`,
    related: [["Shower leaking below", "/emergency-shower-leaks/"], ["Burst pipe repair", "/burst-pipe-repair/"], ["Leaking radiator", "/leaking-radiator-repair/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"]],
  }) + moreSection(c, "/leaking-ceiling/") + finalCta(c, "water coming through the ceiling", "Ceiling dripping?"),
});

const toilet = base({
  path: "/blocked-toilet-emergency/",
  crumb: "Blocked toilet",
  title: "Emergency Blocked Toilet London | Overflowing WC, Day & Night",
  description: "Blocked or overflowing toilet in London? Stop flushing, then message us. How to tell a WC blockage from a soil stack or drain problem, and what we do on the night.",
  eyebrow: "Blocked toilets",
  h1: "Blocked or overflowing toilet",
  lead: "If it's your only toilet, it's an emergency. The question is whether the blockage is in the toilet itself, or further down in the soil stack or drain.",
  service: "Emergency blocked toilet clearance",
  waIssue: "blocked toilet",
  body: (c) => article(c, {
    issue: "blocked toilet",
    now: [
      "Stop flushing. Each flush adds water that has nowhere to go.",
      "If the bowl is filling, take the cistern lid off and push the float up, or turn off the toilet's isolating valve (a small screw on the supply pipe).",
      "Check other fittings: does the bath, shower or ground-floor gully gurgle or back up when the toilet is used?",
      "Try a flanged toilet plunger with slow, firm strokes. Don't use chemical drain cleaners in a blocked toilet.",
      "Put on gloves and lay down old towels if water has spilled.",
    ],
    nowTitle: "Do this now",
    sections: `
<h2>Toilet blockage or drain blockage?</h2>
<div class="compare">
  <div><h3>Blockage in the toilet</h3><p>Only the toilet is affected. The bowl fills when you flush and drains slowly afterwards. Other basins, baths and showers drain normally. Usually wipes, sanitary items, too much paper or an object stuck in the trap.</p></div>
  <div><h3>Blockage further down</h3><p>The bath, shower or basin gurgles or fills when the toilet is flushed, or a ground-floor gully or manhole is overflowing. The problem is in the soil stack or underground drain, not the toilet.</p></div>
</div>
<p>In mansion blocks and converted houses, several flats often share one soil stack. If a stack is blocked, the lowest flat is usually the one that floods — sometimes with other people's waste. If you're on a lower floor and the toilet is rising when you haven't flushed, tell us immediately and ask neighbours above to stop using water.</p>

<h2>What we do when we arrive</h2>
<ol>
  <li><strong>Check where the blockage is.</strong> We test other fittings and, where it's accessible, look at the stack and the nearest inspection chamber.</li>
  <li><strong>Clear it.</strong> Most toilet blockages clear with a professional plunger or a toilet auger, which reaches through the trap without scratching the pan.</li>
  <li><strong>Remove the pan if needed.</strong> If something solid is wedged in the outlet, we may need to take the toilet off to remove it, then refit it with a new seal.</li>
  <li><strong>Test and clean up.</strong> We flush several times to check it's clear, and clean and disinfect the area we've worked in.</li>
</ol>

<h2>If the problem is the drain</h2>
<p>If the blockage is in the underground drain rather than inside your property, it may need drain rods or jetting from a manhole. We'll tell you what we find. Since October 2011, drains shared with neighbours and lateral drains outside your property boundary have generally been the water company's responsibility in England — in most of London that's Thames Water — so it may be worth reporting to them before paying for drain work.</p>

<h2>What not to do</h2>
<ul>
  <li>Don't keep flushing to "push it through".</li>
  <li>Don't pour chemical drain cleaner into a blocked WC — it sits in the bowl and can splash back when the toilet is worked on.</li>
  <li>Don't use a sink plunger without a flange; it won't seal on a toilet outlet.</li>
  <li>Don't use a wire coat hanger in the trap — it scratches the glaze.</li>
</ul>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Is a blocked toilet really an emergency?", "<p>If it's your only toilet, or it's overflowing, yes. If you have another working toilet, it can usually wait for a daytime visit.</p>"],
  ["Why does my toilet keep blocking?", "<p>Repeated blockages usually mean wet wipes or sanitary items, a partial blockage further down, a poorly installed pan connector, or a soil pipe with too little fall. We'll look for the cause, not just clear the symptom.</p>"],
  ["Do you clear macerator toilets?", "<p>We can look at blocked or noisy macerators, but if the unit has failed it may need a replacement unit, which we'll quote for separately.</p>"],
])}`,
    related: [["Blocked sink or waste", "/emergency-drain-unblocking/"], ["Is it an emergency or can it wait?", "/advice/can-it-wait-until-morning/"], ["Water through the ceiling", "/leaking-ceiling/"]],
  }) + moreSection(c, "/blocked-toilet-emergency/") + finalCta(c, "blocked toilet", "Toilet blocked?"),
});

const drains = base({
  path: "/emergency-drain-unblocking/",
  crumb: "Blocked sinks and wastes",
  title: "Emergency Blocked Sink & Waste Pipe Unblocking | London",
  description: "Blocked kitchen sink, basin, bath or shower waste in London? What to try first, when it's urgent, and how we clear internal waste pipes day and night.",
  eyebrow: "Blocked sinks and wastes",
  h1: "Blocked sink, bath and waste pipes",
  lead: "A blocked kitchen sink or a shower tray that won't empty becomes urgent fast — especially if it's backing up into another fitting or leaking from the waste.",
  service: "Emergency waste pipe unblocking",
  waIssue: "blocked sink or waste",
  body: (c) => article(c, {
    issue: "blocked sink or waste",
    now: [
      "Stop running water into the blocked fitting.",
      "If a dishwasher or washing machine drains into the same waste, switch it off mid-cycle.",
      "Check the trap under the sink or basin — if you're comfortable, put a bowl underneath and unscrew it to clear it.",
      "Try a plunger, covering the overflow hole with a damp cloth so it can build pressure.",
      "Avoid caustic drain cleaners if the fitting is full of standing water.",
    ],
    sections: `
<h2>When a blocked waste is an emergency</h2>
<p>A slow basin can wait. It's urgent when:</p>
<ul>
  <li>The kitchen sink is full and you can't use it, or it's backing up into the dishwasher.</li>
  <li>A shower or bath won't empty and water is overflowing onto the floor.</li>
  <li>Water is leaking from the waste pipe under the fitting or into a ceiling below.</li>
  <li>Several fittings are backing up at once — which usually means a blockage further down the system.</li>
</ul>

<h2>Common causes</h2>
<div class="compare">
  <div><h3>Kitchen sinks</h3><p>Fat and grease that set in the trap and pipe, food waste, and coffee grounds. Often worse where the waste pipe has a long, shallow run to the stack.</p></div>
  <div><h3>Basins, baths and showers</h3><p>Hair and soap building up in the trap, and in pop-up wastes and shower traps that are hard to reach.</p></div>
  <div><h3>Shared waste pipes</h3><p>Where a kitchen and bathroom join one waste pipe, a blockage in one fitting can back up into the other.</p></div>
  <div><h3>Washing machines</h3><p>Lint and fluff in the standpipe or trap, or a kinked drain hose, causing water to back up into the sink.</p></div>
</div>

<h2>How we clear it</h2>
<ol>
  <li><strong>Find where it is.</strong> We check which fittings are affected to work out whether the blockage is in a trap, a branch pipe or the main stack.</li>
  <li><strong>Strip and clean the trap and waste.</strong> Most sink and basin blockages are in the first metre of pipe.</li>
  <li><strong>Use a hand drain auger.</strong> For blockages further along a waste pipe, a flexible auger reaches through the pipe without dismantling it.</li>
  <li><strong>Re-make leaking joints.</strong> If the blockage has caused a waste joint to leak, we replace the seal or fitting.</li>
</ol>
<p>If the blockage turns out to be in the underground drain and needs jetting or a camera survey, we'll tell you straight away and explain who to contact, rather than charging you to try.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Are drain unblocking chemicals safe to use?", "<p>On a slow drain, an enzyme cleaner is fine. Avoid caustic products in a fitting full of standing water, and never mix products. Tell us what you've used before we start.</p>"],
  ["Why does my kitchen sink smell?", "<p>Usually food and grease in the trap, or a trap that has dried out. If you can also smell sewage elsewhere, there may be a problem with the drain or a failed seal.</p>"],
])}`,
    related: [["Blocked toilet", "/blocked-toilet-emergency/"], ["Shower leaking below", "/emergency-shower-leaks/"], ["Water through the ceiling", "/leaking-ceiling/"]],
  }) + moreSection(c, "/emergency-drain-unblocking/") + finalCta(c, "blocked sink or waste", "Sink or shower backing up?"),
});

const radiator = base({
  path: "/leaking-radiator-repair/",
  crumb: "Leaking radiator",
  title: "Leaking Radiator Repair London | Emergency Valve Leaks",
  description: "Leaking radiator or radiator valve in London? How to tell a gland, union, valve-body or pipe leak apart, how to isolate it safely and what we repair on the visit.",
  eyebrow: "Leaking radiators",
  h1: "Leaking radiator and radiator valve repair",
  lead: "Most radiator leaks come from the valve, not the radiator. Where exactly it's leaking tells you whether it's a quick fix or a replacement.",
  service: "Leaking radiator repair",
  waIssue: "leaking radiator",
  body: (c) => article(c, {
    issue: "leaking radiator",
    now: [
      "Turn the heating off at the boiler or controller and let the system cool.",
      "Close both radiator valves: turn the thermostatic or handwheel valve to off, then turn the lockshield (the capped valve) clockwise with a spanner, counting the turns so it can be reset.",
      "Put a towel and a container under the leak.",
      "Check the boiler pressure gauge. If it has dropped below about 1 bar, the system has lost water — don't top it up repeatedly while it's still leaking.",
      "Photograph exactly where the water is coming from and send it to us.",
    ],
    sections: `
<h2>Where is it leaking?</h2>
<div class="compare">
  <div><h3>Valve gland (spindle)</h3><p>Water around the spindle under the head or cap. Common on older valves. Often fixable by re-packing or tightening the gland, or replacing the valve head.</p></div>
  <div><h3>Union nut</h3><p>Water from the nut joining the valve to the radiator tail. The joint may need re-making with new sealing, or a new tail.</p></div>
  <div><h3>Valve body</h3><p>Water weeping from a crack or corroded area on the valve itself. The valve needs replacing.</p></div>
  <div><h3>Pipework or radiator</h3><p>A pinhole in the pipe or the radiator panel, usually from internal corrosion. Pipe can be repaired; a corroded radiator normally needs replacing.</p></div>
</div>
<p>A leaking bleed valve at the top corner of a radiator usually just needs closing or a new bleed screw.</p>

<h2>How we repair it</h2>
<ol>
  <li><strong>Isolate the radiator.</strong> If the valves won't close properly — common with old valves — we may need to drain part of the system or use a pipe freezing kit.</li>
  <li><strong>Repair or replace.</strong> We re-pack glands, re-make union joints and replace valves or sections of pipe. A pipe freezing kit lets us change a valve without draining the whole system in many cases.</li>
  <li><strong>Refill and repressurise.</strong> On sealed systems we refill to the correct pressure and bleed the air out.</li>
  <li><strong>Check the rest.</strong> We check the boiler restarts and the other radiators heat up.</li>
</ol>
<p>We work on the water side of heating systems only. If the boiler itself needs attention, you'll need a Gas Safe registered engineer.</p>

<h2>What can wait</h2>
<p>A slow weep you can catch in a container, with the radiator isolated, can usually wait for a daytime visit. Call us at night if the leak won't stop, water is reaching a ceiling below, or the system keeps losing pressure.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Can I just tighten the nut?", "<p>A small nip on a weeping gland nut can stop a minor leak. Overtightening a union nut can crack an old valve or distort the joint, so if it doesn't stop with a gentle quarter-turn, leave it.</p>"],
  ["Why does my boiler pressure keep dropping?", "<p>On a sealed heating system, a pressure drop means water is escaping somewhere — a radiator valve, a joint, a pinhole under the floor, or the boiler's pressure relief valve discharging outside. We'll look for the leak on the water side.</p>"],
])}`,
    related: [["Water through the ceiling", "/leaking-ceiling/"], ["Burst pipe repair", "/burst-pipe-repair/"], ["Is it an emergency or can it wait?", "/advice/can-it-wait-until-morning/"]],
  }) + moreSection(c, "/leaking-radiator-repair/") + finalCta(c, "leaking radiator", "Radiator leaking?"),
});

const stopcock = base({
  path: "/emergency-stopcock-repair/",
  crumb: "Stopcock won't turn off",
  title: "Stopcock Won't Turn Off? Emergency Stopcock Repair London",
  description: "Stopcock seized, spinning or leaking, or no water at all? How to check what's wrong, when it's Thames Water's problem, and how we isolate and replace stopcocks.",
  eyebrow: "Stopcocks and water supply",
  h1: "Stopcock won't turn off — or there's no water",
  lead: "The stopcock is the one valve you need to work in an emergency. If it's seized, just spins or is leaking itself, you need it sorted before anything else can be fixed.",
  service: "Emergency stopcock repair and replacement",
  waIssue: "stopcock not working",
  body: (c) => article(c, {
    issue: "stopcock not working",
    now: [
      "Try turning the stopcock clockwise firmly by hand. Don't use a long lever or hammer on it — old brass can snap.",
      "If it won't close, look for other valves: an isolating valve on the pipe feeding the leaking fitting, or a valve on the tank feed in the loft.",
      "In a block of flats, ask the porter or managing agent about a valve on the riser or communal supply.",
      "If you know where the outside stop tap is and have the key, it can stop the supply from the pavement.",
      "Open the cold taps to drain the pipes while you wait.",
    ],
    sections: `
<h2>What's wrong with the stopcock?</h2>
<div class="compare">
  <div><h3>Seized</h3><p>The handle won't move. Common on stopcocks that haven't been turned in years, especially in hard-water London. Forcing it risks breaking the spindle.</p></div>
  <div><h3>Turns but doesn't stop the water</h3><p>The handle turns but water keeps flowing. The washer (jumper) inside has worn or come loose, or the spindle has snapped internally.</p></div>
  <div><h3>Leaking from the stopcock</h3><p>Water around the spindle (a gland leak) or from the joints either side. Often starts after the stopcock is finally turned.</p></div>
  <div><h3>Can't find it</h3><p>Boxed in, under kitchen units, behind a bath panel or in a communal cupboard. It's worth finding now, before you need it.</p></div>
</div>

<h2>How we fix it</h2>
<ol>
  <li><strong>Isolate the supply further back.</strong> At the outside stop tap, a communal valve, or with a pipe freezing kit on the supply pipe.</li>
  <li><strong>Repair or replace the stopcock.</strong> Re-packing the gland can stop a spindle leak; otherwise we fit a new stopcock or a quarter-turn valve that's easier to close in future.</li>
  <li><strong>Restore and test.</strong> We turn the supply back on slowly and check it closes fully.</li>
</ol>
<p>Many older London properties still have lead supply pipes. If yours does, we'll tell you — a lead pipe affects what kind of fitting can be used and whether a longer-term replacement is worth planning.</p>

<h2>No water at all?</h2>
<ol>
  <li>Check whether the neighbours have water. If they don't, it's almost certainly a supply problem — check your water company's website or service updates. In most of London that's Thames Water.</li>
  <li>Check your stopcock hasn't been turned off, and that any isolating valves are open.</li>
  <li>If only the cold kitchen tap works but nothing else, the cold water tank in the loft may be empty — often a stuck float valve.</li>
  <li>In winter, a frozen pipe can cut the supply. Turn off the stopcock before it thaws in case it has split.</li>
</ol>
<p>If neighbours have water and you don't, message us — the cause is inside your property and we can find it.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Am I allowed to use the outside stop tap?", "<p>The outside stop tap is part of the water company's network, but householders can use it in an emergency if they have the right key and can reach it. If you're not sure or it's stiff, don't force it — tell us and we'll deal with it.</p>"],
  ["How often should I turn my stopcock?", "<p>Turning it off and on again once or twice a year helps stop it seizing. If it's stiff, don't force it — have it replaced before an emergency.</p>"],
])}`,
    related: [["Burst pipe repair", "/burst-pipe-repair/"], ["Turning off the water in a London flat", "/advice/turn-off-water-london-flat/"], ["Burst pipe at night: first 10 minutes", "/advice/burst-pipe-at-night/"]],
  }) + moreSection(c, "/emergency-stopcock-repair/") + finalCta(c, "stopcock not working", "Can't turn the water off?"),
});

const shower = base({
  path: "/emergency-shower-leaks/",
  crumb: "Shower leaks",
  title: "Shower Leaking Through the Ceiling? Emergency Repair London",
  description: "Shower leaking into the room or flat below? How to tell a tray, waste, seal or valve leak apart, what to do straight away and what we can fix on the visit.",
  eyebrow: "Shower leaks",
  h1: "Shower leaking into the room below",
  lead: "A shower leak usually shows up on the ceiling underneath long before you see it in the bathroom. The key question is whether it leaks only when the shower is running, or all the time.",
  service: "Emergency shower leak repair",
  waIssue: "shower leaking below",
  body: (c) => article(c, {
    issue: "shower leaking below",
    now: [
      "Stop using the shower.",
      "Watch the ceiling below: does the drip stop when the shower is off?",
      "If it keeps leaking with the shower off, turn off the stopcock — the leak is on a supply pipe.",
      "If it's a flat below you, let them know straight away.",
      "Photograph the ceiling below and the shower tray, seals and grout.",
    ],
    sections: `
<h2>Only when the shower is running, or all the time?</h2>
<div class="compare">
  <div><h3>Only when it's used</h3><p>Usually a failed silicone seal or grout, a leaking waste or trap under the tray, a cracked tray, or water escaping past the shower screen or door seals.</p></div>
  <div><h3>All the time</h3><p>A leak on the hot or cold supply to the shower valve, or on the valve itself — often hidden behind tiles. This one needs isolating straight away.</p></div>
</div>

<h2>How we find the leak</h2>
<p>We test each part separately: running water only into the waste, only onto the tray, then onto the walls and screen, while watching for water below. That tells us whether it's the waste, the tray, the seals or the enclosure — without pulling everything apart.</p>
<ul>
  <li><strong>Waste and trap leaks</strong> can often be reached from below the tray or through an access panel, and repaired on the visit.</li>
  <li><strong>Failed seals</strong> can be cut out and re-sealed, but the new seal needs time to cure before the shower is used.</li>
  <li><strong>Concealed valve or pipe leaks</strong> are isolated on the night. A permanent repair may mean removing tiles, which we'll explain and quote separately.</li>
  <li><strong>Cracked trays</strong> need replacing; we'll isolate the shower and explain the options.</li>
</ul>

<h2>Electric showers</h2>
<p>If the leak is from an electric shower unit, switch it off at its pull-cord or isolator and don't touch the unit while it's wet. We can deal with the water side; the electrical side may need an electrician.</p>

<h2>What it costs</h2>
${priceText(c)}

<h2>Questions</h2>
${faq([
  ["Can I keep using the shower until it's fixed?", "<p>If it leaks only when used, using it will keep soaking the ceiling below. Use another bathroom or the bath if you can until it's repaired.</p>"],
  ["Is it covered by insurance?", "<p>Escape of water damage often is, but failed seals and grout are usually treated as wear and tear. A written note of what failed helps with any claim.</p>"],
])}`,
    related: [["Water through the ceiling", "/leaking-ceiling/"], ["Blocked sink or waste", "/emergency-drain-unblocking/"], ["Burst pipe repair", "/burst-pipe-repair/"]],
  }) + moreSection(c, "/emergency-shower-leaks/") + finalCta(c, "shower leaking below", "Shower leaking downstairs?"),
});

export const servicePages = [burst, ceiling, toilet, drains, radiator, stopcock, shower];
