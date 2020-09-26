enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    goal
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += x
    mySprite.y += y
})
function createLevel () {
    scene.setBackgroundColor(7)
    scene.setTile(5, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.setTile(9, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.setTile(3, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.setTile(2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
        7 7 7 3 3 3 7 7 7 7 7 6 6 6 7 7 
        7 7 7 3 5 3 7 7 7 7 7 6 7 7 7 7 
        7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 
        7 2 2 2 7 7 7 7 7 7 6 6 6 7 7 7 
        7 2 5 2 7 7 7 7 7 7 7 6 6 7 7 7 
        7 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(14, img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e b b b e e e e 
        e e e e e e e e e e e b b b b b 
        c c c c c c c e e e e e e e e e 
        e e e e e e c c e e e e e e e e 
        e e e e e e e c e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e f e e e e 
        e e e e e e e e e e e f e e e e 
        e e e e e e e e e e f f e e e e 
        e e e e f f f f f f e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e b b b b e e e 
        e e e e e e e e b b e e e e e e 
        `, false)
    scene.setTile(15, img`
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        e e e d d d e e e e e d d d e e 
        `, true)
    scene.setTileMap(img`
        ffffffffffffffffffffffffffffffffffffffffffffffff
        f7777777777777777777777777777777777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777377777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777577777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        f77777777777777777777777777eeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777f
        feeeee777777777777777777777eeee7777777777777777f
        feeeee777777777777777777777eeee7777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777977777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeee77777777777777777777777777777777777777777f
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2eef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        f7777777777777777777777777777777777777777777777f
        f7777777777777777777777777777777777777777777777f
        ffffffffffffffffffffffffffffffffffffffffffffffff
        `)
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += x
    mySprite.y += y
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 5 2 c . . . . . . . . . . . . 
        2 4 5 c c c c c c c c c c c c . 
        5 2 4 c c c c c c c c c c c c c 
        2 5 2 c c c c c c c c c c c c . 
        . 4 5 c . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, x * projSpeed, y * projSpeed)
    transformSprites.rotateSprite(projectile, transformSprites.getRotation(mySprite))
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    music.siren.play()
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    transformSprites.changeRotation(mySprite, -45)
})
function createCollets () {
    coin1 = sprites.create(img`
        . . . 5 5 . . . 
        . . 5 5 5 5 5 . 
        . 5 5 5 4 5 5 5 
        5 5 5 4 4 4 5 5 
        5 5 4 4 4 4 5 5 
        . 5 5 5 4 5 5 5 
        . . 5 5 5 5 5 5 
        . . . 5 5 5 5 . 
        `, SpriteKindLegacy.Food)
    coin2 = sprites.create(img`
        . . . 9 9 . . . 
        . . 9 9 9 9 9 . 
        . 9 9 9 8 9 9 9 
        9 9 9 8 8 8 9 9 
        9 9 8 8 8 8 9 9 
        . 9 9 9 8 9 9 9 
        . . 9 9 9 9 9 9 
        . . . 9 9 9 9 . 
        `, SpriteKindLegacy.Food)
    coin3 = sprites.create(img`
        . . . 3 3 . . . 
        . . 3 3 3 3 3 . 
        . 3 3 3 2 3 3 3 
        3 3 3 2 2 2 3 3 
        3 3 2 2 2 2 3 3 
        . 3 3 3 2 3 3 3 
        . . 3 3 3 3 3 3 
        . . . 3 3 3 3 . 
        `, SpriteKindLegacy.Food)
    house = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKindLegacy.goal)
    scene.placeOnRandomTile(coin1, 5)
    scene.placeOnRandomTile(coin2, 9)
    scene.placeOnRandomTile(coin3, 3)
    scene.placeOnRandomTile(house, 2)
}
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    music.magicWand.play()
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.goal, function (sprite, otherSprite) {
    if (info.score() == 3) {
        game.over(true, effects.confetti)
    } else {
        otherSprite.say("Collect the gems first.", 1000)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    transformSprites.changeRotation(mySprite, 45)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 500)
    music.baDing.play()
    info.changeScoreBy(1)
})
let posY = 0
let posX = 0
let enemyY = 0
let mySprite2: Sprite = null
let EnemyX = 0
let house: Sprite = null
let coin3: Sprite = null
let coin2: Sprite = null
let coin1: Sprite = null
let projectile: Sprite = null
let y = 0
let x = 0
let mySprite: Sprite = null
let projSpeed = 0
projSpeed = 100
let speed = 2
mySprite = sprites.create(img`
    f f f f f f f f f f f . . . . . 
    f e e e e e e e e e f . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f f f . . . 
    f 9 9 9 6 6 6 6 6 6 6 6 f . . . 
    f 9 9 6 6 6 6 6 6 6 6 6 f . . . 
    f 9 6 6 f f f f f f 6 6 f . 2 2 
    f 6 6 6 f d d b b d a a a a 2 2 
    f 6 6 6 f d b b b d a a a a 2 2 
    f 6 6 6 f f f f f f 8 6 f . 2 2 
    f 6 6 6 6 6 6 6 6 8 8 6 f . . . 
    f 6 6 6 6 6 6 6 6 6 6 6 f . . . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f . . . . . 
    f e e e e e e e e e f . . . . . 
    f f f f f f f f f f f . . . . . 
    `, SpriteKindLegacy.Player)
transformSprites.rotateSprite(mySprite, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
createLevel()
createCollets()
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(randint(500, 2000), function () {
    EnemyX = randint(0, 1)
    if (EnemyX == 0) {
        EnemyX = 25
    } else {
        EnemyX = 725
    }
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . . f 8 8 6 6 f 
        . . . . . . . . . . f 8 6 6 6 f 
        . . . f f f f f f f f f f f f f 
        . . f 9 f 8 8 6 6 6 6 6 6 6 6 f 
        f f 9 9 f 8 6 6 6 6 6 6 6 6 6 f 
        f 6 8 8 f 6 6 6 6 6 6 6 6 6 1 f 
        5 6 6 1 f 6 6 6 6 6 6 6 6 6 8 f 
        f 6 6 8 f 6 6 6 6 6 6 6 6 6 6 f 
        f f f f f f f f f f f f f f f f 
        . . . f f f . . . . f f f . . . 
        . . . f c f . . . . f c f . . . 
        . . . f f f . . . . f f f . . . 
        `, SpriteKindLegacy.Enemy)
    mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
    mySprite2.setPosition(EnemyX, randint(25, 725))
    if (EnemyX == 25) {
        mySprite2.setVelocity(40, randint(0, 40))
        mySprite2.image.flipX()
    } else {
        mySprite2.setVelocity(-40, randint(0, -40))
    }
})
game.onUpdateInterval(randint(500, 2000), function () {
    enemyY = randint(0, 1)
    if (enemyY == 0) {
        enemyY = 25
    } else {
        enemyY = 725
    }
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . . f 8 8 6 6 f 
        . . . . . . . . . . f 8 6 6 6 f 
        . . . f f f f f f f f f f f f f 
        . . f 9 f 8 8 6 6 6 6 6 6 6 6 f 
        f f 9 9 f 8 6 6 6 6 6 6 6 6 6 f 
        f 6 8 8 f 6 6 6 6 6 6 6 6 6 1 f 
        5 6 6 1 f 6 6 6 6 6 6 6 6 6 8 f 
        f 6 6 8 f 6 6 6 6 6 6 6 6 6 6 f 
        f f f f f f f f f f f f f f f f 
        . . . f f f . . . . f f f . . . 
        . . . f c f . . . . f c f . . . 
        . . . f f f . . . . f f f . . . 
        `, SpriteKindLegacy.Enemy)
    mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
    mySprite2.setPosition(randint(25, 725), enemyY)
    if (enemyY == 25) {
        mySprite2.setVelocity(randint(0, 40), 40)
        transformSprites.rotateSprite(mySprite2, 270)
    } else {
        mySprite2.setVelocity(randint(0, -40), -40)
        transformSprites.rotateSprite(mySprite2, 90)
    }
})
forever(function () {
    if (transformSprites.getRotation(mySprite) < 0) {
        transformSprites.rotateSprite(mySprite, transformSprites.getRotation(mySprite) + 360)
    }
    if (transformSprites.getRotation(mySprite) == 360) {
        transformSprites.rotateSprite(mySprite, 0)
    }
    if (transformSprites.getRotation(mySprite) == 0) {
        x = speed
        y = 0
    }
    if (transformSprites.getRotation(mySprite) == 45) {
        x = speed
        y = speed
    }
    if (transformSprites.getRotation(mySprite) == 90) {
        x = 0
        y = speed
    }
    if (transformSprites.getRotation(mySprite) == 135) {
        x = speed * -1
        y = speed
    }
    if (transformSprites.getRotation(mySprite) == 180) {
        x = speed * -1
        y = 0
    }
    if (transformSprites.getRotation(mySprite) == 225) {
        x = speed * -1
        y = speed * -1
    }
    if (transformSprites.getRotation(mySprite) == 270) {
        x = 0
        y = speed * -1
    }
    if (transformSprites.getRotation(mySprite) == 315) {
        x = speed
        y = speed * -1
    }
    posX = mySprite.x
    posY = mySprite.y
    mySprite.say("position:" + posX + "; " + posY)
})
