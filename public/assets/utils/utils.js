export const directions = ['down', 'up', 'left', 'right'];

export function loadSpriteAtlas(context, spriteName) {
  context.load.atlas(spriteName, `./src/assets/sprites/${spriteName}/${spriteName}.png`, `./src/assets/sprites/${spriteName}/${spriteName}.json`);
}

export function createAnimationForCharacter(context, character, direction) {
  context.anims.create({
    key: `${character}-${direction}`,
    frames: context.anims.generateFrameNames(character, {
      prefix: direction,
      suffix: '.png',
      start: 1,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1
  });
}
