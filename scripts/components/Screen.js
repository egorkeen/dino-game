class Screen {
  constructor(screenSelector, hiddenClass) {
    this._screen = document.querySelector(screenSelector);
    this._hiddenClass = hiddenClass;
  }

  show() {
    this._screen.classList.remove(this._hiddenClass);
  }

  hide() {
    this._screen.classList.add(this._hiddenClass);
  }
}

export default Screen;