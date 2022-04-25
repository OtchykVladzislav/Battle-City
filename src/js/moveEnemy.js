function isColidesEnemy(y,x) {
    for (let i = 0; i < arena.length; i++) {
        for (let j = 0; j < arena[i].length; j++) {
            if(arena[y][x] === 1 || arena[y][x] === 2 || arena[y][x] === 9 || arena[y][x] === 11 || (player.pos.x === x && player.pos.y === y)){
                return 1
            }
        }
    }
    return 0
}

function moveEnemy() {
    let random = Math.ceil(Math.random() * 4)
    for(let i = 0; i < enemy.length; i++){
        if(enemy[i].side === 1){
            enemy[i].pos.y -= enemy[i].speed
            if(isColidesEnemy(enemy[i].pos.y, enemy[i].pos.x)){
                enemy[i].pos.y += 1
                random > 0 ? enemy[i].side = random : enemy[i].side = random + 1
            }                    
        }
        else if(enemy[i].side === 2){
            enemy[i].pos.y += enemy[i].speed
            if(isColidesEnemy(enemy[i].pos.y, enemy[i].pos.x)){
                enemy[i].pos.y -= enemy[i].speed
                random > 0 ? enemy[i].side = random : enemy[i].side = random + 1
            }
        }
        else if(enemy[i].side === 3){
            enemy[i].pos.x -= enemy[i].speed
            if(isColidesEnemy(enemy[i].pos.y, enemy[i].pos.x)){
                enemy[i].pos.x += enemy[i].speed
                random > 0 ? enemy[i].side = random : enemy[i].side = random + 1
            }
        }
        else if(enemy[i].side === 4){
            enemy[i].pos.x += enemy[i].speed
            if(isColidesEnemy(enemy[i].pos.y, enemy[i].pos.x)){
                enemy[i].pos.x -= enemy[i].speed
                random > 0 ? enemy[i].side = random : enemy[i].side = random + 1
            }
        }
    }
}