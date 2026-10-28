(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------------- content (edit here) ---------------- */
  var T = {
    es: {
      introSub: "Omakase · Madrid", skip: "Entrar",
      navOmakase: "Omakase", navMenu: "Menú", navChef: "Chef", navVisit: "Visita", reserve: "Reservar",
      heroEyebrow: "Omakase · Chamberí, Madrid",
      heroTitle: "Doce asientos.<br>Un chef.<br>Una barra de hinoki.",
      heroCta: "Reservar una noche", heroMeta: "Martes a sábado · 19:00 y 21:30",
      omakaseEyebrow: "Omakase · お任せ",
      statement: "Cada noche, el chef decide. Pescado elegido esa mañana, arroz a la temperatura de la piel y nada más de lo necesario.",
      fact1: "asientos frente a la barra", fact2: "piezas, al ritmo del chef", fact3: "sin prisa, de principio a fin", fact4: "por persona · maridaje de sake 85 €",
      menuCaption: "Nigiri de la barra · otoño", menuEyebrow: "Menú de temporada · Otoño", menuTitle: "El recorrido de la noche",
      menuNote: "El menú cambia con la lonja. Avísanos de cualquier alergia al reservar.",
      chefEyebrow: "El chef",
      chefP1: "Diez años detrás de una barra en Tokio le enseñaron que el sushi se decide en segundos: la temperatura del arroz, el corte, el momento de servir.",
      chefP2: "En Madrid trabaja con atún rojo de almadraba, gamba roja de Dénia y pescado de la lonja de la mañana. Habla poco y cocina mucho.",
      chefSign: "Personaje de demostración",
      counterCaption: "La barra · madera de hinoki · doce asientos",
      resEyebrow: "Reservas", resTitle: "Elige tu noche",
      resIntro: "Dos pases, de martes a sábado. Te confirmamos la reserva por WhatsApp.",
      resDay: "Día", resTime: "Pase", resGuests: "Personas", vizLabel: "Vuestros asientos en la barra",
      resBtn: "Solicitar reserva por WhatsApp", resFine: "Demo · el número de WhatsApp es de ejemplo.",
      visitEyebrow: "Visita", visitArea: "Chamberí · Madrid · Metro Bilbao o San Bernardo", directions: "Cómo llegar",
      tueSat: "Martes – sábado", sunMon: "Domingo y lunes", closed: "Cerrado", phone: "Teléfono",
      legal: "Aviso legal", privacy: "Privacidad", cookies: "Cookies",
      demo: "Restaurante ficticio · web de demostración creada por Farol · fotos de Unsplash",
      guest1: "persona", guestN: "personas", seating: "pase de las",
      wa: "Hola, me gustaría reservar en Tomoshibi: {date}, pase de las {time}, {n} {g}."
    },
    en: {
      introSub: "Omakase · Madrid", skip: "Enter",
      navOmakase: "Omakase", navMenu: "Menu", navChef: "Chef", navVisit: "Visit", reserve: "Book",
      heroEyebrow: "Omakase · Chamberí, Madrid",
      heroTitle: "Twelve seats.<br>One chef.<br>A hinoki counter.",
      heroCta: "Book an evening", heroMeta: "Tuesday to Saturday · 19:00 and 21:30",
      omakaseEyebrow: "Omakase · お任せ",
      statement: "Every night, the chef decides. Fish chosen that morning, rice at body temperature, and nothing more than it needs.",
      fact1: "seats facing the counter", fact2: "pieces, at the chef's pace", fact3: "unhurried, start to finish", fact4: "per person · sake pairing €85",
      menuCaption: "Counter nigiri · autumn", menuEyebrow: "Seasonal menu · Autumn", menuTitle: "The course of the evening",
      menuNote: "The menu follows the fish market. Tell us about any allergy when you book.",
      chefEyebrow: "The chef",
      chefP1: "Ten years behind a Tokyo counter taught him that sushi is decided in seconds: the warmth of the rice, the cut, the moment to serve.",
      chefP2: "In Madrid he works with almadraba bluefin tuna, Dénia red prawns and fish from the morning market. He talks little and cooks a lot.",
      chefSign: "Demo character",
      counterCaption: "The counter · hinoki wood · twelve seats",
      resEyebrow: "Reservations", resTitle: "Choose your evening",
      resIntro: "Two seatings, Tuesday to Saturday. We confirm your booking on WhatsApp.",
      resDay: "Day", resTime: "Seating", resGuests: "Guests", vizLabel: "Your seats at the counter",
      resBtn: "Request a booking on WhatsApp", resFine: "Demo · the WhatsApp number is a placeholder.",
      visitEyebrow: "Visit", visitArea: "Chamberí · Madrid · Metro Bilbao or San Bernardo", directions: "Directions",
      tueSat: "Tuesday – Saturday", sunMon: "Sunday and Monday", closed: "Closed", phone: "Phone",
      legal: "Legal notice", privacy: "Privacy", cookies: "Cookies",
      demo: "Fictional restaurant · demo website by Farol · photos from Unsplash",
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
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      try { localStorage.setItem("tmsb-lang", lang); } catch (e) { }
      applyLang();
    });
  });

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
  }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  setTimeout(endIntro, reduce ? 600 : 3700);
  intro.addEventListener("click", endIntro);
  ["keydown", "wheel", "touchmove"].forEach(function (ev) { window.addEventListener(ev, function () { if (!done) endIntro(); }, { once: true, passive: true }); });

  /* ---------------- header + sticky CTA ---------------- */
  var hdr = document.getElementById("hdr"), hero = document.querySelector(".hero"), cta = document.querySelector(".sticky-cta"), res = document.getElementById("reservas");
  function onScroll() {
    var y = window.scrollY, h = hero.offsetHeight;
    hdr.classList.toggle("solid", y > h - 90);
    var r = res.getBoundingClientRect();
    var resVisible = r.top < window.innerHeight && r.bottom > 0;
    cta.classList.toggle("show", y > h * 0.6 && !resVisible);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- reveal on scroll ---------------- */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add("in"); }); }

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
})();
