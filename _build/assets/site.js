/* Postcode coverage checker and contact click tracking. No third-party code. */
(function () {
  var C = window.EPL || {};
  var CORE = C.core || [];
  var ARR = C.arrangement || [];
  var LONDON = /^(E|EC|N|NW|SE|SW|W|WC|BR|CR|DA|EN|HA|IG|KT|RM|SM|TW|UB)$/;

  function norm(v) { return String(v || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }

  // Returns { outward, district } or null. Accepts full postcodes ("SW6 2AA") and districts ("SW6", "W1K").
  function parse(v) {
    var p = norm(v);
    var outward = null;
    var full = p.match(/^([A-Z]{1,2}\d[A-Z\d]?)(\d[A-Z]{2})$/);
    if (full) outward = full[1];
    else if (/^[A-Z]{1,2}\d[A-Z\d]?$/.test(p)) outward = p;
    if (!outward) return null;
    var m = outward.match(/^([A-Z]{1,2})(\d{1,2})([A-Z]?)$/);
    if (!m) return null;
    return { area: m[1], outward: outward, district: m[1] + m[2], full: Boolean(full) };
  }
  window.EPL_parse = parse;

  function tier(pc) {
    if (CORE.indexOf(pc.district) !== -1) return "core";
    if (ARR.indexOf(pc.district) !== -1) return "arrangement";
    return "none";
  }
  window.EPL_tier = tier;

  function waLink(issue, postcode) {
    var text = [
      "Hi Emergency Plumbers London. I need help with an emergency plumbing problem.",
      "My postcode is: " + postcode,
      "The problem is: " + (issue || ""),
      "Is water still escaping (yes/no)? ",
      "Have you been able to turn the water off (yes/no)? ",
      "I'll attach photos or a short video now."
    ].join("\n");
    return "https://wa.me/" + C.wa + "?text=" + encodeURIComponent(text);
  }

  function buttons(issue, postcode) {
    var h = "";
    if (C.wa) h += '<a class="btn btn-wa" target="_blank" rel="noopener" data-track="whatsapp" href="' + waLink(issue, postcode) + '">WhatsApp your postcode</a>';
    if (C.tel) h += '<a class="btn ' + (C.wa ? "btn-ghost" : "btn-hot") + '" data-track="phone" href="tel:' + C.tel + '">Call ' + C.telDisplay + "</a>";
    return h ? '<div class="cta-row">' + h + "</div>" : "";
  }

  var MSG = {
    core: ["We cover your area.", "Contact us to confirm the next available emergency attendance."],
    arrangement: ["This area may be available by arrangement.", "Send us your postcode and we'll confirm."],
    none: ["We cannot currently guarantee attendance in this area.", "You're still welcome to message us — we'll tell you straight away if we can help."]
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  document.querySelectorAll("[data-checker]").forEach(function (box) {
    var form = box.querySelector("form");
    var input = box.querySelector("input");
    var out = box.querySelector(".checker-result");
    var issue = box.getAttribute("data-issue") || "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pc = parse(input.value);
      out.className = "checker-result";
      if (!pc) {
        out.classList.add("is-error");
        out.innerHTML = "<p class=\"r-title\">That doesn't look like a UK postcode.</p><p>Try the first part, like W14 or SW6, or the full postcode.</p>" + buttons(issue, input.value.trim());
        input.focus();
        return;
      }
      var t = LONDON.test(pc.area) ? tier(pc) : "none";
      var label = pc.full ? norm(input.value).replace(/(\w+)(\d\w\w)$/, "$1 $2") : pc.outward;
      out.classList.add("is-" + t);
      out.innerHTML = '<p class="r-title">' + esc(label) + ": " + MSG[t][0] + "</p><p>" + MSG[t][1] + "</p>" + buttons(issue, label);
      track("postcode_check", t);
    });
  });

  // Click tracking: records clicks only (a click is not an enquiry). Sends to an analytics
  // tool if one is added later (window.plausible or window.dataLayer); otherwise does nothing.
  function track(name, detail) {
    try {
      if (window.plausible) window.plausible(name, { props: { detail: detail || "", page: location.pathname } });
      if (window.dataLayer) window.dataLayer.push({ event: name, detail: detail || "", page: location.pathname });
    } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-track]");
    if (a) track(a.getAttribute("data-track") + "_click", a.closest(".mobile-bar") ? "mobile_bar" : a.closest(".page-hero, .home-hero") ? "hero" : "inline");
  });
})();
