const boxes = 49
ctx.scale(boxes, boxes);

var player = {
    pos : {
        x: 4,
        y: 12
    },
    health : 3,
    side : 1,
    damage: 1,
    level : 0,
    immortal: false,
    speedBullet: 0.1 
}

var time = 0;

var score = 0;

var stage = 1;

var basePlayer = {
    pos : {
        x : 6,
        y: 12
    },
    health : 4
}

var bonusCount = []

var spawnBonus = [
    {
        x: 0,
        y: 12
    },
    {
        x: 12,
        y: 0
    },
    {
        x: 6,
        y: 6
    },
    {
        x: 12,
        y: 12
    },
    {
        x: 0,
        y: 0
    }
]

var animateDraw;

var animateEvent;

var bulletPlayer = []

var bulletEnemy = []

var pause = false;

document.addEventListener("keyup", (event) => {
    if(event.keyCode === 87 && Math.ceil(player.pos.y) !== 0 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.y -= 1
        player.side = 1
        if(isColides()){
            player.pos.y +=1
        }
    }
    else if(event.keyCode === 83 && Math.ceil(player.pos.y) !== 12 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.y += 1
        player.side = 2
        if(isColides()){
            player.pos.y -=1
        }
    }
    else if(event.keyCode === 65 && Math.ceil(player.pos.x) !== 0 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.x -= 1
        player.side = 3
        if(isColides()){
            player.pos.x +=1
        }
    }
    else if(event.keyCode === 68 && Math.ceil(player.pos.x) !== 12 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.x += 1
        player.side = 4
        if(isColides()){
            player.pos.x -=1
        }
    }
    else if(event.keyCode === 32 && basePlayer.health > 0 && pause === false && start === true){
        bulletPlayer.push({
            x: player.pos.x,
            y: player.pos.y,
            side: position[player.side],
            number: player.side
        })
    }
    else if(event.keyCode === 27 && start === true){
        if(pause === true){
            pause = false
        }
        else if(pause === false){
            pause = true
        }
        isPause()
    }
})

function isColides(){
    for (let i = 0; i < arena.length; i++) {
        for (let j = 0; j < arena[i].length; j++) {
            for(let k = 0; k < enemy.length; k++){
                if(arena[player.pos.y][player.pos.x] === 1 || arena[player.pos.y][player.pos.x] === 2 || arena[player.pos.y][player.pos.x] === 9 || (player.pos.x === enemy[k].pos.x && player.pos.y === enemy[k].pos.y)){
                    return 1
                }
            }
        }
    }
    return 0
}

function takeBonus() {
    for(let i = 0; i < arena.length; i++){
        for(let j = 0; j < arena[i].length; j++){
            if(i === player.pos.y && j === player.pos.x && arena[player.pos.y][player.pos.x] >= 3 && arena[player.pos.y][player.pos.x] <= 8){
                bonusUp(arena[i][j])
                arena[i][j] = 0
                bonusCount.shift()
            }
        }
    }
}

function isDrawBase() {
    if(basePlayer.health > 0){
        ctx.drawImage(img,309, 213, 27 , 23 ,basePlayer.pos.x, basePlayer.pos.y, 1, 1);
    }
    else{
        ctx.drawImage(img,338, 214, 25 , 24 ,basePlayer.pos.x, basePlayer.pos.y, 1, 1);
    }
}

function drawArena() {
    for(let i = 0; i < arena.length;i++){
        for(let j = 0; j < arena[i].length; j++){
            if(arena[i][j] === 0){
                ctx.fillStyle='black';
                ctx.fillRect(j, i, 1, 1);
            }
            else if(arena[i][j] === 1){
                ctx.drawImage(img, 225, 155, 27, 27, j, i, 1, 1);
            }
            else if(arena[i][j] === 2){
                ctx.drawImage(img, 225, 183, 27, 27, j, i, 1, 1);
            }
            else if(arena[i][j] === 3){
                ctx.drawImage(img, 505, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 4){
                ctx.drawImage(img, 589, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 5){
                ctx.drawImage(img, 561, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 6){
                ctx.drawImage(img, 449, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 7){
                ctx.drawImage(img, 477, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 8){
                ctx.drawImage(img, 533, 29, 27, 26, j, i, 1, 1);
            }
            else if(arena[i][j] === 9){
                ctx.drawImage(img, 253, 239, 27, 26, j, i, 1, 1);
            }
        }
    }
    isDrawEnemy()
}

function drawForest() {
    for(let i = 0; i < arena.length;i++){
        for(let j = 0; j < arena[i].length; j++){
            if(arena[i][j] === 10){
                ctx.drawImage(img, 253, 211, 27, 27, j, i, 1, 1);
            }
        }
    }
}


function checkLevel(){
    if(player.level === 0){
        player.speedBullet = 0.1
    }
    else if(player.level === 1){
        player.speedBullet = 0.2
    }
    else if(player.level >= 2){
        player.speedBullet = 0.25
        player.damage = 2
    }
}

function drawTank(){
    let position = isLevels[player.level]
    if(player.level === 0){ctx.drawImage(img, position[player.side - 1].x, position[player.side - 1].y, 23, 23,player.pos.x, player.pos.y, 1, 1)}
    else{ctx.drawImage(img, position[player.side - 1].x, position[player.side - 1].y, 25, 26,player.pos.x, player.pos.y, 1, 1)}
}

function hitArena(x,y,object,index,name) {
    for(let i = 0; i < arena.length;i++){
        for(let j = 0; j < arena[i].length; j++){
            if(x === j && y === i && arena[i][j] == 1){
                if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
                    enemy[object[index].index].shoot = false
                }
                ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
                arena[i][j] = 0
                object.splice(index,1)
            }
            else if(x === j && y === i && arena[i][j] == 2){
                if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
                    enemy[object[index].index].shoot = false
                }
                ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
                object.splice(index,1)
                if(player.level === 3 && name === "bulletPlayer"){
                    arena[i][j] = 0
                }
            }
        }
    }
    if(x < 0 || y < 0 || x >= 13 || y >= 13){
        if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
            enemy[object[index].index].shoot = false
        }
        object.splice(index,1)
    }
    hitBase(x,y,object,index, name)
    if(name === "bulletPlayer"){
        hitEnemy(x,y,object,index)
    }
    else{
        hitPlayer(x,y,object,index)
    }
}


function bonusDrop(){
    let randomName = Math.floor(Math.random() * bonus.length)
    let randomSpawn = Math.floor(Math.random() * spawnBonus.length)
    bonusCount.push({
        name: bonus[randomName],
        x: spawnBonus[randomSpawn].x,
        y: spawnBonus[randomSpawn].y
    })
    bonusMerge(bonusCount, randomName)
}

function bonusMerge(object, random) {
    for (let i = 0; i < object.length; i++) {
        arena[object[i].y][object[i].x] = (random + 3)
    }
}

function bonusUp(elem) {
    if(elem === 3){
        bonusActive.defense = true
    }
    else if(elem === 4){
        player.health += 1
    }
    else if(elem === 5){
        enemy.splice(0, enemy.length)
    }
    else if(elem === 6){
        if(bonusActive.immortal === false){bonusActive.immortal = true}
    }
    else if(elem === 7){
        bonusActive.move = false
    }
    else if(elem === 8){
        if(player.level !== 3){player.level += 1}
    }
}


function hitBase(x,y,object,index, name){
    if(x === basePlayer.pos.x && y === basePlayer.pos.y){
        basePlayer.health -= player.damage
        if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
            enemy[object[index].index].shoot = false
        }
        ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
        object.splice(index, 1)
    }
}

function hitEnemy(x,y,object,index) {
    for(let i = 0; i < enemy.length; i++){
        if(x === Math.floor(enemy[i].pos.x) && y === Math.floor(enemy[i].pos.y)){//поменять цикл исправить ошибку
            enemy[i].health -= player.damage
            ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
            if(enemy[i].health <= 0){
                checkType(enemy[i].pos.x, enemy[i].pos.y,enemy[i].type)
                enemy.splice(i, 1)
            }
            object.splice(index, 1)
        }
    }
}


function isShoot(){
    for(let i = 0; i < bulletPlayer.length; i++){
        ctx.drawImage(img,positionBullet[bulletPlayer[i].number - 1].x, positionBullet[bulletPlayer[i].number - 1].y, positionBullet[bulletPlayer[i].number - 1].width, 
            positionBullet[bulletPlayer[i].number - 1].height, bulletPlayer[i].x + 0.4, bulletPlayer[i].y + 0.4, 0.2 , 0.2)

        if(bulletPlayer[i].side === "up"){
            bulletPlayer[i].y -= player.speedBullet
        }
        else if(bulletPlayer[i].side === "down"){
            bulletPlayer[i].y += player.speedBullet
        }
        else if(bulletPlayer[i].side === "left"){
            bulletPlayer[i].x -= player.speedBullet
        }
        else if(bulletPlayer[i].side === "right"){
            bulletPlayer[i].x += player.speedBullet
        }
        hitArena(Math.floor(bulletPlayer[i].x), Math.floor(bulletPlayer[i].y), bulletPlayer,i,"bulletPlayer")
    }
}

function isMode(){
    if(mode === 0){
        isShoot()
        drawTank()
        if(bonusActive.immortal === true){
            ctx.drawImage(img, 477, 85, 27, 27, player.pos.x, player.pos.y, 1, 1)
        }
        drawForest()
    }
    else if(mode === 1){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,13,13);
        ctx.fillStyle = "white"
        ctx.font='2px Verdana';
        ctx.fillText("No mode", 2, 7);
    }
}

function isUpdateDraw(){
    if(pause === false){
        drawArena()
        isDrawBase()
        isMode()
        checkLevel()
        if(basePlayer.health <= 0 || player.health <= 0){
            hardStop()
        }
    }
    animateDraw = window.requestAnimationFrame(isUpdateDraw)
}

function isLogicBonus(){
    let timeout;
    if(pause === false){
        if(bonusActive.defense === true){
            for(let i = 0; i < aroundBase.length; i++){
                arena[aroundBase[i].y][aroundBase[i].x] = 2
            }
            timeout = setTimeout(() => {
                bonusActive.defense = false
                for(let i = 0; i < aroundBase.length; i++){
                    arena[aroundBase[i].y][aroundBase[i].x] = 1
                }
                clearTimeout(timeout)
            }, 10000)
        }
        if(bonusActive.immortal === true){
            ctx.drawImage(img, 477, 85, 27, 27, player.pos.x, player.pos.y, 1, 1)
            timeout = setTimeout(() => {
                bonusActive.immortal = false
                clearTimeout(timeout)
            }, 10000)
        }
        takeBonus()
        if((time / 1000) % 2 === 0 || time === 0){
            bonusDrop()
            if(bonusCount.length > 1){
                arena[bonusCount[0].y][bonusCount[0].x] = 0
                bonusCount.shift()
            }
        }
        time++
    }
    animateEvent = window.requestAnimationFrame(isLogicBonus)
}
