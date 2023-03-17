const gameInterface = document.querySelector('.game');
const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');
const background = document.querySelector('.game__background');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const restartButton = document.querySelector('.restart-button');
const gameMenu = document.querySelector('.menu');
const deadScreen = document.querySelector('.dead-screen');
const jumpMp3 = '../sounds/jump.mp3';
const jumpAudio = new Audio(jumpMp3);
const deadMp3 = '../sounds/game-over.mp3';
const deadAudio = new Audio(deadMp3);

const gameConfig = {
  intervalId: 'interval', 
  gameMenu: gameMenu, 
  gameInterface: gameInterface, 
  deadScreen: deadScreen, 
  dino: dino, 
  cactus: cactus, 
  cactusMoveClass: 'game__cactus_move', 
  hiddenState: 'hidden', 
  deadAudio: deadAudio, 
  window: window
}

export {
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
};