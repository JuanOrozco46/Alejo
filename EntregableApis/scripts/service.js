import { setState, getState } from "./state.js";

export async function loadData() {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
        throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    const characters = data.results; 

    setState("characterList", characters);
    return [characters]; 
}

export function searchCharacter(value) {
    const characterList = getState("characterList");
    const filteredCharacters = characterList.filter((character) =>
        character.name.toLowerCase().includes(value),
    );

    return filteredCharacters;
}