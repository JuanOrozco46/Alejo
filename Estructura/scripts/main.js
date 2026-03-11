import {iniApp} from "./ui.js"
import { getTodos} from "./service.js"

function start(){
    iniApp(getTodos);
}
start();