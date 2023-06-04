export class Player {
  constructor(scene, x, y, spriteKey) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, spriteKey);
    this.sprite.body.setSize(this.sprite.width * 0.4, this.sprite.height * 0.4);
    this.sprite.setCollideWorldBounds(true);

    // Customize player settings and animations here

    this.health = 100;
    this.experience = 0;

    // Add more properties as needed
  }
  move(cursors) {
    if (cursors.A.isDown) {
      this.sprite.setVelocityX(-200);
      this.sprite.anims.play(`${this.sprite.texture.key}-left`, true);
    } else if (cursors.D.isDown) {
      this.sprite.setVelocityX(200);
      this.sprite.anims.play(`${this.sprite.texture.key}-right`, true);
    } else {
      this.sprite.setVelocityX(0);
    }

    // Vertical movement
    if (cursors.W.isDown) {
      this.sprite.setVelocityY(-200);
      this.sprite.anims.play(`${this.sprite.texture.key}-up`, true);
    } else if (cursors.S.isDown) {
      this.sprite.setVelocityY(200);
      this.sprite.anims.play(`${this.sprite.texture.key}-down`, true);
    } else {
      this.sprite.setVelocityY(0);
    }
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      // Handle player death
    }
  }

  gainExperience(amount) {
    this.experience += amount;
    // Check if player leveled up or reached certain milestones
  }

  // Other player methods...
}
