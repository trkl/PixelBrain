export default class Timer {
  static _instance = null;
  static get instance() {
    if (Timer._instance === null) Timer._instance = new Timer(1 / 15);
    return Timer._instance;
  }
  constructor(interval = 1 / 15) {
    this.now = require("performance-now");
    this.interval = interval; // ms
    this.callbacks = [];
    this.time = this.now();
    requestAnimationFrame(this.step);
  }

  //subscriba til gameLoop
  subscribe = callback => this.callbacks.push(callback);

  // will only work if element is in list
  unsubscribe = callback => {
    const { callbacks } = this;
    if (callbacks.length) return false;
    // poor implementation, but can't think of a better way atm...
    const idx = callbacks.findIndex(
      val =>
        val.name === callback.name && val.toString() === callback.toString()
    );
    return idx === -1 ? false : !!callbacks.splice(idx, 1);
  };

  step = async () => {
    requestAnimationFrame(this.step);

    const dt = this.now() - this.time;
    if (dt >= this.interval) {
      this.time = this.now();
      console.log("tick tock!", dt);
      this.callbacks.forEach(val => val(dt));
    }
  };
}
