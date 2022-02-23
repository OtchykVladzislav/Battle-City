import { direction } from "./tank.js";
import { wall, boxes, ctx, img, tank} from "./modules/util.js";

let positionsBullet = {
    x: tank.x,
    y: tank.y,
    damage: 50
}

let shootBullet = () => {

    let imgBullet = [
        {x: 448, y: 0, dW: 6, dH: 8},
        {x: 462 ,y: 0, dW: 8, dH: 6},
        {x: 476 ,y: 0, dW: 6, dH: 8},
        {x: 490 ,y: 0, dW: 8, dH: 6}
    ];

    let rotate;

    if(tank.shoot == true){
        if(direction == "top"){
            rotate = imgBullet[0]
            positionsBullet.y -= boxes
        }
        if(direction == "down"){
            rotate = imgBullet[2]
            positionsBullet.y += boxes
        }
        if(direction == "left"){
            rotate = imgBullet[3]
            positionsBullet.x -= boxes

        }
        if(direction == "right"){
            rotate = imgBullet[1]
            positionsBullet.x += boxes
        }

        if(positionsBullet.x < 0 || positionsBullet.x > 640 || positionsBullet.y < 0 || positionsBullet.y > 640){
            clearInterval(time)
            tank.shoot = false;
        }

        for(let i = 0; i < wall.length; i++){
            if(positionsBullet.x === wall[i].x && positionsBullet.y === wall[i].y){
                clearInterval(time)
                tank.shoot = false;
            }
        }

        ctx.drawImage(img, positionsBullet.x, positionsBullet.y, 40, 40);

    }
}

let time = setInterval(shootBullet, 100)


