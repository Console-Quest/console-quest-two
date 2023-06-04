import { Player } from '../assets/entities/Player.js';
import { Boss } from '../assets/entities/Boss.js'; // Assuming you've created a Boss class

class BossFightScene extends Phaser.Scene {
  constructor() {
    super('BossFightScene');
    this.player = null;
    this.boss = null;
  }

  preload() {
    // Load your assets here...
  }

  create() {
    // Create the player and the boss
    this.player = new Player(this, 100, 100, 'playerSpriteKey');
    this.boss = new Boss(this, 500, 500, 'bossSpriteKey');
  }

  update() {
    // Update logic...
  }
}

export default BossFightScene;
