import {
  startButton,
  stopButton,
  restartButton,
  gameConfig
} from '../scripts/utils/constants.js';
import { jumpAudio, deadAudio } from '../scripts/utils/constants.js';
import Game from '../scripts/components/Game.js';
import Dino from '../scripts/components/Dino.js';
import Screen from '../scripts/components/Screen.js';


const dino = new Dino('.game__dino', 'game__dino_jump', jumpAudio);

const menuScreen = new Screen('.menu-screen', 'hidden');
const gameScreen = new Screen('.game-screen', 'hidden');
const deadScreen = new Screen('.dead-screen', 'hidden');

gameScreen.hide();
deadScreen.hide();

const screenConfig = {
  menuScreen: menuScreen,
  gameScreen: gameScreen,
  deadScreen: deadScreen
}

const game = new Game(gameConfig, dino, deadAudio, screenConfig);


startButton.addEventListener('click', () => {
  game.start()
});

stopButton.addEventListener('click', () => {
  game.stop();
});

restartButton.addEventListener('click', () => {
  game.start();
});
