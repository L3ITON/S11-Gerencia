// Mapeo de palabras clave a páginas (y anclas)
const pageMap = [
  {
    page: "index.html",
    keywords: ["inicio", "presentación", "presentacion", "introducción", "introduccion", "portada", "equipo", "integrantes"]
  },
  {
    page: "objetivo.html",
    keywords: ["objetivo", "objetivos", "proposito", "propósito", "purpose"]
  },
  {
    page: "desarrollo.html",
    keywords: ["desarrollo", "conceptualización", "conceptualizacion", "literatura", "revisión", "revision", "análisis", "analisis", "tendencias", "retos", "oportunidades"]
  },
  {
    page: "desarrollo.html#brecha",
    keywords: ["brecha digital", "brecha", "inclusión", "inclusion", "zonas rurales"]
  },
  {
    page: "ejemplo.html",
    keywords: ["ejemplo", "ejemplo aplicado", "caso", "caso práctico", "caso practico", "rural", "institucion educativa", "aplicado"]
  },
  {
    page: "conclusiones.html",
    keywords: ["conclusiones", "conclusion", "cierre", "final", "recomendaciones", "síntesis", "sintesis"]
  }
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchMessage = document.getElementById("searchMessage");
const chips = document.querySelectorAll(".search-chip");

function goTo(page) {
  window.location.href = page;
}

function handleSearch() {
  if (!searchInput || !searchMessage) return;

  const query = (searchInput.value || "").trim().toLowerCase();
  if (!query) {
    searchMessage.textContent = "Escribe al menos una palabra para buscar.";
    return;
  }

  let target = null;
  for (const entry of pageMap) {
    if (entry.keywords.some(k => query.includes(k))) {
      target = entry.page;
      break;
    }
  }

  if (target) {
    searchMessage.textContent = "";
    goTo(target);
  } else {
    searchMessage.textContent =
      "No se encontró una sección para esa búsqueda. Intenta con: objetivo, desarrollo, brecha digital, ejemplo, conclusiones…";
  }
}

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  });
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    const page = chip.getAttribute("data-page");
    if (page) {
      goTo(page);
    }
  });
});
