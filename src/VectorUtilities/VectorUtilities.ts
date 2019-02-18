class VectorUtilities {
  static addNumbers = (a: string, b: string) => Number(a) + Number(b);

  static addVectors = (vector: number[], vector0: number[]) =>
    vector && vector0 ? vector.map((val, idx) => vector0[idx] + val) : [0, 0];

  //sums vector array with function.
  static reduceVectorArray(
    arr: number[][],
    method = VectorUtilities.addVectors,
    initial: number[] = [0, 0]
  ) {
    if (!arr || arr.length === 0) return [0, 0];
    let vector;

    while ((vector = arr.pop())) initial = method(vector, initial);
    return initial;
  }

  // multiplies vector with number
  static multiplyVector = (vector: number[], multiplier: number) =>
    vector.map(value => value * multiplier);
}

export default VectorUtilities;
