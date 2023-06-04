/* global Phaser */

export class Monster {
  constructor(scene, x, y, type, health, speed) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, type);
    this.sprite.setCollideWorldBounds(true);
    this.speed = speed;
    this.health = health;
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
  update() {
    // Check for collision with the player
    this.scene.physics.world.collide(this.sprite, this.scene.player.sprite, this.handleCollision, null, this);
  }

  handleCollision(monster, player) {
    // Call the player's takeDamage method
    this.scene.player.takeDamage(10); // Adjust the amount of damage as needed
  }
  // Other monster methods...
}
