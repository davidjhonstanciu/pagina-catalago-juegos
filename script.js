/* ==========================================================================
   GAMEVAULT - LÓGICA JAVASCRIPT VANILLA
   Proyecto 2.º SMR | Sin frameworks ni librerías externas
   ========================================================================== */

// 1. BASE DE DATOS DE EJEMPLO (12 VIDEOJUEGOS)
// Nota: Datos ficticios / educativos para el proyecto de SMR
const gamesData = [
  {
    id: 1,
    name: "GTA V",
    genre: "Acción",
    platform: "PC, PS5, Xbox",
    year: 2013,
    price: 29.99,
    image: "img/gta5.jpg",
    description: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución increíble."
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    genre: "Acción",
    platform: "PC, PS5, Xbox",
    year: 2018,
    price: 59.99,
    image: "img/rdr2.jpg",
    description: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, RDR2 es una historia épica sobre el honor y la lealtad en los albores de la era moderna."
  },
  {
    id: 3,
    name: "Minecraft",
    genre: "Sandbox",
    platform: "PC, PS5, Xbox, Switch",
    year: 2011,
    price: 23.99,
    image: "img/minecraft.jpg",
    description: "Explora mundos generados aleatoriamente y construye cosas increíbles, desde la más humilde de las casas hasta el más majestuoso de los castillos."
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    genre: "RPG",
    platform: "PC, PS5, Xbox",
    year: 2020,
    price: 49.99,
    image: "img/cyberpunk.jpg",
    description: "Un RPG de acción y aventura en mundo abierto ambientado en la megalópolis de Night City, donde pones en juego tu vida en busca de la inmortalidad."
  },
  {
    id: 5,
    name: "Elden Ring",
    genre: "RPG",
    platform: "PC, PS5, Xbox",
    year: 2022,
    price: 59.99,
    image: "img/eldenring.jpg",
    description: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Levántate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden."
  },
  {
    id: 6,
    name: "Fortnite",
    genre: "Battle Royale",
    platform: "PC, PS5, Xbox, Switch",
    year: 2017,
    price: 0.00,
    image: "img/fortnite.jpg",
    description: "Crea, juega y combate con amigos de forma gratuita en Fortnite. Sé el último jugador en pie en el Battle Royale o explora eventos en directo."
  },
  {
    id: 7,
    name: "Rocket League",
    genre: "Deportes",
    platform: "PC, PS5, Xbox, Switch",
    year: 2015,
    price: 0.00,
    image: "img/rocketleague.jpg",
    description: "¡Descarga y compite en el galardonado híbrido de fútbol de alta potencia y caos con vehículos! Personaliza tu coche y sal a la cancha."
  },
  {
    id: 8,
    name: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    platform: "PC, PS5, Xbox, Switch",
    year: 2015,
    price: 39.99,
    image: "img/witcher3.jpg",
    description: "Te conviertes en Geralt de Rivia, cazador de monstruos a sueldo. Ante ti se extiende un continente en ruinas plagado de monstruos que puedes explorar a tu antojo."
  },
  {
    id: 9,
    name: "Hogwarts Legacy",
    genre: "RPG",
    platform: "PC, PS5, Xbox, Switch",
    year: 2023,
    price: 69.99,
    image: "img/hogwarts.jpg",
    description: "Hogwarts Legacy es un RPG de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico."
  },
  {
    id: 10,
    name: "God of War Ragnarök",
    genre: "Acción",
    platform: "PC, PS5",
    year: 2022,
    price: 69.99,
    image: "img/gow.jpg",
    description: "Kratos y Atreus deben viajar a cada uno de los nueve reinos en busca de respuestas mientras las fuerzas asgardianas se preparan para la profetizada batalla."
  },
  {
    id: 11,
    name: "Subnautica",
    genre: "Supervivencia",
    platform: "PC, PS5, Xbox, Switch",
    year: 2018,
    price: 29.99,
    image: "img/subnautica.jpg",
    description: "Desciende a las profundidades de un mundo alienígena bajo el agua lleno de maravillas y peligros. Fabrica equipo, pilotas submarinos y burla a la fauna."
  },
  {
    id: 12,
    name: "ARK: Survival Evolved",
    genre: "Supervivencia",
    platform: "PC, PS5, Xbox, Switch",
    year: 2017,
    price: 19.99,
    image: "img/ark.jpg",
    description: "Como un hombre o mujer varado desnudo, congelándose y hambriento en las costas de una isla misteriosa llamada ARK, debes cazar, cosechar y construir para sobrevivir."
  }
];

// 2. REFERENCIAS A ELEMENTOS DEL DOM
const gamesGrid = document.getElementById("games-grid");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const platformFilter = document.getElementById("platform-filter");
const sortSelect = document.getElementById("sort-select");
const resetBtn = document.getElementById("reset-btn");
const resultsCount = document.getElementById("results-count");
const noResultsDiv = document.getElementById("no-results");

// Elementos del Modal
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalGenre = document.getElementById("modal-genre");
const modalDesc = document.getElementById("modal-description");
const modalPlatforms = document.getElementById("modal-platforms");
const modalYear = document.getElementById("modal-year");
const modalPrice = document.getElementById("modal-price");

// 3. FUNCIÓN PARA MOSTRAR / RENDERIZAR TARJETAS EN EL DOM
function renderGames(games) {
  // Limpiar contenedor
  gamesGrid.innerHTML = "";

  // Actualizar contador
  resultsCount.textContent = `Mostrando ${games.length} de ${gamesData.length} videojuegos`;

  // Control de resultados vacíos
  if (games.length === 0) {
    noResultsDiv.classList.remove("hidden");
    return;
  } else {
    noResultsDiv.classList.add("hidden");
  }

  // Generar cada tarjeta
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    // Formato de precio
    const formattedPrice = game.price === 0 ? "Gratis" : `${game.price.toFixed(2)} €`;

    card.innerHTML = `
      <div class="card-image-container">
        <img src="${game.image}" alt="${game.name}" loading="lazy">
        <span class="card-genre-badge">${game.genre}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${game.name}</h3>
        <div class="card-info">
          <span>🎮 Plataformas: ${game.platform}</span>
          <span>📅 Año: ${game.year}</span>
        </div>
        <div class="card-footer">
          <span class="price-tag">${formattedPrice}</span>
          <button class="btn btn-secondary" onclick="openModal(${game.id})">Ver detalles</button>
        </div>
      </div>
    `;

    gamesGrid.appendChild(card);
  });
}

// 4. LÓGICA DE FILTRADO Y BÚSQUEDA COMBINADA
function filterAndSortGames() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;
  const selectedPlatform = platformFilter.value;
  const selectedSort = sortSelect.value;

  // Filtrar
  let filtered = gamesData.filter(game => {
    // Coincidencia con buscador
    const matchesSearch = game.name.toLowerCase().includes(searchTerm);

    // Coincidencia con Género
    const matchesGenre = selectedGenre === "todos" || game.genre === selectedGenre;

    // Coincidencia con Plataforma
    const matchesPlatform = selectedPlatform === "todas" || game.platform.includes(selectedPlatform);

    return matchesSearch && matchesGenre && matchesPlatform;
  });

  // Ordenar
  if (selectedSort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "year-desc") {
    filtered.sort((a, b) => b.year - a.year);
  }

  // Renderizar resultado filtrado
  renderGames(filtered);
}

// 5. FUNCIÓN PARA LIMPIAR TODOS LOS FILTROS
function resetFilters() {
  searchInput.value = "";
  genreFilter.value = "todos";
  platformFilter.value = "todas";
  sortSelect.value = "default";
  filterAndSortGames();
}

// 6. MANEJO DEL MODAL
function openModal(gameId) {
  const game = gamesData.find(g => g.id === gameId);
  if (!game) return;

  modalImg.src = game.image;
  modalImg.alt = game.name;
  modalTitle.textContent = game.name;
  modalGenre.textContent = game.genre;
  modalDesc.textContent = game.description;
  modalPlatforms.textContent = game.platform;
  modalYear.textContent = game.year;
  modalPrice.textContent = game.price === 0 ? "Gratis" : `${game.price.toFixed(2)} €`;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Bloquear scroll de fondo
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restaurar scroll
}

// 7. EVENT LISTENERS
searchInput.addEventListener("input", filterAndSortGames);
genreFilter.addEventListener("change", filterAndSortGames);
platformFilter.addEventListener("change", filterAndSortGames);
sortSelect.addEventListener("change", filterAndSortGames);
resetBtn.addEventListener("click", resetFilters);

modalCloseBtn.addEventListener("click", closeModal);

// Cerrar modal al hacer clic en el fondo oscuro
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// 8. INICIALIZACIÓN AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  renderGames(gamesData);
});
