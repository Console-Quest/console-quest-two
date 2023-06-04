class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  create() {
    // Add a text object as a title
    this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'My Game', {
      font: '48px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add a text object as a 'Play' button
    const playButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Play', {
      font: '32px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Make the 'Play' button interactive
    playButton.setInteractive();

    // On 'Play' button click, start the 'MonsterScene'
    playButton.on('pointerdown', () => {
      this.scene.start('MonsterScene');
    });
  }
}

export { MainMenuScene };
