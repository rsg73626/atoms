// Atomic Explorer v7 – Canvas-only, with i18n and accessibility tweaks
(function() {
  const canvas = document.getElementById('atomCanvas');
  const ctx = canvas.getContext('2d');

  const detailsDiv = document.getElementById('details');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');
  const speedMinusBtn = document.getElementById('speedMinus');
  const speedPlusBtn = document.getElementById('speedPlus');
  const speedRabbit = document.getElementById('speedRabbit');
  const nucleusToggle = document.getElementById('nucleusToggle');
  const orbitLinesToggle = document.getElementById('orbitLinesToggle');
  const periodicGrid = document.getElementById('periodicGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const currentElementNameEl = document.getElementById('currentElementName');
  const currentElementSymbolEl = document.getElementById('currentElementSymbol');
  const langSelect = document.getElementById('langSelect');
  const controlCentralize = document.getElementById('controlCentralize');
  const controlZoomIn = document.getElementById('controlZoomIn');
  const controlZoomOut = document.getElementById('controlZoomOut');

  const panelTitleEl = document.getElementById('panelTitle');
  const panelSubtitleEl = document.getElementById('panelSubtitle');
  const currentSectionTitleEl = document.getElementById('currentSectionTitle');
  const visualSectionTitleEl = document.getElementById('visualSectionTitle');
  const speedLabelTextEl = document.getElementById('speedLabelText');
  const nucleusToggleLabelEl = document.getElementById('nucleusToggleLabel');
  const orbitLinesLabelEl = document.getElementById('orbitLinesLabel');
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
      nucleusToggle: "Show protons & neutrons",
      orbitLinesLabel: "Show orbits",
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
      speedDown: "Decrease speed"
    },
    pt: {
      panelTitle: "Explorador Atômico",
      panelSubtitle: "Modelo atômico interativo com tabela periódica e núcleo 3D.",
      currentSectionTitle: "Elemento selecionado",
      visualSectionTitle: "Visualização",
      speedLabel: "Velocidade das órbitas:",
      nucleusToggle: "Mostrar prótons e nêutrons",
      orbitLinesLabel: "Mostrar órbitas",
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
      speedDown: "Diminuir velocidade"
    },
    es: {
      panelTitle: "Explorador Atómico",
      panelSubtitle: "Modelo atómico interactivo con tabla periódica y núcleo 3D.",
      currentSectionTitle: "Elemento seleccionado",
      visualSectionTitle: "Visualización",
      speedLabel: "Velocidad de las órbitas:",
      nucleusToggle: "Mostrar protones y neutrones",
      orbitLinesLabel: "Mostrar órbitas",
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
      speedDown: "Disminuir velocidad"
    }
  };

  // Will be defined a bit later, but we need declarations now so that
  // i18n<->details functions don't explode due to TDZ.
  let currentLanguage = "pt";
  let currentSymbol = "Ca"; // default
  let elements = {};        // will be filled after periodicElements
  let currentElement = null;

  function applyLanguage(lang) {
    const t = i18n[lang] || i18n.en;
    panelTitleEl.textContent = t.panelTitle;
    if (panelSubtitleEl) panelSubtitleEl.textContent = "";
    if (currentSectionTitleEl) currentSectionTitleEl.textContent = t.currentSectionTitle;
    if (visualSectionTitleEl) visualSectionTitleEl.textContent = t.visualSectionTitle;
    if (speedLabelTextEl) speedLabelTextEl.textContent = t.speedLabel;
    if (nucleusToggleLabelEl) nucleusToggleLabelEl.textContent = t.nucleusToggle;
    if (orbitLinesLabelEl) orbitLinesLabelEl.textContent = t.orbitLinesLabel;
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
  }

  // --- visual constants ----------------------------------------------------
  let globalSpeedFactor = parseFloat(speedRange.value || "1");
  const baseCameraDistance = 650;
  let cameraDistanceFactor = 1.0;
  let cameraDistance = baseCameraDistance * cameraDistanceFactor;

  const protonColor = "#f97373";
  const neutronColor = "#60a5fa";
  const electronColorInner = "#a5f3fc";
  const electronColorOuter = "#22d3ee";

  legendProtonEl.style.backgroundColor = protonColor;
  legendNeutronEl.style.backgroundColor = neutronColor;
  legendElectronEl.style.backgroundColor = electronColorOuter;

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

  speedPlusBtn?.addEventListener("click", () => nudgeSpeed(1));
  speedMinusBtn?.addEventListener("click", () => nudgeSpeed(-1));

  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    const zoomStep = 0.03;
    if (delta > 0) {
      cameraDistanceFactor = Math.min(2.0, cameraDistanceFactor + zoomStep);
    } else {
      cameraDistanceFactor = Math.max(0.6, cameraDistanceFactor - zoomStep);
    }
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
  }, { passive: false });

  function buildShellsForElement(el) {
    const baseNucleusRadius = 40;
    const zFactor = 1 + (el.electrons.length - 1) * 0.3;
    const nucleusRadius = baseNucleusRadius * zFactor;
    const minGap = 42;
    const baseRadius = nucleusRadius + minGap;
    const shells = [];
    const layerCount = el.electrons.length;
    const tiltX = 0.35;
    const tiltY = 0.2;
    for (let i = 0; i < layerCount; i++) {
      const count = el.electrons[i];
      const radius = baseRadius + i * 60;
      const speedBase = 0.045 - i * 0.007;
      shells.push({
        count,
        radius,
        speed: Math.max(0.01, speedBase),
        tiltX,
        tiltY,
        phase: Math.random() * Math.PI * 2
      });
    }
    return shells;
  }

  let shells = buildShellsForElement(currentElement);
  let electrons = [];
  let stars = [];
  let nucleusNucleons = [];

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
    const points = [];
    const spacing = 0.33;
    const radius = 1.0;
    for (let x = -radius; x <= radius; x += spacing) {
      for (let y = -radius; y <= radius; y += spacing) {
        for (let z = -radius; z <= radius; z += spacing) {
          const dist2 = x * x + y * y + z * z;
          if (dist2 <= radius * radius * 0.95) {
            points.push({ x, y, z });
          }
        }
      }
    }
    for (let i = points.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [points[i], points[j]] = [points[j], points[i]];
    }
    const total = Math.min(points.length, desired + 40);
    for (let i = 0; i < total; i++) {
      const isProton = i < Z;
      const p = points[i];
      nucleusNucleons.push({
        x: p.x,
        y: p.y,
        z: p.z,
        type: isProton ? "p" : "n"
      });
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

  function resetView() {
    globalRotY = 0;
    globalRotX = -1.2;
    cameraDistanceFactor = 0.9;
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
  }
  function adjustZoom(delta) {
    cameraDistanceFactor = Math.max(0.6, Math.min(2.0, cameraDistanceFactor + delta));
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
  }

  controlCentralize?.addEventListener("click", resetView);
  controlZoomIn?.addEventListener("click", () => adjustZoom(-0.08));
  controlZoomOut?.addEventListener("click", () => adjustZoom(0.08));

  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
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
    globalRotY += dx * 0.005;
    globalRotX += dy * 0.005;
  });

  canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
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
    globalRotY += dx * 0.005;
    globalRotX += dy * 0.005;
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
  function project(v, width, height) {
    const camZ = cameraDistance;
    const z = camZ - v.z;
    const f = 420 / z;
    return {
      x: width / 2 + v.x * f,
      y: height / 2 + v.y * f,
      scale: f
    };
  }

  function draw() {
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

    const el = currentElement;
    const baseNucleusRadius = 40;
    const zFactor = 1 + (el.electrons.length - 1) * 0.3;
    const nucleusRadius = baseNucleusRadius * zFactor;
    const nucleusPos = project({ x: 0, y: 0, z: 0 }, w, h);
    const nucleusR = nucleusRadius * nucleusPos.scale;
    const useNucleons = nucleusToggle.checked;

    if (!useNucleons) {
      const grad = ctx.createRadialGradient(
        nucleusPos.x - nucleusR * 0.35,
        nucleusPos.y - nucleusR * 0.35,
        nucleusR * 0.1,
        nucleusPos.x,
        nucleusPos.y,
        nucleusR
      );
      grad.addColorStop(0, el.colorNucleus);
      grad.addColorStop(0.55, el.colorCore);
      grad.addColorStop(1, "#0f172a");
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.shadowColor = "rgba(250,250,210,0.9)";
      ctx.shadowBlur = 28;
      ctx.arc(nucleusPos.x, nucleusPos.y, nucleusR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = "rgba(15,23,42,0.98)";
      ctx.arc(nucleusPos.x, nucleusPos.y, nucleusR * 1.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const nucleonPoints = [];
      nucleusNucleons.forEach(nucl => {
        const scaleLocal = nucleusRadius * 0.95;
        let v = {
          x: nucl.x * scaleLocal,
          y: nucl.y * scaleLocal,
          z: nucl.z * scaleLocal
        };
        v = rotateY(v, globalRotY);
        v = rotateX(v, globalRotX);
        nucleonPoints.push({ v, type: nucl.type });
      });
      nucleonPoints.sort((a, b) => a.v.z - b.v.z);
      nucleonPoints.forEach(p => {
        const proj = project(p.v, w, h);
        const baseR = nucleusR * 0.16;
        const r = Math.max(1.5, baseR * (0.72 + 0.22 * proj.scale));
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
        ctx.restore();
      });
    }

    shells.forEach(shell => {
      shell.phase += shell.speed * globalSpeedFactor;
    });

    const points = [];
    const showOrbits = orbitLinesToggle.checked;
    if (showOrbits) {
      shells.forEach(shell => {
        const orbitPoints = [];
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 90) {
          let v = { x: Math.cos(a) * shell.radius, y: 0, z: Math.sin(a) * shell.radius };
          v = rotateX(v, shell.tiltX);
          v = rotateY(v, shell.tiltY);
          v = rotateY(v, globalRotY);
          v = rotateX(v, globalRotX);
          orbitPoints.push(v);
        }
        const screenOrbit = orbitPoints.map(v => project(v, w, h));
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < screenOrbit.length; i++) {
          const p = screenOrbit[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(148,163,184,0.45)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });
    }

    electrons.forEach(e => {
      const shell = shells[e.shellIndex];
      const ang = e.baseAngle + shell.phase * globalSpeedFactor;
      let v = { x: Math.cos(ang) * shell.radius, y: 0, z: Math.sin(ang) * shell.radius };
      v = rotateX(v, shell.tiltX);
      v = rotateY(v, shell.tiltY);
      v = rotateY(v, globalRotY);
      v = rotateX(v, globalRotX);
      points.push({ type: "electron", v, shellIndex: e.shellIndex });
    });

    points.sort((a, b) => b.v.z - a.v.z);
    points.forEach(p => {
      if (p.type === "electron") {
        const proj = project(p.v, w, h);
        if (proj.scale <= 0) return;
        const r = 6 * proj.scale;
        const alpha = 0.55 + 0.45 * (proj.scale);
        ctx.save();
        const gradEl = ctx.createRadialGradient(
          proj.x - r * 0.3, proj.y - r * 0.3, r * 0.2,
          proj.x, proj.y, r
        );
        gradEl.addColorStop(0, "#ffffff");
        gradEl.addColorStop(0.4, electronColorInner);
        gradEl.addColorStop(1, electronColorOuter + "00");
        ctx.globalAlpha = alpha;
        ctx.fillStyle = gradEl;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    requestAnimationFrame(draw);
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
        resetView();
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
})();
