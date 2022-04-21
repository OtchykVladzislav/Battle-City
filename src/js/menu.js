var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

let change = 5.8;
var mode = 0;
var start = false;
var interval;

function onChange(e){
    if((e.keyCode === 38 || e.keyCode === 87) && start === false){
        change = 5.8;
        mode = 0;
    }
    else if((e.keyCode === 40 || e.keyCode === 83) && start === false){
        change = 7.8;
        mode = 1;
    }
    else if(e.keyCode == 13){
        start = true;
    }
}

document.addEventListener("keydown", onChange);


function Menu() {
    ctx.drawImage(img, 281, 239, 27, 27, 0, 0, 13, 13);
    ctx.drawImage(img, 229, 268, 331, 120, 1.5, 1, 10, 3);
    ctx.drawImage(img, 57, 0, 27, 27, 2, change, 1, 1);
    //1 player
    ctx.drawImage(img, 240, 409, 10, 10, 4, 6, 0.5, 0.5)
    ctx.drawImage(img, 436, 394, 10, 10, 5, 6, 0.5, 0.5)
    ctx.drawImage(img, 380, 394, 10, 10, 6, 6, 0.5, 0.5)
    ctx.drawImage(img, 226, 394, 10, 10, 7, 6, 0.5, 0.5)
    ctx.drawImage(img, 561, 394, 10, 10, 8, 6, 0.5, 0.5)
    ctx.drawImage(img, 282, 394, 10, 10, 9, 6, 0.5, 0.5)
    ctx.drawImage(img, 464, 394, 10, 10, 10, 6, 0.5, 0.5)
    //2 player
    ctx.drawImage(img, 253, 409, 10, 10, 4, 8, 0.5, 0.5)
    ctx.drawImage(img, 436, 394, 10, 10, 5, 8, 0.5, 0.5)
    ctx.drawImage(img, 380, 394, 10, 10, 6, 8, 0.5, 0.5)
    ctx.drawImage(img, 226, 394, 10, 10, 7, 8, 0.5, 0.5)
    ctx.drawImage(img, 561, 394, 10, 10, 8, 8, 0.5, 0.5)
    ctx.drawImage(img, 282, 394, 10, 10, 9, 8, 0.5, 0.5)
    ctx.drawImage(img, 464, 394, 10, 10, 10, 8, 0.5, 0.5)
    ctx.drawImage(img, 479, 394, 10, 10, 11, 8, 0.5, 0.5)
}

function isMenu(){
    Menu()
    if(start === true){
        isLogicBonus()
        isUpdateDraw()
        isUpdateEnemy()
        isUpdateUI()
        window.cancelAnimationFrame(interval)
        return;
    }
    interval = window.requestAnimationFrame(isMenu)
}