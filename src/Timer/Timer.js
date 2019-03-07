import Game from "../Resources/Games/SheepRunner/Game";

export default class Timer {
  static _instance = undefined;
  static get instance() {
    if (Timer._instance === undefined) Timer._instance = new Timer(60);
    return Timer._instance;
  }
  constructor(framerate = 30) {
    this.now = require("performance-now");
    this.interval = 1000 / framerate; // ms
    this.callbacks = [];
    this.oneTimeCallBacks = [];
    this.time = this.now();
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
      if (
        this.oneTimeCallBacks[i] &&
        this.oneTimeCallBacks[i].time <= this.now()
      ) {
        this.oneTimeCallBacks[i].callback();
        this.oneTimeCallBacks[i] = this.oneTimeCallBacks[length - 1];
        this.oneTimeCallBacks.pop();
      }
    this.handleOneTimersEnter = true;
  };

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
  // should come elsewhere
  pause = false;

  step = () => {
    requestAnimationFrame(this.step);
    if (Game.instance.pause) {
      this.time = this.now();
      return;
    }
    this.handleOneTimers();
    const dt = this.now() - this.time;
    if (dt >= this.interval) {
      this.time = this.now();
      this.callbacks.forEach(val => val(dt));
    }
  };
}
