import { addLoadBtnEvent, addSearchInputEvent } from "./ui.js";
import { loadData, searchCharacter } from "./service.js";

function start() {
    addLoadBtnEvent(loadData);
    addSearchInputEvent(searchCharacter);
}

start();