class Game {
  constructor(intervalId, gameMenu, gameInterface, deadScreen, dino, cactus, cactusMoveClass, hiddenState, deadAudio, window) {
    this._intervalId = intervalId;
    this._gameMenu = gameMenu;
    this._gameInterface = gameInterface;
    this._deadScreen = deadScreen;
    this._dino = dino;
    this._cactus = cactus;
    this._cactusMoveClass = cactusMoveClass;
    this._hiddenState = hiddenState;
    this._deadAudio = deadAudio;
    this._window =window;
  }

  start() {
    this._gameMenu.classList.add(this._hiddenState);
    this._gameInterface.classList.remove(this._hiddenState);
    this._deadScreen.classList.add(this._hiddenState);
    this._intervalId = setInterval(() => {
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
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  showDeadScreen() {
    this._gameInterface.classList.add(this._hiddenState);
    this._deadScreen.classList.remove(this._hiddenState);
    this._cactus.classList.remove(this._cactusMoveClass);
    clearInterval(this._intervalId);
  }
}

export default Game;