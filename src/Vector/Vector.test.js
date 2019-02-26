import Vector from "./Vector";

describe("Vector", () => {
  it("[Constructor vector init ]vector should keep internal vector in sync with x and y", () => {
    const vector = new Vector([1, 2]);
    expect(
      vector.x === vector.vector[0] && vector.y === vector.vector[1]
    ).toBeTruthy();
  });

  it("[Empty constructor] vector should return [0,0]", () => {
    const vector = new Vector();
    expect(vector.vector).toEqual([0, 0]);
  });

  it("vector should keep internal vector in sync with x and y", () => {
    const vector = new Vector();
    vector.x = 3;
    vector.y = 5;
    expect(
      vector.x === vector.vector[0] && vector.y === vector.vector[1]
    ).toBeTruthy();
  });

  it("vector should keep internal vector in sync with x and y", () => {
    const vector = new Vector();
    vector.vector[0] = 1;
    vector.vector[1] = 3;
    expect(
      vector.x === vector.vector[0] && vector.y === vector.vector[1]
    ).toBeTruthy();
  });
});
