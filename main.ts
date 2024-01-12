function level () {
	
}
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
function verify (list: number[][]) {
    if (sprite.isTouching(end)) {
        game.addScore(1)
        level()
    } else if (list.indexOf([sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y)]) == -1) {
        game.gameOver()
    }
}
let end: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 4)
end = game.createSprite(0, 0)
end.set(LedSpriteProperty.Brightness, 100)
game.setScore(0)
basic.forever(function () {
    let list: number[] = []
    move()
    verify(list)
})
