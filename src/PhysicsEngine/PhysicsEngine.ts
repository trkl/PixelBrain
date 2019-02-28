//@ts-nocheck
import Vector from "../Vector/Vector";
import Event from "../Events/Event";
import Timer from "../Timer/Timer";
import EventManager from "../EventManager/EventManager";
import GameComponent from "../GameObject/GameComponent";

class PhysicsEngine {
  private static _instance: PhysicsEngine;
  public static get instance() {
    console.log(PhysicsEngine._instance);
    if (PhysicsEngine._instance === undefined) {
      PhysicsEngine._instance = new PhysicsEngine();
    }
    console.log(PhysicsEngine._instance);
    return PhysicsEngine._instance;
  }

  private constructor() {}

  private gravityVector = new Vector([0, 9.82]);

  //gravity on object
  private gravityForce(gameObject: any): Vector {
    return this.gravityVector
      .multiply(gameObject.weight)
      .multiply(gameObject.gravity);
  }

  private dragForce(gameObject: any) {
    return new Vector([
      -Math.sign(gameObject.velocity.x) * gameObject.velocity.x ** 2,
      -Math.sign(gameObject.velocity.y) * gameObject.velocity.y ** 2
    ]).multiply(gameObject.drag);
  }
  private totalForce = (gameObject: any): Vector => {
    let totalForce = new Vector([...gameObject.force.vector]);
    totalForce = totalForce.plus(this.dragForce(gameObject));
    totalForce = totalForce.plus(this.gravityForce(gameObject));
    return totalForce;
  };

  private rigidBodies: any = [];
  public add = (body: any) => {
    this.rigidBodies.push(body);
  };

  public remove(body: any) {
    this.rigidBodies.filterInPlace(body !== body);
  }

  public processRigidBodies = (dt: number) => {
    this.rigidBodies.forEach((element: any) => {
      this.processRigidBody(element, dt);
    });
  };

  public processRigidBody(gameObject: any, deltaTime: number) {
    const totalForce = this.totalForce(gameObject);
    gameObject.acceleration = totalForce.divide(gameObject.weight);
    gameObject.velocity = gameObject.velocity.plus(
      gameObject.acceleration.multiply(deltaTime / 1000)
    );

    gameObject.parent.position = gameObject.parent.position.plus(
      gameObject.velocity.multiply(deltaTime / 1000)
    );
  }

  public processEvent(event: Event) {
    const { physics, end } = event;

    if (!event.gameObject) {
      throw "PhysicsEngine: gameObject is undefined or null";
    }
    if (!event.gameObject.gameComponent) {
      throw 'PhysicsEngine: event fired without "gameComponent" is undefined or null';
    }
    if (!event.gameObject.gameComponent.rigidBody) {
      throw "PhysicsEngine: physics event fired withour rigidBody";
    }

    const gameObject = event.gameObject.gameComponent.rigidBody;

    if (!physics || !physics.force) return;
    const { duration } = physics;

    // if (duration && end) {
    //   throw "both duration and end defined. Not supported... could lead to obscure bugs";
    // }
    if (end) {
      console.log("end");
      gameObject.force = gameObject.force.minus(physics.force);
    } else {
      //@ts-ignore
      gameObject.force = gameObject.force.plus(physics.force);
      if (duration) {
        Timer.instance.subscribeToTime(async () => {
          EventManager.instance.registerEvent({
            ...event,
            end: true
          });
        }, duration);
      }
    }
  }
}

// public processEvent(event: Event) {
//   const { gameObject, physics, end } = event;
//   if (!gameObject) {
//     throw "PhysicsEngine: gameObject is undefined or null";
//   }
//   // nothing to do if no force is applied
//   if (!physics || !physics.force) return;

//   const force = end
//     ? gameObject.force.minus(physics.force)
//     : gameObject.force.plus(physics.force);

//   const { duration } = physics;
//   if (duration && end)
//     throw "both duration and end defined. Not supported... could lead to obscure bugs";

//   // force has finite duration subscribe to remove it at given time
//   if (!duration != !end) {
//     Timer.instance.subscribeToTime(
//       () => (gameObject.force = gameObject.force.minus(physics.force)),
//       duration
//     );
//   }
// }

export default PhysicsEngine;
