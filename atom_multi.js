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
  const languageBtn = document.getElementById('languageBtn');
  const languageFlagEl = document.getElementById('languageFlag');
  const languageLabelEl = document.getElementById('languageLabel');
  const languageMenuEl = document.getElementById('languageMenu');
  const languageMenuTitleEl = document.getElementById('languageMenuTitle');
  const protonControl = document.getElementById('protonControl');
  const neutronControl = document.getElementById('neutronControl');
  const electronControl = document.getElementById('electronControl');
  const backgroundControl = document.getElementById('backgroundControl');
  const colorMenuEl = document.getElementById('colorMenu');
  const colorMenuGridEl = document.getElementById('colorMenuGrid');
  const controlCentralize = document.getElementById('controlCentralize');
  const controlZoomIn = document.getElementById('controlZoomIn');
  const controlZoomOut = document.getElementById('controlZoomOut');
  const viewArrowUp = document.getElementById('viewArrowUp');
  const viewArrowDown = document.getElementById('viewArrowDown');
  const viewArrowLeft = document.getElementById('viewArrowLeft');
  const viewArrowRight = document.getElementById('viewArrowRight');

  const panelTitleEl = document.getElementById('panelTitle');
  const panelSubtitleEl = document.getElementById('panelSubtitle');
  const currentSectionTitleEl = document.getElementById('currentSectionTitle');
  const visualSectionTitleEl = document.getElementById('visualSectionTitle');
  const speedLabelTextEl = document.getElementById('speedLabelText');
  const orbitLinesLabelEl = document.getElementById('orbitLinesLabel');
  const axesToggleLabelEl = document.getElementById('axesToggleLabel');
  const chargeToggleLabelEl = document.getElementById('chargeToggleLabel');
  const shellVisibilityPanelEl = document.getElementById('shellVisibilityPanel');
  const shellVisibilityTitleEl = document.getElementById('shellVisibilityTitle');
  const navigationHintEl = document.getElementById('navigationHint');
  const shellButtonsEl = document.getElementById('shellButtons');
  const shellAllBtn = document.getElementById('shellAllBtn');
  const shellNoneBtn = document.getElementById('shellNoneBtn');
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
  const overlayTopNameEl = document.getElementById('overlayTopName');
  const legendProtonEl = document.getElementById('legendProton');
  const legendNeutronEl = document.getElementById('legendNeutron');
  const legendElectronEl = document.getElementById('legendElectron');
  const legendBackgroundEl = document.getElementById('legendBackground');
  const legendProtonTextEl = document.getElementById('legendProtonText');
  const legendNeutronTextEl = document.getElementById('legendNeutronText');
  const legendElectronTextEl = document.getElementById('legendElectronText');
  const legendBackgroundTextEl = document.getElementById('legendBackgroundText');
  const referenceBtn = document.getElementById('referenceBtn');
  const overlayToggleBtn = document.getElementById('overlayToggle');
  const elementOverlayEl = document.getElementById('elementOverlay');
  const copyBtn = document.getElementById('copyBtn');
  const copyMenuEl = document.getElementById('copyMenu');
  const copyMenuTitleEl = document.getElementById('copyMenuTitle');
  const copyOptionTextEl = document.getElementById('copyOptionText');
  const copyOptionMarkdownEl = document.getElementById('copyOptionMarkdown');
  const copyOptionHtmlEl = document.getElementById('copyOptionHtml');
  const copyOptionJsonEl = document.getElementById('copyOptionJson');
  const copyOptionCsvEl = document.getElementById('copyOptionCsv');
  const shareBtn = document.getElementById('shareBtn');
  const shareMenuEl = document.getElementById('shareMenu');
  const shareMenuTitleEl = document.getElementById('shareMenuTitle');
  const infoBtn = document.getElementById('infoBtn');
  const infoDialogEl = document.getElementById('infoDialog');
  const infoDialogBackdropEl = document.getElementById('infoDialogBackdrop');
  const infoDialogTitleEl = document.getElementById('infoDialogTitle');
  const infoDialogContentEl = document.getElementById('infoDialogContent');
  const infoDialogCloseEl = document.getElementById('infoDialogClose');
  const infoDialogOpenInTabEl = document.getElementById('infoDialogOpenInTab');
  const infoDialogOpenInTabLabelEl = document.getElementById('infoDialogOpenInTabLabel');
  const shareHideControllersEl = document.getElementById('shareHideControllers');
  const shareHideControllersLabelEl = document.getElementById('shareHideControllersLabel');
  const toastContainerEl = document.getElementById('toastContainer');

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
      languageMenuTitle: "Language:",
      languageMenuLabel: "Language",
      zoomInLabel: "Zoom in",
      zoomOutLabel: "Zoom out",
      speedUp: "Increase speed",
      speedDown: "Decrease speed",
      protonColorLabel: "Proton color",
      neutronColorLabel: "Neutron color",
      electronColorLabel: "Electron color",
      backgroundColorLabel: "Background color",
      backgroundLabel: "Scene",
      chargeToggleLabel: "Show charges",
      shellVisibilityLabel: "Shells",
      shellVisibilityAriaLabel: "Select shells to display",
      shellAllLabel: "All",
      shellNoneLabel: "None",
      navigationHint: "Use arrow keys to navigate the element menu and the view.",
      copyButtonLabel: "Copy element details",
      copyMenuTitle: "Copy content as:",
      copyMenuAriaLabel: "Copy content as",
      copyOptionText: "Plain text",
      copyOptionMarkdown: "Markdown",
      copyOptionHtml: "HTML",
      copyOptionJson: "JSON",
      copyOptionCsv: "CSV",
      referenceLabel: "Reference",
      nameLabel: "Name",
      symbolLabel: "Symbol",
      colorNames: {
        red: "Red",
        orange: "Orange",
        yellow: "Yellow",
        green: "Green",
        cyan: "Cyan",
        blue: "Blue",
        indigo: "Indigo",
        violet: "Violet",
        black: "Black",
        darkGray: "Dark gray",
        mediumGray: "Gray",
        lightGray: "Light gray",
        white: "White"
      },
      playLabel: "Play",
      pauseLabel: "Pause",
      shareLabel: "Share visualization",
      shareMenuTitle: "Share:",
      shareSystem: "Share...",
      shareWhatsApp: "WhatsApp",
      shareFacebook: "Facebook",
      shareInstagram: "Instagram",
      shareX: "X",
      shareCopyLink: "Copy link",
      shareCopied: "Link copied to clipboard.",
      shareInstagramHint: "Link copied. Paste it on Instagram to share.",
      shareHideControllers: "Hide controllers in the shared link",
      shareLinkPrompt: "Copy this link:",
      infoLabel: "About this application",
      infoCloseLabel: "Close",
      infoOpenInTab: "Open in new tab"
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
      languageMenuTitle: "Idioma:",
      languageMenuLabel: "Idioma",
      zoomInLabel: "Aproximar",
      zoomOutLabel: "Afastar",
      speedUp: "Aumentar velocidade",
      speedDown: "Diminuir velocidade",
      protonColorLabel: "Cor do próton",
      neutronColorLabel: "Cor do nêutron",
      electronColorLabel: "Cor do elétron",
      backgroundColorLabel: "Cor do fundo",
      backgroundLabel: "Fundo",
      chargeToggleLabel: "Mostrar cargas",
      shellVisibilityLabel: "Camadas",
      shellVisibilityAriaLabel: "Selecione as camadas para exibir",
      shellAllLabel: "Todas",
      shellNoneLabel: "Nenhuma",
      navigationHint: "Use as setas para navegar no menu de elementos e na visualização.",
      copyButtonLabel: "Copiar detalhes do elemento",
      copyMenuTitle: "Copiar conteúdo como:",
      copyMenuAriaLabel: "Copiar conteúdo como",
      copyOptionText: "Texto simples",
      copyOptionMarkdown: "Markdown",
      copyOptionHtml: "HTML",
      copyOptionJson: "JSON",
      copyOptionCsv: "CSV",
      referenceLabel: "Referência",
      nameLabel: "Nome",
      symbolLabel: "Símbolo",
      colorNames: {
        red: "Vermelho",
        orange: "Laranja",
        yellow: "Amarelo",
        green: "Verde",
        cyan: "Ciano",
        blue: "Azul",
        indigo: "Índigo",
        violet: "Violeta",
        black: "Preto",
        darkGray: "Cinza escuro",
        mediumGray: "Cinza",
        lightGray: "Cinza claro",
        white: "Branco"
      },
      playLabel: "Reproduzir",
      pauseLabel: "Pausar",
      shareLabel: "Compartilhar visualização",
      shareMenuTitle: "Compartilhar:",
      shareSystem: "Compartilhar...",
      shareWhatsApp: "WhatsApp",
      shareFacebook: "Facebook",
      shareInstagram: "Instagram",
      shareX: "X",
      shareCopyLink: "Copiar link",
      shareCopied: "Link copiado para a área de transferência.",
      shareInstagramHint: "Link copiado. Cole no Instagram para compartilhar.",
      shareHideControllers: "Ocultar controles no link compartilhado",
      shareLinkPrompt: "Copie este link:",
      infoLabel: "Sobre esta aplicação",
      infoCloseLabel: "Fechar",
      infoOpenInTab: "Abrir em nova aba"
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
      languageMenuTitle: "Idioma:",
      languageMenuLabel: "Idioma",
      zoomInLabel: "Acercar",
      zoomOutLabel: "Alejar",
      speedUp: "Aumentar velocidad",
      speedDown: "Disminuir velocidad",
      protonColorLabel: "Color del protón",
      neutronColorLabel: "Color del neutrón",
      electronColorLabel: "Color del electrón",
      backgroundColorLabel: "Color de fondo",
      backgroundLabel: "Fondo",
      chargeToggleLabel: "Mostrar cargas",
      shellVisibilityLabel: "Capas",
      shellVisibilityAriaLabel: "Selecciona las capas a mostrar",
      shellAllLabel: "Todas",
      shellNoneLabel: "Ninguna",
      navigationHint: "Usa las flechas para navegar el menú y la vista.",
      copyButtonLabel: "Copiar detalles del elemento",
      copyMenuTitle: "Copiar contenido como:",
      copyMenuAriaLabel: "Copiar contenido como",
      copyOptionText: "Texto plano",
      copyOptionMarkdown: "Markdown",
      copyOptionHtml: "HTML",
      copyOptionJson: "JSON",
      copyOptionCsv: "CSV",
      referenceLabel: "Referencia",
      nameLabel: "Nombre",
      symbolLabel: "Símbolo",
      colorNames: {
        red: "Rojo",
        orange: "Naranja",
        yellow: "Amarillo",
        green: "Verde",
        cyan: "Cian",
        blue: "Azul",
        indigo: "Índigo",
        violet: "Violeta",
        black: "Negro",
        darkGray: "Gris oscuro",
        mediumGray: "Gris",
        lightGray: "Gris claro",
        white: "Blanco"
      },
      playLabel: "Reproducir",
      pauseLabel: "Pausar",
      shareLabel: "Compartir visualización",
      shareMenuTitle: "Compartir:",
      shareSystem: "Compartir...",
      shareWhatsApp: "WhatsApp",
      shareFacebook: "Facebook",
      shareInstagram: "Instagram",
      shareX: "X",
      shareCopyLink: "Copiar enlace",
      shareCopied: "Enlace copiado al portapapeles.",
      shareInstagramHint: "Enlace copiado. Pégalo en Instagram para compartir.",
      shareHideControllers: "Ocultar controles en el enlace compartido",
      shareLinkPrompt: "Copia este enlace:",
      infoLabel: "Acerca de esta aplicación",
      infoCloseLabel: "Cerrar",
      infoOpenInTab: "Abrir en una nueva pestaña"
    }
  };

  function parseBooleanParam(value) {
    if (value == null) return null;
    const raw = String(value).trim().toLowerCase();
    if (["1","true","yes","on"].includes(raw)) return true;
    if (["0","false","no","off"].includes(raw)) return false;
    return null;
  }

  function parseIndexParam(value) {
    if (value == null) return null;
    const idx = Number.parseInt(String(value), 10);
    return Number.isNaN(idx) ? null : idx;
  }

  function parseFloatParam(value) {
    if (value == null) return null;
    const v = Number.parseFloat(String(value));
    return Number.isFinite(v) ? v : null;
  }

  function parseShellsParam(value) {
    if (value == null) return null;
    const raw = String(value).trim().toLowerCase();
    if (!raw) return null;
    if (raw === "all") return { mode: "all" };
    if (raw === "none") return { mode: "none" };
    const parts = raw.split(",").map(s => s.trim()).filter(Boolean);
    const indices = [];
    for (const p of parts) {
      const n = Number.parseInt(p, 10);
      if (Number.isNaN(n) || n < 0) continue;
      indices.push(n);
    }
    return { mode: "set", indices };
  }

  const queryParams = new URLSearchParams(window.location.search || "");
  const queryElementRaw = (queryParams.get("element") || queryParams.get("symbol") || "").trim();
  const queryLanguage = (queryParams.get("lang") || queryParams.get("language") || "").trim().toLowerCase();
  const queryOrbits = parseBooleanParam(queryParams.get("orbits"));
  const queryAxes = parseBooleanParam(queryParams.get("axes"));
  const queryCharges = parseBooleanParam(queryParams.get("charges"));
  const queryPaused = parseBooleanParam(queryParams.get("paused"));
  const querySpeed = parseFloatParam(queryParams.get("speed"));
  const queryShells = parseShellsParam(queryParams.get("shells"));
  const queryOverlayRaw = (queryParams.get("overlay") || "").trim().toLowerCase();
  const queryUiRaw = (queryParams.get("ui") || "").trim().toLowerCase();
  const queryLocked = parseBooleanParam(queryParams.get("locked")) === true;
  const queryTransparent = parseBooleanParam(queryParams.get("transparent")) === true;
  const queryStarsRaw = parseBooleanParam(queryParams.get("stars"));
  // `stars` defaults to true (the existing behavior). `stars=0` removes them.
  const queryShowStars = queryStarsRaw == null ? true : queryStarsRaw;
  const queryZoom = parseFloatParam(queryParams.get("zoom"));
  const queryRotX = parseFloatParam(queryParams.get("rotX") ?? queryParams.get("rotx"));
  const queryRotY = parseFloatParam(queryParams.get("rotY") ?? queryParams.get("roty"));
  const queryColorIndexes = {
    proton: parseIndexParam(queryParams.get("proton") ?? queryParams.get("protonColor")),
    neutron: parseIndexParam(queryParams.get("neutron") ?? queryParams.get("neutronColor")),
    electron: parseIndexParam(queryParams.get("electron") ?? queryParams.get("electronColor")),
    background: parseIndexParam(queryParams.get("background") ?? queryParams.get("backgroundColor"))
  };

  // Will be defined a bit later, but we need declarations now so that
  // i18n<->details functions don't explode due to TDZ.
  let currentLanguage = (i18n[queryLanguage] ? queryLanguage : "pt");
  let currentSymbol = "H"; // default
  let elementMap = {};      // will be filled after periodicElements
  let currentElement = null;
  let isPaused = false;
  let pausedRedrawPending = false;
  let visibleShellSet = new Set();
  let cellsBySymbol = {};
  let visibleSymbols = [];
  let focusContext = "scene"; // "scene" or "elements"
  let viewHoldTimer = null;
  let overlayExpanded = true;
  const shellLetters = ["K","L","M","N","O","P","Q","R","S"];
  const languageOptions = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" }
  ];

  function stopViewHold() {
    if (viewHoldTimer) {
      clearInterval(viewHoldTimer);
      viewHoldTimer = null;
    }
  }

  function startViewHold(action) {
    stopViewHold();
    action();
    viewHoldTimer = setInterval(action, 90);
  }

  function updatePlayPauseUI() {
    if (!speedPlayPauseBtn) return;
    const t = i18n[currentLanguage] || i18n.en;
    const label = isPaused ? t.playLabel : t.pauseLabel;
    speedPlayPauseBtn.textContent = isPaused ? "▶" : "⏸";
    speedPlayPauseBtn.setAttribute("aria-label", label);
    speedPlayPauseBtn.setAttribute("title", label);
  }

  function updateLanguageButton(lang) {
    const choice = languageOptions.find((opt) => opt.code === lang) || languageOptions[0];
    if (languageFlagEl) languageFlagEl.textContent = choice.flag;
    if (languageLabelEl) languageLabelEl.textContent = choice.label;
  }

  function setOverlayExpanded(expanded, { skipClassUpdate, skipUrlSync } = {}) {
    if (!elementOverlayEl) return;
    const nextExpanded = Boolean(expanded);
    overlayExpanded = nextExpanded;
    const label = overlayExpanded ? "Collapse element details" : "Expand element details";
    overlayToggleBtn?.setAttribute("aria-expanded", overlayExpanded ? "true" : "false");
    overlayToggleBtn?.setAttribute("aria-label", label);
    overlayToggleBtn?.setAttribute("title", label);
    overlayToggleBtn?.classList.toggle("expanded", overlayExpanded);
    if (!skipClassUpdate) {
      elementOverlayEl.classList.toggle("collapsed", !overlayExpanded);
    }
    if (!skipUrlSync) syncUrlState();
  }

  // --- URL state synchronization ----------------------------------------
  // Visualization-only parameters are reflected in the URL using
  // history.replaceState so the user can copy/share the link at any moment.
  // Note: `info` and `share` actions are intentionally NOT URL-synced.
  function colorIndexFromValue(color) {
    if (!color) return -1;
    const idx = sharedColorOptions.findIndex((opt) => opt.value === color);
    return idx;
  }

  function defaultZoomFactor() { return 0.9; }
  function defaultRotX() { return -1.2; }
  function defaultRotY() { return 0; }

  function buildShareUrl(opts = {}) {
    const hideControllers = !!opts.hideControllers;
    const params = new URLSearchParams();
    if (currentSymbol) params.set("element", currentSymbol);
    if (currentLanguage) params.set("lang", currentLanguage);
    if (orbitLinesToggle?.checked) params.set("orbits", "1");
    if (axesToggle?.checked) params.set("axes", "1");
    if (chargeToggle?.checked) params.set("charges", "1");
    if (isPaused) params.set("paused", "1");
    const speedVal = parseFloat(speedRange?.value || "1");
    if (Number.isFinite(speedVal) && Math.abs(speedVal - 1) > 1e-6) {
      params.set("speed", speedVal.toFixed(2).replace(/\.?0+$/, ""));
    }
    // Shells: omit when "all"
    const totalShells = shells?.length || 0;
    if (totalShells > 0) {
      const visible = Array.from(visibleShellSet).filter(i => i < totalShells).sort((a, b) => a - b);
      if (visible.length === 0) {
        params.set("shells", "none");
      } else if (visible.length < totalShells) {
        params.set("shells", visible.join(","));
      }
    }
    if (!overlayExpanded) params.set("overlay", "collapsed");
    if (document.body.classList.contains("ui-hidden")) params.set("ui", "hidden");
    if (Math.abs(cameraDistanceFactor - defaultZoomFactor()) > 1e-3) {
      params.set("zoom", cameraDistanceFactor.toFixed(2));
    }
    if (Math.abs(globalRotX - defaultRotX()) > 1e-3) {
      params.set("rotX", globalRotX.toFixed(2));
    }
    if (Math.abs(globalRotY - defaultRotY()) > 1e-3) {
      params.set("rotY", globalRotY.toFixed(2));
    }
    if (hideControllers) {
      params.set("locked", "1");
      // When locking the controllers we don't need the redundant `ui=hidden`.
      params.delete("ui");
    }
    // Preserve transparency / stars flags so reloads and shared links keep them.
    if (queryTransparent) params.set("transparent", "1");
    if (queryStarsRaw === false) params.set("stars", "0");
    const colorParticles = [
      ["proton", protonColor, defaultProtonColor],
      ["neutron", neutronColor, defaultNeutronColor],
      ["electron", electronColorOuter, defaultElectronColorOuter],
      ["background", backgroundColor, defaultBackgroundColor]
    ];
    colorParticles.forEach(([name, value, defaultVal]) => {
      if (value === defaultVal) return;
      const idx = colorIndexFromValue(value);
      if (idx >= 0) params.set(name, String(idx));
    });
    const url = new URL(window.location.href);
    url.search = params.toString() ? "?" + params.toString() : "";
    url.hash = "";
    return url.toString();
  }

  let urlSyncReady = false;
  let urlSyncScheduled = false;
  function syncUrlState() {
    if (!urlSyncReady) return;
    if (urlSyncScheduled) return;
    urlSyncScheduled = true;
    requestAnimationFrame(() => {
      urlSyncScheduled = false;
      try {
        // Preserve the `locked` flag so reloading the page keeps the UI locked.
        const target = buildShareUrl({ hideControllers: queryLocked });
        const current = window.location.href;
        if (target !== current) {
          window.history.replaceState({}, "", target);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("URL sync failed", err);
      }
    });
  }


  function getCopyPayload() {
    const el = currentElement || elementMap[currentSymbol];
    if (!el) return null;
    const elementName = getElementName(el);
    const shells = (el.electrons || []).join(", ");
    const neutrons = (typeof el.neutrons === "number") ? el.neutrons : approximateNeutrons(el.Z);
    return {
      name: elementName,
      symbol: el.symbol,
      atomicNumber: el.Z,
      protons: el.Z,
      neutrons,
      shells,
      reference: el.reference || ""
    };
  }

  function toCsvRow(value) {
    const text = String(value ?? "");
    if (/[",\n]/.test(text)) {
      return `"${text.replace(/"/g, "\"\"")}"`;
    }
    return text;
  }

  function buildCopyContent(format) {
    const payload = getCopyPayload();
    if (!payload) return "";
    const { name, symbol, atomicNumber, protons, neutrons, shells, reference } = payload;
    const t = i18n[currentLanguage] || i18n.en;
    const atomicLabel = t.overlayAtomicLabel || "Atomic #";
    const protonsLabel = t.overlayProtonsLabel || "Protons";
    const neutronsLabel = t.overlayNeutronsLabel || "Neutrons";
    const shellsLabel = t.overlayShellsLabel || "Shells";
    const referenceLabel = t.referenceLabel || "Reference";

    if (format === "markdown") {
      return [
        `## ${name} (${symbol})`,
        `- ${atomicLabel}: ${atomicNumber}`,
        `- ${protonsLabel}: ${protons}`,
        `- ${neutronsLabel}: ${neutrons}`,
        `- ${shellsLabel}: \`${shells}\``,
        reference ? `- ${referenceLabel}: ${reference}` : null
      ].filter(Boolean).join("\n");
    }

    if (format === "html") {
      const referenceHtml = reference ? `<dt>${referenceLabel}</dt><dd><a href="${reference}">${reference}</a></dd>` : "";
      return [
        `<article>`,
        `<header>`,
        `<h2>${name} (${symbol})</h2>`,
        `<p><strong>${atomicLabel}:</strong> ${atomicNumber}</p>`,
        `</header>`,
        `<section>`,
        `<dl>`,
        `<dt>${protonsLabel}</dt><dd>${protons}</dd>`,
        `<dt>${neutronsLabel}</dt><dd>${neutrons}</dd>`,
        `<dt>${shellsLabel}</dt><dd><code>${shells}</code></dd>`,
        referenceHtml,
        `</dl>`,
        `</section>`,
        `</article>`
      ].filter(Boolean).join("");
    }

    if (format === "json") {
      const jsonLabels = {
        name: t.nameLabel || "Name",
        symbol: t.symbolLabel || "Symbol",
        atomic: atomicLabel,
        protons: protonsLabel,
        neutrons: neutronsLabel,
        shells: shellsLabel,
        reference: referenceLabel
      };
      return JSON.stringify({
        [jsonLabels.name]: name,
        [jsonLabels.symbol]: symbol,
        [jsonLabels.atomic]: atomicNumber,
        [jsonLabels.protons]: protons,
        [jsonLabels.neutrons]: neutrons,
        [jsonLabels.shells]: shells.split(", ").filter(Boolean),
        [jsonLabels.reference]: reference || null
      }, null, 2);
    }

    if (format === "csv") {
      const header = [
        t.nameLabel || "Name",
        t.symbolLabel || "Symbol",
        atomicLabel,
        protonsLabel,
        neutronsLabel,
        shellsLabel,
        referenceLabel
      ].map(toCsvRow);
      const row = [
        toCsvRow(name),
        toCsvRow(symbol),
        toCsvRow(atomicNumber),
        toCsvRow(protons),
        toCsvRow(neutrons),
        toCsvRow(shells),
        toCsvRow(reference)
      ].join(",");
      return `${header.join(",")}\n${row}`;
    }

    return [
      `${name} (${symbol})`,
      `${atomicLabel}: ${atomicNumber}`,
      `${protonsLabel}: ${protons}`,
      `${neutronsLabel}: ${neutrons}`,
      `${shellsLabel}: ${shells}`,
      reference ? `${referenceLabel}: ${reference}` : null
    ].filter(Boolean).join("\n");
  }

  function openCopyMenu() {
    if (!copyMenuEl || !copyBtn) return;
    openMenu(copyMenuEl, copyBtn);
  }

  function closeCopyMenu() {
    if (!copyMenuEl) return;
    closeMenu(copyMenuEl, copyBtn);
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
    if (shellVisibilityTitleEl) shellVisibilityTitleEl.textContent = t.shellVisibilityLabel;
    if (shellVisibilityPanelEl) shellVisibilityPanelEl.setAttribute("aria-label", t.shellVisibilityAriaLabel);
    if (navigationHintEl) navigationHintEl.textContent = t.navigationHint;
    if (shellAllBtn) shellAllBtn.textContent = t.shellAllLabel;
    if (shellNoneBtn) shellNoneBtn.textContent = t.shellNoneLabel;
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
    if (legendBackgroundTextEl) legendBackgroundTextEl.textContent = t.backgroundLabel;
    overlayAtomicLabelEl.textContent = t.overlayAtomicLabel;
    overlayProtonsLabelEl.textContent = t.overlayProtonsLabel;
    overlayNeutronsLabelEl.textContent = t.overlayNeutronsLabel;
    overlayShellsLabelEl.textContent = t.overlayShellsLabel;
    overlayZEl.setAttribute("title", t.zTooltip);
    if (languageBtn) {
      languageBtn.setAttribute("aria-label", t.languageMenuLabel);
      languageBtn.setAttribute("title", t.languageMenuLabel);
    }
    if (languageMenuEl) languageMenuEl.setAttribute("aria-label", t.languageMenuLabel);
    if (languageMenuTitleEl) languageMenuTitleEl.textContent = t.languageMenuTitle;
    if (copyBtn) {
      copyBtn.setAttribute("aria-label", t.copyButtonLabel);
      copyBtn.setAttribute("title", t.copyButtonLabel);
    }
    if (copyMenuEl) copyMenuEl.setAttribute("aria-label", t.copyMenuAriaLabel);
    if (copyMenuTitleEl) copyMenuTitleEl.textContent = t.copyMenuTitle;
    if (copyOptionTextEl) copyOptionTextEl.textContent = t.copyOptionText;
    if (copyOptionMarkdownEl) copyOptionMarkdownEl.textContent = t.copyOptionMarkdown;
    if (copyOptionHtmlEl) copyOptionHtmlEl.textContent = t.copyOptionHtml;
    if (copyOptionJsonEl) copyOptionJsonEl.textContent = t.copyOptionJson;
    if (copyOptionCsvEl) copyOptionCsvEl.textContent = t.copyOptionCsv;
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
    backgroundControl?.setAttribute("aria-label", t.backgroundColorLabel);
    backgroundControl?.setAttribute("title", t.backgroundColorLabel);
    updateLanguageButton(currentLanguage);
  }

  function ensureVisibleShellSet(total) {
    const next = new Set();
    for (let i = 0; i < total; i++) {
      if (visibleShellSet.has(i)) next.add(i);
    }
    visibleShellSet = next;
  }

  function rebuildShellButtons(total) {
    if (!shellButtonsEl) return;
    ensureVisibleShellSet(total);
    shellButtonsEl.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "shell-btn";
      btn.textContent = shellLetters[i] || String(i + 1);
      const selected = visibleShellSet.has(i);
      if (selected) btn.classList.add("selected");
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
      btn.setAttribute("data-shell-index", String(i));
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (visibleShellSet.has(i)) visibleShellSet.delete(i);
        else visibleShellSet.add(i);
        rebuildShellButtons(total);
        requestPausedRedraw();
        syncUrlState();
      });
      shellButtonsEl.appendChild(btn);
    }
  }

  function updateShellVisibilityUI(totalShellCountOverride) {
    const total = Math.max(1, Number(totalShellCountOverride ?? currentElement?.electrons?.length ?? 1));
    ensureVisibleShellSet(total);
    rebuildShellButtons(total);
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
      syncUrlState();
    });
  }

  orbitLinesToggle?.addEventListener("change", () => { requestPausedRedraw(); syncUrlState(); });
  axesToggle?.addEventListener("change", () => { requestPausedRedraw(); syncUrlState(); });

  if (queryOrbits != null && orbitLinesToggle) orbitLinesToggle.checked = queryOrbits;
  if (queryAxes != null && axesToggle) axesToggle.checked = queryAxes;
  if (queryCharges != null && chargeToggle) {
    chargeToggle.checked = queryCharges;
    showCharges = queryCharges;
  }
  if (queryPaused != null) {
    isPaused = queryPaused;
  }
  if (querySpeed != null && speedRange) {
    const min = parseFloat(speedRange.min || "0");
    const max = parseFloat(speedRange.max || "5");
    const clamped = Math.max(min, Math.min(max, querySpeed));
    speedRange.value = String(clamped);
    globalSpeedFactor = clamped;
  }
  if (queryUiRaw === "hidden") {
    document.body.classList.add("ui-hidden");
  }
  if (queryLocked) {
    document.body.classList.add("ui-hidden");
    document.body.classList.add("ui-locked");
  }
  if (queryTransparent) {
    document.body.classList.add("bg-transparent");
    document.documentElement.classList.add("bg-transparent");
  }

  function openLanguageMenu() {
    if (!languageMenuEl || !languageBtn) return;
    openMenu(languageMenuEl, languageBtn, languageBtn);
  }

  function closeLanguageMenu() {
    if (!languageMenuEl || !languageBtn) return;
    closeMenu(languageMenuEl, languageBtn);
  }

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLanguage = lang;
    applyLanguage(currentLanguage);
    buildPeriodicGrid();
    updateDetails(currentSymbol);
    if (isColorMenuOpen() && openParticle) {
      rebuildColorMenu(openParticle);
    }
    if (typeof renderInfoDialogContent === "function") renderInfoDialogContent();
    syncUrlState();
  }

  function openMenu(menuEl, anchorEl, toggleEl = anchorEl) {
    if (!menuEl || !anchorEl) return;
    const wrapper = document.getElementById("canvasWrapper");
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();
    const btnRect = anchorEl.getBoundingClientRect();
    const top = btnRect.bottom - wrapperRect.top + 8;
    menuEl.style.top = `${top}px`;
    menuEl.setAttribute("data-open", "true");
    if (toggleEl) toggleEl.setAttribute("aria-expanded", "true");
    const menuRect = menuEl.getBoundingClientRect();
    let left = btnRect.left - wrapperRect.left;
    const maxLeft = wrapperRect.width - menuRect.width - 8;
    if (left > maxLeft) left = Math.max(8, maxLeft);
    if (left < 8) left = 8;
    menuEl.style.left = `${left}px`;
  }

  function closeMenu(menuEl, toggleEl) {
    if (!menuEl) return;
    menuEl.setAttribute("data-open", "false");
    toggleEl?.setAttribute("aria-expanded", "false");
  }

  const defaultProtonColor = "#2563eb";
  const defaultNeutronColor = "#ffffff";
  const defaultElectronColorOuter = "#ff0000";
  const defaultBackgroundColor = "#000000";
  let protonColor = defaultProtonColor;
  let neutronColor = defaultNeutronColor;
  let electronColorOuter = defaultElectronColorOuter;
  let electronColorInner = "#ff8080";
  let backgroundColor = defaultBackgroundColor;
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

  electronColorInner = computeElectronInner(electronColorOuter);

  function applyBackgroundColor(color) {
    if (!color) return;
    if (queryTransparent) {
      document.documentElement.style.setProperty("--bg-solid", "transparent");
      return;
    }
    document.documentElement.style.setProperty("--bg-solid", color);
  }

  function setLegendColors() {
    if (legendProtonEl) legendProtonEl.style.backgroundColor = protonColor;
    if (legendNeutronEl) legendNeutronEl.style.backgroundColor = neutronColor;
    if (legendElectronEl) legendElectronEl.style.backgroundColor = electronColorOuter;
    if (legendBackgroundEl) legendBackgroundEl.style.backgroundColor = backgroundColor;
  }

  // Load saved colors (disabled-by-default, just restores when present).
  try {
    const savedProton = localStorage.getItem("atomicExplorerColorProton");
    const savedNeutron = localStorage.getItem("atomicExplorerColorNeutron");
    const savedElectron = localStorage.getItem("atomicExplorerColorElectron");
    const savedBackground = localStorage.getItem("atomicExplorerColorBackground");
    if (savedProton) protonColor = savedProton;
    if (savedNeutron) neutronColor = savedNeutron;
    if (savedElectron) {
      electronColorOuter = savedElectron;
      electronColorInner = computeElectronInner(savedElectron);
    }
    if (savedBackground) backgroundColor = savedBackground;
  } catch (_) {}


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
    { value: "#ff0000", nameKey: "red" },
    { value: "#ff7a00", nameKey: "orange" },
    { value: "#ffd400", nameKey: "yellow" },
    { value: "#22c55e", nameKey: "green" },
    { value: "#00d5ff", nameKey: "cyan" },
    { value: "#0047ff", nameKey: "blue" },
    { value: "#7c3aed", nameKey: "indigo" },
    { value: "#d946ef", nameKey: "violet" },
    // Neutrals
    { value: "#000000", nameKey: "black" },
    { value: "#1f2937", nameKey: "darkGray" },
    { value: "#4b5563", nameKey: "mediumGray" },
    { value: "#9ca3af", nameKey: "lightGray" },
    { value: "#ffffff", nameKey: "white" }
  ];

  function resolveColorFromIndex(index) {
    if (index == null) return null;
    const safeIndex = Math.max(0, Math.min(sharedColorOptions.length - 1, index));
    return sharedColorOptions[safeIndex]?.value || null;
  }

  const queryProtonColor = resolveColorFromIndex(queryColorIndexes.proton);
  const queryNeutronColor = resolveColorFromIndex(queryColorIndexes.neutron);
  const queryElectronColor = resolveColorFromIndex(queryColorIndexes.electron);
  const queryBackgroundColor = resolveColorFromIndex(queryColorIndexes.background);
  if (queryProtonColor) protonColor = queryProtonColor;
  if (queryNeutronColor) neutronColor = queryNeutronColor;
  if (queryElectronColor) {
    electronColorOuter = queryElectronColor;
    electronColorInner = computeElectronInner(queryElectronColor);
  }
  if (queryBackgroundColor) backgroundColor = queryBackgroundColor;

  setLegendColors();
  applyBackgroundColor(backgroundColor);

  function normalizeSymbol(raw) {
    const cleaned = String(raw || "").trim();
    if (!cleaned) return "";
    return cleaned[0].toUpperCase() + cleaned.slice(1).toLowerCase();
  }

  function resolveSymbolFromQuery(raw, elements) {
    if (!raw) return "";
    const trimmed = String(raw).trim();
    const lowered = trimmed.toLowerCase();
    if (lowered === "first") return elements[0]?.symbol || "";
    if (lowered === "last") return elements[elements.length - 1]?.symbol || "";
    const num = Number.parseInt(trimmed, 10);
    if (!Number.isNaN(num)) {
      const matchByNumber = elements.find((el) => el.Z === num);
      return matchByNumber?.symbol || "";
    }
    return normalizeSymbol(trimmed);
  }

  function persistParticleColor(particle, color) {
    try {
      if (particle === "proton") localStorage.setItem("atomicExplorerColorProton", color);
      if (particle === "neutron") localStorage.setItem("atomicExplorerColorNeutron", color);
      if (particle === "electron") localStorage.setItem("atomicExplorerColorElectron", color);
      if (particle === "background") localStorage.setItem("atomicExplorerColorBackground", color);
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
    if (particle === "background") {
      backgroundColor = color;
      applyBackgroundColor(color);
    }
    persistParticleColor(particle, color);
    setLegendColors();
    requestPausedRedraw();
    syncUrlState();
  }

  let openParticle = null;
  let openControl = null;

  function setUiHidden(hidden) {
    document.body.classList.toggle("ui-hidden", !!hidden);
    if (hidden) closeColorMenu();
    syncUrlState();
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
    backgroundControl?.setAttribute("aria-expanded", "false");
    openParticle = null;
    openControl = null;
  }

  function rebuildColorMenu(particle) {
    if (!colorMenuGridEl) return;
    const t = i18n[currentLanguage] || i18n.en;
    colorMenuGridEl.innerHTML = "";
    const options = sharedColorOptions;
    const selectedColor = currentColorForParticle(particle);

    options.forEach(({ value: color, nameKey }) => {
      const colorName = (t.colorNames && t.colorNames[nameKey]) || (i18n.en.colorNames && i18n.en.colorNames[nameKey]) || color;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "color-option";
      btn.setAttribute("role", "menuitemradio");
      btn.setAttribute("data-color", color);
      btn.setAttribute("aria-checked", color === selectedColor ? "true" : "false");
      btn.innerHTML = [
        `<div class="color-option-content">`,
        `<span class="dot" style="background:${color};box-shadow:inset 0 0 0 1px rgba(15,23,42,0.55)"></span><span class="color-option-label">${colorName}</span>`,
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
    if (particle === "background") return backgroundColor;
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
      const menuWidth = controlRect.width;
      colorMenuEl.style.left = `${left}px`;
      colorMenuEl.style.top = `${top}px`;
      colorMenuEl.style.width = `${menuWidth}px`;
    }

    colorMenuEl.setAttribute("data-open", "true");
    protonControl?.setAttribute("aria-expanded", particle === "proton" ? "true" : "false");
    neutronControl?.setAttribute("aria-expanded", particle === "neutron" ? "true" : "false");
    electronControl?.setAttribute("aria-expanded", particle === "electron" ? "true" : "false");
    backgroundControl?.setAttribute("aria-expanded", particle === "background" ? "true" : "false");

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
  const loadedElements = (typeof elements !== "undefined" && Array.isArray(elements)) ? elements : [];
  const periodicElements = loadedElements.map((el) => {
    const Z = el.atomic_number ?? el.protons ?? 0;
    return {
      Z,
      symbol: el.symbol,
      nameEN: el.name?.en || el.symbol,
      namePT: el.name?.pt || el.name?.en || el.symbol,
      nameES: el.name?.es || el.name?.en || el.symbol,
      electronShells: el.electron_shells || {},
      neutrons: typeof el.neutrons === "number" ? el.neutrons : null,
      reference: el.reference || ""
    };
  });

  const querySymbol = resolveSymbolFromQuery(queryElementRaw, periodicElements);
  if (querySymbol) currentSymbol = querySymbol;

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

  function electronsFromShells(shellDict, Z) {
    const shells = [];
    shellLetters.forEach(letter => {
      const val = shellDict?.[letter];
      if (typeof val === "number" && val > 0) shells.push(val);
    });
    if (!shells.length && Z) return bohrShells(Z);
    return shells;
  }

  // Build element map
  elementMap = {};
  periodicElements.forEach(d => {
    const shells = electronsFromShells(d.electronShells, d.Z);
    const [nucleusColor, coreColor] = paletteForZ(d.Z);
    elementMap[d.symbol] = {
      Z: d.Z,
      symbol: d.symbol,
      namePT: d.namePT,
      nameEN: d.nameEN,
      nameES: d.nameES,
      electrons: shells,
      neutrons: d.neutrons,
      reference: d.reference,
      colorNucleus: nucleusColor,
      colorCore: coreColor
    };
  });
  if (!elementMap[currentSymbol]) {
    currentSymbol = elementMap["H"] ? "H" : (periodicElements[0]?.symbol || currentSymbol);
  }
  currentElement = elementMap[currentSymbol] || null;
  if (!currentElement) {
    const first = Object.values(elementMap)[0];
    if (first) {
      currentElement = first;
      currentSymbol = first.symbol;
    }
  }

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
    const el = elementMap[symbol];
    if (!el) return;
    const eConfig = el.electrons.join(", ");
    const N = (typeof el.neutrons === "number") ? el.neutrons : approximateNeutrons(el.Z);
    const totalNucleons = el.Z + N;
    const t = i18n[currentLanguage] || i18n.en;
    const reference = el.reference || "";

    const elementName = getElementName(el);
    if (detailsDiv) {
      detailsDiv.innerHTML = [
        `<b>${elementName} (${el.symbol})</b>`,
        `Z (atomic number): <b>${el.Z}</b>`,
        `Protons: <b>${el.Z}</b> · Neutrons: <b>${N}</b>`,
        `Nucleons (≈ mass number): <b>${totalNucleons}</b>`,
        `Shells (Bohr-like model): <code>${eConfig}</code>`,
        `<small>${t.overlayExtra(eConfig)}</small>`
      ].join("<br>");
    }

    if (currentElementNameEl) currentElementNameEl.textContent = elementName;
    if (currentElementSymbolEl) currentElementSymbolEl.textContent = el.symbol;

    overlaySymbolEl.textContent = el.symbol;
    overlayNameEl.textContent = elementName;
    if (overlayTopNameEl) overlayTopNameEl.textContent = elementName;
    overlayZEl.textContent = "Z = " + el.Z;
    overlayProtonsEl.textContent = el.Z;
    overlayNeutronsEl.textContent = N;
    overlayShellsEl.textContent = eConfig;

    if (referenceBtn) {
      referenceBtn.style.visibility = reference ? "visible" : "hidden";
      referenceBtn.disabled = !reference;
      referenceBtn.setAttribute("aria-label", reference ? `Open reference for ${el.symbol}` : "Reference unavailable");
      referenceBtn.setAttribute("title", reference ? reference : "");
      referenceBtn.dataset.href = reference;
    }
  }

  // Apply initial language AFTER we have elements + symbol ready
  applyLanguage(currentLanguage);
  if (searchInput) searchInput.value = "";
  if (searchInput?.parentElement) {
    searchInput.parentElement.classList.remove("has-text");
  }
  updateDetails(currentSymbol);
  updatePlayPauseUI();
  if (queryOrbits != null || queryAxes != null || queryCharges != null) {
    requestPausedRedraw();
  }
  const initialOverlayExpanded = queryOverlayRaw !== "collapsed";
  setOverlayExpanded(initialOverlayExpanded, {
    skipClassUpdate: initialOverlayExpanded,
    skipUrlSync: true
  });
  updateShellVisibilityUI(currentElement?.electrons?.length);

  if (shellAllBtn) shellAllBtn.addEventListener("click", (e) => { e.stopPropagation(); setAllShells(); });
  if (shellNoneBtn) shellNoneBtn.addEventListener("click", (e) => { e.stopPropagation(); setNoShells(); });
  if (referenceBtn) {
    referenceBtn.addEventListener("click", () => {
      const href = referenceBtn.dataset.href || currentElement?.reference;
      if (!href) return;
      window.open(href, "_blank", "noopener,noreferrer");
    });
  }
  if (overlayToggleBtn) {
    overlayToggleBtn.addEventListener("click", () => {
      setOverlayExpanded(!overlayExpanded);
      syncUrlState();
    });
  }
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (copyMenuEl?.getAttribute("data-open") === "true") closeCopyMenu();
      else openCopyMenu();
    });
  }
  copyMenuEl?.addEventListener("click", async (e) => {
    e.stopPropagation();
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const format = target.getAttribute("data-format");
    if (!format) return;
    const content = buildCopyContent(format);
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Clipboard write failed", err);
    }
    closeCopyMenu();
  });

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
    syncUrlState();
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
    syncUrlState();
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
    syncUrlState();
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
    syncUrlState();
  }, { passive: false });

  // Toggle UI by clicking the canvas background (not UI controls).
  // Disabled entirely when the visualization is locked via ?locked=1.
  const canvasWrapper = document.getElementById("canvasWrapper");
  canvasWrapper?.addEventListener("click", (e) => {
    if (queryLocked) return;
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
    if (target.closest("#shellVisibilityPanel")) return;
    if (target.closest("#elementOverlay")) return;
    if (target.closest("#languageMenu")) return;
    if (target.closest("#copyMenu")) return;
    if (target.closest("#shareMenu")) return;
    if (target.closest("#infoDialog")) return;
    if (target.closest("#infoDialogBackdrop")) return;
    if (target.closest("#toastContainer")) return;
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
    // Use a half-turn span so opposite shells are not co-planar (e.g., 2 shells become perpendicular).
    const layerAngleStep = Math.PI / Math.max(1, layerCount);
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

  let shells = currentElement ? buildShellsForElement(currentElement) : [];
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
    if (!currentElement) {
      shells = [];
      electrons = [];
      return;
    }
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
    // When switching elements, reset visibility to show all shells by default.
    visibleShellSet = new Set(shells.map((_, i) => i));
    updateShellVisibilityUI(shells.length);
  }

  function setAllShells() {
    const total = shells.length;
    visibleShellSet = new Set(Array.from({ length: total }, (_, idx) => idx));
    updateShellVisibilityUI(total);
    requestPausedRedraw();
    syncUrlState();
  }

  function setNoShells() {
    visibleShellSet.clear();
    updateShellVisibilityUI(shells.length);
    requestPausedRedraw();
    syncUrlState();
  }

  function moveElementSelection(delta) {
    if (!visibleSymbols.length) return;
    const idx = visibleSymbols.indexOf(currentSymbol);
    const startIdx = idx === -1 ? 0 : idx;
    const nextIdx = (startIdx + delta + visibleSymbols.length) % visibleSymbols.length;
    setCurrentElement(visibleSymbols[nextIdx], { focus: true });
  }

  function nudgeView(dx, dy) {
    const step = 0.14;
    globalRotY += dx * step;
    globalRotX += dy * step;
    requestPausedRedraw();
    syncUrlState();
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
    if (!currentElement) {
      nucleusNucleons = [];
      return;
    }
    nucleusNucleons = [];
    const el = currentElement;
    const Z = el.Z;
    const N = (typeof el.neutrons === "number") ? el.neutrons : approximateNeutrons(Z);
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

  // Apply shells visibility from URL after shells are initialized.
  if (queryShells && shells.length > 0) {
    if (queryShells.mode === "none") {
      visibleShellSet = new Set();
    } else if (queryShells.mode === "set") {
      const filtered = queryShells.indices.filter(i => i < shells.length);
      visibleShellSet = new Set(filtered);
    } else {
      visibleShellSet = new Set(shells.map((_, i) => i));
    }
    updateShellVisibilityUI(shells.length);
  }

  // Start closer to a top-down angle so the core and orbits are visible
  let globalRotY = 0;
  let globalRotX = -1.2;
  cameraDistanceFactor = 0.9;
  if (queryZoom != null) {
    cameraDistanceFactor = Math.max(0.25, Math.min(2.5, queryZoom));
  }
  if (queryRotX != null) globalRotX = queryRotX;
  if (queryRotY != null) globalRotY = queryRotY;
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
    syncUrlState();
  }
  function adjustZoom(delta) {
    cameraDistanceFactor = Math.max(0.25, Math.min(2.5, cameraDistanceFactor + delta));
    cameraDistance = baseCameraDistance * cameraDistanceFactor;
    requestPausedRedraw();
    syncUrlState();
  }

  controlCentralize?.addEventListener("click", resetView);
  controlZoomIn?.addEventListener("click", () => { focusContext = "scene"; adjustZoom(-0.08); });
  controlZoomOut?.addEventListener("click", () => { focusContext = "scene"; adjustZoom(0.08); });
  viewArrowLeft?.addEventListener("mousedown", (e) => { e.stopPropagation(); focusContext = "scene"; startViewHold(() => nudgeView(-1, 0)); });
  viewArrowRight?.addEventListener("mousedown", (e) => { e.stopPropagation(); focusContext = "scene"; startViewHold(() => nudgeView(1, 0)); });
  viewArrowUp?.addEventListener("mousedown", (e) => { e.stopPropagation(); focusContext = "scene"; startViewHold(() => nudgeView(0, -1)); });
  viewArrowDown?.addEventListener("mousedown", (e) => { e.stopPropagation(); focusContext = "scene"; startViewHold(() => nudgeView(0, 1)); });
  viewArrowLeft?.addEventListener("mouseup", stopViewHold);
  viewArrowRight?.addEventListener("mouseup", stopViewHold);
  viewArrowUp?.addEventListener("mouseup", stopViewHold);
  viewArrowDown?.addEventListener("mouseup", stopViewHold);
  viewArrowLeft?.addEventListener("mouseleave", stopViewHold);
  viewArrowRight?.addEventListener("mouseleave", stopViewHold);
  viewArrowUp?.addEventListener("mouseleave", stopViewHold);
  viewArrowDown?.addEventListener("mouseleave", stopViewHold);

  let isDragging = false;
  let dragDistance = 0;
  let didUserDrag = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("mousedown", (e) => {
    focusContext = "scene";
    isDragging = true;
    dragDistance = 0;
    didUserDrag = false;
    lastX = e.clientX;
    lastY = e.clientY;
  });
  window.addEventListener("mouseup", () => {
    if (isDragging && didUserDrag) syncUrlState();
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
    focusContext = "scene";
    if (e.touches.length === 1) {
      isDragging = true;
      dragDistance = 0;
      didUserDrag = false;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener("touchend", () => {
    if (isDragging && didUserDrag) syncUrlState();
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
    if (!queryTransparent) {
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
    }

    if (queryShowStars) {
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
    }

    const totalShellCount = shells.length;
    ensureVisibleShellSet(totalShellCount);
    const visibleShellIndexes = Array.from(visibleShellSet).filter(i => i < totalShellCount).sort((a, b) => a - b);
    const visibleShells = visibleShellIndexes.map(i => shells[i]);

    // --- 3D axes (X/Y/Z) --------------------------------------------------
    // Optional overlay; draw after background, before atom.
    if (axesToggle?.checked) {
      const maxOrbitRadius = visibleShells.reduce((m, s) => Math.max(m, s.radius), 0);
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

          // Labels removed to keep axes clean
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
      if (!visibleShellSet.has(e.shellIndex)) return;
      const shell = shells[e.shellIndex];
      const ang = e.baseAngle + (now < shell.startAt ? 0 : shell.phase);
      let v = { x: Math.cos(ang) * shell.radius, y: 0, z: Math.sin(ang) * shell.radius };

      // "Sphere sweep" motion: rotate the ring around a fixed axis (Z), creating a sphere surface.
      // Each shell gets a fixed offset (evenly spaced over 180°) so paired shells become perpendicular instead of co-planar.
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
      visibleShells.forEach((shell, shellIndex) => {
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

  function setCurrentElement(symbol, opts = {}) {
    if (!elementMap[symbol]) return;
    currentSymbol = symbol;
    currentElement = elementMap[symbol];
    Object.values(cellsBySymbol).forEach(c => c.classList.remove("active"));
    const activeCell = cellsBySymbol[symbol];
    if (activeCell) {
      activeCell.classList.add("active");
      if (opts.focus) activeCell.focus();
    }
    rebuildShellsAndElectrons();
    rebuildNucleusNucleons();
    updateDetails(currentSymbol);
    requestPausedRedraw();
    syncUrlState();
  }

  function buildPeriodicGrid() {
    periodicGrid.innerHTML = "";
    cellsBySymbol = {};
    visibleSymbols = [];
    const term = (searchInput?.value || "").trim().toLowerCase();
    periodicElements.forEach(d => {
      const elMeta = elementMap[d.symbol];
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
      visibleSymbols.push(d.symbol);
      cell.addEventListener("click", () => {
        focusContext = "elements";
        setCurrentElement(d.symbol);
      });
      cell.addEventListener("focus", () => {
        focusContext = "elements";
      });
    });
    if (cellsBySymbol[currentSymbol]) {
      cellsBySymbol[currentSymbol].classList.add("active");
    }
  }

  buildPeriodicGrid();
  requestAnimationFrame(draw);

  if (languageBtn) {
    languageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (languageMenuEl?.getAttribute("data-open") === "true") closeLanguageMenu();
      else openLanguageMenu();
    });
  }

  languageMenuEl?.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const lang = target.getAttribute("data-lang");
    if (!lang) return;
    setLanguage(lang);
    closeLanguageMenu();
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
  backgroundControl?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleColorMenu(backgroundControl, "background");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;

    if (isColorMenuOpen()) {
      if (colorMenuEl?.contains(target)) return;
      if (protonControl?.contains(target)) return;
      if (neutronControl?.contains(target)) return;
      if (electronControl?.contains(target)) return;
      if (backgroundControl?.contains(target)) return;
      closeColorMenu();
    }

    if (copyMenuEl?.getAttribute("data-open") === "true") {
      if (copyMenuEl?.contains(target)) return;
      if (copyBtn?.contains(target)) return;
      closeCopyMenu();
    }

    if (languageMenuEl?.getAttribute("data-open") === "true") {
      if (languageMenuEl?.contains(target)) return;
      if (languageBtn?.contains(target)) return;
      closeLanguageMenu();
    }

    if (shareMenuEl?.getAttribute("data-open") === "true") {
      if (shareMenuEl?.contains(target)) return;
      if (shareBtn?.contains(target)) return;
      closeShareMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (isColorMenuOpen() && e.key === "Escape") {
      e.preventDefault();
      closeColorMenu();
      openControl?.focus();
      return;
    }
    if (copyMenuEl?.getAttribute("data-open") === "true" && e.key === "Escape") {
      e.preventDefault();
      closeCopyMenu();
      copyBtn?.focus();
      return;
    }
    if (languageMenuEl?.getAttribute("data-open") === "true" && e.key === "Escape") {
      e.preventDefault();
      closeLanguageMenu();
      languageBtn?.focus();
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
      const isTyping = ["INPUT", "TEXTAREA"].includes((e.target && e.target.nodeName) || "");
      if (isTyping) return;
      if (focusContext === "elements") {
        e.preventDefault();
        const delta = (e.key === "ArrowLeft" || e.key === "ArrowUp") ? -1 : 1;
        moveElementSelection(delta);
      } else {
        e.preventDefault();
        if (e.key === "ArrowLeft") nudgeView(-1, 0);
        if (e.key === "ArrowRight") nudgeView(1, 0);
        if (e.key === "ArrowUp") nudgeView(0, -1);
        if (e.key === "ArrowDown") nudgeView(0, 1);
      }
    }
  });

  searchInput?.addEventListener("input", () => {
    if (searchInput.parentElement) {
      searchInput.parentElement.classList.toggle("has-text", !!searchInput.value);
    }
    buildPeriodicGrid();
    focusContext = "elements";
  });
  clearSearchBtn?.addEventListener("click", () => {
    if (!searchInput) return;
    searchInput.value = "";
    if (searchInput.parentElement) {
      searchInput.parentElement.classList.remove("has-text");
    }
    buildPeriodicGrid();
    searchInput.focus();
    focusContext = "elements";
  });

  // --- Toast notifications --------------------------------------------------
  function showToast(message, opts = {}) {
    if (!toastContainerEl || !message) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    toastContainerEl.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    const duration = opts.duration ?? 3200;
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 220);
    }, duration);
  }

  // --- Share button + menu --------------------------------------------------
  function openShareMenu() {
    if (!shareMenuEl || !shareBtn) return;
    openMenu(shareMenuEl, shareBtn, shareBtn);
  }
  function closeShareMenu() {
    if (!shareMenuEl) return;
    closeMenu(shareMenuEl, shareBtn);
  }

  async function copyTextToClipboard(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_err) {
      // fall through to fallback
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (_err) {
      return false;
    }
  }

  function getShareUrlForCurrentSelection() {
    const hide = !!shareHideControllersEl?.checked;
    return buildShareUrl({ hideControllers: hide });
  }

  async function runShareAction(action) {
    const t = i18n[currentLanguage] || i18n.en;
    const shareUrl = getShareUrlForCurrentSelection();
    const elementName = currentElement ? getElementName(currentElement) : "";
    const shareTitle = elementName ? `${t.panelTitle} – ${elementName} (${currentSymbol})` : t.panelTitle;
    const shareText = `${shareTitle}\n${shareUrl}`;

    if (action === "system") {
      if (navigator.share) {
        try {
          await navigator.share({ title: shareTitle, text: shareTitle, url: shareUrl });
          return;
        } catch (_err) {
          // fall through to clipboard fallback
        }
      }
      const ok = await copyTextToClipboard(shareUrl);
      showToast(ok ? t.shareCopied : `${t.shareLinkPrompt} ${shareUrl}`);
      return;
    }
    if (action === "copy") {
      const ok = await copyTextToClipboard(shareUrl);
      showToast(ok ? t.shareCopied : `${t.shareLinkPrompt} ${shareUrl}`);
      return;
    }
    if (action === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener,noreferrer");
      return;
    }
    if (action === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank", "noopener,noreferrer");
      return;
    }
    if (action === "instagram") {
      try { await copyTextToClipboard(shareUrl); } catch (_) {}
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
      showToast(t.shareInstagramHint);
      return;
    }
    if (action === "x") {
      const text = encodeURIComponent(shareTitle);
      const url = encodeURIComponent(shareUrl);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
      return;
    }
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (shareMenuEl?.getAttribute("data-open") === "true") closeShareMenu();
      else openShareMenu();
    });
  }
  shareMenuEl?.addEventListener("click", async (e) => {
    e.stopPropagation();
    const target = e.target instanceof HTMLElement ? e.target.closest(".share-option") : null;
    if (!target) return;
    const action = target.getAttribute("data-share-action");
    if (!action) return;
    closeShareMenu();
    await runShareAction(action);
  });

  // --- Info dialog ---------------------------------------------------------
  function infoT() {
    const sharedI18n = window.AtomicExplorerInfo;
    return (sharedI18n ? sharedI18n.tr(currentLanguage) : null) || {};
  }

  function buildInfoPageHref() {
    try {
      const url = new URL("info.html", window.location.href);
      url.searchParams.set("lang", currentLanguage);
      return url.toString();
    } catch (_) {
      return "info.html?lang=" + encodeURIComponent(currentLanguage);
    }
  }

  function renderInfoDialogContent() {
    const t = i18n[currentLanguage] || i18n.en;
    const ti = infoT();
    if (infoDialogTitleEl) infoDialogTitleEl.textContent = ti.title || "";
    if (infoBtn) {
      infoBtn.setAttribute("aria-label", t.infoLabel);
      infoBtn.setAttribute("title", t.infoLabel);
    }
    if (shareBtn) {
      shareBtn.setAttribute("aria-label", t.shareLabel);
      shareBtn.setAttribute("title", t.shareLabel);
    }
    if (shareMenuEl) shareMenuEl.setAttribute("aria-label", t.shareLabel);
    if (shareMenuTitleEl) shareMenuTitleEl.textContent = t.shareMenuTitle;
    if (shareMenuEl) {
      const labelMap = {
        system: t.shareSystem,
        whatsapp: t.shareWhatsApp,
        facebook: t.shareFacebook,
        instagram: t.shareInstagram,
        x: t.shareX,
        copy: t.shareCopyLink
      };
      shareMenuEl.querySelectorAll(".share-label[data-share-label]").forEach((el) => {
        const key = el.getAttribute("data-share-label");
        if (labelMap[key]) el.textContent = labelMap[key];
      });
    }
    if (shareHideControllersLabelEl) shareHideControllersLabelEl.textContent = t.shareHideControllers;
    if (infoDialogCloseEl) {
      infoDialogCloseEl.setAttribute("aria-label", t.infoCloseLabel);
      infoDialogCloseEl.setAttribute("title", t.infoCloseLabel);
    }
    if (infoDialogOpenInTabEl) {
      const href = buildInfoPageHref();
      infoDialogOpenInTabEl.setAttribute("href", href);
      infoDialogOpenInTabEl.setAttribute("title", t.infoOpenInTab);
      infoDialogOpenInTabEl.setAttribute("aria-label", t.infoOpenInTab);
    }
    if (infoDialogOpenInTabLabelEl) infoDialogOpenInTabLabelEl.textContent = t.infoOpenInTab;
    if (infoDialogContentEl && window.AtomicExplorerInfo) {
      window.AtomicExplorerInfo.render(infoDialogContentEl, currentLanguage, {
        exampleBaseUrl: window.location.href
      });
    }
  }

  function openInfoDialog() {
    if (!infoDialogEl) return;
    renderInfoDialogContent();
    infoDialogEl.setAttribute("data-open", "true");
    infoDialogBackdropEl?.setAttribute("data-open", "true");
    infoDialogCloseEl?.focus();
  }
  function closeInfoDialog() {
    if (!infoDialogEl) return;
    infoDialogEl.setAttribute("data-open", "false");
    infoDialogBackdropEl?.setAttribute("data-open", "false");
    infoBtn?.focus();
  }

  if (infoBtn) {
    infoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openInfoDialog();
    });
  }
  infoDialogCloseEl?.addEventListener("click", closeInfoDialog);
  infoDialogBackdropEl?.addEventListener("click", closeInfoDialog);
  // Close the dialog on the parent tab when the user clicks "Open in new tab",
  // so they end up looking at the standalone info page only.
  infoDialogOpenInTabEl?.addEventListener("click", () => {
    setTimeout(closeInfoDialog, 0);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && infoDialogEl?.getAttribute("data-open") === "true") {
      closeInfoDialog();
    }
  });

  renderInfoDialogContent();

  // Enable URL synchronization now that all initial state has been applied.
  urlSyncReady = true;
  syncUrlState();

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
