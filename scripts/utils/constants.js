const gameInterface = document.querySelector('.game');
const dino = document.querySelector('.game__dino');
const cactus = document.querySelector('.game__cactus');
const background = document.querySelector('.game__background');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const restartButton = document.querySelector('.restart-button');
const gameMenu = document.querySelector('.menu');
const deadScreen = document.querySelector('.dead-screen');
const jumpWav = './sounds/jump.wav';
const jumpAudio = new Audio(jumpWav);
const deadWav = './sounds/dead.wav';
const deadAudio = new Audio(deadWav);

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
  deadAudio
};