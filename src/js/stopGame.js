function hardStop() {
    isLose()
    start = false
    window.cancelAnimationFrame(animateDraw)
    window.cancelAnimationFrame(animateEvent)
    window.cancelAnimationFrame(animateEnemy)
    window.cancelAnimationFrame(animateUI)
    return;
}


function isLose(){
    ctx.fillStyle="red"
    ctx.font='1px PixelFont';
    ctx.fillText("GAME", 4.5, 6);
    ctx.fillText("OVER", 4.5, 7);
    return setTimeout(() => {
        location.reload()
    }, 4000)
}

function isPause(){
    if(pause === true){
        if(sumEnemy === 0 && enemy.length === 0){
            ctx.fillStyle="black"
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle="red"
            ctx.font='0.7px PixelFont';
            ctx.fillText(`STAGE ${stage} COMPLETE`, 1, 6);
            ctx.fillText(`SCORE : ${score}`, 2.5, 7);
            ctx.font='0.6px PixelFont';
            ctx.fillText("PRESS ESC TO CONTINUE", 0.3, 8);
        }
        else{
            ctx.fillStyle="red"
            ctx.font='1px PixelFont';
            ctx.fillText("PAUSE", 4, 6.5);
        }
    }
}
