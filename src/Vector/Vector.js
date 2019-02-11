export default class Vector {
  constructor(vector = [0, 0]) {
    this.vector = vector;
  }

  get x() {
    return this.vector[0];
  }
  get y() {
    return this.vector[1];
  }
  set x(val) {
    this.vector[0] = val;
  }
  set y(val) {
    this.vector[1] = val;
  }
}
