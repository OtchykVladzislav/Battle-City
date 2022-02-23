import {wall, boxes, img, ctx, tank }  from "./modules/util.js";

export var direction = "top";

let positions = [
    {x: 0, y: 0},
    {x: 57, y: 0},
    {x: 113, y: 0},
    {x: 171, y: 0}
]

let target = positions[0]
/*
function checktouchWithWall(direction){
    for(let i = 0; i < wall.length; i++){
        if(wall[i].x == tank.x && wall[i].y == tank.y){
            if(direction == "top"){

            }
            else if(direction == "down"){

            }
            else if(direction == "left"){

            }
            else if(direction == "right" ){

            }
        }
    }
}

*/

function checkDirection(e){
    if((e.keyCode === 38 && tank.y > 0)){
        direction = "top"
        target = positions[0]
        tank.y -= boxes;
    }
    else if((e.keyCode === 40 && tank.y < 600)){
        direction = "down"
        target = positions[2]
        tank.y += boxes;
    }
    else if((e.keyCode === 37 && tank.x > 0)){
        direction = "left"
        target = positions[3]
        tank.x -= boxes;  
    }
    else if(e.keyCode === 39 && tank.x < 600){
        direction = "right"
        target = positions[1]
        tank.x += boxes;
    }
    else if(e.keyCode == 32){
        tank.shoot = true;
    }
}

document.addEventListener("keyup", checkDirection, false);

export var game = () => {
    ctx.drawImage(img, 281, 239, 27, 27, 0, 0, 640, 640);
    ctx.drawImage(img, target.x, target.y, 27, 27, tank.x, tank.y, boxes, boxes);
    for(let i=0; i < wall.length; i++){
        ctx.drawImage(img, 225, 155, 27, 27, wall[i].x, wall[i].y, boxes, boxes);
    }
}