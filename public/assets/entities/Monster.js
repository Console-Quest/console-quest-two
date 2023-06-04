/* global Phaser */


export class Monster {
  constructor(scene, x, y, type) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, type);
    this.sprite.setCollideWorldBounds(true);
    this.speed = 50;

    this.health = 50; // or whatever starting health you want
    // add more properties as needed
  }

  // A method for chasing the player
  chase(target) {
    const direction = new Phaser.Math.Vector2(target.x - this.sprite.x, target.y - this.sprite.y);
    direction.normalize();
    this.sprite.setVelocity(direction.x * this.speed, direction.y * this.speed);

    // Determine the direction of the monster
    if (Math.abs(direction.x) > Math.abs(direction.y)) {
      // Monster is moving more horizontally
      if (direction.x > 0) {
        this.sprite.play(`${this.sprite.texture.key}-right`, true);
      } else {
        this.sprite.play(`${this.sprite.texture.key}-left`, true);
      }
    } else {
      // Monster is moving more vertically
      if (direction.y > 0) {
        this.sprite.play(`${this.sprite.texture.key}-down`, true);
      } else {
        this.sprite.play(`${this.sprite.texture.key}-up`, true);
      }
    }
  }
  // Other monster methods...
}
