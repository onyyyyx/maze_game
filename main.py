def verify():
    end: game.LedSprite = None
    sprite: game.LedSprite = None
    if [sprite.get(LedSpriteProperty.X),
        sprite.get(LedSpriteProperty.Y)] == [end.get(LedSpriteProperty.X), end.get(LedSpriteProperty.Y)]:
        return 1
    else:
        pass