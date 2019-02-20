import Vector from "./../Vector/Vector";
class VectorUtilities {
  static addNumbers = (a: string, b: string) => Number(a) + Number(b);

  static addVectors = (vector: number[], vector0: number[]) =>
    vector && vector0 ? vector.map((val, idx) => vector0[idx] + val) : [0, 0];

  //sums vector array with function.
  static reduceVectorArray(
    arr: Array<Vector>,
    method = (a: Vector, b: Vector) => a.plus(b),
    initial: Vector = new Vector()
  ): Vector {
    if (!arr || arr.length === 0) return new Vector();
    let vector;

    while ((vector = arr.pop())) initial = method(vector, initial);
    return initial;
  }

  // multiplies vector with number
  static multiplyVector = (vector: number[], multiplier: number) =>
    vector.map(value => value * multiplier);
}

export default VectorUtilities;
