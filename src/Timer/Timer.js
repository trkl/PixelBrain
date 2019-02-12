export default class Timer {
  constructor(interval = 1000) {
    this.interval = interval; // ms
    this.expected = Date.now() + this.interval;
    this.callbacks = [];

    setTimeout(this.step, this.interval);
  }

  subscribe = callback => this.callbacks.push(callback);

  step = () => {
    var dt = Date.now() - this.expected; // the drift (positive for overshooting)
    if (dt > this.interval) {
    }
    this.callbacks.forEach(val => val());
    this.expected += this.interval;
    setTimeout(this.step, Math.max(0, this.interval - dt)); // take into account drift
  };
}
