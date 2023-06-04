
import Phaser from 'phaser';
import { Player } from '../../public/assets/entities/Player';
import { Monster } from '../../public/assets/entities/Monster';

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

    const player = new Player(this, 100, 450);

    const monsters = [];
    for (let i = 0; i < 10; i++) {
      const monsterType = Phaser.Utils.Array.GetRandom(monsterTypes);
      const monster = new Monster(this, Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), monsterType);
      monsters.push(monster);
    }

    this.physics.add.collider(player.sprite, backgroundLayer);
    this.physics.add.collider(player.sprite, interactiveLayer);

    monsters.forEach((monster) => {
      this.physics.add.collider(monster.sprite, backgroundLayer);
      this.physics.add.collider(monster.sprite, interactiveLayer);
      this.physics.add.collider(monster.sprite, player.sprite, () => {
        player.takeDamage(10); // Adjust the damage as needed
      });
    });
  }

  update() {
    if (this.monsters) {
      this.monsters.forEach((monster) => {
         monster.chase(this.player.sprite);
    });
  }
}
}

export { MonsterScene };
