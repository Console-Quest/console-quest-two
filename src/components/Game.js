// Game.js
import React, { useEffect } from 'react';
import Phaser from 'phaser';
import { LoadScene } from '../scenes/LoadScene'; // Import your LoadScene

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
      scene: [LoadScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy();
    };
  }, []);

  return <div id="game" />;
};

export default Game;
