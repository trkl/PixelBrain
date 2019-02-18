import VectorUtilities from "./../VectorUtilities/VectorUtilities";

const Config = {
  gravity: 9.98,
  meter: 100
};

class PhysicsEngine {
  acceleration = (gameObject, forceVector) =>
    VectorUtilities.multiplyVector(forceVector, gameObject.weight);

  forces(gameObject, newForces) {
<<<<<<< HEAD
=======
    console.log(gameObject)
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
    const { weight, gravity, forces, acceleration, velocity } = gameObject;
    const downForce = Config.gravity * weight * gravity;

    const totalForce = VectorUtilities.reduceVectorArray([
<<<<<<< HEAD
      ...forces,
=======
      forces,
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
      downForce
    ]);
    this.acceleration(gameObject, totalForce);
  }
  processGameObject(gameObject, { forces, duration }) {
<<<<<<< HEAD
=======
    this.forces(gameObject, forces)
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
    if (duration == null) {
      console.log("waiting for endEvent");
      return;
    }
  }
}

export default PhysicsEngine;
