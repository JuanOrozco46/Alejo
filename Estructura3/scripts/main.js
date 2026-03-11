import { addLoadBtnEvent, addSearchInputEvent } from "./ui.js";
import { loadData, searchPost } from "./service.js";

function start() {
    addLoadBtnEvent(loadData);
    addSearchInputEvent(searchPost);
}

start();