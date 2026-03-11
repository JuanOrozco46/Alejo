import { searchUser } from "./service.js";

const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementById("postsContainer");
const statusEl = document.getElementById("status");
const searchInput = document.getElementById("searchInput");

export function addSearchInputEvent(searchPost) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = searchPost(value);
        renderPosts(filtered);
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
            const [posts] = listData;
            renderPosts(posts);
            statusEl.textContent = `Se cargaron ${posts.length} publicaciones`;
            statusEl.className = "status";
        });
    } catch (error) {
        statusEl.textContent = error.message;
        statusEl.className = "status error";
    }
}

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