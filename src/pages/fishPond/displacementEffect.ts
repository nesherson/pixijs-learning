import { Application, DisplacementFilter, Sprite } from 'pixi.js';

export function addDisplacementEffect(app: Application) {
    const sprite = Sprite.from("displacement");

    sprite.texture.baseTexture.wrapMode = "repeat";

    const filter = new DisplacementFilter({
        sprite,
        scale: 50
    });

    app.stage.filters = [filter];
}