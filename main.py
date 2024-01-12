def verify():
    if led.point(sprite.get(LedSpriteProperty.X) - 1,
        sprite.get(LedSpriteProperty.Y)) or (led.point(sprite.get(LedSpriteProperty.X) + 1,
        sprite.get(LedSpriteProperty.Y)) or (led.point(sprite.get(LedSpriteProperty.X),
        sprite.get(LedSpriteProperty.Y) - 1) or led.point(sprite.get(LedSpriteProperty.X),
        sprite.get(LedSpriteProperty.Y) + 1))):
        if [sprite.get(LedSpriteProperty.X),
            sprite.get(LedSpriteProperty.Y)] == [end.get(LedSpriteProperty.X), end.get(LedSpriteProperty.Y)]:
            return 1
        else:
            return 2
    else:
        return 0
obstacles: List[List[number]] = []
end: game.LedSprite = None
sprite: game.LedSprite = None
lpos: List[List[number]] = []
sound = False
game.set_score(0)
for i in range(5):
    for j in range(5):
        lpos.append([i, j])
lpos.shift()
lpos.pop()
sprite = game.create_sprite(4, 4)
end = game.create_sprite(0, 0)

def on_forever():
    global obstacles
    obstacles = []
    sprite.set(LedSpriteProperty.X, 4)
    sprite.set(LedSpriteProperty.Y, 4)
    index = 0
    while index < (Math.idiv(game.score(), 2) + 1) % 15:
        obstacles.append(lpos[randint(0, len(lpos))])
        index += 1
    while verify() == 0:
        for index2 in obstacles:
            led.plot_brightness(index2[0], index2[1], 127)
basic.forever(on_forever)
