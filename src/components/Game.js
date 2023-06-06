// Game.js
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import { LoadScene } from '../scenes/LoadScene'; // Import your LoadScene
import { MonsterScene } from '../scenes/MonsterScene';

const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game',
      width: 1000,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: true,
        },
      },
      scene: [LoadScene, MonsterScene],
    };

    
    const game = new Phaser.Game(config);
    return () => {
      game.destroy();
    };
  }, []);
  
};

export default Game;
