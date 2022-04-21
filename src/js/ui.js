var ui = document.getElementById("background")
var context = ui.getContext("2d")

var animateUI;

function drawInterface() {
    context.fillStyle='#636363';
    context.fillRect(0,0,ui.width, ui.height);
}

function checkTanks() {
    let count = 1;
    for(let i = 0; i < 10; i++){
        for (let j = 0; j < 2; j++) {
            if(count <= sumEnemy){
                context.drawImage(img, 507, 163, 11, 12, j * 40 + 50, i * 30 + 20, 20, 20);
            }
            count += 1
        }
    }
}

function drawElem() {
    context.fillStyle="black"
    context.font='15px PixelFont';
    context.fillText(`${player.health}`, 85, 400);
    context.fillText(`${stage}`, 70, 590);
}

function elemUI() {
    context.drawImage(img, 658, 322, 29, 27, 70, 520, 40, 40);
    if(mode === 0){
        context.drawImage(img, 660, 238, 26, 13, 60, 350, 40, 30);
        context.drawImage(img, 660, 252, 12, 15, 50, 380, 25, 25);
    }
    else if(mode === 1){
        context.drawImage(img, 660, 238, 26, 13, 60, 350, 40, 30);
        context.drawImage(img, 660, 252, 12, 15, 50, 380, 25, 25);
        context.drawImage(img, 660, 280, 26, 13, 60, 410, 40, 30);
        context.drawImage(img, 660, 294, 12, 15, 50, 440, 25, 25);
    }
}

function isUpdateUI(){
    drawInterface()
    elemUI()
    drawElem()
    checkTanks()
    if(pause === true){
        context.fillStyle='white';
        context.fillRect(0,0,ui.width, ui.height);
    }
    animateUI = window.requestAnimationFrame(isUpdateUI)
}