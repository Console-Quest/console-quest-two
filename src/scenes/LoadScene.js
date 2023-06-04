import Phaser from 'phaser';

class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadScene' });
  }

  preload() {
    // Preload your assets here
    this.load.image('Dungeon_Tileset', 'assets/maps/Dungeon_Tileset.png');
    this.load.tilemapTiledJSON('map', 'assets/maps/consoleTest.json');
    this.loadSpriteAtlas('bluechar');
    this.loadSpriteAtlas('golem1');
    this.loadSpriteAtlas('bird1');
    this.loadSpriteAtlas('cacto');

    // Add more assets to preload if needed
  }

  loadSpriteAtlas(spriteName) {
    this.load.atlas(
      spriteName,
      `assets/sprites/${spriteName}/${spriteName}.png`,
      `assets/sprites/${spriteName}/${spriteName}.json`
    );
  }

  create() {
    const player = this.physics.add.sprite(100, 450, 'bluechar');
    // Customize player settings and animations here

    // Transition to the next scene and pass the player as data
    this.scene.start('MonsterScene', { player });
  }
}

export { LoadScene };
