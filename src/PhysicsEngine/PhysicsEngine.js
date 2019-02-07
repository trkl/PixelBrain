import VectorUtilities from "./../VectorUtilities/VectorUtilities";

const Config = {
  gravity: 9.98,
  meter: 100
};

class PhysicsEngine {
  acceleration(gameObject, forceVector) {
    const acceleration = VectorUtilities.multiplyVector(
      forceVector,
      gameObject.weight
    );
  }

  forces(gameObject) {
    const { weight, gravity, forces } = gameObject;
    const downForce = Config.gravity * weight * gravity;
    const totalForce = VectorUtilities.reduceVectorArray([
      ...forces,
      downForce
    ]);
    this.acceleration(gameObject, totalForce);
  }
}

export default PhysicsEngine;
