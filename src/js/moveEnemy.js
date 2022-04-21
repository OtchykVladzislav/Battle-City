function isColidesEnemy(y,x) {
    for (let i = 0; i < arena.length; i++) {
        for (let j = 0; j < arena[i].length; j++) {
            if(arena[y][x] === 1 || arena[y][x] === 2 || arena[y][x] === 9 || (player.pos.x === x && player.pos.y === y)){
                return 1
            }
            else if(y <= 0 || y >= 12 || x <= 0 || x >= 12){
                return 1
            }
        }
    }
    return 0
}

function moveEnemy() {
    let random = Math.ceil(Math.random() * position.length)
    for(let i = 0; i < enemy.length; i++){
        if(enemy[i].side === 1 && enemy[i].pos.y <= 12){
            enemy[i].pos.y -= enemy[i].speed
            if(isColidesEnemy(Math.ceil(enemy[i].pos.y), Math.ceil(enemy[i].pos.x))){
                enemy[i].pos.y += 1
                enemy[i].side = random 
            }
        }
        else if(enemy[i].side === 2 && enemy[i].pos.y >= 0){
            enemy[i].pos.y += enemy[i].speed
            if(isColidesEnemy(Math.ceil(enemy[i].pos.y), Math.ceil(enemy[i].pos.x))){
                enemy[i].pos.y -= 1
                enemy[i].side = random 
            }
        }
        else if(enemy[i].side === 3 && enemy[i].pos.x <= 12){
            enemy[i].pos.x -= enemy[i].speed
            if(isColidesEnemy(Math.ceil(enemy[i].pos.y), Math.ceil(enemy[i].pos.x))){
                enemy[i].pos.x += 1
                enemy[i].side = random
            }
        }
        else if(enemy[i].side === 4 && enemy[i].pos.x >= 0){
            enemy[i].pos.x += enemy[i].speed
            if(isColidesEnemy(Math.ceil(enemy[i].pos.y), Math.ceil(enemy[i].pos.x))){
                enemy[i].pos.x -= 1
                enemy[i].side = random 
            }
        }
    }
}