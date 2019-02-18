export default class Timer {
  constructor(interval = 1000) {
    this.now = require("performance-now");
    this.interval = interval; // ms
    this.callbacks = [];

    this.time = this.now();

    this.step();
  }

  //subscriba til gameLoop
  subscribe = callback => this.callbacks.push(callback);

  step = () => {
    const nowTime = this.now();
    const dt = nowTime - this.time;
    if (dt > this.interval) {
      this.callbacks.forEach(val => val(dt));
      this.time = nowTime;
    }

    requestAnimationFrame(this.step);
  };
}
