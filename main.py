def move():
    if input.rotation(Rotation.PITCH) < -20:
        sprite.change(LedSpriteProperty.Y, -1)
    elif input.rotation(Rotation.PITCH) > 20:
        sprite.change(LedSpriteProperty.Y, 1)
    elif input.rotation(Rotation.ROLL) < -20:
        sprite.change(LedSpriteProperty.X, -1)
    elif input.rotation(Rotation.ROLL) > 20:
        sprite.change(LedSpriteProperty.X, 1)
    sprite.change(LedSpriteProperty.BRIGHTNESS, 0.5)
    basic.pause(200)
def verify(list2: List[any]):
    if sprite.is_touching(end):
        return 1
    elif obstacles.index([sprite.get(LedSpriteProperty.X),
            sprite.get(LedSpriteProperty.Y)]) >= 0:
        return 2
    else:
        return 0
dead = 0
obstacles: List[List[number]] = []
end: game.LedSprite = None
sprite: game.LedSprite = None
lpos: List[List[number]] = []
sprite = game.create_sprite(4, 4)
end = game.create_sprite(0, 0)
game.set_score(0)
for i in range(5):
    for j in range(5):
        lpos.append([i, j])
lpos.shift()
lpos.pop()

def on_forever():
    global obstacles, dead
    basic.clear_screen()
    obstacles = []
    for index in range(Math.idiv(game.score(), 2) + 1):
        obstacles.append(lpos[randint(0, len(lpos) - 1)])
    dead = 0
    while not (dead):
        for valeur in obstacles:
            led.plot(valeur[0], valeur[1])
        move()
        dead = verify(obstacles)
    if dead == 1:
        game.add_score(1)
    elif dead == 2:
        game.game_over()
basic.forever(on_forever)
