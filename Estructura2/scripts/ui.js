import { searchUser } from "./service.js";

// 1. Selección de elementos (Corregido a nombres consistentes)
const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");
const statusEl = document.getElementById("status");
const searchInput = document.getElementById("searchInput");

/**
 * Configura el evento de filtrado en tiempo real
 */
export function addSearchInputEvent(searchPost) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = searchPost(value);
        renderPosts(filtered);
        statusEl.textContent = `Resultados: ${filtered.length}`;
    });
}

/**
 * Maneja la carga de datos asíncrona
 */
export function addLoadEvent(loadData) {
    loadBtn.addEventListener("click", async () => {
        try {
            statusEl.textContent = "Cargando datos...";
            statusEl.className = "status loading";
            postsContainer.innerHTML = "";

            // Llamada a la API o servicio
            const listData = await loadData(); 
            
            // Renderizamos toda la lista recibida
            renderPosts(listData); 

            statusEl.textContent = `Se cargaron ${listData.length} publicaciones`;
            statusEl.className = "status";
        } catch (error) {
            statusEl.textContent = "Error: " + error.message;
            statusEl.className = "status error";
        }
    });
}

/**
 * Genera el HTML para cada publicación
 */
function renderPosts(data) {
    postsContainer.innerHTML = "";
    
    data.forEach((post) => {
        const user = searchUser(post.userId);
        const card = document.createElement("div"); 
        card.className = "card";
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <span class="author">
                Autor: ${user ? user.name : "Desconocido"}
            </span>
        `;
        postsContainer.appendChild(card);
    });
}