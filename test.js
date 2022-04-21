var canvas = document.getElementById("explosion")
var context = canvas.getContext('2d');

const boxes = 50
context.scale(boxes, boxes);

let start;

var img = new Image()
img.src = "src/images/base.png"

let sec = 0;
let pos = {
    x: 1,
    y: 1
}

function isTestAnimation(){
    context.fillStyle="white";
    context.fillRect(0, 0, canvas.width,canvas.height);
    if(sec > 0 && sec < 20) {
        context.drawImage(img, 453, 63, 20, 16, pos.x + 0.3, pos.y + 0.3, 0.4, 0.4)
    }
    else if(sec > 20 && sec < 30){
        context.drawImage(img, 478, 58, 25, 25, pos.x + 0.2, pos.y + 0.2, 0.6, 0.6);
    }
    else if(sec > 30 && sec < 40){
        context.drawImage(img, 506, 59, 27, 28, pos.x, pos.y, 1, 1);
    }
    else if(sec >= 40){
        sec = 0;
        window.cancelAnimationFrame(start)
        return;
    }
    sec+=1
    start = window.requestAnimationFrame(isTestAnimation)
}

