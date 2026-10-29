(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* =========================================================
     CONTENT — edit texts, menu, prices and WhatsApp number here
     ========================================================= */
  var T = {
    es: {
      introSub: "Asador · Madrid", skip: "Entrar",
      navCamara: "La cámara", navCarta: "Carta", navPunto: "El punto", navFuego: "El fuego", navBodega: "Bodega", navVisita: "Visita",
      reserve: "Reservar", menu: "Menú",
      heroEyebrow: "Asador · Barrio de Salamanca, Madrid",
      heroTitle: "Fuego de encina.<br>Carne con <em>tiempo</em>.",
      heroCta: "Reservar mesa", heroCta2: "Ver la carta", heroMeta: "Martes a domingo · comidas y cenas", scroll: "Desliza",
      houseEyebrow: "La casa",
      statement: "Colgamos la vaca vieja cuarenta y cinco días en nuestra cámara, encendemos la encina a mediodía y cortamos cada pieza en la mesa, delante de ti. Nada más.",
      fact1: "días de maduración en cámara propia", fact2: "brasa de encina extremeña", fact3: "años de vida de cada vaca gallega", fact4: "vinos en la bodega",
      camEyebrow: "La cámara", camTitle: "Cuarenta y cinco días<br>de silencio.", camUnit: "días<br>en cámara",
      s1k: "Día 1", s1t: "Entra la pieza", s1p: "Lomo entero de vaca gallega de más de ocho años, con hueso y su grasa amarilla de pasto. Lo colgamos tal cual llega del ganadero.",
      s2k: "Día 21", s2t: "La fibra se relaja", s2p: "A 1,5 °C y con el aire siempre en movimiento, las enzimas de la propia carne rompen el tejido. Empieza a ganar ternura.",
      s3k: "Día 45", s3t: "Nuestro punto", s3p: "Ha perdido casi una cuarta parte de su peso en agua. El sabor se concentra en notas de mantequilla y nuez tostada. Es el chuletón de la casa.",
      s4k: "Día 60", s4t: "Para quien lo pide", s4p: "Corteza oscura y un aroma que recuerda al queso curado. Salen pocas piezas al mes: pídela al reservar.",
      rTemp: "Temperatura", rHum: "Humedad", rLoss: "Merma",
      cartaEyebrow: "La carta", cartaTitle: "Al peso,<br>cortado en sala.",
      cartaIntro: "Te enseñamos la pieza antes de que toque la brasa. Todas las carnes llegan con sal en escamas y pimientos asados a la leña.",
      tabCuts: "Carnes", tabStart: "Para empezar", tabSides: "Guarniciones", tabSweet: "Postres",
      cartaNote: "Precios con IVA incluido. Consulta los alérgenos con el equipo de sala.", onRequest: "Bajo petición",
      donCore: "Temperatura en el centro", donEyebrow: "El punto", donTitle: "¿Cómo lo quieres?",
      donIntro: "Desliza para ver cómo cambia el corte. Nuestro asador lo saca de la brasa unos grados antes; el reposo hace el resto.",
      donBadge: "Recomendado para el chuletón", donAria: "Punto de la carne",
      fireEyebrow: "El fuego", fireLine: "Encina de Extremadura, encendida cada día desde las doce.",
      chefEyebrow: "El asador",
      chefP1: "Veinte años frente a la brasa, de los asadores de Getaria a las parrillas de Buenos Aires. Trabaja sin termómetro: mira el color de la grasa y escucha la carne.",
      chefP2: "Cada mañana elige en la cámara las piezas del día y decide cuánta brasa necesita cada una.",
      chefSign: "Personaje de demostración",
      cellarEyebrow: "La bodega", cellarTitle: "1.200 vinos bajo<br>la calle Lagasca.",
      cellarP: "Grandes tintos de Ribera del Duero y Rioja, garnachas viejas del Priorat y una selección corta de Borgoña. Nuestra sumiller propone una copa para cada corte.",
      cellarNote: "Más de 40 vinos por copa.",
      salaCaption: "La sala · 64 cubiertos · luz baja y manteles de lino",
      resEyebrow: "Reservas", resTitle: "Reserva tu mesa",
      resIntro: "Elige día, hora y personas. Te confirmamos por WhatsApp en menos de una hora.",
      pol1k: "Duración de la mesa", pol1v: "2 h 30 min", pol2k: "Cancelación", pol2v: "Gratis hasta 24 h antes", pol3k: "Código de vestimenta", pol3v: "Elegante informal",
      privK: "El reservado", privV: "Hasta 14 personas, con parrilla propia a la vista y un menú de cortes para compartir.",
      resDay: "Día", resService: "Servicio", lunch: "Comida", dinner: "Cena", resTime: "Hora", resGuests: "Personas", resOcc: "Ocasión · opcional",
      chuK: "Reservar un chuletón de 60 días", chuLeft: "Quedan {n} piezas esta semana", sumK: "Tu reserva",
      resBtn: "Reservar por WhatsApp", resFine: "Demo · el número de WhatsApp es de ejemplo.",
      full: "Completo", sunNote: "El domingo solo abrimos a mediodía.", bigGroup: "Para más de 8 personas te ofrecemos el reservado.",
      guest1: "persona", guestN: "personas", less: "Una persona menos", more: "Una persona más",
      occ: { bday: "Cumpleaños", anniv: "Aniversario", biz: "Negocios" },
      occMsg: { bday: " Celebramos un cumpleaños.", anniv: " Celebramos un aniversario.", biz: " Es una reunión de negocios." },
      chuMsg: " Querríamos apartar un chuletón de 60 días.", chuSum: "Chuletón de 60 días apartado",
      wa: "Hola, me gustaría reservar mesa en Ascua: {date}, a las {time}, {n} {g}.{extra}",
      visitEyebrow: "Visita", visitArea: "Barrio de Salamanca · Madrid · Metro Serrano o Velázquez", directions: "Cómo llegar",
      tueSat: "Martes – sábado", sun: "Domingo", mon: "Lunes", closed: "Cerrado", phone: "Teléfono",
      legal: "Aviso legal", privacy: "Privacidad", cookies: "Cookies",
      demo: "Restaurante ficticio · web de demostración creada por Farol · fotos de Unsplash"
    },
    en: {
      introSub: "Steakhouse · Madrid", skip: "Enter",
      navCamara: "Ageing room", navCarta: "Menu", navPunto: "Doneness", navFuego: "The fire", navBodega: "Cellar", navVisita: "Visit",
      reserve: "Book", menu: "Menu",
      heroEyebrow: "Steakhouse · Salamanca, Madrid",
      heroTitle: "Holm-oak fire.<br>Beef given <em>time</em>.",
      heroCta: "Book a table", heroCta2: "See the menu", heroMeta: "Tuesday to Sunday · lunch and dinner", scroll: "Scroll",
      houseEyebrow: "The house",
      statement: "We hang aged Galician beef for forty-five days in our own chamber, light the holm oak at noon and carve every cut at your table. Nothing more.",
      fact1: "days of dry-ageing in our own chamber", fact2: "holm-oak embers from Extremadura", fact3: "years old, every Galician cow", fact4: "wines in the cellar",
      camEyebrow: "The ageing room", camTitle: "Forty-five days<br>of silence.", camUnit: "days in<br>the chamber",
      s1k: "Day 1", s1t: "The cut arrives", s1p: "A whole bone-in loin from a Galician cow over eight years old, with the yellow fat of a life on pasture. We hang it exactly as it arrives from the farmer.",
      s2k: "Day 21", s2t: "The fibres relax", s2p: "At 1.5 °C with the air always moving, the meat's own enzymes break down the tissue. It starts to turn tender.",
      s3k: "Day 45", s3t: "Our moment", s3p: "It has lost almost a quarter of its weight in water. The flavour concentrates into brown butter and toasted nuts. This is the house rib steak.",
      s4k: "Day 60", s4t: "For those who ask", s4p: "A dark crust and an aroma close to aged cheese. Only a few cuts a month: ask for one when you book.",
      rTemp: "Temperature", rHum: "Humidity", rLoss: "Weight loss",
      cartaEyebrow: "The menu", cartaTitle: "By weight,<br>carved at the table.",
      cartaIntro: "We show you the cut before it touches the fire. Every steak comes with flaky salt and wood-roasted peppers.",
      tabCuts: "Steaks", tabStart: "To start", tabSides: "Sides", tabSweet: "Desserts",
      cartaNote: "Prices include VAT. Ask our team about allergens.", onRequest: "On request",
      donCore: "Core temperature", donEyebrow: "Doneness", donTitle: "How would you like it?",
      donIntro: "Slide to see how the cut changes. Our grill master takes it off the fire a few degrees early; resting does the rest.",
      donBadge: "Our pick for the rib steak", donAria: "Doneness",
      fireEyebrow: "The fire", fireLine: "Holm oak from Extremadura, burning every day from noon.",
      chefEyebrow: "The grill master",
      chefP1: "Twenty years at the grill, from the asadores of Getaria to the parrillas of Buenos Aires. He works without a thermometer: he watches the colour of the fat and listens to the meat.",
      chefP2: "Every morning he chooses the day's cuts in the chamber and decides how much ember each one needs.",
      chefSign: "Demo character",
      cellarEyebrow: "The cellar", cellarTitle: "1,200 wines beneath<br>Calle Lagasca.",
      cellarP: "Great reds from Ribera del Duero and Rioja, old-vine Garnacha from Priorat and a short list of Burgundy. Our sommelier suggests a glass for every cut.",
      cellarNote: "Over 40 wines by the glass.",
      salaCaption: "The dining room · 64 covers · low light and linen",
      resEyebrow: "Reservations", resTitle: "Book your table",
      resIntro: "Pick a day, time and party size. We'll confirm on WhatsApp within the hour.",
      pol1k: "Table time", pol1v: "2 h 30 min", pol2k: "Cancellation", pol2v: "Free up to 24 h before", pol3k: "Dress code", pol3v: "Smart casual",
      privK: "The private room", privV: "Up to 14 guests, with a view of its own grill and a sharing menu of cuts.",
      resDay: "Day", resService: "Service", lunch: "Lunch", dinner: "Dinner", resTime: "Time", resGuests: "Guests", resOcc: "Occasion · optional",
      chuK: "Reserve a 60-day rib steak", chuLeft: "{n} left this week", sumK: "Your booking",
      resBtn: "Book via WhatsApp", resFine: "Demo · the WhatsApp number is a placeholder.",
      full: "Full", sunNote: "On Sundays we only open for lunch.", bigGroup: "For more than 8 guests we'll offer you the private room.",
      guest1: "guest", guestN: "guests", less: "One guest fewer", more: "One more guest",
      occ: { bday: "Birthday", anniv: "Anniversary", biz: "Business" },
      occMsg: { bday: " We're celebrating a birthday.", anniv: " We're celebrating an anniversary.", biz: " It's a business meal." },
      chuMsg: " We'd like to set aside a 60-day rib steak.", chuSum: "60-day rib steak set aside",
      wa: "Hello, I'd like to book a table at Ascua: {date} at {time}, {n} {g}.{extra}",
      visitEyebrow: "Visit", visitArea: "Salamanca district · Madrid · Metro Serrano or Velázquez", directions: "Directions",
      tueSat: "Tuesday – Saturday", sun: "Sunday", mon: "Monday", closed: "Closed", phone: "Phone",
      legal: "Legal notice", privacy: "Privacy", cookies: "Cookies",
      demo: "Fictional restaurant · demo website by Farol · photos from Unsplash"
    }
  };

  // Steaks: Unsplash photo id, price (per kg when kg:true), texts per language
  var CUTS = [
    { img: "photo-1788178941299-b206d3f4c4c6", price: 98, kg: true,
      es: { name: "Chuletón de vaca vieja", meta: "Gallega · 45 días en cámara", w: "aprox. 1,1 kg" },
      en: { name: "Aged Galician rib steak", meta: "Galicia · 45 days in the chamber", w: "approx. 1.1 kg" } },
    { img: "photo-1690983330548-e34b52aa8cb2", price: 128, kg: true, tag: true,
      es: { name: "Chuletón de 60 días", meta: "Gallega · pocas piezas al mes", w: "aprox. 1,2 kg" },
      en: { name: "60-day rib steak", meta: "Galicia · a few cuts a month", w: "approx. 1.2 kg" } },
    { img: "photo-1633862033814-180f66b0bf76", price: 86, kg: true,
      es: { name: "Tomahawk de Black Angus", meta: "Nebraska · 28 días · para dos", w: "aprox. 1,4 kg" },
      en: { name: "Black Angus tomahawk", meta: "Nebraska · 28 days · for two", w: "approx. 1.4 kg" } },
    { img: "photo-1690983330536-3b0089d07cf9", price: 44,
      es: { name: "Lomo alto de rubia gallega", meta: "Galicia · 30 días", w: "450 g" },
      en: { name: "Rubia Gallega ribeye", meta: "Galicia · 30 days", w: "450 g" } },
    { img: "photo-1628497622880-896ed64d6034", price: 38,
      es: { name: "Solomillo de ternera", meta: "Ávila · IGP", w: "300 g" },
      en: { name: "Beef fillet", meta: "Ávila · PGI", w: "300 g" } },
    { img: "photo-1630828888865-e575232113df", price: 31,
      es: { name: "Picanha", meta: "Black Angus · Uruguay", w: "350 g" },
      en: { name: "Picanha", meta: "Black Angus · Uruguay", w: "350 g" } },
    { img: "photo-1764994880917-b46601e402ab", price: 64,
      es: { name: "Wagyu A5", meta: "Kagoshima · infiltración 11 de 12", w: "100 g" },
      en: { name: "A5 Wagyu", meta: "Kagoshima · marbling score 11 of 12", w: "100 g" } }
  ];

  var MENU = {
    dStart: [
      { p: 14, es: { n: "Croquetas de cecina de León", s: "Cuatro unidades" }, en: { n: "Cured beef croquetas", s: "Four pieces · cecina from León" } },
      { p: 24, es: { n: "Steak tartar cortado a cuchillo", s: "Yema curada y pan tostado" }, en: { n: "Hand-cut steak tartare", s: "Cured yolk and toast" } },
      { p: 22, es: { n: "Carpaccio de vaca vieja", s: "Parmesano y rúcula" }, en: { n: "Aged beef carpaccio", s: "Parmesan and rocket" } },
      { p: 21, es: { n: "Mollejas de ternera a la brasa", s: "Limón y sal de humo" }, en: { n: "Grilled veal sweetbreads", s: "Lemon and smoked salt" } },
      { p: 9, es: { n: "Pimientos de Padrón" }, en: { n: "Padrón peppers" } },
      { p: 6, es: { n: "Ostra Gillardeau n.º 2", s: "Por unidad" }, en: { n: "Gillardeau oyster no. 2", s: "Each" } }
    ],
    dSides: [
      { p: 7, es: { n: "Patatas fritas en sebo de vaca" }, en: { n: "Chips fried in beef dripping" } },
      { p: 8, es: { n: "Pimientos rojos asados a la leña" }, en: { n: "Wood-roasted red peppers" } },
      { p: 8, es: { n: "Puré de patata", s: "Mantequilla tostada" }, en: { n: "Potato purée", s: "Brown butter" } },
      { p: 11, es: { n: "Espárragos verdes a la brasa" }, en: { n: "Ember-grilled green asparagus" } },
      { p: 12, es: { n: "Tomate de temporada", s: "Cebolleta y aceite de arbequina" }, en: { n: "Seasonal tomatoes", s: "Spring onion and Arbequina oil" } },
      { p: 9, es: { n: "Ensalada de hojas", s: "Vinagreta de Jerez" }, en: { n: "Leaf salad", s: "Sherry vinaigrette" } }
    ],
    dSweet: [
      { p: 10, es: { n: "Tarta de queso al horno de leña" }, en: { n: "Wood-oven cheesecake" } },
      { p: 11, es: { n: "Torrija caramelizada", s: "Helado de vainilla" }, en: { n: "Caramelised torrija", s: "Vanilla ice cream" } },
      { p: 10, es: { n: "Chocolate 70 %", s: "Aceite de oliva y sal" }, en: { n: "70% chocolate", s: "Olive oil and salt" } },
      { p: 9, es: { n: "Piña a la brasa", s: "Ron añejo y lima" }, en: { n: "Ember-grilled pineapple", s: "Aged rum and lime" } }
    ]
  };

  var PAIRS = [
    { es: ["Chuletón de 45 días", "Ribera del Duero · tempranillo de viñas viejas"], en: ["45-day rib steak", "Ribera del Duero · old-vine Tempranillo"] },
    { es: ["Wagyu A5", "Champagne · blanc de noirs"], en: ["A5 Wagyu", "Champagne · Blanc de Noirs"] },
    { es: ["Solomillo", "Borgoña · pinot noir"], en: ["Beef fillet", "Burgundy · Pinot Noir"] },
    { es: ["Picanha", "Priorat · garnacha y cariñena"], en: ["Picanha", "Priorat · Garnacha and Cariñena"] }
  ];

  // Doneness: core temperature, cut colours and band widths (fractions of the slice height)
  var DON = [
    { t: 46, core: "#7c1a2b", pink: "#9e2638", band: .03, pinkBand: .07,
      es: { n: "Azul", d: "Sellado por fuera y casi frío por dentro. Para puristas." }, en: { n: "Blue", d: "Seared outside, almost cold inside. For purists." } },
    { t: 52, core: "#a52436", pink: "#c2454f", band: .075, pinkBand: .12,
      es: { n: "Poco hecho", d: "Centro rojo y tibio; la grasa empieza a fundirse. Así sale el chuletón de la casa." }, en: { n: "Rare", d: "A warm red centre with the fat just starting to melt. How the house rib steak leaves the grill." } },
    { t: 57, core: "#c9535c", pink: "#cf7673", band: .14, pinkBand: .19,
      es: { n: "Al punto", d: "Rosado y jugoso de lado a lado. El favorito para el solomillo." }, en: { n: "Medium rare", d: "Pink and juicy from edge to edge. Our favourite for the fillet." } },
    { t: 63, core: "#b98478", pink: "#a97f72", band: .26, pinkBand: .17,
      es: { n: "Hecho", d: "Apenas un hilo rosado en el centro. Más firme y menos jugoso." }, en: { n: "Medium well", d: "Just a thread of pink in the centre. Firmer and less juicy." } },
    { t: 70, core: "#8c6d5d", pink: "#8a6b5d", band: .4, pinkBand: .05,
      es: { n: "Muy hecho", d: "Cocinado por completo. Te lo preparamos, aunque te sugeriremos otro corte." }, en: { n: "Well done", d: "Cooked all the way through. We'll make it, though we may suggest another cut." } }
  ];

  var OCC = ["bday", "anniv", "biz"];
  var WA = "34600000000", PIECES_LEFT = 3, MAX_GUESTS = 12;
  var SLOTS = { lunch: ["13:30", "14:00", "14:30", "15:00"], dinner: ["20:30", "21:00", "21:30", "22:00", "22:30"] };
  function IMG(id, w, h) { return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + w + (h ? "&h=" + h : "") + "&q=78"; }

  /* =========================================================
     helpers
     ========================================================= */
  function $(id) { return document.getElementById(id); }
  function qs(s, r) { return (r || document).querySelector(s); }
  function qsa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function hexRgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mixHex(a, b, t) {
    var x = hexRgb(a), y = hexRgb(b);
    return "rgb(" + Math.round(lerp(x[0], y[0], t)) + "," + Math.round(lerp(x[1], y[1], t)) + "," + Math.round(lerp(x[2], y[2], t)) + ")";
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function loc() { return lang === "es" ? "es-ES" : "en-GB"; }
  function money(n, kg) { return (lang === "es" ? n + " €" : "€" + n) + (kg ? "/kg" : ""); }
  function group(n) { var s = String(n); return n >= 1000 ? s.slice(0, -3) + (lang === "es" ? "." : ",") + s.slice(-3) : s; }
  function rng(a) { return function () { a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasG = !reduce && !!(window.gsap && window.ScrollTrigger);
  var coarse = window.matchMedia && matchMedia("(pointer: coarse)").matches;
  var finePointer = window.matchMedia ? matchMedia("(hover: hover) and (pointer: fine) and (min-width: 761px)") : { matches: false };

  /* =========================================================
     language
     ========================================================= */
  var lang = "es";
  try { var q = new URLSearchParams(location.search).get("lang"); lang = q || localStorage.getItem("ascua-lang") || "es"; } catch (e) { }
  if (!T[lang]) lang = "es";

  function applyLang() {
    var d = T[lang];
    document.documentElement.lang = lang;
    qsa("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (typeof d[k] === "string") el.innerHTML = d[k];
    });
    qsa(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    $("donRange").setAttribute("aria-label", d.donAria);
    renderCuts(); renderDishes(); renderPairs(); renderStops(); renderDays(); renderTimes(); renderOcc();
    donIdx = -1; paintDon(donVal);
    camPaint(camDayVal, true);
    qsa("[data-count]").forEach(function (el) { if (el._done || !hasG) el.textContent = group(+el.dataset.count); });
    splitText();
    update();
    moveInd();
    if (hasG && introDone) { gsap.set(".hero-title .line > span", { yPercent: 0 }); }
    if (hasG) ScrollTrigger.refresh();
  }
  qsa(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem("ascua-lang", lang); } catch (e) { }
      applyLang();
    });
  });

  // hero lines and statement words get wrapped for animation (re-run after a language switch)
  var wordsST = null;
  function splitText() {
    var h = qs(".hero-title");
    h.innerHTML = h.innerHTML.split(/<br\s*\/?>/i).map(function (p) { return '<span class="line"><span>' + p.trim() + "</span></span>"; }).join("");
    var big = $("big");
    big.innerHTML = big.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + "</span>"; }).join(" ");
    if (hasG) paintWords(wordsST ? wordsST.progress : 0);
  }
  function paintWords(p) {
    var ws = qsa("#big .w"), n = ws.length, x = p * (n + 6);
    ws.forEach(function (w, i) {
      var k = clamp((x - i) / 5, 0, 1);
      w.style.opacity = (0.16 + 0.84 * k).toFixed(3);
      w.classList.toggle("hot", x - i > 0 && x - i < 4 && p < 0.995);
    });
  }

  /* =========================================================
     embers (canvas) — intro and hero
     ========================================================= */
  function Embers(canvas, o) {
    this.c = canvas; this.ctx = canvas.getContext("2d"); this.o = o || {}; this.p = []; this.on = false; this.raf = 0; this.last = 0;
    var self = this;
    this.resize();
    window.addEventListener("resize", function () { self.resize(); });
  }
  Embers.prototype.resize = function () {
    var r = this.c.getBoundingClientRect();
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.w = Math.max(1, r.width); this.h = Math.max(1, r.height);
    this.c.width = Math.round(this.w * this.dpr); this.c.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    var n = clamp(Math.round((this.o.density || 0.00008) * this.w * this.h), 18, this.o.max || 110);
    while (this.p.length < n) this.p.push(this.spawn(true));
    this.p.length = n;
  };
  Embers.prototype.spawn = function (init) {
    var z = Math.random();
    return {
      x: Math.random() * this.w, y: init ? this.h * (0.25 + Math.random() * 0.8) : this.h + Math.random() * 40,
      z: z, r: 0.5 + z * 1.8, vy: -(16 + z * 50 + Math.random() * 22) * (this.o.speed || 1),
      sway: 6 + Math.random() * 24, ph: Math.random() * 6.283, fq: 0.4 + Math.random() * 1.1,
      life: init ? Math.random() * 4 : 0, max: 4 + Math.random() * 7, fl: 4 + Math.random() * 10
    };
  };
  Embers.prototype.tick = function (now) {
    var dt = Math.min(0.05, (now - (this.last || now)) / 1000); this.last = now;
    var ctx = this.ctx, h = this.h;
    ctx.clearRect(0, 0, this.w, h);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < this.p.length; i++) {
      var p = this.p[i];
      p.life += dt; p.y += p.vy * dt;
      var k = p.life / p.max;
      if (k >= 1 || p.y < -20) { this.p[i] = this.spawn(false); continue; }
      var x = p.x + Math.sin(p.ph + p.life * p.fq) * p.sway;
      var a = Math.sin(Math.PI * k) * (0.6 + 0.4 * Math.sin(p.life * p.fl + p.ph)) * clamp(p.y / (h * 0.45), 0, 1) * (this.o.alpha || 1);
      if (a <= 0.01) continue;
      ctx.fillStyle = "rgba(255," + (80 + Math.round(60 * p.z)) + ",24," + (a * 0.2).toFixed(3) + ")";
      ctx.beginPath(); ctx.arc(x, p.y, p.r * 4.2, 0, 6.283); ctx.fill();
      ctx.fillStyle = "rgba(255," + (168 + Math.round(64 * p.z)) + "," + (110 + Math.round(60 * p.z)) + "," + a.toFixed(3) + ")";
      ctx.beginPath(); ctx.arc(x, p.y, p.r, 0, 6.283); ctx.fill();
    }
  };
  Embers.prototype.start = function () {
    if (this.on || reduce) return; this.on = true; this.last = 0;
    var self = this;
    (function loop(t) { if (!self.on) return; self.tick(t); self.raf = requestAnimationFrame(loop); })(performance.now());
  };
  Embers.prototype.stop = function () { this.on = false; cancelAnimationFrame(this.raf); };

  var introEmbers = new Embers($("introEmbers"), { density: 0.00012, max: 130, speed: 1.25 });
  var heroEmbers = new Embers($("heroEmbers"), { density: 0.00006, max: 80, alpha: 0.9 });
  introEmbers.start();

  /* =========================================================
     smooth scroll
     ========================================================= */
  var lenis = null;
  if (hasG) {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add("gsap");
    if (window.Lenis && !coarse) {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }
  }

  /* =========================================================
     intro
     ========================================================= */
  var intro = $("intro"), introDone = false;
  var nm = $("introName");
  nm.innerHTML = nm.textContent.split("").map(function (ch, i) {
    return '<span style="animation-delay:' + (0.5 + i * 0.12).toFixed(2) + 's">' + ch + "</span>";
  }).join("");
  function endIntro() {
    if (introDone) return; introDone = true;
    intro.classList.add("out");
    document.body.classList.remove("is-intro");
    setTimeout(function () { introEmbers.stop(); intro.remove(); }, 1200);
    if (lenis) lenis.start();
    heroIn();
  }
  setTimeout(endIntro, reduce ? 400 : 3400);
  intro.addEventListener("click", endIntro);
  ["keydown", "wheel", "touchmove"].forEach(function (ev) {
    window.addEventListener(ev, function () { if (!introDone) endIntro(); }, { once: true, passive: true });
  });

  function heroIn() {
    if (!hasG) return;
    gsap.to(".hero-media img", { scale: 1, duration: 2.8, ease: "power2.out" });
    gsap.to(".hero-title .line > span", { yPercent: 0, duration: 1.4, ease: "expo.out", stagger: 0.14, delay: 0.2 });
    gsap.to([".hero .eyebrow", ".hero-ctas", ".hero-foot"], { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.7 });
    setTimeout(function () { ScrollTrigger.refresh(); }, 1500);
  }

  // hero embers only run while the hero is on screen
  var heroSeen = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { heroSeen = es[0].isIntersecting; if (heroSeen && !document.hidden) heroEmbers.start(); else heroEmbers.stop(); }, { threshold: 0 }).observe(qs(".hero"));
  } else heroEmbers.start();
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) heroEmbers.stop();
    else if (heroSeen) heroEmbers.start();
  });

  /* =========================================================
     header, progress, sticky CTA, mobile menu
     ========================================================= */
  var hdr = $("hdr"), hero = qs(".hero"), cta = qs(".sticky-cta"), res = $("reservas"), prog = $("progress");
  var lastY = 0, resInView = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { resInView = es[0].isIntersecting; onScroll(); }, { threshold: 0 }).observe(res);
  }
  function onScroll() {
    var y = window.scrollY, h = hero.offsetHeight;
    hdr.classList.toggle("solid", y > h - 90);
    if (!sheetOpen) {
      hdr.classList.toggle("hide", y > h && y > lastY + 2);
      if (y < lastY - 2 || y < h) hdr.classList.remove("hide");
    }
    lastY = y;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = "scaleX(" + (max > 0 ? clamp(y / max, 0, 1) : 0).toFixed(4) + ")";
    cta.classList.toggle("show", y > h * 0.6 && !resInView);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var sheet = $("sheet"), menuBtn = $("menuBtn"), sheetOpen = false;
  qsa(".sheet-nav a").forEach(function (a, i) { a.style.transitionDelay = (80 + i * 55) + "ms"; });
  function setSheet(open) {
    sheetOpen = open;
    menuBtn.setAttribute("aria-expanded", String(open));
    if (open) {
      sheet.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { sheet.classList.add("open"); }); });
      document.body.style.overflow = "hidden";
      hdr.classList.remove("hide");
      if (lenis) lenis.stop();
    } else {
      sheet.classList.remove("open");
      setTimeout(function () { if (!sheetOpen) sheet.hidden = true; }, 460);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    }
  }
  menuBtn.addEventListener("click", function () { setSheet(!sheetOpen); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && sheetOpen) { setSheet(false); menuBtn.focus(); } });

  // in-page links glide with Lenis (or native smooth scroll)
  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href"); if (id.length < 2) return;
      var t = qs(id); if (!t) return;
      e.preventDefault();
      if (sheetOpen) setSheet(false);
      setTimeout(function () {
        if (lenis) lenis.scrollTo(t, { offset: -40, duration: 1.6 });
        else t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }, sheetOpen ? 60 : 0);
    });
  });

  /* =========================================================
     ageing room
     ========================================================= */
  var camDayVal = 45, camStage = -1;
  var STAGE_DAYS = [1, 21, 45, 60];
  function camPaint(d, force) {
    camDayVal = d;
    var day = Math.round(d);
    $("camDay").textContent = (day < 10 ? "0" : "") + day;
    $("camFill").style.transform = "scaleX(" + ((d - 1) / 59).toFixed(4) + ")";
    $("camLoss").textContent = Math.round(d * 0.5) + " %";
    qsa(".cam-track i").forEach(function (t, i) { t.classList.toggle("on", day >= STAGE_DAYS[i]); });
    var s = d < 11 ? 0 : d < 33 ? 1 : d < 52.5 ? 2 : 3;
    if (s !== camStage || force) {
      camStage = s;
      qsa("#camStages .stage").forEach(function (el, i) { el.classList.toggle("is-on", i === s); });
      $("camTag").textContent = T[lang]["s" + (s + 1) + "k"];
    }
  }

  /* =========================================================
     menu (carta)
     ========================================================= */
  function renderCuts() {
    $("cuts").innerHTML = CUTS.map(function (c, i) {
      var d = c[lang];
      return '<li class="cut" data-i="' + i + '" style="--i:' + i + '">' +
        '<img class="cut-thumb" src="' + IMG(c.img, 160, 200) + '" alt="" loading="lazy">' +
        '<h3 class="cut-name">' + d.name + (c.tag ? '<span class="cut-tag">' + T[lang].onRequest + "</span>" : "") + "</h3>" +
        '<p class="cut-meta">' + d.meta + "</p>" +
        '<span class="cut-weight">' + d.w + "</span>" +
        '<span class="cut-price">' + money(c.price, c.kg) + "</span></li>";
    }).join("");
  }
  function renderDishes() {
    Object.keys(MENU).forEach(function (id) {
      $(id).innerHTML = MENU[id].map(function (m, i) {
        var d = m[lang];
        return '<li class="dish" style="--i:' + i + '"><p class="dish-name">' + d.n + (d.s ? '<span class="dish-sub">' + d.s + "</span>" : "") +
          '</p><span class="dish-lead" aria-hidden="true"></span><span class="dish-price">' + money(m.p) + "</span></li>";
      }).join("");
    });
  }
  function renderPairs() {
    $("pairs").innerHTML = PAIRS.map(function (p) { return "<div><dt>" + p[lang][0] + "</dt><dd>" + p[lang][1] + "</dd></div>"; }).join("");
  }

  // tabs
  var tabs = qsa('#tabs [role="tab"]'), ind = qs(".tab-ind");
  function moveInd() {
    var b = qs('#tabs [aria-selected="true"]'); if (!b || !b.offsetWidth) return;
    ind.style.width = b.offsetWidth + "px";
    ind.style.transform = "translateX(" + b.offsetLeft + "px)";
  }
  function selectTab(btn, focus) {
    tabs.forEach(function (t) {
      var on = t === btn, p = $(t.getAttribute("aria-controls"));
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      p.hidden = !on;
      if (on && !reduce) { p.classList.remove("enter"); void p.offsetWidth; p.classList.add("enter"); }
    });
    moveInd();
    if (focus) btn.focus();
    if (btn.id !== "tab-cuts") hideFloat();
    if (hasG) setTimeout(function () { ScrollTrigger.refresh(); }, 60);
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { selectTab(t); });
    t.addEventListener("keydown", function (e) {
      var n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!n) return;
      e.preventDefault(); selectTab(tabs[(i + n + tabs.length) % tabs.length], true);
    });
  });
  window.addEventListener("resize", moveInd);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInd);

  // a photo of the cut follows the cursor over the steak list (desktop only)
  var fl = $("cartaFloat"), flIn = document.createElement("div");
  flIn.className = "cf-in"; fl.appendChild(flIn);
  flIn.innerHTML = CUTS.map(function (c) { return '<img src="' + IMG(c.img, 640, 800) + '" alt="" loading="lazy" decoding="async">'; }).join("");
  var flImgs = flIn.children, mx = 0, my = 0, fx = 0, fy = 0, flOn = false, flRaf = 0, flStop = 0;
  window.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
  function flLoop() {
    cancelAnimationFrame(flRaf);
    (function f() {
      fx += (mx - fx) * 0.15; fy += (my - fy) * 0.15;
      var w = fl.offsetWidth, h = fl.offsetHeight;
      var x = Math.min(fx + 36, window.innerWidth - w - 24), y = clamp(fy - h * 0.5, 16, window.innerHeight - h - 16);
      fl.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0) rotate(" + clamp((mx - fx) * 0.05, -7, 7).toFixed(2) + "deg)";
      flRaf = requestAnimationFrame(f);
    })();
  }
  function hideFloat() {
    flOn = false; fl.classList.remove("on");
    clearTimeout(flStop); flStop = setTimeout(function () { if (!flOn) cancelAnimationFrame(flRaf); }, 450);
  }
  $("cuts").addEventListener("mouseover", function (e) {
    if (!finePointer.matches || reduce) return;
    var li = e.target.closest(".cut"); if (!li) return;
    var i = +li.dataset.i;
    for (var k = 0; k < flImgs.length; k++) flImgs[k].classList.toggle("on", k === i);
    if (!flOn) { flOn = true; fx = mx; fy = my; fl.classList.add("on"); clearTimeout(flStop); flLoop(); }
  });
  $("cuts").addEventListener("mouseleave", hideFloat);
  window.addEventListener("scroll", function () { if (flOn && !$("cuts").matches(":hover")) hideFloat(); }, { passive: true });

  /* =========================================================
     doneness
     ========================================================= */
  var donRange = $("donRange"), donStops = $("donStops"), donStopsEls = $("donGrad").querySelectorAll("stop");
  var donVal = 1, donIdx = -1, donAnim = 0;
  var CR0 = "#140804", CR1 = "#3a1a0e", GREY = "#86675a";
  function renderStops() {
    donStops.innerHTML = DON.map(function (s, i) {
      return '<button type="button" data-i="' + i + '" style="left:' + (i * 25) + '%">' + s[lang].n + "</button>";
    }).join("");
    qsa("button", donStops).forEach(function (b) { b.classList.toggle("on", +b.dataset.i === donIdx); });
  }
  function paintDon(v) {
    donVal = v;
    var i = Math.min(3, Math.floor(v)), f = v - i, A = DON[i], B = DON[i + 1];
    var band = lerp(A.band, B.band, f), pb = lerp(A.pinkBand, B.pinkBand, f);
    var core = mixHex(A.core, B.core, f), pink = mixHex(A.pink, B.pink, f);
    var g0 = 0.085, g1 = g0 + band, g2 = Math.min(0.49, g1 + pb);
    var off = [0, 0.06, g0, g1, g2, 0.5, 1 - g2, 1 - g1, 1 - g0, 0.94, 1];
    var col = [CR0, CR1, GREY, GREY, pink, core, pink, GREY, GREY, CR1, CR0];
    for (var k = 0; k < donStopsEls.length; k++) {
      donStopsEls[k].setAttribute("offset", off[k].toFixed(4));
      donStopsEls[k].setAttribute("stop-color", col[k]);
    }
    $("donTemp").textContent = Math.round(lerp(A.t, B.t, f));
    $("donGlowEl").style.opacity = lerp(1, 0.3, v / 4).toFixed(3);
    if (+donRange.value !== v) donRange.value = v;
    var r = Math.round(v);
    if (r !== donIdx) {
      donIdx = r;
      var d = DON[r][lang];
      $("donName").textContent = d.n;
      $("donDesc").textContent = d.d;
      $("donBadge").classList.toggle("off", r !== 1);
      donRange.setAttribute("aria-valuetext", d.n + " · " + DON[r].t + " °C");
      qsa("button", donStops).forEach(function (b) { b.classList.toggle("on", +b.dataset.i === r); });
      if (!reduce && $("donName").animate) {
        $("donName").animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" });
      }
    }
  }
  function tweenDon(to, dur) {
    cancelAnimationFrame(donAnim);
    var from = donVal, t0 = performance.now();
    if (reduce || from === to) { paintDon(to); return; }
    (function step(now) {
      var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      paintDon(lerp(from, to, e));
      if (k < 1) donAnim = requestAnimationFrame(step);
    })(t0);
  }
  donRange.addEventListener("input", function () { cancelAnimationFrame(donAnim); paintDon(+donRange.value); });
  donRange.addEventListener("change", function () { tweenDon(Math.round(+donRange.value), 320); });
  donStops.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) tweenDon(+b.dataset.i, 700); });

  /* =========================================================
     booking
     ========================================================= */
  var state = { day: 0, service: "dinner", time: null, guests: 2, occ: null, chu: false };
  var days = [];
  (function buildDays() {
    var d = new Date(); d.setHours(12, 0, 0, 0);
    while (days.length < 7) { d.setDate(d.getDate() + 1); if (d.getDay() !== 1) days.push(new Date(d)); }
  })();
  var dayBox = $("days"), seg = $("service"), timeBox = $("times"), countEl = $("guests"), minus = $("minus"), plus = $("plus");

  function renderDays() {
    if (!dayBox.children.length) {
      dayBox.innerHTML = days.map(function (d, i) {
        return '<label class="day' + (i === state.day ? " on" : "") + '"><input type="radio" name="day" value="' + i + '"' + (i === state.day ? " checked" : "") +
          '><span class="d-wd"></span><span class="d-dd">' + d.getDate() + '</span><span class="d-mo"></span></label>';
      }).join("");
    }
    qsa(".day", dayBox).forEach(function (l, i) {
      var d = days[i];
      qs(".d-wd", l).textContent = d.toLocaleDateString(loc(), { weekday: "short" }).replace(".", "");
      qs(".d-mo", l).textContent = d.toLocaleDateString(loc(), { month: "short" }).replace(".", "");
      qs("input", l).setAttribute("aria-label", d.toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long" }));
    });
  }
  function isSunday() { return days[state.day].getDay() === 0; }
  function syncService() {
    var sun = isSunday();
    if (sun && state.service === "dinner") state.service = "lunch";
    qsa(".opt", seg).forEach(function (l) {
      var inp = qs("input", l), dis = sun && inp.value === "dinner";
      inp.disabled = dis; inp.checked = inp.value === state.service;
      l.classList.toggle("on", inp.checked); l.classList.toggle("dis", dis);
    });
    seg.setAttribute("data-v", state.service);
    $("serviceHint").textContent = sun ? T[lang].sunNote : "";
  }
  function slotsFor() {
    var d = days[state.day], list = SLOTS[state.service], dinner = state.service === "dinner";
    var r = rng(d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate() + (dinner ? 7919 : 0));
    var full = list.map(function () { return r() < (dinner ? 0.36 : 0.24); });
    var free = full.filter(function (x) { return !x; }).length;
    for (var i = 0; free < 2 && i < full.length; i++) if (full[i]) { full[i] = false; free++; }
    return list.map(function (t, i) { return { t: t, full: full[i] }; });
  }
  function renderTimes() {
    syncService();
    var slots = slotsFor(), pref = state.service === "dinner" ? "21:00" : "14:00";
    var ok = function (t) { return slots.some(function (s) { return s.t === t && !s.full; }); };
    if (!state.time || !ok(state.time)) state.time = ok(pref) ? pref : slots.filter(function (s) { return !s.full; })[0].t;
    timeBox.innerHTML = slots.map(function (s, i) {
      var on = s.t === state.time;
      return '<label class="slot' + (s.full ? " full" : "") + (on ? " on" : "") + '" style="--i:' + i + '"><input type="radio" name="time" value="' + s.t + '"' +
        (s.full ? " disabled" : "") + (on ? " checked" : "") + '><span>' + s.t + "</span>" + (s.full ? "<small>" + T[lang].full + "</small>" : "") + "</label>";
    }).join("");
  }
  function renderOcc() {
    $("occ").innerHTML = OCC.map(function (k) {
      return '<button type="button" class="chip" data-k="' + k + '" aria-pressed="' + (state.occ === k) + '">' + T[lang].occ[k] + "</button>";
    }).join("");
  }

  dayBox.addEventListener("change", function (e) {
    state.day = +e.target.value;
    qsa(".day", dayBox).forEach(function (l) { l.classList.toggle("on", qs("input", l).checked); });
    renderTimes(); update("date");
  });
  seg.addEventListener("change", function (e) { state.service = e.target.value; state.time = null; renderTimes(); update("meta"); });
  timeBox.addEventListener("change", function (e) {
    state.time = e.target.value;
    qsa(".slot", timeBox).forEach(function (l) { l.classList.toggle("on", qs("input", l).checked); });
    update("meta");
  });
  function setGuests(n) {
    n = clamp(n, 1, MAX_GUESTS); if (n === state.guests) return;
    var dir = n > state.guests ? 1 : -1;
    state.guests = n; countEl.textContent = n;
    if (!reduce && countEl.animate) countEl.animate([{ transform: "translateY(" + (dir * 40) + "%)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 380, easing: "cubic-bezier(.2,.9,.3,1.2)" });
    update("meta");
  }
  minus.addEventListener("click", function () { setGuests(state.guests - 1); });
  plus.addEventListener("click", function () { setGuests(state.guests + 1); });
  $("occ").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state.occ = state.occ === b.dataset.k ? null : b.dataset.k;
    qsa(".chip", $("occ")).forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.k === state.occ)); });
    update("extra");
  });
  $("chu60").addEventListener("change", function (e) { state.chu = e.target.checked; update("extra"); });

  function settle(el) {
    if (reduce || !el.animate) return;
    el.animate([{ opacity: 0.2, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.2,.8,.2,1)" });
  }
  function update(what) {
    var d = T[lang], g = state.guests, gw = g === 1 ? d.guest1 : d.guestN;
    minus.disabled = g <= 1; plus.disabled = g >= MAX_GUESTS;
    minus.setAttribute("aria-label", d.less); plus.setAttribute("aria-label", d.more);
    $("guestHint").textContent = g > 8 ? d.bigGroup : "";
    $("chuLeft").textContent = d.chuLeft.replace("{n}", PIECES_LEFT);
    var dateLong = cap(days[state.day].toLocaleDateString(loc(), { weekday: "long", day: "numeric", month: "long" }));
    $("sDate").textContent = dateLong;
    $("sMeta").textContent = state.time + " · " + d[state.service].toLowerCase() + " · " + g + " " + gw;
    var extras = [];
    if (state.occ) extras.push(d.occ[state.occ]);
    if (state.chu) extras.push(d.chuSum);
    $("sExtra").textContent = extras.join(" · ");
    if (what === "date") settle($("sDate"));
    if (what === "meta") settle($("sMeta"));
    if (what === "extra") settle($("sExtra"));
    var msg = d.wa.replace("{date}", lang === "es" ? dateLong.toLowerCase() : dateLong).replace("{time}", state.time)
      .replace("{n}", g).replace("{g}", gw)
      .replace("{extra}", (state.occ ? d.occMsg[state.occ] : "") + (state.chu ? d.chuMsg : ""));
    $("waBtn").href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
  }

  /* =========================================================
     scroll choreography
     ========================================================= */
  function setupFX() {
    if (!hasG) return;
    var ST = ScrollTrigger;

    // hero: start states (revealed by heroIn), then parallax and fade on scroll
    gsap.set(".hero-media img", { scale: 1.16 });
    gsap.set(".hero-title .line > span", { yPercent: 110 });
    gsap.set([".hero .eyebrow", ".hero-ctas", ".hero-foot"], { opacity: 0, y: 18 });
    gsap.to(".hero-media", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-copy", { y: -90, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 30%", scrub: true } });

    // statement: words catch fire as you read, then settle to bone
    wordsST = ST.create({ trigger: ".statement", start: "top 75%", end: "bottom 45%", scrub: true, onUpdate: function (s) { paintWords(s.progress); } });
    paintWords(0);

    // facts: rise and count up
    gsap.from(".fact", { opacity: 0, y: 40, duration: 1.1, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: ".facts", start: "top 85%" } });
    qsa("[data-count]").forEach(function (el) {
      var o = { v: 0 }, target = +el.dataset.count;
      el.textContent = "0";
      gsap.to(o, { v: target, duration: target > 100 ? 2.2 : 1.6, ease: "power2.out", scrollTrigger: { trigger: ".facts", start: "top 85%" },
        onUpdate: function () { el.textContent = group(Math.round(o.v)); }, onComplete: function () { el._done = true; el.textContent = group(target); } });
    });

    // ageing room: pinned on larger screens, the day counter runs with the scroll and rests on each milestone
    var mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (min-height: 620px)", function () {
      var cam = qs(".camara");
      cam.classList.add("pinned");
      var imgs = qsa("#camFrame img"), proxy = { d: 1 };
      camPaint(1, true);
      gsap.set(imgs, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(imgs[0], { clipPath: "inset(0% 0% 0% 0%)" });
      var tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: cam, start: "top top", end: "+=320%", pin: true, scrub: 0.7, anticipatePin: 1, invalidateOnRefresh: true },
        onUpdate: function () { camPaint(proxy.d); }
      });
      tl.fromTo(imgs[0], { scale: 1.12 }, { scale: 1, duration: 0.25 }, 0)
        .to(proxy, { d: 21, duration: 0.16 }, 0.1)
        .to(imgs[1], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.16 }, 0.1)
        .fromTo(imgs[1], { scale: 1.2 }, { scale: 1, duration: 0.3 }, 0.1)
        .to(proxy, { d: 45, duration: 0.2 }, 0.4)
        .to(imgs[2], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.2 }, 0.4)
        .fromTo(imgs[2], { scale: 1.2 }, { scale: 1, duration: 0.32 }, 0.4)
        .to(proxy, { d: 60, duration: 0.16 }, 0.72)
        .to(imgs[3], { clipPath: "inset(0% 0% 0% 0%)", duration: 0.16 }, 0.72)
        .fromTo(imgs[3], { scale: 1.2 }, { scale: 1, duration: 0.26 }, 0.72)
        .to({}, { duration: 0.1 }, 0.9);
      gsap.from(".cam-left > *", { opacity: 0, y: 30, duration: 1.1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: cam, start: "top 70%" } });
      gsap.from(".cam-frame", { clipPath: "inset(12% 12% 12% 12%)", duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: cam, start: "top 70%" } });
      return function () {
        cam.classList.remove("pinned");
        gsap.set(imgs, { clearProps: "clipPath,transform" });
        camPaint(45, true);
      };
    });
    mm.add("(max-width: 900px), (max-height: 619px)", function () {
      qsa(".stage").forEach(function (st) {
        var img = qs(".stage-img", st), im = qs("img", st);
        var tl = gsap.timeline({ scrollTrigger: { trigger: st, start: "top 82%" } });
        tl.fromTo(img, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" })
          .fromTo(im, { scale: 1.3 }, { scale: 1, duration: 2, ease: "expo.out" }, 0.1)
          .from(qsa(".stage-k, .stage-t, .stage-p", st), { opacity: 0, y: 24, duration: 1, ease: "power3.out", stagger: 0.08 }, 0.5);
      });
    });

    // curtain reveals for framed photos
    qsa(".curtain").forEach(function (fig) {
      var img = qs("img", fig);
      var tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: "top 80%" } });
      tl.fromTo(fig, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" })
        .fromTo(img, { scale: 1.3 }, { scale: 1, duration: 2.2, ease: "expo.out" }, 0.15);
    });

    // headings, labels and copy
    qsa(".h2").forEach(function (h) {
      if (h.closest(".camara")) return;
      gsap.from(h, { opacity: 0, y: 36, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: h, start: "top 86%" } });
    });
    qsa(".eyebrow, .carta-head .muted, .don-copy .muted, .asador-copy p, .bodega-copy .muted, .reserve-head .muted, .visit .muted, .note").forEach(function (el) {
      if (el.closest(".hero") || el.closest(".camara") || el.closest(".fire-band")) return;
      gsap.from(el, { opacity: 0, y: 22, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
    });

    // menu rows
    gsap.from(".tabs", { opacity: 0, y: 20, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".tabs", start: "top 88%" } });
    ST.batch(".cut", { start: "top 92%", once: true, onEnter: function (els) { gsap.from(els, { opacity: 0, y: 34, duration: 1, ease: "power3.out", stagger: 0.07, clearProps: "opacity,transform" }); } });

    // doneness: the slice heats up from blue to the house recommendation when it arrives
    gsap.from(".slice", { opacity: 0, y: 40, scale: 0.96, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".punto", start: "top 70%" } });
    ST.create({ trigger: ".punto", start: "top 55%", once: true, onEnter: function () { paintDon(0); setTimeout(function () { tweenDon(1, 1600); }, 350); } });
    gsap.from(".don-ctrl", { opacity: 0, y: 24, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".don-ctrl", start: "top 92%" } });

    // fire: embers zoom out, the temperature climbs to 400
    gsap.fromTo(".fire-band img", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".fire-band", start: "top bottom", end: "bottom top", scrub: true } });
    var fireO = { v: 0 };
    $("fireNum").textContent = "0";
    gsap.to(fireO, { v: 400, ease: "power1.out", scrollTrigger: { trigger: ".fire-band", start: "top 85%", end: "center 55%", scrub: 0.6 }, onUpdate: function () { $("fireNum").textContent = Math.round(fireO.v); } });
    gsap.from(".fire-line", { opacity: 0, y: 24, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".fire-band", start: "center 70%" } });
    gsap.from(".fire-copy .eyebrow", { opacity: 0, y: 16, duration: 1, scrollTrigger: { trigger: ".fire-band", start: "top 70%" } });

    // the brand mark burns in next to the grill master
    var stamp = qs(".stamp");
    if (stamp) {
      qsa("path", stamp).forEach(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
      gsap.timeline({ scrollTrigger: { trigger: ".sign", start: "top 90%" } })
        .to(qsa(".stamp path"), { strokeDashoffset: 0, duration: 1, ease: "power2.inOut", stagger: 0.18 })
        .fromTo(stamp, { filter: "drop-shadow(0 0 10px rgba(255,140,60,1))", stroke: "#ffcf9c" }, { filter: "drop-shadow(0 0 0px rgba(255,140,60,0))", stroke: "#e2723b", duration: 1.4, ease: "power2.out" }, 0.6);
    }

    // cellar pairings, dining room drift
    gsap.from("#pairs > div", { opacity: 0, y: 22, duration: 1, ease: "power3.out", stagger: 0.09, scrollTrigger: { trigger: "#pairs", start: "top 88%" } });
    gsap.fromTo(".sala img", { yPercent: -7, scale: 1.08 }, { yPercent: 7, scale: 1, ease: "none", scrollTrigger: { trigger: ".sala", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".sala-caption", { opacity: 0, y: 20, duration: 1.2, scrollTrigger: { trigger: ".sala", start: "center 75%" } });

    // booking
    gsap.from(".policy li, .private", { opacity: 0, y: 18, duration: 1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".policy", start: "top 90%" } });
    gsap.from(".booker > *", { opacity: 0, y: 26, duration: 1, ease: "power3.out", stagger: 0.07, scrollTrigger: { trigger: ".booker", start: "top 82%" } });

    // visit: a wave of heat runs through the name
    gsap.from(".hours div", { opacity: 0, x: 30, duration: 1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".hours", start: "top 88%" } });
    gsap.fromTo("#bigword", { backgroundPosition: "100% 0%" }, { backgroundPosition: "0% 0%", ease: "none", scrollTrigger: { trigger: ".bigword", start: "top bottom", end: "bottom 60%", scrub: true } });

    window.addEventListener("load", function () { ST.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }

  /* =========================================================
     boot
     ========================================================= */
  applyLang();
  setupFX();
  if (!hasG) { paintDon(1); camPaint(45, true); }
})();
