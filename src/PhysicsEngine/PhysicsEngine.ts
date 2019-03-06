//@ts-nocheck
import Vector from "../Vector/Vector";
import Event from "../Events/Event";
import Timer from "../Timer/Timer";
import EventManager from "../EventManager/EventManager";
import { createSocket } from "dgram";

class PhysicsEngine {
  private static _instance: PhysicsEngine;
  public static get instance() {
    if (PhysicsEngine._instance === undefined) {
      PhysicsEngine._instance = new PhysicsEngine();
    }
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

    gameObject.position = gameObject.position.plus(
      gameObject.velocity.multiply(deltaTime / 1000)
    );
  }

  public processEvent(event: Event) {
    const { physics, end } = event;
    if (!physics) return;

    if (!event.gameObject) {
      throw "PhysicsEngine: gameObject is undefined or null";
    }

    if (!event.gameObject.rigidBody) {
      throw "PhysicsEngine: physics event fired withour rigidBody";
    }

    const gameObject = event.gameObject.rigidBody;

    if (!physics || !physics.force) return;
    const { duration } = physics;

    if (end) {
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

export default PhysicsEngine;
