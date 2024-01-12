function verify () {
    if (led.point(sprite.get(LedSpriteProperty.X) - 1, sprite.get(LedSpriteProperty.Y)) || (led.point(sprite.get(LedSpriteProperty.X) + 1, sprite.get(LedSpriteProperty.Y)) || (led.point(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y) - 1) || led.point(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y) + 1)))) {
        if ([sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y)] == [end.get(LedSpriteProperty.X), end.get(LedSpriteProperty.Y)]) {
            return 1
        } else {
            return 2
        }
    } else {
        return 0
    }
}
let index = 0
let obstacles: number[][] = []
let end: game.LedSprite = null
let sprite: game.LedSprite = null
let sound = false
let lpos : number[][] = []
game.setScore(0)
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        lpos.push([i, j])
    }
}
lpos.shift()
_py.py_array_pop(lpos)
sprite = game.createSprite(4, 4)
end = game.createSprite(0, 0)
sprite.set(LedSpriteProperty.Brightness, 127)
basic.forever(function () {
    obstacles = []
    sprite.set(LedSpriteProperty.X, 4)
    sprite.set(LedSpriteProperty.Y, 4)
    while (index < (Math.idiv(game.score(), 2) + 1) % 15) {
        obstacles.push(lpos[randint(0, lpos.length)])
        index += 1
    }
    while (verify() == 0) {
        end.set(LedSpriteProperty.Brightness, (end.get(LedSpriteProperty.Brightness) + 1) % 256)
        for (let index2 of obstacles) {
            led.plot(index2[0], index2[1])
        }
    }
    if (verify() == 1) {
        game.addScore(1)
    } else if (verify() == 2) {
        game.gameOver()
    }
})
