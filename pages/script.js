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
  deadAudio
} from '../scripts/utils/constants.js';
import Game from '../scripts/components/Game.js';

const gameState = new Game('interval', gameMenu, gameInterface, deadScreen, dino, cactus, 'game__cactus_move', 'hidden', deadAudio, window);


gameMenu.classList.remove('hidden');
gameInterface.classList.add('hidden');
deadScreen.classList.add('hidden');

function jump() {
  if (!dino.classList.contains('game__dino_jump')) {
    dino.classList.add('game__dino_jump');
    jumpAudio.play();
  }
  setTimeout( function() {
    dino.classList.remove('game__dino_jump');
  }, 410)
}

startButton.addEventListener('click', () => {
  gameState.start()
});

stopButton.addEventListener('click', () => {
  gameState.stop();
});

restartButton.addEventListener('click', () => {
  gameState.start();
})

document.addEventListener('keydown', (event) => {
  jump();
});
