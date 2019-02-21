import VectorUtilities from "../VectorUtilities/VectorUtilities";
import { Component } from "react";
import WithWorld from "../World/HOC/WithWorld";
import GameObject from "../GameObject/GameObjectBase/GameObject";
import Vector from "../Vector/Vector";
import Event, { Physics } from "../Events/Event";
import EventManager from "../EventManager/EventManager";

const Config = {
  gravity: 9.98,
  meter: 100
};

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

  private acceleration = ({ physics }: Event) => {
    //adding gravity
    // physics.
  };
  // current force on object;
  private objectForce(gameObject: GameObject) {
    let totalForce = new Vector();
    gameObject.forces.forEach(element => {
      totalForce = totalForce.plus(element);
    });
    return totalForce;
  }

  // force added by event
  private eventForce(physics: Physics) {
    let totalForce = new Vector();
    physics.forces.forEach(element => {
      totalForce = totalForce.plus(element);
    });
    return totalForce;
  }

  private totalForce = (event: Event): Vector => {
    if (!event || !event.gameObject) {
      throw "PhysicsEngine: event or gameObject is undefined or null";
    }

    const { gameObject, physics } = event;

    let totalForce = this.objectForce(gameObject);

    if (physics) {
      totalForce = totalForce.plus(this.eventForce(physics));
    }
    console.log(gameObject);
    event.gameObject.forces = [totalForce];
    totalForce = totalForce.plus(
      this.gravityVector.multiply(gameObject.gravity)
    );

    return totalForce;
  };

  public processGameObject(event: Event, deltaTime: number) {
    const { gameObject, physics } = event;

    let { velocity, weight, forces, position } = gameObject;

    const totalForce = this.totalForce(event);

    const velly = totalForce.divide(weight).multiply(deltaTime / 1000);
    gameObject.velocity = velocity.plus(velly);

    event.gameObject.position = position.plus(
      velocity.multiply(deltaTime / 1000)
    );
    if (gameObject.velocity.vector != [0, 0])
      EventManager.instance.registerEvent(event);
  }
}

export default PhysicsEngine;
