
const materias = [
  // === CICLO 1 ===
  { ciclo: "Ciclo 1", año: "Año 1", codigo: "FRI114", nombre: "Francés Intensivo I", uv: 8, requisito: [] },
  { ciclo: "Ciclo 1", año: "Año 1", codigo: "IBI114", nombre: "Inglés Básico Intensivo", uv: 8, requisito: [] },
  { ciclo: "Ciclo 1", año: "Año 1", codigo: "PCG114", nombre: "Psicopedagogía I", uv: 4, requisito: [] },
  { ciclo: "Ciclo 1", año: "Año 1", codigo: "TCI114", nombre: "Teoría de la Comunicación I", uv: 4, requisito: [] },

  // === CICLO 2 ===
  { ciclo: "Ciclo 2", año: "Año 1", codigo: "DGL114", nombre: "Didáctica General I", uv: 4, requisito: ["PCG114"] },
  { ciclo: "Ciclo 2", año: "Año 1", codigo: "FRI214", nombre: "Francés Intensivo II", uv: 8, requisito: ["FRI114"] },
  { ciclo: "Ciclo 2", año: "Año 1", codigo: "III114", nombre: "Inglés Intermedio Intensivo I", uv: 8, requisito: ["IBI114"] },
  { ciclo: "Ciclo 2", año: "Año 1", codigo: "TCI214", nombre: "Teoría de la Comunicación II", uv: 4, requisito: ["TCI114"] },

  // === CICLO 3 ===
  { ciclo: "Ciclo 3", año: "Año 2", codigo: "FRI314", nombre: "Francés Intensivo III", uv: 8, requisito: ["FRI214"] },
  { ciclo: "Ciclo 3", año: "Año 2", codigo: "GIN114", nombre: "Gramática Inglesa I", uv: 4, requisito: ["III114"] },
  { ciclo: "Ciclo 3", año: "Año 2", codigo: "III214", nombre: "Inglés Intermedio Intensivo II", uv: 8, requisito: ["III114"] },

  // === CICLO 4 ===
  { ciclo: "Ciclo 4", año: "Año 2", codigo: "FAV114", nombre: "Francés Avanzado", uv: 4, requisito: ["FRI314"] },
  { ciclo: "Ciclo 4", año: "Año 2", codigo: "GFR114", nombre: "Gramática Francesa I", uv: 4, requisito: ["FRI314"] },
  { ciclo: "Ciclo 4", año: "Año 2", codigo: "GIN214", nombre: "Gramática Inglesa II", uv: 4, requisito: ["GIN114"] },
  { ciclo: "Ciclo 4", año: "Año 2", codigo: "IAI114", nombre: "Inglés Avanzado Intensivo I", uv: 8, requisito: ["III214"] },

  // === CICLO 5 ===
  { ciclo: "Ciclo 5", año: "Año 3", codigo: "EOF114", nombre: "Expresión Oral en Francés", uv: 4, requisito: ["FAV114"] },
  { ciclo: "Ciclo 5", año: "Año 3", codigo: "GFR214", nombre: "Gramática Francesa II", uv: 4, requisito: ["GFR114"] },
  { ciclo: "Ciclo 5", año: "Año 3", codigo: "IAI214", nombre: "Inglés Avanzado Intensivo II", uv: 8, requisito: ["IAI114"] },
  { ciclo: "Ciclo 5", año: "Año 3", codigo: "PRG114", nombre: "Pronunciación en Inglés", uv: 4, requisito: ["III114"] },

  // === CICLO 6 ===
  { ciclo: "Ciclo 6", año: "Año 3", codigo: "DIF114", nombre: "Didáctica del Idioma Francés", uv: 4, requisito: ["EOF114", "DGL114"] },
  { ciclo: "Ciclo 6", año: "Año 3", codigo: "FFR114", nombre: "Fonética Francesa", uv: 4, requisito: ["FAV114"] },
  { ciclo: "Ciclo 6", año: "Año 3", codigo: "LCI114", nombre: "Lectura y Conversación en Inglés I", uv: 4, requisito: ["IAI214"] },
  { ciclo: "Ciclo 6", año: "Año 3", codigo: "OEF114", nombre: "Ortografía y Estilística Francesa", uv: 4, requisito: ["GFR214"] },
  { ciclo: "Ciclo 6", año: "Año 3", codigo: "RPB114", nombre: "Relaciones Públicas", uv: 4, requisito: ["EOF114", "TCI214"] },

  // === CICLO 7 ===
  { ciclo: "Ciclo 7", año: "Año 4", codigo: "COI114", nombre: "Composición Inglesa I", uv: 4, requisito: ["GIN214"] },
  { ciclo: "Ciclo 7", año: "Año 4", codigo: "FYC114", nombre: "El Francés y el Comercio", uv: 4, requisito: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { ciclo: "Ciclo 7", año: "Año 4", codigo: "ICF114", nombre: "Introducción a la Civilización Francesa", uv: 4, requisito: ["EOF114"] },
  { ciclo: "Ciclo 7", año: "Año 4", codigo: "LCI214", nombre: "Lectura y Conversación en Inglés II", uv: 4, requisito: ["LCI114"] },

  // === CICLO 8 ===
  { ciclo: "Ciclo 8", año: "Año 4", codigo: "DII114", nombre: "Didáctica del Idioma Inglés I", uv: 4, requisito: ["DIF114", "DGL114"] },
  { ciclo: "Ciclo 8", año: "Año 4", codigo: "FYT114", nombre: "El Francés y el Turismo", uv: 4, requisito: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { ciclo: "Ciclo 8", año: "Año 4", codigo: "GAV114", nombre: "Gramática Avanzada", uv: 4, requisito: [] },
  { ciclo: "Ciclo 8", año: "Año 4", codigo: "LFR114", nombre: "Literatura Francesa I", uv: 4, requisito: ["EOF114", "GFR214"] },
  { ciclo: "Ciclo 8", año: "Año 4", codigo: "OPU114", nombre: "Opinión Pública", uv: 4, requisito: ["RPB114", "TCI214"] },

  // === CICLO 9 ===
  { ciclo: "Ciclo 9", año: "Año 5", codigo: "FTR114", nombre: "El Francés y la Traducción", uv: 4, requisito: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { ciclo: "Ciclo 9", año: "Año 5", codigo: "IAL114", nombre: "Introducción a la Lingüística", uv: 4, requisito: ["PRG114"] },
  { ciclo: "Ciclo 9", año: "Año 5", codigo: "LFR214", nombre: "Literatura Francesa II", uv: 4, requisito: ["LFR114"] },
  { ciclo: "Ciclo 9", año: "Año 5", codigo: "SNO114", nombre: "Seminario I", uv: 6, requisito: ["GAV114"] },

  // === CICLO 10 ===
  { ciclo: "Ciclo 10", año: "Año 5", codigo: "DII214", nombre: "Didáctica del Idioma Inglés II", uv: 4, requisito: ["DII114", "DGL114"] },
  { ciclo: "Ciclo 10", año: "Año 5", codigo: "FYM114", nombre: "Fonología y Morfología Inglesa", uv: 4, requisito: ["IAL114"] },
  { ciclo: "Ciclo 10", año: "Año 5", codigo: "HDC114", nombre: "Historia de El Salvador y Centroamérica", uv: 4, requisito: ["OPU114", "TCI214"] },
  { ciclo: "Ciclo 10", año: "Año 5", codigo: "LTI114", nombre: "Literatura en Inglés I", uv: 4, requisito: ["GAV114"] },
  { ciclo: "Ciclo 10", año: "Año 5", codigo: "SNO214", nombre: "Seminario II", uv: 6, requisito: ["SNO114"] }
];

function guardarEstado(codigo, estado) {
  localStorage.setItem("materia_" + codigo, estado);
}

function obtenerEstado(codigo) {
  return localStorage.getItem("materia_" + codigo) || "";
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const años = {};

  materias.forEach(m => {
    if (!años[m.año]) años[m.año] = {};
    if (!años[m.año][m.ciclo]) años[m.año][m.ciclo] = [];
    años[m.año][m.ciclo].push(m);
  });

  for (const año in años) {
    const divAño = document.createElement("div");
    divAño.classList.add("year");
    divAño.innerHTML = `<h2>${año}</h2>`;

    for (const ciclo in años[año]) {
      const divCiclo = document.createElement("div");
      divCiclo.classList.add("cycle");
      divCiclo.innerHTML = `<h3>${ciclo}</h3>`;

      const materiasCiclo = document.createElement("div");
      materiasCiclo.classList.add("subjects");

      años[año][ciclo].forEach(m => {
        const estado = obtenerEstado(m.codigo);
        const bloqueada = m.requisito.some(r => obtenerEstado(r) !== "aprobada");

        const divMateria = document.createElement("div");
        divMateria.classList.add("subject");
        divMateria.innerText = m.nombre;
        divMateria.setAttribute("data-tooltip", `${m.codigo} | ${m.uv} UV${m.requisito.length ? " | Requiere: " + m.requisito.join(", ") : ""}`);

        if (estado === "aprobada") divMateria.classList.add("aprobada");
        else if (estado === "cursando") divMateria.classList.add("cursando");
        else if (bloqueada) divMateria.classList.add("bloqueada");

        divMateria.addEventListener("click", () => {
          if (divMateria.classList.contains("bloqueada")) return;

          const nuevoEstado = divMateria.classList.contains("aprobada") ? "" : "aprobada";
          guardarEstado(m.codigo, nuevoEstado);

          divMateria.classList.toggle("aprobada");
          if (nuevoEstado === "aprobada") divMateria.classList.add("flash");

          setTimeout(() => divMateria.classList.remove("flash"), 1000);
          actualizarMalla();
        });

        materiasCiclo.appendChild(divMateria);
      });

      divCiclo.appendChild(materiasCiclo);
      divAño.appendChild(divCiclo);
    }

    contenedor.appendChild(divAño);
  }
}

function actualizarMalla() {
  document.getElementById("malla").innerHTML = "";
  crearMalla();
}

crearMalla();
