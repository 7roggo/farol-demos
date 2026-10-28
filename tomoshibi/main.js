(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------------- content (edit here) ---------------- */
  var T = {
    es: {
      introSub: "Omakase · Madrid", skip: "Entrar",
      navOmakase: "Omakase", navMenu: "Menú", navChef: "Chef", navVisit: "Visita", reserve: "Reservar",
      heroEyebrow: "Omakase · Chamberí, Madrid",
      heroTitle: "Luz baja.<br>Doce asientos.<br>Una noche para dos.",
      heroCta: "Reservar vuestra noche", heroMeta: "Martes a sábado · 19:00 y 21:30",
      omakaseEyebrow: "Omakase · お任せ",
      statement: "Aquí se cena despacio. Luz de vela, sake frío y el chef sirviendo cada pieza en vuestro plato, una a una, mientras Madrid sigue ahí fuera.",
      fact1: "asientos frente a la barra", fact2: "piezas, al ritmo del chef", fact3: "sin prisa, solo vosotros dos", fact4: "por persona · maridaje de sake 85 €",
      menuCaption: "Nigiri de la barra · otoño", menuEyebrow: "Menú de temporada · Otoño", menuTitle: "El recorrido de la noche",
      menuNote: "El menú cambia con la lonja. Avísanos de cualquier alergia al reservar.",
      chefEyebrow: "El chef",
      chefP1: "Diez años detrás de una barra en Tokio le enseñaron que el sushi se decide en segundos: la temperatura del arroz, el corte, el momento de servir.",
      chefP2: "En Madrid trabaja con atún rojo de almadraba, gamba roja de Dénia y pescado de la lonja de la mañana. Habla poco y cocina mucho.",
      chefSign: "Personaje de demostración",
      counterCaption: "La barra · madera de hinoki · doce asientos",
      resEyebrow: "Reservas", resTitle: "Reservad vuestra noche",
      resIntro: "Dos pases, de martes a sábado. El de las 21:30 es el favorito de las parejas. Os confirmamos por WhatsApp.",
      resDay: "Día", resTime: "Pase", resGuests: "Personas", vizLabel: "Vuestros asientos en la barra",
      resBtn: "Solicitar reserva por WhatsApp", resFine: "Demo · el número de WhatsApp es de ejemplo.",
      visitEyebrow: "Visita", visitArea: "Chamberí · Madrid · Metro Bilbao o San Bernardo", directions: "Cómo llegar",
      tueSat: "Martes – sábado", sunMon: "Domingo y lunes", closed: "Cerrado", phone: "Teléfono",
      legal: "Aviso legal", privacy: "Privacidad", cookies: "Cookies",
      demo: "Restaurante ficticio · web de demostración creada por Farol · fotos de Unsplash",
      piecesEyebrow: "Pieza a pieza", piecesHint: "Sigue bajando →",
      p1: "El arroz · a la temperatura de la piel", p2: "El corte · un solo gesto", p3: "El pescado · de la lonja de esta mañana", p4: "El momento · se come al instante",
      pEnd: "Dieciocho piezas.<br>Dos copas de sake.<br>Una noche.",
      guest1: "persona", guestN: "personas", seating: "pase de las",
      wa: "Hola, me gustaría reservar en Tomoshibi: {date}, pase de las {time}, {n} {g}."
    },
    en: {
      introSub: "Omakase · Madrid", skip: "Enter",
      navOmakase: "Omakase", navMenu: "Menu", navChef: "Chef", navVisit: "Visit", reserve: "Book",
      heroEyebrow: "Omakase · Chamberí, Madrid",
      heroTitle: "Low light.<br>Twelve seats.<br>A night for two.",
      heroCta: "Book your evening", heroMeta: "Tuesday to Saturday · 19:00 and 21:30",
      omakaseEyebrow: "Omakase · お任せ",
      statement: "Dinner here is slow. Candlelight, cold sake, and the chef placing each piece on your plate, one at a time, while Madrid carries on outside.",
      fact1: "seats facing the counter", fact2: "pieces, at the chef's pace", fact3: "unhurried, just the two of you", fact4: "per person · sake pairing €85",
      menuCaption: "Counter nigiri · autumn", menuEyebrow: "Seasonal menu · Autumn", menuTitle: "The course of the evening",
      menuNote: "The menu follows the fish market. Tell us about any allergy when you book.",
      chefEyebrow: "The chef",
      chefP1: "Ten years behind a Tokyo counter taught him that sushi is decided in seconds: the warmth of the rice, the cut, the moment to serve.",
      chefP2: "In Madrid he works with almadraba bluefin tuna, Dénia red prawns and fish from the morning market. He talks little and cooks a lot.",
      chefSign: "Demo character",
      counterCaption: "The counter · hinoki wood · twelve seats",
      resEyebrow: "Reservations", resTitle: "Book your evening",
      resIntro: "Two seatings, Tuesday to Saturday. The 21:30 one is the couples' favourite. We confirm on WhatsApp.",
      resDay: "Day", resTime: "Seating", resGuests: "Guests", vizLabel: "Your seats at the counter",
      resBtn: "Request a booking on WhatsApp", resFine: "Demo · the WhatsApp number is a placeholder.",
      visitEyebrow: "Visit", visitArea: "Chamberí · Madrid · Metro Bilbao or San Bernardo", directions: "Directions",
      tueSat: "Tuesday – Saturday", sunMon: "Sunday and Monday", closed: "Closed", phone: "Phone",
      legal: "Legal notice", privacy: "Privacy", cookies: "Cookies",
      demo: "Fictional restaurant · demo website by Farol · photos from Unsplash",
      piecesEyebrow: "Piece by piece", piecesHint: "Keep scrolling →",
      p1: "The rice · at body temperature", p2: "The cut · a single motion", p3: "The fish · from this morning's market", p4: "The moment · eaten at once",
      pEnd: "Eighteen pieces.<br>Two glasses of sake.<br>One evening.",
      guest1: "guest", guestN: "guests", seating: "seating at",
      wa: "Hello, I'd like to book at Tomoshibi: {date}, {time} seating, {n} {g}."
    }
  };
  var COURSES = [
    { jp: "先付", name: "Sakizuke", es: "Tofu de sésamo, huevas de trucha", en: "Sesame tofu, trout roe" },
    { jp: "椀物", name: "Owan", es: "Caldo dashi con setas de otoño", en: "Dashi broth, autumn mushrooms" },
    { jp: "造り", name: "Otsukuri", es: "Atún rojo de almadraba en tres cortes", en: "Almadraba bluefin tuna, three cuts" },
    { jp: "焼物", name: "Yakimono", es: "Caballa a la brasa de binchotan", en: "Mackerel grilled over binchotan" },
    { jp: "握り", name: "Nigiri", es: "Doce piezas: gamba roja de Dénia, chutoro, akami en soja…", en: "Twelve pieces: Dénia red prawn, chutoro, soy-cured akami…" },
    { jp: "玉子", name: "Tamago", es: "Tortilla dulce japonesa, receta del chef", en: "Sweet Japanese omelette, the chef's recipe" },
    { jp: "水菓子", name: "Mizugashi", es: "Fruta de temporada y matcha", en: "Seasonal fruit and matcha" }
  ];
  var PRICE = 165, WA = "34600000000", TIMES = ["19:00", "21:30"];

  /* ---------------- language ---------------- */
  var lang = "es";
  try { var q = new URLSearchParams(location.search).get("lang"); lang = q || localStorage.getItem("tmsb-lang") || "es"; } catch (e) { }
  if (!T[lang]) lang = "es";

  function applyLang() {
    var d = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    renderCourses(); renderDays(); update();
    splitText();
    if (hasG && done) { gsap.set(".hero-title .line > span", { yPercent: 0 }); ScrollTrigger.refresh(); }
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      try { localStorage.setItem("tmsb-lang", lang); } catch (e) { }
      applyLang();
    });
  });

  /* ---------------- motion setup ---------------- */
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasG = !reduce && !!(window.gsap && window.ScrollTrigger);
  var coarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;
  var lenis = null, wordsST = null;
  function qs(s) { return document.querySelector(s); }
  function qsa(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  if (hasG) {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add("gsap");
    if (window.Lenis && !coarse) {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
      window.__lenis = lenis;
    }
  }

  /* split text for line / word animations (re-run after a language switch) */
  function splitText() {
    var h = qs(".hero-title");
    h.innerHTML = h.innerHTML.split(/<br\s*\/?>/i).map(function (p) { return '<span class="line"><span>' + p.trim() + "</span></span>"; }).join("");
    var st = qs(".big");
    st.innerHTML = st.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + "</span>"; }).join(" ");
    if (hasG) paintWords(wordsST ? wordsST.progress : 0);
  }
  function paintWords(p) {
    var ws = qsa(".big .w"), n = ws.length, x = p * (n + 4);
    ws.forEach(function (w, i) { w.style.opacity = Math.min(1, Math.max(0.13, (x - i) / 4)).toFixed(3); });
  }

  /* ---------------- intro ---------------- */
  var intro = document.getElementById("intro");
  var name = document.getElementById("introName");
  name.innerHTML = name.textContent.split("").map(function (ch, i) {
    return '<span style="animation-delay:' + (0.95 + i * 0.075).toFixed(3) + 's">' + ch + "</span>";
  }).join("");
  var done = false;
  function endIntro() {
    if (done) return; done = true;
    intro.classList.add("out");
    document.body.classList.remove("is-intro");
    document.body.classList.add("revealed");
    setTimeout(function () { intro.remove(); }, 1300);
    if (lenis) lenis.start();
    heroIn();
  }
  setTimeout(endIntro, reduce ? 600 : 3700);
  intro.addEventListener("click", endIntro);
  ["keydown", "wheel", "touchmove"].forEach(function (ev) { window.addEventListener(ev, function () { if (!done) endIntro(); }, { once: true, passive: true }); });

  function heroIn() {
    if (!hasG) return;
    gsap.to(".hero-media img", { scale: 1, duration: 2.6, ease: "power2.out" });
    gsap.to(".hero-title .line > span", { yPercent: 0, duration: 1.4, ease: "expo.out", stagger: 0.13, delay: 0.25 });
    gsap.to([".hero .eyebrow", ".hero .link-arrow", ".hero-meta"], { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.75 });
    setTimeout(function () { ScrollTrigger.refresh(); }, 1400);
  }

  /* ---------------- header, progress line, sticky CTA ---------------- */
  var hdr = document.getElementById("hdr"), hero = qs(".hero"), cta = qs(".sticky-cta"), res = document.getElementById("reservas"), prog = document.getElementById("progress");
  var lastY = 0, resInView = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { resInView = es[0].isIntersecting; onScroll(); }, { threshold: 0 }).observe(res);
  }
  function onScroll() {
    var y = window.scrollY, h = hero.offsetHeight;
    hdr.classList.toggle("solid", y > h - 90);
    hdr.classList.toggle("hide", y > h && y > lastY + 2);
    if (y < lastY - 2 || y < h) hdr.classList.remove("hide");
    lastY = y;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0).toFixed(4) + ")";
    cta.classList.toggle("show", y > h * 0.6 && !resInView);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* in-page links glide (with Lenis) or smooth-scroll */
  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href"); if (id.length < 2) return;
      var t = qs(id); if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -60, duration: 1.6 });
      else t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------------- scroll choreography ---------------- */
  function setupFX() {
    if (!hasG) return;
    var ST = ScrollTrigger;

    // hero: start states (revealed by heroIn), parallax and fade on scroll
    gsap.set(".hero-media img", { scale: 1.14 });
    gsap.set(".hero-title .line > span", { yPercent: 115 });
    gsap.set([".hero .eyebrow", ".hero .link-arrow", ".hero-meta"], { opacity: 0, y: 16 });
    gsap.to(".hero-media", { yPercent: 16, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-copy", { y: -90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 25%", scrub: true } });

    // statement: words ink in as you read down
    wordsST = ST.create({ trigger: ".statement", start: "top 78%", end: "bottom 40%", scrub: true, onUpdate: function (s) { paintWords(s.progress); } });
    paintWords(0);
    gsap.from(".tategaki", { opacity: 0, y: -30, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".statement", start: "top 80%" } });

    // facts: rise in and count up
    gsap.from(".fact", { opacity: 0, y: 40, duration: 1.1, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: ".facts", start: "top 85%" } });
    qsa(".fact-num").forEach(function (el) {
      var m = el.textContent.match(/^(\d+)(.*)$/); if (!m) return;
      var o = { v: 0 }, target = +m[1], suffix = m[2];
      el.textContent = "0" + suffix;
      gsap.to(o, { v: target, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: ".facts", start: "top 85%" }, onUpdate: function () { el.textContent = Math.round(o.v) + suffix; } });
    });

    // pieces: pinned sideways gallery on larger screens
    var mm = gsap.matchMedia();
    mm.add("(min-width: 761px)", function () {
      var track = qs("#piecesTrack");
      function dist() { return Math.max(0, track.scrollWidth - window.innerWidth); }
      qsa(".piece img").forEach(function (img) { gsap.set(img, { scale: 1.12 }); });
      var tween = gsap.to(track, { x: function () { return -dist(); }, ease: "none",
        scrollTrigger: { trigger: ".pieces", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
      qsa(".piece img").forEach(function (img) {
        gsap.fromTo(img, { xPercent: -7 }, { xPercent: 7, ease: "none", scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: "left right", end: "right left", scrub: true } });
      });
      qsa(".piece figcaption").forEach(function (c) {
        gsap.from(c, { opacity: 0, y: 30, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: c.parentElement, containerAnimation: tween, start: "left 75%", toggleActions: "play none none reverse" } });
      });
      gsap.from(".piece-big", { opacity: 0, x: 80, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".piece-end", containerAnimation: tween, start: "left 85%" } });
    });
    mm.add("(max-width: 760px)", function () {
      gsap.from(".piece", { opacity: 0, x: 60, duration: 1, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ".pieces", start: "top 75%" } });
    });

    // curtain reveals for framed photos
    qsa(".curtain").forEach(function (fig) {
      var img = fig.querySelector("img");
      var tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: "top 82%" } });
      tl.fromTo(fig, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" })
        .fromTo(img, { scale: 1.3 }, { scale: 1, duration: 2.2, ease: "expo.out" }, 0.15);
    });

    // section titles, labels and text
    qsa(".h2").forEach(function (h) {
      gsap.from(h, { opacity: 0, y: 34, letterSpacing: "0.08em", duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: h, start: "top 86%" } });
    });
    qsa(".eyebrow, .chef-copy p, .reserve-head .muted, .note, .light-muted").forEach(function (el) {
      if (el.closest(".hero")) return;
      gsap.from(el, { opacity: 0, y: 22, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
    });

    // menu courses slide in one by one
    gsap.from(".course", { opacity: 0, x: 50, duration: 1, ease: "power3.out", stagger: 0.09, scrollTrigger: { trigger: "#courses", start: "top 80%" }, clearProps: "opacity,transform" });

    // the 灯 stamp presses onto the page
    gsap.from(".stamp", { scale: 2.4, opacity: 0, rotate: -28, duration: 0.55, ease: "back.out(2.6)", scrollTrigger: { trigger: ".hanko-line", start: "top 88%" } });

    // counter photo: slow zoom-out while it passes
    gsap.fromTo(".counter-band img", { scale: 1.25, yPercent: -6 }, { scale: 1, yPercent: 6, ease: "none", scrollTrigger: { trigger: ".counter-band", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".counter-caption", { opacity: 0, y: 20, duration: 1.2, scrollTrigger: { trigger: ".counter-band", start: "center 75%" } });

    // booking panel and visit
    gsap.from(".booker > *", { opacity: 0, y: 26, duration: 1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".booker", start: "top 82%" } });
    gsap.from(".hours div", { opacity: 0, x: 30, duration: 1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".hours", start: "top 88%" } });
    gsap.fromTo("#bigword", { xPercent: 0 }, { xPercent: -33.333, ease: "none", scrollTrigger: { trigger: ".visit", start: "top bottom", end: "bottom top", scrub: true } });

    window.addEventListener("load", function () { ST.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  /* ---------------- menu ---------------- */
  function renderCourses() {
    var ol = document.getElementById("courses");
    ol.innerHTML = COURSES.map(function (c) {
      return '<li class="course"><span class="course-jp" aria-hidden="true">' + c.jp + '</span><span class="course-name">' + c.name +
        '</span><span class="course-desc">' + c[lang] + "</span></li>";
    }).join("");
  }

  /* ---------------- booking ---------------- */
  var state = { day: null, time: TIMES[0], guests: 2 };
  var days = [];
  (function buildDays() {
    var d = new Date(); d.setHours(12, 0, 0, 0);
    while (days.length < 6) {
      d.setDate(d.getDate() + 1);
      var wd = d.getDay();
      if (wd >= 2 && wd <= 6) days.push(new Date(d));
    }
    state.day = 0;
  })();
  function loc() { return lang === "es" ? "es-ES" : "en-GB"; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function renderDays() {
    var box = document.getElementById("days");
    box.innerHTML = days.map(function (d, i) {
      var wd = d.toLocaleDateString(loc(), { weekday: "short" }).replace(".", "");
      var dm = d.toLocaleDateString(loc(), { day: "numeric", month: "short" }).replace(".", "");
      return '<button type="button" class="chip" data-i="' + i + '" aria-pressed="' + (i === state.day) + '"><span class="d">' + wd + "</span>" + dm + "</button>";
    }).join("");
    box.querySelectorAll(".chip").forEach(function (b) {
      b.addEventListener("click", function () { state.day = +b.dataset.i; renderDays(); update(); });
    });
  }
  document.querySelectorAll("#times .chip").forEach(function (b) {
    b.addEventListener("click", function () {
      state.time = b.dataset.time;
      document.querySelectorAll("#times .chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      update();
    });
  });
  var minus = document.getElementById("minus"), plus = document.getElementById("plus"), out = document.getElementById("guests");
  minus.addEventListener("click", function () { if (state.guests > 1) { state.guests--; update(); } });
  plus.addEventListener("click", function () { if (state.guests < 6) { state.guests++; update(); } });

  var seatsBox = document.getElementById("seats");
  seatsBox.innerHTML = new Array(12).fill(0).map(function () { return '<span class="seat"></span>'; }).join("");
  var seatOrder = [5, 6, 4, 7, 3, 8, 2, 9, 1, 10, 0, 11];

  function update() {
    if (state.day == null) return;
    var d = T[lang], g = state.guests;
    out.textContent = g;
    minus.disabled = g <= 1; plus.disabled = g >= 6;
    var seats = seatsBox.children;
    for (var i = 0; i < 12; i++) seats[i].classList.remove("on");
    for (var j = 0; j < g; j++) (function (k, delay) { setTimeout(function () { seats[k].classList.add("on"); }, delay); })(seatOrder[j], j * 70);
    var dateLong = cap(days[state.day].toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long" }));
    var total = (PRICE * g).toLocaleString(loc()) ;
    var priceTxt = lang === "es" ? total + "\u00a0€" : "€" + total;
    document.getElementById("summary").textContent = dateLong + " · " + state.time + " · " + g + "\u00a0" + (g === 1 ? d.guest1 : d.guestN) + " · " + priceTxt;
    var msg = d.wa.replace("{date}", lang === "es" ? dateLong.toLowerCase() : dateLong).replace("{time}", state.time).replace("{n}", g).replace("{g}", g === 1 ? d.guest1 : d.guestN);
    document.getElementById("waBtn").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  }

  applyLang();
  setupFX();
})();
