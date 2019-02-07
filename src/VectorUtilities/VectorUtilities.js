class VectorUtilities {
  // adds two vectors in array format [x,y]
  addVectors(vector, vector0) {
    return [
      Number(vector[0]) + Number(vector0[0]),
      Number(vector[1]) + Number(vector0[1])
    ];
  }

  //sums vector array with function.
  reduceVectorArray(arr, method = this.addVectors, initial = [[], []]) {
    if (arr === null || arr.length === 0) return [0, 0];
    let vector,
      totalForce = initial;

    while ((vector = arr.pop())) totalForce = method(vector, totalForce);
    return totalForce;
  }

  // multiplies vector with number
  multiplyVector(vector, multiplier) {
    return vector.map(value => value * multiplier);
  }
}

export default VectorUtilities;
