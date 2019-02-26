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

  plus = ({ vector }) =>
    new Vector(this.vector.map((val, idx) => val + vector[idx]));

  minus = ({ vector }) =>
    new Vector(this.vector.map((val, idx) => val - vector[idx]));

  // OBS!: returns number not vector
  dot = ({ vector }) =>
    this.vector
      .map((val, idx) => val * vector[idx])
      .reduce((prev, curr) => prev + curr, 0);

  multiply = scaler => new Vector(this.vector.map(val => val * scaler));

  divide = scaler => new Vector(this.vector.map(val => val / scaler));

  static get Zero() {
    return new Vector();
  }
}
