const cactus = document.querySelector('.game__cactus');
const background = document.querySelector('.game__background');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const restartButton = document.querySelector('.restart-button');
const jumpAudio = document.getElementById('jump-audio')
const deadAudio = document.getElementById('game-over-audio');

const gameConfig = {
  intervalId: null, 
  cactus: cactus, 
  cactusMoveClass: 'game__cactus_move', 
  hiddenState: 'hidden', 
  window: window
}

export {
  startButton,
  stopButton,
  restartButton,
  jumpAudio,
  deadAudio,
  gameConfig
};