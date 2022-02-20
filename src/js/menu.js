const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");
const img = new Image()
img.src = "src/images/base.png"

let change = 250;
var mode;

function onChange(e){
    if(e.keyCode === 38 || e.keyCode === 87){
        change = 250;
        mode = 0;
    }
    else if(e.keyCode === 40 || e.keyCode === 83){
        change = 290;
        mode = 1;
    }
}

document.addEventListener("keydown", onChange);


function Menu() {
    ctx.drawImage(img, 281, 239, 27, 27, 0, 0, 640, 640);
    ctx.drawImage(img, 229, 268, 331, 120, 150, 100, 331, 120);
    ctx.drawImage(img, 57, 0, 27, 27, 150, change, 27, 27);
    //1 player
    ctx.drawImage(img, 240, 409, 10, 10, 190, 250, 20, 20)
    ctx.drawImage(img, 436, 394, 10, 10, 240, 250, 20, 20)
    ctx.drawImage(img, 380, 394, 10, 10, 280, 250, 20, 20)
    ctx.drawImage(img, 226, 394, 10, 10, 320, 250, 20, 20)
    ctx.drawImage(img, 561, 394, 10, 10, 360, 250, 20, 20)
    ctx.drawImage(img, 282, 394, 10, 10, 400, 250, 20, 20)
    ctx.drawImage(img, 464, 394, 10, 10, 440, 250, 20, 20)
    //2 player
    ctx.drawImage(img, 253, 409, 10, 10, 190, 290, 20, 20)
    ctx.drawImage(img, 436, 394, 10, 10, 240, 290, 20, 20)
    ctx.drawImage(img, 380, 394, 10, 10, 280, 290, 20, 20)
    ctx.drawImage(img, 226, 394, 10, 10, 320, 290, 20, 20)
    ctx.drawImage(img, 561, 394, 10, 10, 360, 290, 20, 20)
    ctx.drawImage(img, 282, 394, 10, 10, 400, 290, 20, 20)
    ctx.drawImage(img, 464, 394, 10, 10, 440, 290, 20, 20)
    ctx.drawImage(img, 479, 394, 10, 10, 480, 290, 20, 20)

    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 13 || e.keyCode === 32){
            clearInterval(interval)
            game()
        }
    })

}

let interval = setInterval(Menu, 10)