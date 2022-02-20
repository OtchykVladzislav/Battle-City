const boxes = 40;
var direction = "top";
const over = new Image()
over.src = "src/images/over.png"

var tank = {
    x: 320,
    y: 600
}


var positions = [
    {x: 0, y: 0},
    {x: 57, y: 0},
    {x: 113, y: 0},
    {x: 171, y: 0}
]

var target = positions[0]


var wall = [
    {x:1* boxes, y:1* boxes},
    {x:2* boxes, y:1* boxes},
    {x:3* boxes, y:1* boxes},
    {x:2* boxes, y:2* boxes},
    {x:2* boxes, y:3* boxes},
    {x:7* boxes, y:1* boxes},
    {x:6* boxes, y:2* boxes},
    {x:8* boxes, y:2* boxes},
    {x:7* boxes, y:2* boxes},
    {x:5* boxes, y:3* boxes},
    {x:6* boxes, y:3* boxes},
    {x:8* boxes, y:3* boxes},
    {x:9* boxes, y:3* boxes},
    {x:10* boxes, y:1* boxes},
    {x:10* boxes, y:2* boxes},
    {x:10* boxes, y:3* boxes},
    {x:11* boxes, y:2* boxes},
    {x:12* boxes, y:1* boxes},
    {x:12* boxes, y:2* boxes},
    {x:12* boxes, y:3* boxes},
    {x:13* boxes, y:1* boxes},
    {x:13* boxes, y:2* boxes},
    {x:13* boxes, y:3* boxes},
    {x:14* boxes, y:2* boxes},
    {x:15* boxes, y:1* boxes},
    {x:15* boxes, y:3* boxes},
    {x:9* boxes, y:5* boxes},
    {x:9* boxes, y:6* boxes},
    {x:12* boxes, y:5* boxes},
    {x:13* boxes, y:5* boxes},
    {x:14* boxes, y:5* boxes},
    {x:15* boxes, y:5* boxes},
    {x:12* boxes, y:6* boxes},
    {x:13* boxes, y:6* boxes},
    {x:14* boxes, y:6* boxes},
    {x:15* boxes, y:6* boxes},//
    {x:0* boxes, y:6* boxes},
    {x:1* boxes, y:6* boxes},
    {x:2* boxes, y:6* boxes},
    {x:3* boxes, y:6* boxes},
    {x:4* boxes, y:6* boxes},
    {x:5* boxes, y:6* boxes},
    {x:6* boxes, y:6* boxes},
    {x:0* boxes, y:7* boxes},
    {x:1* boxes, y:7* boxes},
    {x:2* boxes, y:7* boxes},
    {x:3* boxes, y:7* boxes},
    {x:4* boxes, y:7* boxes},
    {x:5* boxes, y:7* boxes},
    {x:6* boxes, y:7* boxes},
    {x:10* boxes, y:8* boxes},
    {x:10* boxes, y:9* boxes},
    {x:10* boxes, y:10* boxes},
    {x:10* boxes, y:11* boxes},
    {x:10* boxes, y:12* boxes},
    {x:9* boxes, y:13* boxes},
    {x:9* boxes, y:14* boxes},
    {x:9* boxes, y:15* boxes},
    {x:5* boxes, y:14* boxes},
    {x:6* boxes, y:14* boxes},
    {x:5* boxes, y:15* boxes},
    {x:6* boxes, y:15* boxes},//
    {x:0* boxes, y:10* boxes},
    {x:1* boxes, y:10* boxes},
    {x:0* boxes, y:11* boxes},
    {x:1* boxes, y:11* boxes},//
    {x:14* boxes, y:13* boxes},
    {x:15* boxes, y:13* boxes},
    {x:13* boxes, y:13* boxes},
    {x:13* boxes, y:14* boxes},
    {x:13* boxes, y:15* boxes},//
    {x:4* boxes, y:10* boxes},
    {x:5* boxes, y:10* boxes},
    {x:6* boxes, y:10* boxes},
    {x:4* boxes, y:11* boxes},
    {x:6* boxes, y:11* boxes},
    {x:6* boxes, y:12* boxes},
    {x:4* boxes, y:12* boxes},
    {x:5* boxes, y:12* boxes},//
    {x:0* boxes, y:13* boxes},
    {x:1* boxes, y:13* boxes},
    {x:0* boxes, y:14* boxes},
    {x:1* boxes, y:14* boxes},
    {x:0* boxes, y:15* boxes},
    {x:1* boxes, y:15* boxes},
    {x:2* boxes, y:15* boxes},//
    {x:13* boxes, y:9* boxes},
    {x:14* boxes, y:9* boxes},
    {x:15* boxes, y:9* boxes},
    {x:15* boxes, y:10* boxes},
    {x:15* boxes, y:11* boxes},
    {x:13* boxes, y:10* boxes},
    {x:13* boxes, y:11* boxes},
    {x:14* boxes, y:10* boxes},
    {x:14* boxes, y:11* boxes}
]




function touchWithLine() {
    return tank.x > 640 || tank.x < 0 || tank.y > 640 || tank.y < 0
}


function checkDirection(e){
    if(e.keyCode === 38 && tank.y > 0){
        target = positions[0]
        tank.y -= boxes;
    }
    else if(e.keyCode === 40 && tank.y < 600){
        target = positions[2]
        tank.y += boxes;
    }
    else if(e.keyCode === 37 && tank.x > 0){
        target = positions[3]
        tank.x -= boxes;
    }
    else if(e.keyCode === 39 && tank.x < 600){
        target = positions[1]
        tank.x += boxes;
    }
}

document.addEventListener("keydown", checkDirection);

var update = setInterval(() => {
    game()
}, 100)

var game = () => {
    ctx.drawImage(img, 281, 239, 27, 27, 0, 0, 640, 640);
    for(let i=0; i < wall.length; i++){
        ctx.drawImage(img, 225, 155, 27, 27, wall[i].x, wall[i].y, boxes, boxes);
    }
    ctx.drawImage(img, target.x, target.y, 27, 27, tank.x, tank.y, boxes, boxes);
}
