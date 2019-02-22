import GameObject from "../GameObject/GameObjectBase/GameObject";
import Vector from "../Vector/Vector";
import Event from "../Events/Event";
import EventManager from "../EventManager/EventManager";
import Timer from "../Timer/Timer";

class PhysicsEngine {
  private static _instance: PhysicsEngine;
  public static get instance() {
    if (PhysicsEngine._instance === undefined) {
      PhysicsEngine._instance = new PhysicsEngine();
    }
    return PhysicsEngine._instance;
  }

  // private acceleration = (gameObject: GameObject, forceVector: Vector) =>
  //   forceVector.multiply(gameObject.weight);

  // private forces(gameObject: GameObject, newForces: Array<Vector>) {
  //   const {
  //     weight,
  //     gravity,
  //     forces,
  //     acceleration,
  //     velocity
  //   } = gameObject;
  //   const downForce = Config.gravity * weight * gravity;

  //   const totalForce = VectorUtilities.reduceVectorArray([
  //     ...forces,
  //     downForce
  //   ]);
  //   // this.acceleration(gameObject, totalForce);
  // }
  private gravityVector = new Vector([0, 9.82]);

  //gravity on object
  gravityForce(gameObject: GameObject): Vector {
    return this.gravityVector
      .multiply(gameObject.weight)
      .multiply(gameObject.gravity);
  }

  dragForce(gameObject: GameObject) {
    return new Vector([
      -Math.sign(gameObject.velocity.x) * gameObject.velocity.x ** 2,
      -Math.sign(gameObject.velocity.y) * gameObject.velocity.y ** 2
    ]).multiply(gameObject.drag * 0.5);
  }

  private totalForce = (event: Event): Vector => {
    if (!event || !event.gameObject) {
      throw "PhysicsEngine: event or gameObject is undefined or null";
    }

    const { gameObject, physics } = event;

    let totalForce = new Vector([...gameObject.force.vector]);
    if (physics && !event.end) {
      console.log("event");
      totalForce = totalForce.plus(event.physics.force);
    }

    const dragForce = this.dragForce(gameObject);

    // totalForce = new Vector([
    //   Math.sign(gameObject.velocity.x) *
    //     (Math.abs(totalForce.x) - Math.abs(dragForce.x)),
    //   Math.sign(gameObject.velocity.y) *
    //     (Math.abs(totalForce.y) - Math.abs(dragForce.y))
    // ]);
    event.gameObject.force = totalForce;
    totalForce = totalForce.plus(this.dragForce(gameObject));

    totalForce = totalForce.plus(this.gravityForce(gameObject));

    return totalForce;
  };

  checkDuration(event: Event): void {
    if (event && event.physics) {
      if (event.physics.duration && !event.end) {
        Timer.instance.subscribeToTime(() => {
          console.log("ending event", event);
          EventManager.instance.registerEvent({ ...event, end: true });
        }, event.physics.duration);
      }
      if (event.end) {
        event.gameObject.force = event.gameObject.force.minus(
          event.physics.force
        );
      }
    }
  }

  public processGameObject(event: Event, deltaTime: number) {
    const { gameObject } = event;

    let { velocity, weight, position } = gameObject;
    const totalForce = this.totalForce(event);

    gameObject.acceleration = totalForce.divide(gameObject.weight);

    gameObject.velocity = gameObject.velocity.plus(
      gameObject.acceleration.multiply(deltaTime / 1000)
    );

    // event.gameObject.position = position.plus(
    //   gameObject.acceleration.divide(2).multiply(deltaTime * deltaTime)
    // );
    event.gameObject.position = position.plus(
      velocity.multiply(deltaTime / 1000)
    );

    this.checkDuration(event);
  }
}

export default PhysicsEngine;
