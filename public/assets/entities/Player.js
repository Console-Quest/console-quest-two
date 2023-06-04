// entities/Player.js
export class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, 'bluechar');
    this.sprite.body.setSize(this.sprite.width * 0.4, this.sprite.height * 0.4);
    this.sprite.setCollideWorldBounds(true);

    this.health = 100; // or whatever starting health you want
    // add more properties as needed
  }

  // A method for moving the player around
  move(cursors) {
    // similar logic to your current update() function goes here
    if (cursors.A.isDown) {
        this.sprite.setVelocityX(-200);
        this.sprite.anims.play('bluechar-left', true);
    } else if (cursors.D.isDown) {
        this.sprite.setVelocityX(200);
        this.sprite.anims.play('bluechar-right', true);
    } else {
        this.sprite.setVelocityX(0);
    }
  
    // Vertical movement
    if (cursors.W.isDown) {
        this.sprite.setVelocityY(-200);
        this.sprite.anims.play('bluechar-up', true);
    } else if (cursors.S.isDown) {
        this.sprite.setVelocityY(200);
        this.sprite.anims.play('bluechar-down', true);
    } else {
        this.sprite.setVelocityY(0);
    }
  }

  // Other player methods...
}