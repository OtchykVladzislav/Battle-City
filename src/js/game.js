const boxes = 49
ctx.scale(boxes, boxes);

var player = {
    pos : {
        x: 5,
        y: 13
    },
    health : 3,
    side : 1,
    damage: 1,
    level : 0,
    immortal: false,
    speedBullet: 0.1 
}

var playerTwo = {
    pos : {
        x: 9,
        y: 13
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
        x : 7,
        y: 13
    },
    health : 4
}

var bonusCount = []

var spawnBonus = [
    {
        x: 1,
        y: 13
    },
    {
        x: 13,
        y: 1
    },
    {
        x: 7,
        y: 7
    },
    {
        x: 13,
        y: 13
    },
    {
        x: 1,
        y: 1
    }
]

var animateDraw;

var animateEvent;

var bulletPlayer = []

var bulletEnemy = []

var pause = false;

document.addEventListener("keyup", (event) => {
    if(event.keyCode === 87 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.y -= 1
        player.side = 1
        if(isColides(player.pos.x,player.pos.y)){
            player.pos.y +=1
        }
    }
    else if(event.keyCode === 83 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.y += 1
        player.side = 2
        if(isColides(player.pos.x,player.pos.y)){
            player.pos.y -=1
        }
    }
    else if(event.keyCode === 65 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.x -= 1
        player.side = 3
        if(isColides(player.pos.x,player.pos.y)){
            player.pos.x +=1
        }
    }
    else if(event.keyCode === 68 && basePlayer.health > 0 && pause === false && start === true){
        player.pos.x += 1
        player.side = 4
        if(isColides(player.pos.x,player.pos.y)){
            player.pos.x -=1
        }
    }
    else if(event.keyCode === 32 && basePlayer.health > 0 && pause === false && start === true){
        bulletPlayer.push({
            x: player.pos.x,
            y: player.pos.y,
            side: position[player.side],
            number: player.side,
            speed: player.speedBullet,
            damage: player.damage
        })
    }
    else if(mode === 1 && event.keyCode === 38 && basePlayer.health > 0 && pause === false && start === true){
        playerTwo.pos.y -= 1
        playerTwo.side = 1
        if(isColides(playerTwo.pos.x,playerTwo.pos.y)){
            playerTwo.pos.y +=1
        }
    }
    else if(mode === 1 && event.keyCode === 40 && basePlayer.health > 0 && pause === false && start === true){
        playerTwo.pos.y += 1
        playerTwo.side = 2
        if(isColides(playerTwo.pos.x,playerTwo.pos.y)){
            playerTwo.pos.y -=1
        }
    }
    else if(mode === 1 && event.keyCode === 37 && basePlayer.health > 0 && pause === false && start === true){
        playerTwo.pos.x -= 1
        playerTwo.side = 3
        if(isColides(playerTwo.pos.x,playerTwo.pos.y)){
            playerTwo.pos.x +=1
        }
    }
    else if(mode === 1 && event.keyCode === 39 && basePlayer.health > 0 && pause === false && start === true){
        playerTwo.pos.x += 1
        playerTwo.side = 4
        if(isColides(playerTwo.pos.x,playerTwo.pos.y)){
            playerTwo.pos.x -=1
        }
    }
    else if(mode === 1 && event.keyCode === 16 && basePlayer.health > 0 && pause === false && start === true){
        bulletPlayer.push({
            x: playerTwo.pos.x,
            y: playerTwo.pos.y,
            side: position[playerTwo.side],
            number: playerTwo.side,
            speed: playerTwo.speedBullet,
            damage: playerTwo.damage
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

function isColides(x,y){
    for (let i = 0; i < arena.length; i++) {
        for (let j = 0; j < arena[i].length; j++) {
            for(let k = 0; k < enemy.length; k++){
                if(arena[y][x] === 1 || arena[y][x] === 2 || arena[y][x] === 9 || arena[y][x] === 11 || (x === enemy[k].pos.x && y === enemy[k].pos.y)){
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
            else if(mode === 1 && i === playerTwo.pos.y && j === playerTwo.pos.x && arena[playerTwo.pos.y][playerTwo.pos.x] >= 3 && arena[playerTwo.pos.y][playerTwo.pos.x] <= 8){
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
            else if(arena[i][j] === 11){
                ctx.fillStyle='#636363';
                ctx.fillRect(j, i, 1, 1);
            }
        }
    }
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

    if(playerTwo.level === 0){
        playerTwo.speedBullet = 0.1
    }
    else if(playerTwo.level === 1){
        playerTwo.speedBullet = 0.2
    }
    else if(playerTwo.level >= 2){
        playerTwo.speedBullet = 0.25
        playerTwo.damage = 2
    }
}

function drawTank(){
    let position = isLevels[player.level]
    if(player.level === 0){ctx.drawImage(img, position[player.side - 1].x, position[player.side - 1].y, 23, 23,player.pos.x, player.pos.y, 1, 1)}
    else{ctx.drawImage(img, position[player.side - 1].x, position[player.side - 1].y, 25, 26,player.pos.x, player.pos.y, 1, 1)}
    if(mode === 1){
        let positionTwo = isLevelsTwo[playerTwo.level]
        if(playerTwo.level === 0){ctx.drawImage(img, positionTwo[playerTwo.side - 1].x, positionTwo[playerTwo.side - 1].y, 23, 23,playerTwo.pos.x, playerTwo.pos.y, 1, 1)}
        else{ctx.drawImage(img, positionTwo[playerTwo.side - 1].x, positionTwo[playerTwo.side - 1].y, 25, 26,playerTwo.pos.x, playerTwo.pos.y, 1, 1)}
    }
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
            else if(x === j && y === i && arena[i][j] == 11){
                if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
                    enemy[object[index].index].shoot = false
                }
                object.splice(index,1)
            }
        }
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
        if(mode === 1){
            playerTwo.health += 1
        }
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
        if(mode === 1 && playerTwo.level !== 3){
            playerTwo.level += 1
        }
    }
}


function hitBase(x,y,object,index, name){
    if(x === basePlayer.pos.x && y === basePlayer.pos.y){
        basePlayer.health -= object[index].damage
        if(name !== "bulletPlayer" && enemy[object[index].index] !== undefined){
            enemy[object[index].index].shoot = false
        }
        ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
        object.splice(index, 1)
    }
}

function hitEnemy(x,y,object,index) {
    for(let i = 0; i < enemy.length; i++){
        if(x === Math.floor(enemy[i].pos.x) && y === Math.floor(enemy[i].pos.y)){
            enemy[i].health -= object[index].damage
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
            bulletPlayer[i].y -= bulletPlayer[i].speed
        }
        else if(bulletPlayer[i].side === "down"){
            bulletPlayer[i].y += bulletPlayer[i].speed
        }
        else if(bulletPlayer[i].side === "left"){
            bulletPlayer[i].x -= bulletPlayer[i].speed
        }
        else if(bulletPlayer[i].side === "right"){
            bulletPlayer[i].x += bulletPlayer[i].speed
        }
        hitArena(Math.floor(bulletPlayer[i].x), Math.floor(bulletPlayer[i].y), bulletPlayer,i,"bulletPlayer")
    }
}

function isMode(){
    isShoot()
    drawTank()
    if(bonusActive.immortal === true){
        ctx.drawImage(img, 477, 85, 27, 27, player.pos.x, player.pos.y, 1, 1)
        if(mode === 1) ctx.drawImage(img, 477, 85, 27, 27, playerTwo.pos.x, playerTwo.pos.y, 1, 1)
    }
    drawForest()
}

function isUpdateDraw(){
    if(pause === false){
        drawArena()
        isDrawBase()
        isMode()
        checkLevel()
        if(basePlayer.health <= 0 || player.health <= 0 || playerTwo.health <= 0){
            isLose()
            start = false
            window.cancelAnimationFrame(animateDraw)
            window.cancelAnimationFrame(animateEvent)
            window.cancelAnimationFrame(animateEnemy)
            window.cancelAnimationFrame(animateUI)
            return;
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
