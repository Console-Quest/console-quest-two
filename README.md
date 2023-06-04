# console-quest-2

[Your Game Title] is a top-down 2D game built with Phaser 3.

![Game screenshot](./path-to-your-screenshot.png)

## Game Description

In [Your Game Title], you control a character who...

(Talk about the gameplay, story, and mechanics of your game here.)

## File Structure

The game is organized as follows:
src/
|- scenes/
| |- BootScene.js
| |- LoadScene.js
| |- MainMenuScene.js
| |- MonsterScene.js
| |- TreasureScene.js
| |- HealingScene.js
| |- BossScene.js
|
|- entities/
| |- Player.js
| |- Monster.js
|
|- assets/
| |- ... (Your game's assets: images, audio files, etc.)
|
|- main.js
|- index.html
webpack.config.js
package.json
README.md

## UML

(Insert your UML diagram here.)

## How to Run the Game

1. Clone this repository to your local machine.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm run build` to bundle the JavaScript files.
5. Open `index.html` in your browser to start the game.

## Game Mechanics

### Player

The player character is controlled using the W, A, S, and D keys. The player can...

### Monsters

Monsters are AI-controlled entities that...

### Scenes

The game is divided into several scenes:

- **BootScene**: This is the first scene of the game, which preloads any necessary assets for the LoadScene.
- **LoadScene**: This scene preloads the game's main assets and displays a loading screen.
- **MainMenuScene**: This scene displays the main menu of the game.
- **MonsterScene**: In this scene, the player encounters and battles with monsters.
- **TreasureScene**: In this scene, the player can...
- **HealingScene**: In this scene, the player can...
- **BossScene**: In this scene, the player encounters and battles with a boss monster.
