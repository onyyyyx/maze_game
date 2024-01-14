function move () {
    if (input.rotation(Rotation.Pitch) < -20) {
        sprite.change(LedSpriteProperty.Y, -1)
    } else if (input.rotation(Rotation.Pitch) > 20) {
        sprite.change(LedSpriteProperty.Y, 1)
    } else if (input.rotation(Rotation.Roll) < -20) {
        sprite.change(LedSpriteProperty.X, -1)
    } else if (input.rotation(Rotation.Roll) > 20) {
        sprite.change(LedSpriteProperty.X, 1)
    }
    sprite.change(LedSpriteProperty.Brightness, 0.5)
    basic.pause(200)
}
function verify (list2: any[]) {
    if (sprite.isTouching(end)) {
        return 1
    } else if (obstacles.indexOf([sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y)]) >= 0) {
        return 2
    } else {
        return 0
    }
}
let dead = 0
let obstacles: number[][] = []
let end: game.LedSprite = null
let sprite: game.LedSprite = null
let lpos : number[][] = []
sprite = game.createSprite(4, 4)
end = game.createSprite(0, 0)
game.setScore(0)
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        lpos.push([i, j])
    }
}
lpos.shift()
_py.py_array_pop(lpos)
basic.forever(function () {
    basic.clearScreen()
    obstacles = []
    for (let index = 0; index < Math.idiv(game.score(), 2) + 1; index++) {
        obstacles.push(lpos[randint(0, lpos.length - 1)])
    }
    dead = 0
    while (!(dead)) {
        for (let valeur of obstacles) {
            led.plot(valeur[0], valeur[1])
        }
        move()
        dead = verify(obstacles)
    }
    if (dead == 1) {
        game.addScore(1)
    } else if (dead == 2) {
        game.gameOver()
    }
})
