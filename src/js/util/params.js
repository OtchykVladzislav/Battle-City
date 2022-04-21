var img = new Image()
img.src = "src/images/base.png"

var arena = [[0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,0,1,0,1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,1,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1,0,1,0,1,0],
            [9,9,9,9,9,10,10,10,0,0,0,0,0],
            [0,0,0,0,0,10,0,10,9,9,9,9,9],
            [2,0,1,1,0,10,10,10,0,1,1,0,2],   //full block 1; half block(down) 3; half block(left) 2; metal half block 4;
            [0,0,0,0,0,1,1,1,0,0,0,0,0],
            [0,1,0,1,0,1,0,1,0,1,0,1,0],
            [0,1,0,1,0,0,0,0,0,1,0,1,0],
            [0,1,0,1,0,1,1,1,0,1,0,1,0],
            [0,0,0,0,0,1,0,1,0,0,0,0,0]]

var positionBullet = [
    {
        x: 449,
        y: 1,
        width: 4,
        height: 6
    },
    {
        x: 477,
        y: 1,
        width:  4,
        height: 6
    },
    {
        x: 491,
        y: 1,
        width: 6,
        height: 4
    },
    {
        x: 463,
        y: 1,
        width: 6,
        height: 4
    }
]

var position = [null, "up", "down", "left", "right"]

var bonus = ["shovel", "tank", "grenade", "helmet", "clock", "star"]

var aroundBase = [
            {
                x: 5,
                y: 12
            },
            {
                x: 5,
                y: 11
            },
            {
                x: 6,
                y: 11
            },
            {
                x: 7,
                y: 11
            },
            {
                x: 7,
                y: 12
            }
        ]

var bonusActive = {
    immortal : false,
    defense: false,
    move: false
}

var isLevels = [
        [
            {
                x: 2,
                y: 4
            },
            {   
                x: 114,
                y: 2
            },
            {   
                x: 172,
                y: 2
            },
            {   
                x: 58,
                y: 2
            }
        ],
        [
            {
                x: 2,
                y: 29
            },
            {   
                x: 114,
                y: 29
            },
            {   
                x: 169,
                y: 30
            },
            {   
                x: 57,
                y: 30
            }
        ],
        [
            {
                x: 2,
                y: 57
            },
            {   
                x: 115,
                y: 58
            },
            {   
                x: 169,
                y: 58
            },
            {   
                x: 58,
                y: 58
            }
        ],
        [
            {
                x: 2,
                y: 85
            },
            {   
                x: 114,
                y: 85
            },
            {   
                x: 169,
                y: 86
            },
            {   
                x: 58,
                y: 86
            }
        ]
    ]

var levelEnemy = [
    {
        "default" : 18,
        "velocity" : 2,
        "rapidFire" : 0,
        "armored" : 0
    },
    {
        "default" : 14,
        "velocity" : 4,
        "rapidFire" : 0,
        "armored" : 2
    },
    {
        "default" : 14,
        "velocity" : 4,
        "rapidFire" : 0,
        "armored" : 2
    },
    {
        "default" : 2,
        "velocity" : 5,
        "rapidFire" : 10,
        "armored" : 3
    },//4
    {
        "default" : 8,
        "velocity" : 5,
        "rapidFire" : 5,
        "armored" : 2
    },
    {
        "default" : 9,
        "velocity" : 2,
        "rapidFire" : 7,
        "armored" : 2
    },
    {
        "default" : 10,
        "velocity" : 4,
        "rapidFire" : 6,
        "armored" : 0
    },
    {
        "default" : 7,
        "velocity" : 4,
        "rapidFire" : 7,
        "armored" : 2
    },
    {
        "default" : 6,
        "velocity" : 4,
        "rapidFire" : 7,
        "armored" : 3
    },
    {
        "default" : 12,
        "velocity" : 2,
        "rapidFire" : 4,
        "armored" : 2
    },//10
    {
        "default" : 0,
        "velocity" : 10,
        "rapidFire" : 4,
        "armored" : 6
    },
    {
        "default" : 0,
        "velocity" : 6,
        "rapidFire" : 8,
        "armored" : 6
    },
    {
        "default" : 0,
        "velocity" : 8,
        "rapidFire" : 8,
        "armored" : 4
    },
    {
        "default" : 0,
        "velocity" : 4,
        "rapidFire" : 10,
        "armored" : 6
    },
    {
        "default" : 2,
        "velocity" : 10,
        "rapidFire" : 0,
        "armored" : 8
    },
    {
        "default" : 16,
        "velocity" : 2,
        "rapidFire" : 0,
        "armored" : 2
    },
    {
        "default" : 2,
        "velocity" : 8,
        "rapidFire" : 2,
        "armored" : 8
    },
    {
        "default" : 2,
        "velocity" : 8,
        "rapidFire" : 6,
        "armored" : 4
    },
    {
        "default" : 4,
        "velocity" : 4,
        "rapidFire" : 4,
        "armored" : 8
    },
    {
        "default" : 2,
        "velocity" : 8,
        "rapidFire" : 2,
        "armored" : 8
    },
    {
        "default" : 6,
        "velocity" : 2,
        "rapidFire" : 8,
        "armored" : 4
    },//21
    {
        "default" : 6,
        "velocity" : 8,
        "rapidFire" : 2,
        "armored" : 4
    },
    {
        "default" : 0,
        "velocity" : 10,
        "rapidFire" : 4,
        "armored" : 6
    },
    {
        "default" : 10,
        "velocity" : 4,
        "rapidFire" : 4,
        "armored" : 2
    },
    {
        "default" : 0,
        "velocity" : 8,
        "rapidFire" : 2,
        "armored" : 10
    },
    {
        "default" : 4,
        "velocity" : 6,
        "rapidFire" : 4,
        "armored" : 6
    },
    {
        "default" : 2,
        "velocity" : 8,
        "rapidFire" : 2,
        "armored" : 8
    },
    {
        "default" : 15,
        "velocity" : 2,
        "rapidFire" : 2,
        "armored" : 1
    },
    {
        "default" : 0,
        "velocity" : 4,
        "rapidFire" : 10,
        "armored" : 6
    },
    {
        "default" : 4,
        "velocity" : 8,
        "rapidFire" : 4,
        "armored" : 4
    },
    {
        "default" : 0,
        "velocity" : 8,
        "rapidFire" : 6,
        "armored" : 6
    },
    {
        "default" : 6,
        "velocity" : 4,
        "rapidFire" : 2,
        "armored" : 8
    },
    {
        "default" : 0,
        "velocity" : 8,
        "rapidFire" : 4,
        "armored" : 8
    },
    {
        "default" : 0,
        "velocity" : 10,
        "rapidFire" : 4,
        "armored" : 6
    },
    {
        "default" : 0,
        "velocity" : 6,
        "rapidFire" : 4,
        "armored" : 10
    }
    

]

var TypeEnemy = [null, "default", "velocity", "rapidFire", "armored"]

var TypesTank = [null,
    {
        speedBullet: 0.1,
        damage: 1,
        health: 1,
        speed: 0.01
    },
    {
        speedBullet: 0.1,
        damage: 1,
        health: 2,
        speed: 0.02
    },
    {
        speedBullet: 0.15,
        damage: 1,
        health: 2,
        speed: 0.01
    },
    {
        speedBullet: 0.1,
        damage: 1,
        health: 4,
        speed: 0.01
    }
]

var imgTypesTank = [null,
    [//25 25
        {
            x: 2,
            y: 113
        },
        {
            x: 113,
            y: 113
        },
        {
            x: 169,
            y: 115
        },
        {
            x: 59,
            y: 113
        }
    ],
    [//26 26
        {
            x: 1,
            y: 169
        },
        {
            x: 113,
            y: 170
        },
        {
            x: 169,
            y: 170
        },
        {
            x: 57,
            y: 168
        }
    ],
    [//26 26
        {
            x: 1,
            y: 225
        },
        {
            x: 111,
            y: 224
        },
        {
            x: 169,
            y: 226
        },
        {
            x: 58,
            y: 225
        }
    ],
    [//26 26
        {
            x: 1,
            y: 280
        },
        {
            x: 114,
            y: 281
        },
        {
            x: 168,
            y: 281
        },
        {
            x: 57,
            y: 281
        }
    ]
]
