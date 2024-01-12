def move():
    if input.rotation(Rotation.PITCH) < -20 and False:
        sprite.change(LedSpriteProperty.X, 1)
    elif input.rotation(Rotation.PITCH) > 20 and False:
        sprite.change(LedSpriteProperty.X, -1)
    elif input.rotation(Rotation.ROLL) < -20 and False:
        sprite.change(LedSpriteProperty.Y, 1)
    elif input.rotation(Rotation.ROLL) > 20 and False:
        sprite.change(LedSpriteProperty.Y, -1)
sprite: game.LedSprite = None
sprite = game.create_sprite(4, 4)

def on_forever():
    move()
basic.forever(on_forever)
