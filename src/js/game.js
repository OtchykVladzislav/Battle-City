import { start } from "./menu.js";
import { game } from "./tank.js";

let upgrade = setInterval(()=>{
    if (start === true){
        game()
    }
}, 1000/60)

