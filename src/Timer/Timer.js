export default class Timer {
  static _instance = null;
  static get instance() {
    if (Timer._instance === null) Timer._instance = new Timer(60);
    return Timer._instance;
  }
  constructor(framerate = 30) {
    this.now = require("performance-now");
    this.interval = 1000 / framerate; // ms
    this.callbacks = [];
    this.oneTimeCallBacks = [];
    this.time = this.now();
    console.log(this.interval);
    requestAnimationFrame(this.step);
  }

  //subscriba til gameLoop
  subscribe = callback => this.callbacks.push(callback);

  subscribeToTime = (callback, offset) =>
    this.oneTimeCallBacks.push({
      time: this.now() + offset,
      callback: callback
    });

  handleOneTimersEnter = true;

  handleOneTimers = async () => {
    if (!this.handleOneTimers) return;
    this.handleOneTimersEnter = false;
    const length = this.oneTimeCallBacks.length;
    for (let i = 0; i < this.oneTimeCallBacks.length; ++i)
      if (this.oneTimeCallBacks[i].time <= this.now()) {
        this.oneTimeCallBacks[i].callback();
        this.oneTimeCallBacks[i] = this.oneTimeCallBacks[length - 1];
        this.oneTimeCallBacks.pop();
      }
    this.handleOneTimersEnter = true;
  };

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
    this.handleOneTimers();
    const dt = this.now() - this.time;
    if (dt >= this.interval) {
      this.time = this.now();
      this.callbacks.forEach(val => val(dt));
    }
  };
}
