import VectorUtilities from "../VectorUtilities/VectorUtilities";
import { Component } from "react";
import WithWorld from "../World/HOC/WithWorld";
import GameObject from "../GameObject/GameObjectBase/GameObject";
import Vector from "../Vector/Vector";
import Event from "../Events/Event";
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

  private totalForce = (event: Event): Vector => {
    const { gameObject, physics } = event;
    let totalForce = new Vector();
    gameObject.forces.forEach(element => {
      totalForce = totalForce.plus(element);
    });
    physics.forces.forEach(element => {
      totalForce = totalForce.plus(element);
    });
    gameObject.forces = [totalForce];
    const { duration } = physics;

    if (duration !== 0) {
      EventManager.instance.registerEvent({ ...event, end: true });
    }
    return totalForce.plus(this.gravityVector);
  };

  public processGameObject(event: Event, deltaTime: number) {
    const { gameObject, physics } = event;
    let { velocity, weight, forces, position } = gameObject;

    let sumForce = new Vector();
    forces.forEach(force => (sumForce = sumForce.plus(force)));
    sumForce = sumForce.plus(this.gravityVector);
    console.log("velocity", velocity);

    const velly = sumForce.divide(weight).multiply(deltaTime / 1000);
    gameObject.velocity = velocity.plus(velly);

    event.gameObject.position = position.plus(
      velocity.multiply(deltaTime / 1000)
    );
    if (gameObject.velocity.vector != [0, 0])
      EventManager.instance.registerEvent(event);
  }
}

export default PhysicsEngine;
