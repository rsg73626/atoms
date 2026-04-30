// Shared content + translations for the application info / orientation panel.
// Loaded by both the in-app modal (index.html) and the standalone info page (info.html).
window.AtomicExplorerInfo = (function () {
  const SUPPORTED_LANGUAGES = ["en", "pt", "es"];

  const i18n = {
    en: {
      title: "About Atomic Explorer",
      intro:
        "Atomic Explorer is an interactive 3D model that lets you visualize any of the 118 chemical elements with a Bohr-like nucleus and orbital shells. You can rotate, zoom, change colors, hide individual electron shells and customize the visualization to match what you want to explain.",
      shareTitle: "Sharing your visualization",
      shareBody:
        "Every visualization parameter is encoded in the URL. Use the share button (next to the language selector) to copy or share the current configuration as a link. Anyone opening that link will see the exact same scene.",
      paramsTitle: "URL query parameters",
      paramsBody:
        "Append parameters to the URL using the standard <code>?key=value&amp;key=value</code> form to control the visualization. Boolean parameters accept <code>1/0</code>, <code>true/false</code>, <code>yes/no</code> or <code>on/off</code>. Color parameters accept an index from 0 to 12 (rainbow + neutrals).",
      exampleTitle: "Example",
      exampleBody:
        "This URL opens carbon, paused, with orbits and charges visible, electrons green and the camera tilted:",
      paramHeaderName: "Parameter",
      paramHeaderDesc: "Description",
      paramHeaderValues: "Possible values",
      backToApp: "Back to the application",
      openInNewTab: "Open in new tab",
      closeLabel: "Close",
      languageLabel: "Language",
      params: {
        element: {
          desc: "Selects the chemical element to display.",
          values:
            "Element symbol (e.g. <code>H</code>, <code>C</code>, <code>Fe</code>), atomic number from <code>1</code> to <code>118</code>, or the keywords <code>first</code> / <code>last</code>."
        },
        lang: {
          desc: "Sets the interface language.",
          values: "<code>en</code>, <code>pt</code>, <code>es</code>."
        },
        orbits: {
          desc: "Show orbit lines around the nucleus.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        axes: {
          desc: "Show 3D X / Y / Z axes.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        charges: {
          desc: "Display + / 0 / − charge symbols on protons, neutrons and electrons.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        paused: {
          desc: "Start the scene paused.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        speed: {
          desc: "Orbital speed multiplier.",
          values: "Decimal number from <code>0</code> to <code>5</code> (e.g. <code>0.5</code>, <code>1.5</code>, <code>3</code>)."
        },
        shells: {
          desc: "Which electron shells are visible.",
          values:
            "Comma-separated 0-based indices (e.g. <code>0,1</code> shows shells K and L), or the keywords <code>all</code> / <code>none</code>."
        },
        overlay: {
          desc: "Initial state of the element overlay (top-left card).",
          values: "<code>expanded</code> or <code>collapsed</code>."
        },
        ui: {
          desc: "Initial visibility of the user interface (cinema mode). UI can still be toggled by clicking on the canvas.",
          values: "<code>visible</code> or <code>hidden</code>."
        },
        locked: {
          desc:
            "Locks the user interface in the hidden state. All controllers stay hidden and clicking on the canvas no longer toggles them. There is no UI control for this — it is exposed only through the URL, intended for embedded / kiosk-style sharing.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (presence enables it)."
        },
        zoom: {
          desc: "Camera zoom factor.",
          values: "Decimal number from <code>0.25</code> (very close) to <code>2.5</code> (far)."
        },
        rotX: {
          desc: "Camera vertical rotation, in radians.",
          values: "Any decimal number (e.g. <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        rotY: {
          desc: "Camera horizontal rotation, in radians.",
          values: "Any decimal number (e.g. <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        proton: {
          desc: "Proton color.",
          values: "Integer from <code>0</code> to <code>12</code> (palette index)."
        },
        neutron: {
          desc: "Neutron color.",
          values: "Integer from <code>0</code> to <code>12</code> (palette index)."
        },
        electron: {
          desc: "Electron color.",
          values: "Integer from <code>0</code> to <code>12</code> (palette index)."
        },
        background: {
          desc: "Background color.",
          values: "Integer from <code>0</code> to <code>12</code> (palette index)."
        },
        transparent: {
          desc:
            "Render the visualization with a transparent background (no gradient and no body color). Useful when embedding the app in another page so that the host's background shows through.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (presence enables it)."
        },
        stars: {
          desc: "Show the small white star dots scattered around the atom in the background.",
          values:
            "<code>1</code> / <code>true</code> / <code>yes</code> / <code>on</code> (default, stars are visible) or <code>0</code> / <code>false</code> / <code>no</code> / <code>off</code> (no stars)."
        }
      }
    },
    pt: {
      title: "Sobre o Explorador Atômico",
      intro:
        "O Explorador Atômico é um modelo 3D interativo que permite visualizar qualquer um dos 118 elementos químicos com núcleo e camadas eletrônicas no estilo de Bohr. Você pode girar, dar zoom, mudar cores, ocultar camadas e personalizar a visualização do jeito que precisar para explicar o conteúdo.",
      shareTitle: "Compartilhando sua visualização",
      shareBody:
        "Cada configuração da visualização fica codificada na URL. Use o botão de compartilhar (ao lado do seletor de idioma) para copiar ou compartilhar a configuração atual como um link. Quem abrir o link verá exatamente a mesma cena.",
      paramsTitle: "Parâmetros de URL",
      paramsBody:
        "Acrescente parâmetros à URL usando o formato padrão <code>?chave=valor&amp;chave=valor</code> para controlar a visualização. Parâmetros booleanos aceitam <code>1/0</code>, <code>true/false</code>, <code>yes/no</code> ou <code>on/off</code>. Parâmetros de cor aceitam um índice de 0 a 12 (arco-íris + neutros).",
      exampleTitle: "Exemplo",
      exampleBody:
        "Esta URL abre o carbono, pausado, com órbitas e cargas visíveis, elétrons verdes e a câmera inclinada:",
      paramHeaderName: "Parâmetro",
      paramHeaderDesc: "Descrição",
      paramHeaderValues: "Valores possíveis",
      backToApp: "Voltar para a aplicação",
      openInNewTab: "Abrir em nova aba",
      closeLabel: "Fechar",
      languageLabel: "Idioma",
      params: {
        element: {
          desc: "Seleciona o elemento químico exibido.",
          values:
            "Símbolo do elemento (ex.: <code>H</code>, <code>C</code>, <code>Fe</code>), número atômico de <code>1</code> a <code>118</code>, ou as palavras-chave <code>first</code> / <code>last</code>."
        },
        lang: {
          desc: "Define o idioma da interface.",
          values: "<code>en</code>, <code>pt</code>, <code>es</code>."
        },
        orbits: {
          desc: "Mostrar linhas das órbitas ao redor do núcleo.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        axes: {
          desc: "Mostrar os eixos 3D X / Y / Z.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        charges: {
          desc: "Mostrar símbolos de carga + / 0 / − em prótons, nêutrons e elétrons.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        paused: {
          desc: "Iniciar a cena pausada.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        speed: {
          desc: "Multiplicador de velocidade orbital.",
          values: "Número decimal de <code>0</code> a <code>5</code> (ex.: <code>0.5</code>, <code>1.5</code>, <code>3</code>)."
        },
        shells: {
          desc: "Quais camadas eletrônicas estão visíveis.",
          values:
            "Índices separados por vírgula, começando em 0 (ex.: <code>0,1</code> mostra K e L), ou as palavras-chave <code>all</code> / <code>none</code>."
        },
        overlay: {
          desc: "Estado inicial do painel do elemento (canto superior esquerdo).",
          values: "<code>expanded</code> ou <code>collapsed</code>."
        },
        ui: {
          desc: "Visibilidade inicial da interface (modo cinema). A interface ainda pode ser alternada clicando na cena.",
          values: "<code>visible</code> ou <code>hidden</code>."
        },
        locked: {
          desc:
            "Trava a interface no estado oculto. Todos os controles ficam escondidos e clicar na cena não os mostra. Não há controle visual para isso — o parâmetro existe somente na URL, pensado para uso em links incorporados / modo apresentação.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (a presença ativa o modo)."
        },
        zoom: {
          desc: "Fator de zoom da câmera.",
          values: "Número decimal de <code>0.25</code> (muito próximo) a <code>2.5</code> (afastado)."
        },
        rotX: {
          desc: "Rotação vertical da câmera, em radianos.",
          values: "Qualquer número decimal (ex.: <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        rotY: {
          desc: "Rotação horizontal da câmera, em radianos.",
          values: "Qualquer número decimal (ex.: <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        proton: {
          desc: "Cor do próton.",
          values: "Inteiro de <code>0</code> a <code>12</code> (índice da paleta)."
        },
        neutron: {
          desc: "Cor do nêutron.",
          values: "Inteiro de <code>0</code> a <code>12</code> (índice da paleta)."
        },
        electron: {
          desc: "Cor do elétron.",
          values: "Inteiro de <code>0</code> a <code>12</code> (índice da paleta)."
        },
        background: {
          desc: "Cor do fundo.",
          values: "Inteiro de <code>0</code> a <code>12</code> (índice da paleta)."
        },
        transparent: {
          desc:
            "Renderiza a visualização com fundo transparente (sem gradiente e sem cor sólida no body). Útil para incorporar a aplicação em outra página, deixando o fundo do site hospedeiro aparecer.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (a presença ativa o modo)."
        },
        stars: {
          desc: "Mostrar os pequenos pontos brancos (estrelas) espalhados ao fundo, em volta do átomo.",
          values:
            "<code>1</code> / <code>true</code> / <code>yes</code> / <code>on</code> (padrão, estrelas visíveis) ou <code>0</code> / <code>false</code> / <code>no</code> / <code>off</code> (sem estrelas)."
        }
      }
    },
    es: {
      title: "Acerca del Explorador Atómico",
      intro:
        "El Explorador Atómico es un modelo 3D interactivo que te permite visualizar cualquiera de los 118 elementos químicos con un núcleo y capas electrónicas al estilo de Bohr. Puedes rotar, hacer zoom, cambiar los colores, ocultar capas y personalizar la visualización para mostrar lo que necesites.",
      shareTitle: "Compartir tu visualización",
      shareBody:
        "Cada parámetro de la visualización queda codificado en la URL. Usa el botón de compartir (al lado del selector de idioma) para copiar o compartir la configuración actual como un enlace. Quien abra el enlace verá exactamente la misma escena.",
      paramsTitle: "Parámetros de URL",
      paramsBody:
        "Añade parámetros a la URL con el formato estándar <code>?clave=valor&amp;clave=valor</code> para controlar la visualización. Los parámetros booleanos aceptan <code>1/0</code>, <code>true/false</code>, <code>yes/no</code> u <code>on/off</code>. Los parámetros de color aceptan un índice de 0 a 12 (arcoíris + neutros).",
      exampleTitle: "Ejemplo",
      exampleBody:
        "Esta URL abre el carbono, pausado, con órbitas y cargas visibles, electrones verdes y la cámara inclinada:",
      paramHeaderName: "Parámetro",
      paramHeaderDesc: "Descripción",
      paramHeaderValues: "Valores posibles",
      backToApp: "Volver a la aplicación",
      openInNewTab: "Abrir en una nueva pestaña",
      closeLabel: "Cerrar",
      languageLabel: "Idioma",
      params: {
        element: {
          desc: "Selecciona el elemento químico mostrado.",
          values:
            "Símbolo del elemento (p. ej. <code>H</code>, <code>C</code>, <code>Fe</code>), número atómico de <code>1</code> a <code>118</code>, o las palabras clave <code>first</code> / <code>last</code>."
        },
        lang: {
          desc: "Establece el idioma de la interfaz.",
          values: "<code>en</code>, <code>pt</code>, <code>es</code>."
        },
        orbits: {
          desc: "Mostrar las líneas de órbita alrededor del núcleo.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        axes: {
          desc: "Mostrar los ejes 3D X / Y / Z.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        charges: {
          desc: "Mostrar símbolos de carga + / 0 / − en protones, neutrones y electrones.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        paused: {
          desc: "Iniciar la escena pausada.",
          values: "<code>1</code>, <code>0</code>, <code>true</code>, <code>false</code>, <code>yes</code>, <code>no</code>, <code>on</code>, <code>off</code>."
        },
        speed: {
          desc: "Multiplicador de velocidad orbital.",
          values: "Número decimal de <code>0</code> a <code>5</code> (p. ej. <code>0.5</code>, <code>1.5</code>, <code>3</code>)."
        },
        shells: {
          desc: "Qué capas electrónicas están visibles.",
          values:
            "Índices separados por comas, empezando en 0 (p. ej. <code>0,1</code> muestra K y L), o las palabras clave <code>all</code> / <code>none</code>."
        },
        overlay: {
          desc: "Estado inicial del panel del elemento (esquina superior izquierda).",
          values: "<code>expanded</code> o <code>collapsed</code>."
        },
        ui: {
          desc: "Visibilidad inicial de la interfaz (modo cine). La interfaz se puede alternar haciendo clic en la escena.",
          values: "<code>visible</code> u <code>hidden</code>."
        },
        locked: {
          desc:
            "Bloquea la interfaz en el estado oculto. Todos los controles permanecen ocultos y hacer clic en la escena no los muestra. No hay un control en la UI para esto — el parámetro existe solo en la URL, pensado para enlaces embebidos / modo presentación.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (la presencia activa el modo)."
        },
        zoom: {
          desc: "Factor de zoom de la cámara.",
          values: "Número decimal de <code>0.25</code> (muy cerca) a <code>2.5</code> (lejos)."
        },
        rotX: {
          desc: "Rotación vertical de la cámara, en radianes.",
          values: "Cualquier número decimal (p. ej. <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        rotY: {
          desc: "Rotación horizontal de la cámara, en radianes.",
          values: "Cualquier número decimal (p. ej. <code>-1.2</code>, <code>0</code>, <code>0.8</code>)."
        },
        proton: {
          desc: "Color del protón.",
          values: "Entero de <code>0</code> a <code>12</code> (índice de la paleta)."
        },
        neutron: {
          desc: "Color del neutrón.",
          values: "Entero de <code>0</code> a <code>12</code> (índice de la paleta)."
        },
        electron: {
          desc: "Color del electrón.",
          values: "Entero de <code>0</code> a <code>12</code> (índice de la paleta)."
        },
        background: {
          desc: "Color del fondo.",
          values: "Entero de <code>0</code> a <code>12</code> (índice de la paleta)."
        },
        transparent: {
          desc:
            "Renderiza la visualización con fondo transparente (sin degradado ni color sólido en el body). Útil para incrustar la aplicación en otra página dejando ver el fondo del sitio anfitrión.",
          values: "<code>1</code>, <code>true</code>, <code>yes</code>, <code>on</code> (la presencia activa el modo)."
        },
        stars: {
          desc: "Mostrar los pequeños puntos blancos (estrellas) repartidos al fondo, alrededor del átomo.",
          values:
            "<code>1</code> / <code>true</code> / <code>yes</code> / <code>on</code> (predeterminado, estrellas visibles) o <code>0</code> / <code>false</code> / <code>no</code> / <code>off</code> (sin estrellas)."
        }
      }
    }
  };

  const PARAM_ORDER = [
    "element",
    "lang",
    "orbits",
    "axes",
    "charges",
    "paused",
    "speed",
    "shells",
    "overlay",
    "ui",
    "locked",
    "zoom",
    "rotX",
    "rotY",
    "proton",
    "neutron",
    "electron",
    "background",
    "transparent",
    "stars"
  ];

  function tr(lang) {
    return i18n[lang] || i18n.en;
  }

  function buildExampleUrl(baseUrl) {
    try {
      const url = new URL(baseUrl);
      url.search = "?element=C&paused=1&orbits=1&charges=1&electron=3&rotX=-0.6";
      url.hash = "";
      return url.toString();
    } catch (_) {
      return "?element=C&paused=1&orbits=1&charges=1&electron=3&rotX=-0.6";
    }
  }

  function escapeHtmlText(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function render(container, lang, options = {}) {
    if (!container) return;
    const t = tr(lang);
    const exampleUrl = buildExampleUrl(options.exampleBaseUrl || window.location.href);
    const escapedExample = escapeHtmlText(exampleUrl);
    const rows = PARAM_ORDER.map((name) => {
      const param = (t.params && t.params[name]) || {};
      const desc = param.desc || "";
      const values = param.values || "";
      return `<tr><td><code>${name}</code></td><td>${desc}</td><td>${values}</td></tr>`;
    }).join("");

    container.innerHTML = [
      `<p>${t.intro}</p>`,
      `<h2>${t.shareTitle}</h2>`,
      `<p>${t.shareBody}</p>`,
      `<h2>${t.paramsTitle}</h2>`,
      `<p>${t.paramsBody}</p>`,
      `<div class="info-table-wrapper"><table class="params"><thead><tr><th>${t.paramHeaderName}</th><th>${t.paramHeaderDesc}</th><th>${t.paramHeaderValues}</th></tr></thead><tbody>${rows}</tbody></table></div>`,
      `<h2>${t.exampleTitle}</h2>`,
      `<p>${t.exampleBody}</p>`,
      `<p><a class="example-link" href="${escapedExample}">${escapedExample}</a></p>`
    ].join("");
  }

  return {
    SUPPORTED_LANGUAGES,
    i18n,
    PARAM_ORDER,
    tr,
    render,
    buildExampleUrl
  };
})();
