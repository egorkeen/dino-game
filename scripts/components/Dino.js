class Dino {
  constructor(dinoSelector, jumpClass, jumpAudio) {
    this._dino = document.querySelector(dinoSelector);
    this._jumpClass = jumpClass;
    this._jumpAudio = jumpAudio;
    this.boundJump = this.jump.bind(this)
  }

  jump() {
    if (!this._dino.classList.contains(this._jumpClass)) {
      this._dino.classList.add(this._jumpClass);
      this._jumpAudio.play();
    }
    setTimeout(() => {
      this._dino.classList.remove(this._jumpClass);
    }, 400);
  }

  getDino() {
    return this._dino;
  }

  setEventListeners() {
    document.addEventListener('keydown', this.boundJump);
    document.addEventListener('click', this.boundJump);
  }
  
  removeEventListeners() {
    document.removeEventListener('keydown', this.boundJump);
    document.removeEventListener('click', this.boundJump);
  }
}

export default Dino;
