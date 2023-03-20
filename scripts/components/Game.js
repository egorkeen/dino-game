class Game {
  constructor(gameConfig, dino, deadAudio, screenConfig) {
    this._intervalId = gameConfig.intervalId;
    this._cactus = gameConfig.cactus;
    this._cactusMoveClass = gameConfig.cactusMoveClass;
    this._hiddenState = gameConfig.hiddenState;
    this._window = gameConfig.window;
    this._dino = dino;
    this._deadAudio = deadAudio;
    this._gameScreen = screenConfig.gameScreen;
    this._menuScreen = screenConfig.menuScreen;
    this._deadScreen = screenConfig.deadScreen;
  }
  // start the game
  start() {
    // turn on game screen and hiding the other screens
    this._gameScreen.show();
    this._deadScreen.hide();
    this._menuScreen.hide();

    // check if the player touches the cactus (every 10ms)
    this._intervalId = setInterval(() => {
      // add listeners
      this._dino.setEventListeners();
      // start moving the cactus
      this._cactus.classList.add(this._cactusMoveClass);

      let dinoTop = parseInt(this._window.getComputedStyle(this._dino.getDino()).getPropertyValue('top'));
      let cactusLeft = parseInt(this._window.getComputedStyle(this._cactus).getPropertyValue('left'));
  
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        this._deadAudio.play();
        this.showDeadScreen();
      }
  }, 10);
  }
  // stop the game
  stop() {
    // show the menu screen and hide the others
    this._menuScreen.show();
    this._gameScreen.hide();
    this._deadScreen.hide();
    
    // stop cactus moving
    this._cactus.classList.remove(this._cactusMoveClass);

    // remove listeners
    this._dino.removeEventListeners();

    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  showDeadScreen() {
    // show dead screen and hide the others
    this._deadScreen.show();
    this._gameScreen.hide();
    this._menuScreen.hide();

    // stop cactus moving
    this._cactus.classList.remove(this._cactusMoveClass);

    // remove listeners
    this._dino.removeEventListeners();

    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

}

export default Game;