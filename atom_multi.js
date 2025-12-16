// Atomic Explorer v7 – Canvas-only, with i18n and accessibility tweaks
(function() {
  try {
  const canvas = document.getElementById('atomCanvas');
  const ctx = canvas.getContext('2d');

  const detailsDiv = document.getElementById('details');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');
  const speedPlayPauseBtn = document.getElementById('speedPlayPause');
  const speedMinusBtn = document.getElementById('speedMinus');
  const speedPlusBtn = document.getElementById('speedPlus');
  const speedRabbit = document.getElementById('speedRabbit');
  const orbitLinesToggle = document.getElementById('orbitLinesToggle');
  const axesToggle = document.getElementById('axesToggle');
  const chargeToggle = document.getElementById('chargeToggle');
  const periodicGrid = document.getElementById('periodicGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const currentElementNameEl = document.getElementById('currentElementName');
  const currentElementSymbolEl = document.getElementById('currentElementSymbol');
  const langSelect = document.getElementById('langSelect');
  const protonControl = document.getElementById('protonControl');
  const neutronControl = document.getElementById('neutronControl');
  const electronControl = document.getElementById('electronControl');
  const colorMenuEl = document.getElementById('colorMenu');
  const colorMenuGridEl = document.getElementById('colorMenuGrid');
  const controlCentralize = document.getElementById('controlCentralize');
  const controlZoomIn = document.getElementById('controlZoomIn');
  const controlZoomOut = document.getElementById('controlZoomOut');

  const panelTitleEl = document.getElementById('panelTitle');
  const panelSubtitleEl = document.getElementById('panelSubtitle');
  const currentSectionTitleEl = document.getElementById('currentSectionTitle');
  const visualSectionTitleEl = document.getElementById('visualSectionTitle');
  const speedLabelTextEl = document.getElementById('speedLabelText');
  const orbitLinesLabelEl = document.getElementById('orbitLinesLabel');
  const axesToggleLabelEl = document.getElementById('axesToggleLabel');
  const chargeToggleLabelEl = document.getElementById('chargeToggleLabel');
  const zoomHintEl = document.getElementById('zoomHint');
  const periodicTitleEl = document.getElementById('periodicTitle');
  const periodicIntroEl = document.getElementById('periodicIntro');

  const overlaySymbolEl = document.getElementById('overlaySymbol');
  const overlayNameEl = document.getElementById('overlayName');
  const overlayZEl = document.getElementById('overlayZ');
  const overlayProtonsEl = document.getElementById('overlayProtons');
  const overlayNeutronsEl = document.getElementById('overlayNeutrons');
  const overlayShellsEl = document.getElementById('overlayShells');
  const overlayAtomicLabelEl = document.getElementById('overlayAtomicLabel');
  const overlayProtonsLabelEl = document.getElementById('overlayProtonsLabel');
  const overlayNeutronsLabelEl = document.getElementById('overlayNeutronsLabel');
  const overlayShellsLabelEl = document.getElementById('overlayShellsLabel');
  const legendProtonEl = document.getElementById('legendProton');
  const legendNeutronEl = document.getElementById('legendNeutron');
  const legendElectronEl = document.getElementById('legendElectron');
  const legendProtonTextEl = document.getElementById('legendProtonText');
  const legendNeutronTextEl = document.getElementById('legendNeutronText');
  const legendElectronTextEl = document.getElementById('legendElectronText');

  // --- i18n strings --------------------------------------------------------
  const i18n = {
    en: {
      panelTitle: "Atomic Explorer",
      panelSubtitle: "Interactive atomic model with periodic table and 3D nucleus.",
      currentSectionTitle: "Selected element",
      visualSectionTitle: "Visualization",
      speedLabel: "Orbital speed:",
      orbitLinesLabel: "Show orbits",
      axesToggleLabel: "Show axes",
      zoomHint: "Zoom: scroll on the atom (trackpad pinch). Drag to rotate in 3D.",
      periodicTitle: "Interactive periodic table",
      periodicIntro: "Tap or click an element to see its atom. All 118 elements are available.",
      searchPlaceholder: "Search element or symbol",
      overlayLegendProton: "Proton",
      overlayLegendNeutron: "Neutron",
      overlayLegendElectron: "Electron",
      overlayExtra: (eConfig) =>
        `Simple Bohr-like model. Electrons are grouped in shells: <code>${eConfig}</code>.`,
      overlayAtomicLabel: "Atomic #",
      overlayProtonsLabel: "Protons",
      overlayNeutronsLabel: "Neutrons",
      overlayShellsLabel: "Shells",
      zTooltip: "Atomic number (count of protons)",
      centralizeLabel: "Centralize view",
      zoomInLabel: "Zoom in",
      zoomOutLabel: "Zoom out",
      speedUp: "Increase speed",
      speedDown: "Decrease speed",
      protonColorLabel: "Proton color",
      neutronColorLabel: "Neutron color",
      electronColorLabel: "Electron color",
      chargeToggleLabel: "Show charges",
      playLabel: "Play",
      pauseLabel: "Pause"
    },
    pt: {
      panelTitle: "Explorador Atômico",
      panelSubtitle: "Modelo atômico interativo com tabela periódica e núcleo 3D.",
      currentSectionTitle: "Elemento selecionado",
      visualSectionTitle: "Visualização",
      speedLabel: "Velocidade das órbitas:",
      orbitLinesLabel: "Mostrar órbitas",
      axesToggleLabel: "Mostrar eixos",
      zoomHint: "Zoom: role o mouse / trackpad sobre o átomo. Arraste para girar em 3D.",
      periodicTitle: "Tabela periódica interativa",
      periodicIntro: "Toque ou clique em um elemento para ver seu átomo. Todos os 118 estão disponíveis.",
      searchPlaceholder: "Buscar elemento ou símbolo",
      overlayLegendProton: "Próton",
      overlayLegendNeutron: "Nêutron",
      overlayLegendElectron: "Elétron",
      overlayExtra: (eConfig) =>
        `Modelo simples no estilo de Bohr. Elétrons agrupados em camadas: <code>${eConfig}</code>.`,
      overlayAtomicLabel: "Nº atômico",
      overlayProtonsLabel: "Prótons",
      overlayNeutronsLabel: "Nêutrons",
      overlayShellsLabel: "Camadas",
      zTooltip: "Número atômico (contagem de prótons)",
      centralizeLabel: "Centralizar visão",
      zoomInLabel: "Aproximar",
      zoomOutLabel: "Afastar",
      speedUp: "Aumentar velocidade",
      speedDown: "Diminuir velocidade",
      protonColorLabel: "Cor do próton",
      neutronColorLabel: "Cor do nêutron",
      electronColorLabel: "Cor do elétron",
      chargeToggleLabel: "Mostrar cargas",
      playLabel: "Reproduzir",
      pauseLabel: "Pausar"
    },
    es: {
      panelTitle: "Explorador Atómico",
      panelSubtitle: "Modelo atómico interactivo con tabla periódica y núcleo 3D.",
      currentSectionTitle: "Elemento seleccionado",
      visualSectionTitle: "Visualización",
      speedLabel: "Velocidad de las órbitas:",
      orbitLinesLabel: "Mostrar órbitas",
      axesToggleLabel: "Mostrar ejes",
      zoomHint: "Zoom: desplázate sobre el átomo. Arrastra para rotar en 3D.",
      periodicTitle: "Tabla periódica interactiva",
      periodicIntro: "Haz clic en un elemento para ver su átomo. Los 118 elementos están disponibles.",
      searchPlaceholder: "Buscar elemento o símbolo",
      overlayLegendProton: "Protón",
      overlayLegendNeutron: "Neutrón",
      overlayLegendElectron: "Electrón",
      overlayExtra: (eConfig) =>
        `Modelo sencillo tipo Bohr. Electrones agrupados en capas: <code>${eConfig}</code>.`,
      overlayAtomicLabel: "Nº atómico",
      overlayProtonsLabel: "Protones",
      overlayNeutronsLabel: "Neutrones",
      overlayShellsLabel: "Capas",
      zTooltip: "Número atómico (cantidad de protones)",
      centralizeLabel: "Centralizar vista",
      zoomInLabel: "Acercar",
      zoomOutLabel: "Alejar",
      speedUp: "Aumentar velocidad",
      speedDown: "Disminuir velocidad",
      protonColorLabel: "Color del protón",
      neutronColorLabel: "Color del neutrón",
      electronColorLabel: "Color del electrón",
      chargeToggleLabel: "Mostrar cargas",
      playLabel: "Reproducir",
      pauseLabel: "Pausar"
    }
  };

  // Will be defined a bit later, but we need declarations now so that
  // i18n<->details functions don't explode due to TDZ.
  let currentLanguage = "pt";
  let currentSymbol = "Ca"; // default
  let elements = {};        // will be filled after periodicElements
  let currentElement = null;
  let isPaused = false;
  let pausedRedrawPending = false;

  function updatePlayPauseUI() {
    if (!speedPlayPauseBtn) return;
    const t = i18n[currentLanguage] || i18n.en;
    const label = isPaused ? t.playLabel : t.pauseLabel;
    speedPlayPauseBtn.textContent = isPaused ? "▶" : "⏸";
    speedPlayPauseBtn.setAttribute("aria-label", label);
    speedPlayPauseBtn.setAttribute("title", label);
  }

  function requestPausedRedraw() {
    if (!isPaused || pausedRedrawPending) return;
    pausedRedrawPending = true;
    requestAnimationFrame(() => {
      pausedRedrawPending = false;
      draw();
    });
  }

  function applyLanguage(lang) {
    const t = i18n[lang] || i18n.en;
    panelTitleEl.textContent = t.panelTitle;
    if (panelSubtitleEl) panelSubtitleEl.textContent = "";
    if (currentSectionTitleEl) currentSectionTitleEl.textContent = t.currentSectionTitle;
    if (visualSectionTitleEl) visualSectionTitleEl.textContent = t.visualSectionTitle;
    if (speedLabelTextEl) speedLabelTextEl.textContent = t.speedLabel;
    if (orbitLinesLabelEl) orbitLinesLabelEl.textContent = t.orbitLinesLabel;
    if (axesToggleLabelEl) axesToggleLabelEl.textContent = t.axesToggleLabel;
    if (chargeToggleLabelEl) chargeToggleLabelEl.textContent = t.chargeToggleLabel;
    if (zoomHintEl) zoomHintEl.textContent = t.zoomHint;
    if (periodicTitleEl) periodicTitleEl.textContent = t.periodicTitle;
    if (periodicIntroEl) periodicIntroEl.textContent = t.periodicIntro;
    if (searchInput) {
      searchInput.placeholder = t.searchPlaceholder;
      // Clear search when language switches to ensure grid repopulates
      searchInput.value = "";
      if (searchInput.parentElement) {
        searchInput.parentElement.classList.remove("has-text");
      }
    }
    if (clearSearchBtn) clearSearchBtn.setAttribute("aria-label", t.searchPlaceholder);
    legendProtonTextEl.textContent = t.overlayLegendProton;
    legendNeutronTextEl.textContent = t.overlayLegendNeutron;
    legendElectronTextEl.textContent = t.overlayLegendElectron;
    overlayAtomicLabelEl.textContent = t.overlayAtomicLabel;
    overlayProtonsLabelEl.textContent = t.overlayProtonsLabel;
    overlayNeutronsLabelEl.textContent = t.overlayNeutronsLabel;
    overlayShellsLabelEl.textContent = t.overlayShellsLabel;
    overlayZEl.setAttribute("title", t.zTooltip);
    controlCentralize?.setAttribute("aria-label", t.centralizeLabel);
    controlCentralize?.setAttribute("title", t.centralizeLabel);
    controlZoomIn?.setAttribute("aria-label", t.zoomInLabel);
    controlZoomIn?.setAttribute("title", t.zoomInLabel);
    controlZoomOut?.setAttribute("aria-label", t.zoomOutLabel);
    controlZoomOut?.setAttribute("title", t.zoomOutLabel);
    speedPlusBtn?.setAttribute("aria-label", t.speedUp);
    speedPlusBtn?.setAttribute("title", t.speedUp);
    speedMinusBtn?.setAttribute("aria-label", t.speedDown);
    speedMinusBtn?.setAttribute("title", t.speedDown);
    updatePlayPauseUI();
    protonControl?.setAttribute("aria-label", t.protonColorLabel);
    protonControl?.setAttribute("title", t.protonColorLabel);
    neutronControl?.setAttribute("aria-label", t.neutronColorLabel);
    neutronControl?.setAttribute("title", t.neutronColorLabel);
    electronControl?.setAttribute("aria-label", t.electronColorLabel);
    electronControl?.setAttribute("title", t.electronColorLabel);
  }

  // --- visual constants ----------------------------------------------------
  let globalSpeedFactor = parseFloat(speedRange.value || "1");
  const baseCameraDistance = 650;
  let cameraDistanceFactor = 1.0;
  let cameraDistance = baseCameraDistance * cameraDistanceFactor;

  let showCharges = false;
  if (chargeToggle) {
    chargeToggle.checked = false;
    chargeToggle.addEventListener("change", () => {
      showCharges = !!chargeToggle.checked;
      requestPausedRedraw();
    });
  }

  orbitLinesToggle?.addEventListener("change", requestPausedRedraw);
  axesToggle?.addEventListener("change", requestPausedRedraw);

  let protonColor = "#ff4d6d";
  let neutronColor = "#3b82f6";
  let electronColorOuter = "#06b6d4";
  let electronColorInner = "#67e8f9";
  // Keep electrons more "solid" by default (less fade-out).
  let electronOuterFadeAlpha = "66";

  function hexToRgb(hex) {
    const raw = String(hex || "").replace("#", "").trim();
    if (raw.length !== 6) return null;
    const r = parseInt(raw.slice(0, 2), 16);
    const g = parseInt(raw.slice(2, 4), 16);
    const b = parseInt(raw.slice(4, 6), 16);
    if ([r, g, b].some(n => Number.isNaN(n))) return null;
    return { r, g, b };
  }

  function relativeLuminance({ r, g, b }) {
    // sRGB → linear
    const toLin = (c) => {
      const v = c / 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const R = toLin(r), G = toLin(g), B = toLin(b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }

  function bestTextColorFor(bgHex) {
    const rgb = hexToRgb(bgHex);
    if (!rgb) return "#0b1120";
    return relativeLuminance(rgb) > 0.65 ? "#0b1120" : "#f8fafc";
  }

  function rgbToHex({ r, g, b }) {
    const toHex = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function mixHex(hexA, hexB, t) {
    const a = hexToRgb(hexA);
    const b = hexToRgb(hexB);
    if (!a || !b) return hexA;
    const clampT = Math.max(0, Math.min(1, t));
    return rgbToHex({
      r: a.r + (b.r - a.r) * clampT,
      g: a.g + (b.g - a.g) * clampT,
      b: a.b + (b.b - a.b) * clampT
    });
  }

  function computeElectronInner(outerHex) {
    // Slightly lighter core to keep the electron readable.
    return mixHex(outerHex, "#ffffff", 0.55);
  }

  function setLegendColors() {
    if (legendProtonEl) legendProtonEl.style.backgroundColor = protonColor;
    if (legendNeutronEl) legendNeutronEl.style.backgroundColor = neutronColor;
    if (legendElectronEl) legendElectronEl.style.backgroundColor = electronColorOuter;
  }

  // Load saved colors (disabled-by-default, just restores when present).
  try {
    const savedProton = localStorage.getItem("atomicExplorerColorProton");
    const savedNeutron = localStorage.getItem("atomicExplorerColorNeutron");
    const savedElectron = localStorage.getItem("atomicExplorerColorElectron");
    if (savedProton) protonColor = savedProton;
    if (savedNeutron) neutronColor = savedNeutron;
    if (savedElectron) {
      electronColorOuter = savedElectron;
      electronColorInner = computeElectronInner(savedElectron);
    }
  } catch (_) {}

  setLegendColors();

  function drawChargeSymbol(x, y, symbol, radiusPx, textColor) {
    if (!showCharges) return;
    if (!symbol) return;
    if (!Number.isFinite(radiusPx) || radiusPx < 5) return;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = textColor || "#f8fafc";
    ctx.font = `700 ${Math.max(9, Math.min(14, radiusPx * 1.15))}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
    ctx.shadowColor = "rgba(0,0,0,0.45)";
    ctx.shadowBlur = 6;
    ctx.fillText(symbol, x, y + 0.2);
    ctx.restore();
  }

  const sharedColorOptions = [
    // Rainbow (high saturation)
    "#ff0000", // red
    "#ff7a00", // orange
    "#ffd400", // yellow
    "#22c55e", // green
    "#00d5ff", // cyan
    "#0047ff", // blue
    "#7c3aed", // indigo
    "#d946ef", // violet
    // Neutrals
    "#000000", // black
    "#111827", // gray 900
    "#334155", // slate 700
    "#64748b", // slate 500
    "#94a3b8", // slate 400
    "#cbd5e1", // slate 300
    "#e2e8f0", // slate 200
    "#ffffff"  // white
  ];

  function persistParticleColor(particle, color) {
    try {
      if (particle === "proton") localStorage.setItem("atomicExplorerColorProton", color);
      if (particle === "neutron") localStorage.setItem("atomicExplorerColorNeutron", color);
      if (particle === "electron") localStorage.setItem("atomicExplorerColorElectron", color);
    } catch (_) {}
  }

  function applyParticleColor(particle, color) {
    if (!color) return;
    if (particle === "proton") protonColor = color;
    if (particle === "neutron") neutronColor = color;
    if (particle === "electron") {
      electronColorOuter = color;
      electronColorInner = computeElectronInner(color);
    }
    persistParticleColor(particle, color);
    setLegendColors();
    requestPausedRedraw();
  }

  let openParticle = null;
  let openControl = null;

  function setUiHidden(hidden) {
    document.body.classList.toggle("ui-hidden", !!hidden);
    if (hidden) closeColorMenu();
  }

  function toggleUiHidden() {
    setUiHidden(!document.body.classList.contains("ui-hidden"));
  }

  function isColorMenuOpen() {
    return colorMenuEl?.getAttribute("data-open") === "true";
  }

  function closeColorMenu() {
    if (!colorMenuEl) return;
    colorMenuEl.setAttribute("data-open", "false");
    protonControl?.setAttribute("aria-expanded", "false");
    neutronControl?.setAttribute("aria-expanded", "false");
    electronControl?.setAttribute("aria-expanded", "false");
    openParticle = null;
    openControl = null;
  }

  function rebuildColorMenu(particle) {
    if (!colorMenuGridEl) return;
    const t = i18n[currentLanguage] || i18n.en;
    colorMenuGridEl.innerHTML = "";
    const options = sharedColorOptions;
    const label =
      particle === "proton" ? t.overlayLegendProton :
      particle === "neutron" ? t.overlayLegendNeutron :
      t.overlayLegendElectron;

    options.forEach(color => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "color-option";
      btn.setAttribute("role", "menuitemradio");
      btn.setAttribute("data-color", color);
      btn.innerHTML = [
        `<div class="color-option-content">`,
        `<span class="dot" style="background:${color};box-shadow:inset 0 0 0 1px rgba(15,23,42,0.55)"></span><span>${label}</span>`,
        `</div>`
      ].join("");
      btn.addEventListener("click", () => {
        applyParticleColor(particle, color);
        closeColorMenu();
      });
      colorMenuGridEl.appendChild(btn);
    });
  }

  function currentColorForParticle(particle) {
    if (particle === "proton") return protonColor;
    if (particle === "neutron") return neutronColor;
    return electronColorOuter;
  }

  function openColorMenu(controlEl, particle) {
    if (!colorMenuEl || !controlEl) return;
    openParticle = particle;
    openControl = controlEl;
    rebuildColorMenu(particle);

    const wrapper = document.getElementById("canvasWrapper");
    if (wrapper) {
      const wrapperRect = wrapper.getBoundingClientRect();
      const controlRect = controlEl.getBoundingClientRect();
      const left = controlRect.left - wrapperRect.left;
      const top = controlRect.bottom - wrapperRect.top + 8;
      colorMenuEl.style.left = `${left}px`;
      colorMenuEl.style.top = `${top}px`;
      colorMenuEl.style.width = `${controlRect.width}px`;
    }

    colorMenuEl.setAttribute("data-open", "true");
    protonControl?.setAttribute("aria-expanded", particle === "proton" ? "true" : "false");
    neutronControl?.setAttribute("aria-expanded", particle === "neutron" ? "true" : "false");
    electronControl?.setAttribute("aria-expanded", particle === "electron" ? "true" : "false");

    const selectedColor = currentColorForParticle(particle);
    const selectedItem = colorMenuEl.querySelector(`.color-option[data-color="${selectedColor}"]`);
    const focusTarget = (selectedItem || colorMenuEl.querySelector(".color-option"));
    if (focusTarget instanceof HTMLElement) focusTarget.focus();
  }

  function toggleColorMenu(controlEl, particle) {
    if (isColorMenuOpen() && openParticle === particle) closeColorMenu();
    else openColorMenu(controlEl, particle);
  }

  // --- periodic data -------------------------------------------------------
  const symbols = [
    "H","He","Li","Be","B","C","N","O","F","Ne",
    "Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca",
    "Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn",
    "Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr",
    "Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn",
    "Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd",
    "Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb",
    "Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg",
    "Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th",
    "Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
    "Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds",
    "Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
  ];
  const namesEN = [
    "Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon",
    "Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium",
    "Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc",
    "Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium",
    "Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin",
    "Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium",
    "Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury",
    "Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium",
    "Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium",
    "Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium",
    "Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"
  ];
  const namesPT = [
    "Hidrogênio","Hélio","Lítio","Berílio","Boro","Carbono","Nitrogênio","Oxigênio","Flúor","Neônio",
    "Sódio","Magnésio","Alumínio","Silício","Fósforo","Enxofre","Cloro","Argônio","Potássio","Cálcio",
    "Escândio","Titânio","Vanádio","Cromo","Manganês","Ferro","Cobalto","Níquel","Cobre","Zinco",
    "Gálio","Germânio","Arsênio","Selênio","Bromo","Criptônio","Rubídio","Estrôncio","Ítrio","Zircônio",
    "Nióbio","Molibdênio","Tecnécio","Rutênio","Ródio","Paládio","Prata","Cádmio","Índio","Estanho",
    "Antimônio","Telúrio","Iodo","Xenônio","Césio","Bário","Lantânio","Cério","Praseodímio","Neodímio",
    "Promécio","Samário","Európio","Gadolínio","Térbio","Disprósio","Hólmio","Érbio","Túlio","Itérbio",
    "Lutécio","Háfnio","Tântalo","Tungstênio","Rênio","Ósmio","Irídio","Platina","Ouro","Mercúrio",
    "Tálio","Chumbo","Bismuto","Polônio","Astato","Radônio","Frâncio","Rádio","Actínio","Tório",
    "Protactínio","Urânio","Netúnio","Plutônio","Amerício","Cúrio","Berquélio","Califórnio","Einstênio","Férmio",
    "Mendelévio","Nobélio","Laurêncio","Rutherfórdio","Dúbnio","Seabórgio","Bóhrio","Hássio","Meitnério","Darmstádio",
    "Roentgênio","Copernício","Nihônio","Fleróvio","Moscóvio","Livermório","Tenessino","Oganessônio"
  ];
  const namesES = [
    "Hidrógeno","Helio","Litio","Berilio","Boro","Carbono","Nitrógeno","Oxígeno","Flúor","Neón",
    "Sodio","Magnesio","Aluminio","Silicio","Fósforo","Azufre","Cloro","Argón","Potasio","Calcio",
    "Escandio","Titanio","Vanadio","Cromo","Manganeso","Hierro","Cobalto","Níquel","Cobre","Zinc",
    "Galio","Germanio","Arsénico","Selenio","Bromo","Criptón","Rubidio","Estroncio","Itrio","Circonio",
    "Niobio","Molibdeno","Tecnecio","Rutenio","Rodio","Paladio","Plata","Cadmio","Indio","Estaño",
    "Antimonio","Telurio","Yodo","Xenón","Cesio","Bario","Lantano","Cerio","Praseodimio","Neodimio",
    "Prometio","Samario","Europio","Gadolinio","Terbio","Disprosio","Holmio","Erbio","Tulio","Iterbio",
    "Lutecio","Hafnio","Tántalo","Wolframio","Renio","Osmio","Iridio","Platino","Oro","Mercurio",
    "Talio","Plomo","Bismuto","Polonio","Astato","Radón","Francio","Radio","Actinio","Torio",
    "Protactinio","Uranio","Neptunio","Plutonio","Americio","Curio","Berkelio","Californio","Einstenio","Fermio",
    "Mendelevio","Nobelio","Laurencio","Rutherfordio","Dubnio","Seaborgio","Bohrio","Hassio","Meitnerio","Darmstadtio",
    "Roentgenio","Copernicio","Nihonio","Flerovio","Moscovio","Livermorio","Tenesino","Oganesón"
  ];
  const periodicElements = symbols.map((symbol, idx) => ({
    Z: idx + 1,
    symbol,
    nameEN: namesEN[idx] || symbol,
    namePT: namesPT[idx] || namesEN[idx] || symbol,
    nameES: namesES[idx] || namesEN[idx] || symbol
  }));

  function bohrShells(Z) {
    const capacities = [2, 8, 18, 32, 32, 18, 8];
    const shells = [];
    let remaining = Z;
    for (let i = 0; i < capacities.length && remaining > 0; i++) {
      const cap = capacities[i];
      const used = Math.min(cap, remaining);
      shells.push(used);
      remaining -= used;
    }
    return shells;
  }

  function paletteForZ(Z) {
    if (Z <= 2)   return ["#fee2e2", "#fecaca"];
    if (Z <= 10)  return ["#dbeafe", "#60a5fa"];
    if (Z <= 18)  return ["#dcfce7", "#4ade80"];
    if (Z <= 36)  return ["#ffedd5", "#fb923c"];
    if (Z <= 54)  return ["#ede9fe", "#a855f7"];
    if (Z <= 86)  return ["#fce7f3", "#f472b6"];
    return ["#e0f2fe", "#38bdf8"];
  }

  // Build element map
  elements = {};
  periodicElements.forEach(d => {
    const shells = bohrShells(d.Z);
    const [nucleusColor, coreColor] = paletteForZ(d.Z);
    elements[d.symbol] = {
      Z: d.Z,
      symbol: d.symbol,
      namePT: d.namePT,
      nameEN: d.nameEN,
      electrons: shells,
      colorNucleus: nucleusColor,
      colorCore: coreColor
    };
  });
  currentElement = elements[currentSymbol];

  function approximateNeutrons(Z) {
    return Z;
  }

  function getElementName(el) {
    if (!el) return "";
    if (currentLanguage === "en") return el.nameEN || el.namePT || el.nameES;
    if (currentLanguage === "es") return el.nameES || el.nameEN || el.namePT;
    return el.namePT || el.nameES || el.nameEN;
  }

  function updateDetails(symbol) {
    const el = elements[symbol];
    if (!el) return;
    const eConfig = el.electrons.join(", ");
    const N = approximateNeutrons(el.Z);
    const totalNucleons = el.Z + N;
    const t = i18n[currentLanguage] || i18n.en;

    if (detailsDiv) {
      detailsDiv.innerHTML = [
        `<b>${getElementName(el)} (${el.symbol})</b>`,
        `Z (atomic number): <b>${el.Z}</b>`,
        `Protons: <b>${el.Z}</b> · Neutrons: <b>${N}</b>`,
        `Nucleons (≈ mass number): <b>${totalNucleons}</b>`,
        `Shells (Bohr-like model): <code>${eConfig}</code>`,
        `<small>${t.overlayExtra(eConfig)}</small>`
      ].join("<br>");
    }

    if (currentElementNameEl) currentElementNameEl.textContent = getElementName(el);
    if (currentElementSymbolEl) currentElementSymbolEl.textContent = el.symbol;

    overlaySymbolEl.textContent = el.symbol;
    overlayNameEl.textContent = getElementName(el);
    overlayZEl.textContent = "Z = " + el.Z;
    overlayProtonsEl.textContent = el.Z;
    overlayNeutronsEl.textContent = N;
    overlayShellsEl.textContent = eConfig;
  }

  // Apply initial language AFTER we have elements + symbol ready
  applyLanguage(currentLanguage);
  if (searchInput) searchInput.value = "";
  if (searchInput?.parentElement) {
    searchInput.parentElement.classList.remove("has-text");
  }
  updateDetails(currentSymbol);

  function updateSpeedUI() {
    const min = parseFloat(speedRange.min || "0");
    const max = parseFloat(speedRange.max || "3");
    const val = parseFloat(speedRange.value || "1");
    const pct = ((val - min) / (max - min)) * 100;
    if (speedValue) speedValue.textContent = val.toFixed(1) + "×";
    if (speedRabbit) {
      speedRabbit.style.left = `${pct}%`;
    }
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  speedRange.addEventListener("input", () => {
    globalSpeedFactor = parseFloat(speedRange.value || "1");
    updateSpeedUI();
  });

  function nudgeSpeed(delta) {
    const min = parseFloat(speedRange.min || "0");
    const max = parseFloat(speedRange.max || "3");
    const step = parseFloat(speedRange.step || "0.1");
    const current = parseFloat(speedRange.value || "1");
    const next = Math.min(max, Math.max(min, current + delta * step));
    speedRange.value = next.toString();
    globalSpeedFactor = next;
    updateSpeedUI();
  }

  // Click-and-hold to continuously change speed.
  function attachHoldRepeat(btn, direction) {
    if (!btn) return;
    let timeoutId = null;
    let intervalId = null;
    const initialDelayMs = 420;
    const repeatMs = 120;

    const stop = () => {
      if (timeoutId != null) clearTimeout(timeoutId);
      timeoutId = null;
      if (intervalId != null) clearInterval(intervalId);
      intervalId = null;
    };

    const start = () => {
      stop();
      // One immediate nudge on press.
      nudgeSpeed(direction);
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => nudgeSpeed(direction), repeatMs);
      }, initialDelayMs);
    };

    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      btn.setPointerCapture?.(e.pointerId);
      start();
    });
    btn.addEventListener("pointerup", stop);
    btn.addEventListener("pointercancel", stop);
    btn.addEventListener("lostpointercapture", stop);
    btn.addEventListener("mouseleave", stop);
    window.addEventListener("blur", stop);
  }

  attachHoldRepeat(speedPlusBtn, 1);
  attachHoldRepeat(speedMinusBtn, -1);

  speedPlayPauseBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const wasPaused = isPaused;
    isPaused = !isPaused;
    updatePlayPauseUI();
    if (wasPaused && !isPaused) {
      lastFrameTime = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
      requestAnimationFrame(draw);
    }
  });

  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    const zoomStep = 0.03;
    if (delta > 0) {
      cameraDistanceFactor = Math.min(2.5, cameraDistanceFactor + zoomStep);
    } else {
      cameraDistanceFactor = Math.max(0.25, cameraDistanceFactor - zoomStep);
    }
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
    requestPausedRedraw();
  }, { passive: false });

  // Toggle UI by clicking the canvas background (not UI controls).
  const canvasWrapper = document.getElementById("canvasWrapper");
  canvasWrapper?.addEventListener("click", (e) => {
    if (didUserDrag) {
      didUserDrag = false;
      return;
    }
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest("#panel")) return;
    if (target.closest("#languageCorner")) return;
    if (target.closest("#particleControllers")) return;
    if (target.closest("#bottomControls")) return;
    if (target.closest("#elementOverlay")) return;
    if (target.closest("#colorMenu")) return;
    toggleUiHidden();
  });

  function buildShellsForElement(el) {
    const now = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    const baseNucleusRadius = 40;
    const zFactor = 1 + (el.electrons.length - 1) * 0.3;
    const nucleusRadius = baseNucleusRadius * zFactor;
    const minGap = 42;
    const baseRadius = nucleusRadius + minGap;
    const shells = [];
    const layerCount = el.electrons.length;
    const layerAngleStep = (Math.PI * 2) / Math.max(1, layerCount);
    for (let i = 0; i < layerCount; i++) {
      const count = el.electrons[i];
      const radius = baseRadius + i * 60;
      const speedBase = 0.03;
      shells.push({
        count,
        radius,
        speed: speedBase,
        spinOffset: i * layerAngleStep,
        phase: Math.random() * Math.PI * 2,
        startAt: now + i * 350 // stagger animation start times (ms)
      });
    }
    return shells;
  }

  let shells = buildShellsForElement(currentElement);
  let electrons = [];
  let stars = [];
  let nucleusNucleons = [];

  // --- deterministic nucleus packing -------------------------------------
  // Precompute a stable sequence of packed points (center -> outward) so that:
  // - Nucleus layout is consistent across reloads
  // - Heavier elements reuse lighter elements' layout (prefix points)
  const MAX_NUCLEONS = 118 * 2; // Z + N (approx) where N≈Z
  function buildNucleusLayoutPoints(maxCount) {
    // FCC (face-centered cubic) close packing + carve a sphere:
    // - Deterministic across reloads
    // - Ordered center -> outward so heavier nuclei reuse lighter nuclei prefixes
    const maxR = 0.98;

    // Nearest-neighbor distance in normalized nucleus units.
    // Increase to reduce overlap; decrease for tighter packing.
    const nn = 0.235;
    const a = nn * Math.SQRT2; // FCC cubic lattice constant where nn = a / sqrt(2)

    // FCC basis in half-step integer coordinates (so we can sort/group stably).
    // Coordinate = (h/2) * a where h is integer.
    const basisH = [
      { hx: 0, hy: 0, hz: 0 },
      { hx: 0, hy: 1, hz: 1 },
      { hx: 1, hy: 0, hz: 1 },
      { hx: 1, hy: 1, hz: 0 }
    ];

    const maxIndex = Math.ceil(maxR / a) + 2;
    const candidates = [];
    const maxR2 = maxR * maxR;

    for (let i = -maxIndex; i <= maxIndex; i++) {
      for (let j = -maxIndex; j <= maxIndex; j++) {
        for (let k = -maxIndex; k <= maxIndex; k++) {
          const hx0 = 2 * i;
          const hy0 = 2 * j;
          const hz0 = 2 * k;
          for (let b = 0; b < basisH.length; b++) {
            const p = basisH[b];
            const hx = hx0 + p.hx;
            const hy = hy0 + p.hy;
            const hz = hz0 + p.hz;
            const x = (hx * 0.5) * a;
            const y = (hy * 0.5) * a;
            const z = (hz * 0.5) * a;
            const r2 = x * x + y * y + z * z;
            if (r2 <= maxR2) {
              const s = hx * hx + hy * hy + hz * hz; // integer shell key
              candidates.push({ x, y, z, r2, s, hx, hy, hz });
            }
          }
        }
      }
    }

    candidates.sort((p1, p2) => {
      if (p1.s !== p2.s) return p1.s - p2.s;
      if (p1.x !== p2.x) return p1.x - p2.x;
      if (p1.y !== p2.y) return p1.y - p2.y;
      return p1.z - p2.z;
    });

    // Ensure exact center is the first point.
    const points = [{ x: 0, y: 0, z: 0, s: 0, hx: 0, hy: 0, hz: 0 }];
    for (let idx = 0; idx < candidates.length && points.length < maxCount; idx++) {
      const c = candidates[idx];
      if (c.s === 0) continue;
      points.push({ x: c.x, y: c.y, z: c.z, s: c.s, hx: c.hx, hy: c.hy, hz: c.hz });
    }

    return points.slice(0, maxCount);
  }

  let nucleusLayoutPoints = null;
  function getNucleusLayoutPoints() {
    if (nucleusLayoutPoints) return nucleusLayoutPoints;
    try {
      nucleusLayoutPoints = buildNucleusLayoutPoints(MAX_NUCLEONS);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to build nucleus layout points:", err);
      nucleusLayoutPoints = [{ x: 0, y: 0, z: 0, s: 0 }];
    }
    return nucleusLayoutPoints;
  }

  function rebuildShellsAndElectrons() {
    shells = buildShellsForElement(currentElement);
    electrons = [];
    shells.forEach((shell, shellIndex) => {
      for (let i = 0; i < shell.count; i++) {
        const angle = (i / shell.count) * Math.PI * 2;
        electrons.push({
          shellIndex,
          baseAngle: angle
        });
      }
    });
  }

  function buildStars() {
    stars = [];
    for (let i = 0; i < 260; i++) {
      const r = 420 + Math.random() * 820;
      const theta = Math.PI * 2 * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      stars.push({ x, y, z });
    }
  }

  function rebuildNucleusNucleons() {
    nucleusNucleons = [];
    const el = currentElement;
    const Z = el.Z;
    const N = approximateNeutrons(Z);
    const desired = Z + N;

    const layout = getNucleusLayoutPoints();
    const useCount = Math.min(desired, layout.length);

    // Deterministic type assignment that minimizes adjacent same-type contacts
    // (so we don't end up with large "same color" clumps).
    function mix32(x) {
      x |= 0;
      x ^= x >>> 16;
      x = Math.imul(x, 0x7feb352d);
      x ^= x >>> 15;
      x = Math.imul(x, 0x846ca68b);
      x ^= x >>> 16;
      return x >>> 0;
    }
    function hash3(a, b, c) {
      let h = mix32(a + 0x9e3779b9);
      h ^= mix32(b + 0x85ebca6b);
      h ^= mix32(c + 0xc2b2ae35);
      return mix32(h | 0);
    }

    // FCC nearest-neighbor deltas in half-step integer coordinates.
    const nnDeltas = [
      [1, 1, 0], [1, -1, 0], [-1, 1, 0], [-1, -1, 0],
      [1, 0, 1], [1, 0, -1], [-1, 0, 1], [-1, 0, -1],
      [0, 1, 1], [0, 1, -1], [0, -1, 1], [0, -1, -1]
    ];

    const coordToIndex = new Map();
    for (let i = 0; i < useCount; i++) {
      const p = layout[i];
      coordToIndex.set(`${p.hx},${p.hy},${p.hz}`, i);
    }

    const assigned = new Array(useCount).fill(null);
    let pLeft = Z;
    let nLeft = N;

    function sameNeighborCount(index, type) {
      const p = layout[index];
      let count = 0;
      for (let d = 0; d < nnDeltas.length; d++) {
        const dx = nnDeltas[d][0], dy = nnDeltas[d][1], dz = nnDeltas[d][2];
        const j = coordToIndex.get(`${p.hx + dx},${p.hy + dy},${p.hz + dz}`);
        if (j == null) continue;
        const t = assigned[j];
        if (t && t === type) count++;
      }
      return count;
    }

    for (let i = 0; i < useCount; i++) {
      if (pLeft === 0) {
        assigned[i] = "n";
        nLeft--;
        continue;
      }
      if (nLeft === 0) {
        assigned[i] = "p";
        pLeft--;
        continue;
      }

      const scoreP = sameNeighborCount(i, "p");
      const scoreN = sameNeighborCount(i, "n");
      let chosen;
      if (scoreP < scoreN) chosen = "p";
      else if (scoreN < scoreP) chosen = "n";
      else {
        // Tie-break: alternate by hashed lattice coords, nudged by remaining counts.
        const p = layout[i];
        const bit = hash3(p.hx | 0, p.hy | 0, p.hz | 0) & 1;
        const prefer = (pLeft >= nLeft) ? "p" : "n";
        chosen = bit ? (prefer === "p" ? "n" : "p") : prefer;
      }

      if (chosen === "p") pLeft--;
      else nLeft--;
      assigned[i] = chosen;
    }

    for (let i = 0; i < useCount; i++) {
      const p = layout[i];
      nucleusNucleons.push({ x: p.x, y: p.y, z: p.z, type: assigned[i] });
    }
  }

  buildStars();
  rebuildShellsAndElectrons();
  rebuildNucleusNucleons();

  // Start closer to a top-down angle so the core and orbits are visible
  let globalRotY = 0;
  let globalRotX = -1.2;
  cameraDistanceFactor = 0.9;
  cameraDistance = baseCameraDistance * cameraDistanceFactor;
  let lastFrameTime = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
  const orbitSpinStartTime = lastFrameTime;
  const firstOrbitSpinAxis = { x: 0, y: 0, z: 1 }; // Z axis (orbit sweep axis)

  function resetView() {
    globalRotY = 0;
    globalRotX = -1.2;
    cameraDistanceFactor = 0.9;
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
    requestPausedRedraw();
  }
  function adjustZoom(delta) {
    cameraDistanceFactor = Math.max(0.25, Math.min(2.5, cameraDistanceFactor + delta));
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
    requestPausedRedraw();
  }

  controlCentralize?.addEventListener("click", resetView);
  controlZoomIn?.addEventListener("click", () => adjustZoom(-0.08));
  controlZoomOut?.addEventListener("click", () => adjustZoom(0.08));

  let isDragging = false;
  let dragDistance = 0;
  let didUserDrag = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragDistance = 0;
    didUserDrag = false;
    lastX = e.clientX;
    lastY = e.clientY;
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    dragDistance += Math.hypot(dx, dy);
    if (dragDistance > 6) didUserDrag = true;
    globalRotY += dx * 0.005;
    globalRotX += dy * 0.005;
    requestPausedRedraw();
  });

  canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      dragDistance = 0;
      didUserDrag = false;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener("touchend", () => {
    isDragging = false;
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - lastX;
    const dy = touch.clientY - lastY;
    lastX = touch.clientX;
    lastY = touch.clientY;
    dragDistance += Math.hypot(dx, dy);
    if (dragDistance > 10) didUserDrag = true;
    globalRotY += dx * 0.005;
    globalRotX += dy * 0.005;
    requestPausedRedraw();
  }, { passive: true });

  function rotateY(v, angle) {
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x: v.x * cos + v.z * sin,
      y: v.y,
      z: -v.x * sin + v.z * cos
    };
  }
  function rotateX(v, angle) {
    const cos = Math.cos(angle), sin = Math.sin(angle);
    return {
      x: v.x,
      y: v.y * cos - v.z * sin,
      z: v.y * sin + v.z * cos
    };
  }
  function rotateAroundAxis(v, axis, angle) {
    const len = Math.sqrt(axis.x * axis.x + axis.y * axis.y + axis.z * axis.z) || 1e-6;
    const ax = axis.x / len, ay = axis.y / len, az = axis.z / len;
    const cos = Math.cos(angle), sin = Math.sin(angle);
    const dot = v.x * ax + v.y * ay + v.z * az;
    return {
      x: v.x * cos + (ay * v.z - az * v.y) * sin + ax * dot * (1 - cos),
      y: v.y * cos + (az * v.x - ax * v.z) * sin + ay * dot * (1 - cos),
      z: v.z * cos + (ax * v.y - ay * v.x) * sin + az * dot * (1 - cos)
    };
  }
  function project(v, width, height) {
    const camZ = cameraDistance;
    const z = camZ - v.z;
    // If a point is at/behind the camera plane, projection blows up (Infinity/NaN).
    // Return a non-visible projection in that case.
    if (!Number.isFinite(z) || z <= 1) {
      return { x: 0, y: 0, scale: 0 };
    }
    const f = 420 / z;
    if (!Number.isFinite(f) || f <= 0) {
      return { x: 0, y: 0, scale: 0 };
    }
    return {
      x: width / 2 + v.x * f,
      y: height / 2 + v.y * f,
      scale: f
    };
  }

  function isOccludedByNucleus(v, proj, nucleusProj, nucleusRScreen, nucleusRadiusWorld) {
    // Quick reject in screen space (matches the solid circle we draw).
    const dxs = proj.x - nucleusProj.x;
    const dys = proj.y - nucleusProj.y;
    if ((dxs * dxs + dys * dys) > nucleusRScreen * nucleusRScreen) return false;

    // Precise: ray-sphere intersection (camera -> point) against sphere at origin.
    const camZ = cameraDistance;
    const R = nucleusRadiusWorld;
    const R2 = R * R;
    const r2Point = v.x * v.x + v.y * v.y + v.z * v.z;
    if (r2Point <= R2) return true;

    // Ray: O + tD, where O=(0,0,camZ), P=(x,y,z), D=P-O, and point is at t=1.
    const dx = v.x;
    const dy = v.y;
    const dz = v.z - camZ;
    const A = dx * dx + dy * dy + dz * dz;
    const B = 2 * camZ * dz;
    const C = camZ * camZ - R2;
    const disc = B * B - 4 * A * C;
    if (disc <= 0) return false;
    const sqrtDisc = Math.sqrt(disc);
    const t0 = (-B - sqrtDisc) / (2 * A);
    const t1 = (-B + sqrtDisc) / (2 * A);
    // If either intersection occurs between camera and the point, the point is occluded.
    return (t0 > 0 && t0 < 1) || (t1 > 0 && t1 < 1);
  }

  function draw() {
    const now = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    const dt = Math.min(0.05, Math.max(0, (now - lastFrameTime) / 1000));
    lastFrameTime = now;
    const dtAnim = isPaused ? 0 : dt;

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    const gradBg = ctx.createRadialGradient(
      w * 0.5, h * 0.15, 0,
      w * 0.5, h * 0.55, Math.max(w, h)
    );
    gradBg.addColorStop(0, "rgba(30,64,175,0.55)");
    gradBg.addColorStop(1, "rgba(0,0,0,1)");
    ctx.fillStyle = gradBg;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    const starCamRotY = globalRotY * 0.2;
    const starCamRotX = globalRotX * 0.2;
    ctx.save();
    ctx.fillStyle = "white";
    stars.forEach(s => {
      let v = { x: s.x, y: s.y, z: s.z };
      v = rotateY(v, starCamRotY);
      v = rotateX(v, starCamRotX);
      const p = project(v, w, h);
      if (p.scale <= 0) return;
      const r = Math.max(0.4, 1.2 * p.scale);
      ctx.globalAlpha = 0.12 + 0.4 * Math.random();
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
    ctx.globalAlpha = 1;

    // --- 3D axes (X/Y/Z) --------------------------------------------------
    // Optional overlay; draw after background, before atom.
    if (axesToggle?.checked) {
      const maxOrbitRadius = shells.reduce((m, s) => Math.max(m, s.radius), 0);
      const axisLen = Math.max(120, maxOrbitRadius * 1.12);
      const axisAlpha = 0.65;
      const axisWidth = 3.5;
      const origin = { x: 0, y: 0, z: 0 };
      const oRot = rotateX(rotateY(origin, globalRotY), globalRotX);
      const oP = project(oRot, w, h);

      const axes = [
        { name: "X", color: "rgba(239,68,68,1)", dir: { x: 1, y: 0, z: 0 } },
        { name: "Y", color: "rgba(34,197,94,1)", dir: { x: 0, y: 1, z: 0 } },
        { name: "Z", color: "rgba(59,130,246,1)", dir: { x: 0, y: 0, z: 1 } }
      ];

      if (oP.scale > 0) {
        axes.forEach(ax => {
          let vPos = { x: ax.dir.x * axisLen, y: ax.dir.y * axisLen, z: ax.dir.z * axisLen };
          let vNeg = { x: -vPos.x, y: -vPos.y, z: -vPos.z };
          vPos = rotateY(vPos, globalRotY);
          vPos = rotateX(vPos, globalRotX);
          vNeg = rotateY(vNeg, globalRotY);
          vNeg = rotateX(vNeg, globalRotX);
          const pPos = project(vPos, w, h);
          const pNeg = project(vNeg, w, h);
          if (pPos.scale <= 0 || pNeg.scale <= 0) return;

          ctx.save();
          ctx.globalAlpha = axisAlpha;
          ctx.strokeStyle = ax.color;
          ctx.lineWidth = axisWidth;
          ctx.beginPath();
          ctx.moveTo(pNeg.x, pNeg.y);
          ctx.lineTo(pPos.x, pPos.y);
          ctx.stroke();
          ctx.restore();

          ctx.save();
          ctx.fillStyle = ax.color;
          ctx.globalAlpha = 0.9;
          ctx.font = "13px system-ui, -apple-system, Segoe UI, sans-serif";
          ctx.fillText(`+${ax.name}`, pPos.x + 6, pPos.y - 6);
          ctx.fillText(`-${ax.name}`, pNeg.x + 6, pNeg.y - 6);
          ctx.restore();
        });
      }
    }

    const el = currentElement;
    const baseNucleusRadius = 40;
    const zFactor = 1 + (el.electrons.length - 1) * 0.3;
    const nucleusRadius = baseNucleusRadius * zFactor;
    const nucleusPos = project({ x: 0, y: 0, z: 0 }, w, h);
    const nucleusR = nucleusRadius * nucleusPos.scale;
    const useNucleons = true;
    const occlusionRadiusWorld = nucleusRadius * 1.04;
    const occlusionRadiusScreen = nucleusR * 1.04;

    shells.forEach((shell) => {
      if (now < shell.startAt) return;
      // `speed` was tuned as rad/frame at ~60fps; convert to rad/s.
      shell.phase += shell.speed * globalSpeedFactor * dtAnim * 60;
    });

    const showOrbits = orbitLinesToggle.checked;

    // --- orbit/electron occlusion against a solid nucleus -----------------
    const orbitBack = [];
    const orbitFront = [];
    const electronsBack = [];
    const electronsFront = [];

    // Match orbit sweep motion exactly to electron motion by reusing the same phase integrator.
    // Since all shells share the same `speed`, we can take shell 0 as the reference.
    const orbitSweepSpin = (shells[0]?.phase ?? 0) % (Math.PI * 2);

    electrons.forEach(e => {
      const shell = shells[e.shellIndex];
      const ang = e.baseAngle + (now < shell.startAt ? 0 : shell.phase);
      let v = { x: Math.cos(ang) * shell.radius, y: 0, z: Math.sin(ang) * shell.radius };

      // "Sphere sweep" motion: rotate the ring around a fixed axis (Z), creating a sphere surface.
      // Each shell gets a fixed offset (evenly spaced around 360°) so starts at a different inclination.
      v = rotateAroundAxis(v, firstOrbitSpinAxis, orbitSweepSpin + (shell.spinOffset || 0));

      v = rotateY(v, globalRotY);
      v = rotateX(v, globalRotX);
      const proj = project(v, w, h);
      (isOccludedByNucleus(v, proj, nucleusPos, occlusionRadiusScreen, occlusionRadiusWorld)
        ? electronsBack
        : electronsFront
      ).push(v);
    });

    function splitOrbitSegments(samples3d) {
      const backSegments = [];
      const frontSegments = [];
      let current = null;
      let currentIsBack = null;

      for (let i = 0; i < samples3d.length; i++) {
        const v = samples3d[i];
        const isBack = v.z < 0;
        const p = project(v, w, h);
        if (p.scale <= 0) continue;

        if (current == null) {
          current = [p];
          currentIsBack = isBack;
          continue;
        }

        if (isBack !== currentIsBack) {
          if (current.length > 1) {
            (currentIsBack ? backSegments : frontSegments).push(current);
          }
          current = [current[current.length - 1], p];
          currentIsBack = isBack;
        } else {
          current.push(p);
        }
      }

      if (current && current.length > 1) {
        (currentIsBack ? backSegments : frontSegments).push(current);
      }

      return { backSegments, frontSegments };
    }

    function buildOrbitSamples(radius, tiltX, tiltY, spinAngle) {
      const samples = [];
      for (let a = 0; a <= Math.PI * 2 + 1e-6; a += Math.PI / 90) {
        let v = { x: Math.cos(a) * radius, y: 0, z: Math.sin(a) * radius };
        v = rotateX(v, tiltX);
        v = rotateY(v, tiltY);
        if (spinAngle != null) v = rotateAroundAxis(v, firstOrbitSpinAxis, spinAngle);
        v = rotateY(v, globalRotY);
        v = rotateX(v, globalRotX);
        samples.push(v);
      }
      return samples;
    }

    function drawOrbitSegments(segments, style, width) {
      segments.forEach(seg => {
        if (!seg || seg.length < 2) return;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < seg.length; i++) {
          const p = seg[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.restore();
      });
    }

    function drawElectronPoints(points3d) {
      const sorted = points3d.slice().sort((a, b) => b.z - a.z);
      sorted.forEach(v => {
        const proj = project(v, w, h);
        if (proj.scale <= 0 || !Number.isFinite(proj.x) || !Number.isFinite(proj.y) || !Number.isFinite(proj.scale)) return;
        const r = 6 * proj.scale;
        if (!Number.isFinite(r) || r <= 0) return;
        const alpha = 0.55 + 0.45 * (proj.scale);
        ctx.save();
        const gradEl = ctx.createRadialGradient(
          proj.x - r * 0.3, proj.y - r * 0.3, r * 0.2,
          proj.x, proj.y, r
        );
        gradEl.addColorStop(0, "#ffffff");
        gradEl.addColorStop(0.4, electronColorInner);
        if (electronOuterFadeAlpha !== "00") {
          gradEl.addColorStop(0.82, electronColorOuter);
          gradEl.addColorStop(1, electronColorOuter + electronOuterFadeAlpha);
        } else {
          gradEl.addColorStop(1, electronColorOuter + "00");
        }
        ctx.globalAlpha = alpha;
        ctx.fillStyle = gradEl;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, r, 0, Math.PI * 2);
        ctx.fill();
        drawChargeSymbol(proj.x, proj.y, "−", r, "#0b1120");
        ctx.restore();
      });
    }

    if (showOrbits) {
      shells.forEach((shell, shellIndex) => {
        const spin = orbitSweepSpin + (shell.spinOffset || 0);
        const tiltX = 0;
        const tiltY = 0;
        const { backSegments, frontSegments } = splitOrbitSegments(
          buildOrbitSamples(shell.radius, tiltX, tiltY, spin)
        );
        orbitBack.push(...backSegments.map(seg => ({ seg, style: "rgba(148,163,184,0.45)", width: 1 })));
        orbitFront.push(...frontSegments.map(seg => ({ seg, style: "rgba(148,163,184,0.45)", width: 1 })));
      });
    }

    // Draw back halves of orbits/electrons, then nucleus, then front halves.
    orbitBack.forEach(o => drawOrbitSegments([o.seg], o.style, o.width));
    drawElectronPoints(electronsBack);

    const nucleonPoints = [];
    nucleusNucleons.forEach(nucl => {
      const scaleLocal = nucleusRadius * 0.92;
      let v = {
        x: nucl.x * scaleLocal,
        y: nucl.y * scaleLocal,
        z: nucl.z * scaleLocal
      };
      // Rotate the whole nucleus with the same sweep phase as the orbit planes.
      v = rotateAroundAxis(v, firstOrbitSpinAxis, orbitSweepSpin);
      v = rotateY(v, globalRotY);
      v = rotateX(v, globalRotX);
      nucleonPoints.push({ v, type: nucl.type });
    });
    nucleonPoints.sort((a, b) => a.v.z - b.v.z);
    nucleonPoints.forEach(p => {
      const proj = project(p.v, w, h);
      // Reduce "merging" by keeping nucleon radius smaller and stable across rotation.
      const baseR = nucleusR * 0.135;
      const r = Math.max(1.2, baseR);
      const gradN = ctx.createRadialGradient(
        proj.x - r * 0.3, proj.y - r * 0.3, r * 0.1,
        proj.x, proj.y, r
      );
      const baseColor = p.type === "p" ? protonColor : neutronColor;
      gradN.addColorStop(0, "#ffffff");
      gradN.addColorStop(0.4, baseColor);
      gradN.addColorStop(1, "rgba(0,0,0,0.78)");
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = gradN;
      ctx.arc(proj.x, proj.y, r, 0, Math.PI * 2);
      ctx.fill();
      const chargeSymbol = p.type === "p" ? "+" : "0";
      drawChargeSymbol(proj.x, proj.y, chargeSymbol, r, bestTextColorFor(baseColor));
      ctx.restore();
    });

    orbitFront.forEach(o => drawOrbitSegments([o.seg], o.style, o.width));
    drawElectronPoints(electronsFront);

    if (!isPaused) requestAnimationFrame(draw);
  }

  function buildPeriodicGrid() {
    periodicGrid.innerHTML = "";
    const cellsBySymbol = {};
    const term = (searchInput?.value || "").trim().toLowerCase();
    periodicElements.forEach(d => {
      const elMeta = elements[d.symbol];
      if (!elMeta) return;
      const nameDisplay = getElementName(elMeta);
      const haystack = (d.symbol + " " + nameDisplay).toLowerCase();
      if (term && !haystack.includes(term)) return;
      const cell = document.createElement("button");
      cell.className = "element-cell";
      cell.setAttribute("data-symbol", d.symbol);
      cell.innerHTML = `<div class="el-symbol">${d.symbol}</div>`;
      cell.setAttribute("title", `${d.symbol} – ${nameDisplay}`);
      periodicGrid.appendChild(cell);
      cellsBySymbol[d.symbol] = cell;
      cell.addEventListener("click", () => {
        if (!elements[d.symbol]) return;
        currentSymbol = d.symbol;
        currentElement = elements[d.symbol];
        Object.values(cellsBySymbol).forEach(c => c.classList.remove("active"));
        cell.classList.add("active");
        rebuildShellsAndElectrons();
        rebuildNucleusNucleons();
        updateDetails(currentSymbol);
        // Keep current zoom/rotation when switching elements.
        requestPausedRedraw();
      });
    });
    if (cellsBySymbol[currentSymbol]) {
      cellsBySymbol[currentSymbol].classList.add("active");
    }
  }

  buildPeriodicGrid();
  requestAnimationFrame(draw);

  langSelect.addEventListener("change", () => {
    currentLanguage = langSelect.value;
    applyLanguage(currentLanguage);
    buildPeriodicGrid();
    updateDetails(currentSymbol);
    if (isColorMenuOpen() && openParticle) {
      rebuildColorMenu(openParticle);
    }
  });

  protonControl?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleColorMenu(protonControl, "proton");
  });
  neutronControl?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleColorMenu(neutronControl, "neutron");
  });
  electronControl?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleColorMenu(electronControl, "electron");
  });

  document.addEventListener("click", (e) => {
    if (!isColorMenuOpen()) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (colorMenuEl?.contains(target)) return;
    if (protonControl?.contains(target)) return;
    if (neutronControl?.contains(target)) return;
    if (electronControl?.contains(target)) return;
    closeColorMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (!isColorMenuOpen()) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeColorMenu();
      openControl?.focus();
    }
  });

  searchInput?.addEventListener("input", () => {
    if (searchInput.parentElement) {
      searchInput.parentElement.classList.toggle("has-text", !!searchInput.value);
    }
    buildPeriodicGrid();
  });
  clearSearchBtn?.addEventListener("click", () => {
    if (!searchInput) return;
    searchInput.value = "";
    if (searchInput.parentElement) {
      searchInput.parentElement.classList.remove("has-text");
    }
    buildPeriodicGrid();
    searchInput.focus();
  });

  updateSpeedUI();
  } catch (err) {
    // Fail loudly in the UI if something goes wrong early during init.
    try {
      // eslint-disable-next-line no-console
      console.error(err);
      const details = document.getElementById("details");
      if (details) {
        details.innerHTML = `<b>Initialization error</b><br><code>${String(err)}</code>`;
      }
    } catch (_) {}
  }
})();
