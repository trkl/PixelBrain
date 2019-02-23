import GameObject from "../GameObject/GameObjectBase/GameObject";
import Vector from "../Vector/Vector";
import Event from "../Events/Event";
import Timer from "../Timer/Timer";

class PhysicsEngine {
  private static _instance: undefined | PhysicsEngine = undefined;
  public static get instance() {
    if (PhysicsEngine._instance === undefined) {
      PhysicsEngine._instance = new PhysicsEngine();
    }
    return PhysicsEngine._instance;
  }

  private constructor() {}

  private gravityVector = new Vector([0, 9.82]);

  //gravity on object
  private gravityForce(gameObject: GameObject): Vector {
    return this.gravityVector
      .multiply(gameObject.weight)
      .multiply(gameObject.gravity);
  }

  private dragForce(gameObject: GameObject) {
    return new Vector([
      -Math.sign(gameObject.velocity.x) * gameObject.velocity.x ** 2,
      -Math.sign(gameObject.velocity.y) * gameObject.velocity.y ** 2
    ]).multiply(gameObject.drag);
  }

  private totalForce = (gameObject: GameObject): Vector => {
    let totalForce = new Vector([...gameObject.force.vector]);
    totalForce = totalForce.plus(this.dragForce(gameObject));
    totalForce = totalForce.plus(this.gravityForce(gameObject));
    return totalForce;
  };

  public processGameObject(gameObject: GameObject, deltaTime: number) {
    const totalForce = this.totalForce(gameObject);

    gameObject.acceleration = totalForce.divide(gameObject.weight);
    gameObject.velocity = gameObject.velocity.plus(
      gameObject.acceleration.multiply(deltaTime / 1000)
    );

    gameObject.position = gameObject.position.plus(
      gameObject.velocity.multiply(deltaTime / 1000)
    );
  }

  public processEvent(event: Event) {
    const { gameObject, physics } = event;
    if (!gameObject) {
      throw "PhysicsEngine: gameObject is undefined or null";
    }
    // nothing to do if no force is applied
    if (!physics || !physics.duration) return;

    gameObject.force = gameObject.force.plus(physics.force);
    const { duration } = physics;

    // force has finite duration subscribe to remove it at given time
    if (duration) {
      Timer.instance.subscribeToTime(
        () => (gameObject.force = gameObject.force.minus(physics.force)),
        duration
      );
    }
  }
}

export default PhysicsEngine;
