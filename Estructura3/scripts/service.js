import { setState, getState } from "./state.js";

export async function loadData() {
    const [postsResponse, usersResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error("Error al obtener datos");
    }

    const posts = await postsResponse.json();
    const users = await usersResponse.json();

    setState("usersList", users);
    setState("postsList", posts);

    return [posts, users];
}

export function searchPost(value) {
    const postsList = getState("postsList");
    const filteredPosts = postsList.filter((post) =>
        post.title.toLowerCase().includes(value),
    );

    return filteredPosts;
}

export function searchUser(userId) {
    const usersList = getState("usersList");
    return usersList.find((u) => u.id === userId);
}