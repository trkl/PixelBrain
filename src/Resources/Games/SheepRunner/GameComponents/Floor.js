import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Game from "../Game";
import Vector from "../../../../Vector/Vector";
import EventManager from "../../../../EventManager/EventManager";
import { WithWorld } from "../../../../World/HOC/WithWorld";

class Floor extends GameComponent {
  children = [<CollisionZone dimensions={this.props.dimensions} />];

  collisionEvent = (gameObject, force) => ({
    gameObject: gameObject,
    physics: { force }
  });

  runnerCollisionEvent;

  handleCollision = collider => {
    if (collider.object.name === "Runner") {
      const { rigidBody } = collider.object;
      Game.instance.ableToJump = true;

      rigidBody.velocity = new Vector([rigidBody.velocity.x, 0]);
      this.runnerCollisionEvent = this.collisionEvent(
        collider.object,
        new Vector([0, -rigidBody.weight * 9.82 * rigidBody.gravity])
      );
      EventManager.instance.registerEvent(this.runnerCollisionEvent);
      rigidBody.acceleration = new Vector([rigidBody.acceleration.x, 0]);
    }
  };
  onCollisionEnd = collider => {
    if (collider.object.name === "Runner") {
      EventManager.instance.registerEvent({
        ...this.runnerCollisionEvent,
        end: true
      });
    }
  };
  beforeFrameRender() {
    this.position.x = 0;
  }
}

export default WithWorld(Floor);
