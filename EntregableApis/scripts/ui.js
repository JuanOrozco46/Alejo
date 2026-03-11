const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");
const statusEl = document.getElementById("status");
const searchInput = document.getElementById("searchInput");

export function addSearchInputEvent(searchCharacter) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = searchCharacter(value);
        renderCharacters(filtered);
        statusEl.textContent = `Resultados: ${filtered.length}`;
    });
}

export function addLoadBtnEvent(loadData) {
    try {
        loadBtn.addEventListener("click", async () => {
            statusEl.textContent = "Cargando datos...";
            statusEl.className = "status loading";
            postsContainer.innerHTML = "";
            const listData = await loadData();
            
            const [characters] = listData; 
            
            renderCharacters(characters);
            statusEl.textContent = `Se cargaron ${characters.length} personajes`;
            statusEl.className = "status";
        });
    } catch (error) {
        statusEl.textContent = error.message;
        statusEl.className = "status error";
    }
}

function renderCharacters(data) {
    postsContainer.innerHTML = "";

    data.forEach((character) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h3>${character.name}</h3>
          <p>Especie: ${character.species}</p>
          <span class="author">
            Origen: ${character.origin.name}
          </span>
        `;

        postsContainer.appendChild(card);
    });
}