import {
  dino,
  cactus,
  background,
  startButton,
  stopButton,
  restartButton,
  gameMenu,
  gameInterface,
  deadScreen,
  jumpAudio,
  deadAudio,
  gameConfig
} from '../scripts/utils/constants.js';
import Game from '../scripts/components/Game.js';

function jump() {
  if (!dino.classList.contains('game__dino_jump')) {
    dino.classList.add('game__dino_jump');
    jumpAudio.play();
  }
  setTimeout( function() {
    dino.classList.remove('game__dino_jump');
  }, 410);
}

const dinoGame = new Game(gameConfig, () => jump());


gameMenu.classList.remove('hidden');
gameInterface.classList.add('hidden');
deadScreen.classList.add('hidden');

startButton.addEventListener('click', () => {
  dinoGame.start()
});

stopButton.addEventListener('click', () => {
  dinoGame.stop();
});

restartButton.addEventListener('click', () => {
  dinoGame.start();
});
