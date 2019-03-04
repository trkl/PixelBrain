export default class Game {
  static _instance;
  static get instance() {
    if (this._instance === undefined) this._instance = new Game();
    return this._instance;
  }
  gameOver = false;
  score = 0;
  pause = false;
  highScore = 0;
}
