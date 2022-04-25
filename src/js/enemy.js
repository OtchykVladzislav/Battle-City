var enemy = []

var animateEnemy;

let count;

let timer = 0;

var sumEnemy = 0;

let spawnEnemy = [
    {
        x: 2,
        y: 1
    },
    {
        x: 12,
        y: 1
    },
    {
        x: 9,
        y: 1
    },
    {
        x: 5,
        y: 1
    }
]

function isLevelsEnemy() {
    sumEnemy = levelEnemy[0]["default"] + levelEnemy[0]["velocity"] + levelEnemy[0]["rapidFire"] + levelEnemy[0]["armored"]
    if(levelEnemy[0]["default"] > 0){
        for(let i = 0; i < levelEnemy[0]["default"]; i++){
            if(count < 4){
                enemy.push({
                    pos: {
                        x : spawnEnemy[count].x,
                        y : spawnEnemy[count].y
                    },
                    side: 2,
                    type: 1,
                    speedBullet: TypesTank[1].speedBullet,
                    damage: TypesTank[1].damage,
                    health: TypesTank[1].health,
                    speed: TypesTank[1].speed,
                    shoot: false
                })
                levelEnemy[0]["default"] -= 1
                count += 1
            }
        }
    }
    else if(levelEnemy[0]["velocity"] > 0){
        for(let i = 0; i < levelEnemy[0]["velocity"]; i++){
            if(count < 4){
                enemy.push({
                    pos: {
                        x : spawnEnemy[count].x,
                        y : spawnEnemy[count].y
                    },
                    side: 2,
                    type: 2,
                    speedBullet: TypesTank[2].speedBullet,
                    damage: TypesTank[2].damage,
                    health: TypesTank[2].health,
                    speed: TypesTank[2].speed,
                    shoot: false
                })
                levelEnemy[0]["velocity"] -= 1
                count += 1
            }
        }
    }
    else if(levelEnemy[0]["rapidFire"] > 0){
        for(let i = 0; i < levelEnemy[0]["rapidFire"]; i++){
            if(count < 4){
                enemy.push({
                    pos: {
                        x : spawnEnemy[count].x,
                        y : spawnEnemy[count].y
                    },
                    side: 2,
                    type: 3,
                    speedBullet: TypesTank[3].speedBullet,
                    damage: TypesTank[3].damage,
                    health: TypesTank[3].health,
                    speed: TypesTank[3].speed,
                    shoot: false
                })
                levelEnemy[0]["rapidFire"] -= 1
                count += 1
            }
        }
    }
    else if(levelEnemy[0]["armored"] > 0){
        for(let i = 0; i < levelEnemy[0]["armored"]; i++){
            if(count < 4){
                enemy.push({
                    pos: {
                        x : spawnEnemy[count].x,
                        y : spawnEnemy[count].y
                    },
                    side: 2,
                    type: 4,
                    speedBullet: TypesTank[4].speedBullet,
                    damage: TypesTank[4].damage,
                    health: TypesTank[4].health,
                    speed: TypesTank[4].speed,
                    shoot: false
                })
                levelEnemy[0]["armored"] -= 1
                count += 1
            }
        }
    }
    else if(sumEnemy === 0 && enemy.length === 0){
        pause = true;
        isPause()
        stage += 1
        levelEnemy.shift()
    }
}

function isDrawEnemy(){
    for(let i = 0; i < enemy.length; i++){
        if(enemy[i].type === 1){
            ctx.drawImage(img, imgTypesTank[enemy[i].type][enemy[i].side - 1].x, imgTypesTank[enemy[i].type][enemy[i].side - 1].y, 25, 25, enemy[i].pos.x, enemy[i].pos.y, 1, 1);
        }
        else if(enemy[i].type > 1){
            ctx.drawImage(img, imgTypesTank[enemy[i].type][enemy[i].side - 1].x, imgTypesTank[enemy[i].type][enemy[i].side - 1].y, 26, 26, enemy[i].pos.x, enemy[i].pos.y, 1, 1);
        }
    }
}

function checkType(x,y,index){
    if(TypeEnemy[index] === "default"){
        ctx.drawImage(img, 452, 120, 23, 12, x, y + 1, 1, 0.4)
        score += 100
    }
    else if(TypeEnemy[index] === "velocity"){
        ctx.drawImage(img, 478, 120, 23, 12, x, y + 1, 1, 0.4)
        score += 200
    }
    else if(TypeEnemy[index] === "rapidFire"){
        ctx.drawImage(img, 506, 120, 23, 12, x, y + 1, 1, 0.4)
        score += 300
    }
    else if(TypeEnemy[index] === "armored"){
        ctx.drawImage(img, 535, 120, 23, 12, x, y + 1, 1, 0.4)
        score += 400
    }
}

function checkLines() {
    for(let i = 0; i < enemy.length; i++){
        let direction;
        if((enemy[i].pos.y === player.pos.y || ((enemy[i].pos.y === playerTwo.pos.y) && mode === 1)) && enemy[i].shoot === false){
            if((enemy[i].pos.x > player.pos.x) || ((enemy[i].pos.x > playerTwo.pos.x) && mode === 1)){
                direction = 3
            }
            else if((enemy[i].pos.x < player.pos.x) || ((enemy[i].pos.x < playerTwo.pos.x) && mode === 1)){
                direction = 4
            }
            enemy[i].shoot = true
            enemy[i].side = direction
            bulletEnemy.push({
                x: enemy[i].pos.x,
                y: enemy[i].pos.y,
                side: position[direction],
                number: direction,
                speed: enemy[i].speedBullet,
                damage: enemy[i].damage,
                index: i
            })
        }
        if((enemy[i].pos.x === player.pos.x || ((enemy[i].pos.x === playerTwo.pos.x) && mode === 1)) && enemy[i].shoot === false){
            if((enemy[i].pos.y > player.pos.y) || ((enemy[i].pos.y > playerTwo.pos.y) && mode === 1)){
                direction = 1

            }
            else if((enemy[i].pos.y < player.pos.y) || ((enemy[i].pos.y < playerTwo.pos.y) && mode === 1)){
                direction = 2
            }
            enemy[i].shoot = true
            enemy[i].side = direction
            bulletEnemy.push({
                x: enemy[i].pos.x,
                y: enemy[i].pos.y,
                side: position[direction],
                number: direction,
                speed: enemy[i].speedBullet,
                damage: enemy[i].damage,
                index: i

            })
        }
        //база
        if(enemy[i].pos.y === basePlayer.pos.y && enemy[i].shoot === false){
            if(enemy[i].pos.x > basePlayer.pos.x){
                direction = 3
            }
            else if(enemy[i].pos.x < basePlayer.pos.x){
                direction = 4
            }
            enemy[i].shoot = true
            enemy[i].side = direction
            bulletEnemy.push({
                x: enemy[i].pos.x,
                y: enemy[i].pos.y,
                side: position[direction],
                number: direction,
                speed: enemy[i].speedBullet,
                damage: enemy[i].damage,
                index: i
            })
        }
        if(enemy[i].pos.x === basePlayer.pos.x && enemy[i].shoot === false){
            if(enemy[i].pos.y < basePlayer.pos.y){
                direction = 2
            }
            enemy[i].shoot = true
            enemy[i].side = direction
            bulletEnemy.push({
                x: enemy[i].pos.x,
                y: enemy[i].pos.y,
                side: position[direction],
                number: direction,
                speed: enemy[i].speedBullet,
                damage: enemy[i].damage,
                index: i
            })
        }
    }
}

function shootEnemy() {
    for(let i = 0; i < bulletEnemy.length; i++){
        ctx.drawImage(img,positionBullet[bulletEnemy[i].number - 1].x, positionBullet[bulletEnemy[i].number - 1].y, positionBullet[bulletEnemy[i].number - 1].width, 
            positionBullet[bulletEnemy[i].number - 1].height, bulletEnemy[i].x + 0.4, bulletEnemy[i].y + 0.4, 0.2 , 0.2)

        if(bulletEnemy[i].side === "up"){
            bulletEnemy[i].y -= bulletEnemy[i].speed
        }
        else if(bulletEnemy[i].side === "down"){
            bulletEnemy[i].y += bulletEnemy[i].speed
        }
        else if(bulletEnemy[i].side === "left"){
            bulletEnemy[i].x -= bulletEnemy[i].speed
        }
        else if(bulletEnemy[i].side === "right"){
            bulletEnemy[i].x += bulletEnemy[i].speed
        }
        hitArena(Math.floor(bulletEnemy[i].x), Math.floor(bulletEnemy[i].y), bulletEnemy,i,"bulletEnemy")
    }
}

function hitPlayer(x,y,object,index){
    if(x === player.pos.x && y === player.pos.y && bonusActive.immortal === false){
        player.health -= object[index].damage
        if(enemy[object[index].index] !== undefined) enemy[object[index].index].shoot = false
        ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
        player.pos = {
            x: 5,
            y: 13
        }
        player.level = 0
        object.splice(index, 1)
    }
    else if(x === playerTwo.pos.x && y === playerTwo.pos.y && bonusActive.immortal === false && mode === 1){
        playerTwo.health -= object[index].damage
        if(enemy[object[index].index] !== undefined) enemy[object[index].index].shoot = false
        ctx.drawImage(img, 506, 59, 27, 28, x, y, 1, 1);
        playerTwo.pos = {
            x: 9,
            y: 13
        }
        playerTwo.level = 0
        object.splice(index, 1)
    }
}

function isUpdateEnemy() {
    if(pause === false){
        if(enemy.length === 0){
            count = 0;
        }
        isLevelsEnemy()
        checkLines()
        shootEnemy()
        isDrawEnemy()
        if((timer / 25) % 2 === 0 && timer !==0){
            moveEnemy()
        }
        drawForest()
        timer++
    }
    animateEnemy = window.requestAnimationFrame(isUpdateEnemy)
}



