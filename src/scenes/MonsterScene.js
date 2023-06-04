/* global Phaser, player, monsters,chasePlayer */

const monsterTypes = ['golem1', 'bird1', 'cacto'];

class MonsterScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MonsterScene' });
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });

    const tileset = map.addTilesetImage('Dungeon_Tileset');
    const backgroundLayer = map.createLayer('Background', tileset);
    const interactiveLayer = map.createLayer('Interactive', tileset).setInteractive();

    backgroundLayer.setCollisionByProperty({ collide: true });
    interactiveLayer.setCollisionByProperty({ collide: true });

    // Create and position the monsters
    for (let i = 0; i < 400; i++) {
      let monsterType = Phaser.Utils.Array.GetRandom(monsterTypes); // Randomly select a monster sprite

      const monster = this.physics.add.sprite(
        Phaser.Math.Between(100, 700), // random X position between 100 and 700
        Phaser.Math.Between(100, 500), // random Y position between 100 and 500
        monsterType,
        'down1.png'
      );

      monster.play(`${monsterType}-down`);
      this.physics.add.collider(monster, backgroundLayer);
      this.physics.add.collider(monster, interactiveLayer);
      this.physics.add.collider(monster, player);

      // Set the speed and angle of movement for each monster
      const speed = Phaser.Math.Between(50, 200);
      const angle = Phaser.Math.Between(0, 360);

      monster.body.setVelocity(
        Math.cos(Phaser.Math.DEG_TO_RAD * angle) * speed,
        Math.sin(Phaser.Math.DEG_TO_RAD * angle) * speed
      );

      monsters.push(monster);
    }
  }

  update() {
    monsters.forEach((monster) => {
      chasePlayer(monster, 50);
    });
  }
}

export { MonsterScene };
