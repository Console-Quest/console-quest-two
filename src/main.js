import Phaser from 'phaser';
import { LoadScene } from './scenes/LoadScene';
import { MainMenuScene } from './scenes/MainMenuScene.js';
import { GameScene } from './scenes/GameScene.js';
import { MonsterScene } from './scenes/MonsterScene';
import { TreasureScene } from './scenes/TreasureScene.js';

let config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1000,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [LoadScene, MainMenuScene, MonsterScene, TreasureScene, GameScene]
};

let game = new Phaser.Game(config);
