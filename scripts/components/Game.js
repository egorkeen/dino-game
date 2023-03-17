import { deadAudio } from "../utils/constants";

class Game {
  constructor(gameConfig, jumpFunction, deadAudio) {
    this._intervalId = gameConfig.intervalId;
    this._gameMenu = gameConfig.gameMenu;
    this._gameInterface = gameConfig.gameInterface;
    this._deadScreen = gameConfig.deadScreen;
    this._dino = gameConfig.dino;
    this._cactus = gameConfig.cactus;
    this._cactusMoveClass = gameConfig.cactusMoveClass;
    this._hiddenState = gameConfig.hiddenState;
    this._deadAudio = deadAudio;
    this._window = gameConfig.window;
    this._jumpFunction = jumpFunction;
  }

  start() {
    this._gameMenu.classList.add(this._hiddenState);
    this._gameInterface.classList.remove(this._hiddenState);
    this._deadScreen.classList.add(this._hiddenState);
    this._intervalId = setInterval(() => {
      document.addEventListener('keydown', this._jumpFunction);
      document.addEventListener('click', this._jumpFunction);
      let dinoTop = parseInt(this._window.getComputedStyle(this._dino).getPropertyValue('top'));
      let cactusLeft = parseInt(this._window.getComputedStyle(this._cactus).getPropertyValue('left'));
      this._cactus.classList.add(this._cactusMoveClass);
  
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        this._deadAudio.play();
        this.showDeadScreen();
      }
  }, 10);
  }

  stop() {
    this._gameMenu.classList.remove(this._hiddenState);
    this._gameInterface.classList.add(this._hiddenState);
    this._deadScreen.classList.add(this._hiddenState);
    this._cactus.classList.remove(this._cactusMoveClass);
    document.removeEventListener('click', this._jumpFunction);
    document.removeEventListener('keydown', this._jumpFunction);
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  showDeadScreen() {
    this._gameInterface.classList.add(this._hiddenState);
    this._deadScreen.classList.remove(this._hiddenState);
    this._cactus.classList.remove(this._cactusMoveClass);
    document.removeEventListener('click', this._jumpFunction);
    document.removeEventListener('keydown', this._jumpFunction);
    clearInterval(this._intervalId);
  }
}

export default Game;