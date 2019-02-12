import VectorUtilities from "./../VectorUtilities/VectorUtilities";

const Config = {
  gravity: 9.98,
  meter: 100
};

class PhysicsEngine {
  acceleration = (gameObject, forceVector) =>
    VectorUtilities.multiplyVector(forceVector, gameObject.weight);

  forces(gameObject, newForces) {
    const { weight, gravity, forces, acceleration, velocity } = gameObject;
    const downForce = Config.gravity * weight * gravity;

    const totalForce = VectorUtilities.reduceVectorArray([
      ...forces,
      downForce
    ]);
    this.acceleration(gameObject, totalForce);
  }
  processGameObject(gameObject, { end, forces, duration }, dt) {
    console.log(gameObject);
    if (end) {
      gameObject.forces.vector = [];
    }
    if (duration == null) {
      console.log("waiting for endEvent");
    }
    console.log(dt);
  }
}

export default PhysicsEngine;
