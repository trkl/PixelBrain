import PhysicsEngine from "./PhysicsEngine";
import Vector from "../Vector/Vector";
import GameComponent from "../GameObject/GameComponent";
import { render } from "react-testing-library";
import React from "react";
import RigidBody from "../GameObject/RigidBody";
import CollisionZone from "../GameObject/CollisionZone";

describe("PhysicsEngine", () => {
  let rigidBody;

  beforeEach(() => {
    rigidBody = {
      weight: 10,
      gravity: 1,
      velocity: new Vector([20, 20]),
      drag: 1,
      force: new Vector([30, 30])
    };
    rigidBody.parent = { rigidBody };
  });

  it("instance should be defined", () => {
    expect(PhysicsEngine.instance).toBeTruthy();
  });

  it("should calculate gravity correctly", () => {
    expect(PhysicsEngine.instance.gravityForce(rigidBody).vector).toEqual([
      0,
      10 * 1 * 9.82
    ]);
  });
  it("should calculate dragForceCorrectly", () => {
    expect(PhysicsEngine.instance.dragForce(rigidBody).vector).toEqual([
      -400,
      -400
    ]);
  });

  it("should calculate totalForce on rigidBody correctly", () => {
    expect(PhysicsEngine.instance.totalForce(rigidBody).vector).toEqual(
      rigidBody.force.plus(
        PhysicsEngine.instance
          .gravityForce(rigidBody)
          .plus(PhysicsEngine.instance.dragForce(rigidBody))
      ).vector
    );
  });

  it("rigidBody should be able to be added and removed from physicsEngine", () => {
    PhysicsEngine.instance.add(rigidBody);
    expect(PhysicsEngine.instance.rigidBodies.length).toEqual(1);
    expect(PhysicsEngine.instance.rigidBodies[0] === rigidBody).toBeTruthy();
    PhysicsEngine.instance.remove(rigidBody);
    expect(PhysicsEngine.instance.rigidBodies.length).toEqual(0);
  });

  it("event should add force to object", () => {
    const preForce = rigidBody.force;
    const event = {
      gameObject: rigidBody.parent,
      physics: { force: new Vector([20, 20]) }
    };
    PhysicsEngine.instance.processEvent(event);
    expect(preForce.plus(event.physics.force).vector).toEqual(
      rigidBody.force.vector
    );
  });
});

//   it("[Constructor vector init ]vector should keep internal vector in sync with x and y", () => {
//     expect(instance.gravityForce()).toBeTruthy();
//   });

//   it("[Empty constructor] vector should return [0,0]", () => {
//     const vector = new Vector();
//     expect(vector.vector).toEqual([0, 0]);
//   });

//   it("vector should keep internal vector in sync with x and y", () => {
//     vector.x = 3;
//     vector.y = 5;
//     expect(
//       vector.x === vector.vector[0] && vector.y === vector.vector[1]
//     ).toBeTruthy();
//   });

//   it("vector should keep internal vector in sync with x and y", () => {
//     vector.vector[0] = 1;
//     vector.vector[1] = 3;
//     expect(
//       vector.x === vector.vector[0] && vector.y === vector.vector[1]
//     ).toBeTruthy();
//   });

//   it("plussing two vectors", () => {
//     expect(vector.plus(vector1).vector).toEqual([3, 5]);
//   });

//   it("minus'ing two vectors", () => {
//     expect(vector.minus(vector1).vector).toEqual([-1, -1]);
//   });

//   it("multiplying vector", () => {
//     const scale = 2;
//     expect(vector.multiply(scale).vector).toEqual([2, 4]);
//   });

//   it("dividing vectors", () => {
//     expect(vector.divide(2).vector).toEqual([1 / 2, 1]);
//   });

//   it("dot'ing vectors", () => {
//     expect(vector.dot(vector1)).toEqual(8);
//   });

//   it("Vector.Zero.vector should be [0,0]", () => {
//     expect(Vector.Zero.vector).toEqual([0, 0]);
//   });
// });
