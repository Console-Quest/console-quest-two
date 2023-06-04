import { Player } from '../../public/assets/entities/Player';
import { Monster } from '../../public/assets/entities/Monster.js';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.player = null;
    this.monsters = [];
  }

  preload() {
    // You can preload game-specific assets here if they haven't been preloaded in LoadScene
  }

  create() {
    // Setup for the game scene would go here
    // For instance, you might set up a tilemap or other game objects
    
    // Create the player and add it to the scene.
    this.player = new Player(this, 100, 100, 'playerSpriteKey');
  
    for (let i = 0; i < 10; i++) {
      let monster = new Monster(
        this, // scene
        Phaser.Math.Between(100, 700), // random X position
        Phaser.Math.Between(100, 500), // random Y position
        'monsterSpriteKey' // replace with your monster sprite key
      );
  
      this.monsters.push(monster);
  
      // Start chasing the player immediately after creating the monster
      monster.chase(this.player);
    }
  }

  update() {
    // This is called each game tick, and is where you would handle user input and update your game state
  }
}

export { GameScene };
