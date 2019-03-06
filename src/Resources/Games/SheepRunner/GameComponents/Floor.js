import React, { Component } from "react";

import GameComponent from '../../../../GameObject/GameComponent'
import CollisionZone from '../../../../GameObject/CollisionZone'
import Game from '../Game'
import Vector from "../../../../Vector/Vector"
import EventManager from '../../../../EventManager/EventManager'
// import GameComponent from "../../../../GameObject/GameComponent";
// import CollisionZone from "../../../../GameObject/CollisionZone";
// import Game from "../Game";
// import Vector from "../../../../Vector/Vector"
// import EventManager from '../../../../EventManager/EventManager'

export default class Floor extends Component {
  constructor(props) {
    super(props);

    for (const i in this.props) {
      this[i] = this.props[i];
    }
  }
  render = () => (
    <GameComponent parent={this} position={this.position}>
      <CollisionZone dimensions={this.props.dimensions} />
    </GameComponent>
  );

    collisionEvent = (gameObject,force) => ({gameObject: gameObject, physics:{force}});
    runnerCollisionEvent;
  handleCollision = collider => {
    console.log(collider)
    if (collider.object.constructor.name === "Runner") {
      const {gameComponent} = collider.object;
      const {rigidBody} = gameComponent;
      Game.instance.ableToJump = true;

      rigidBody.velocity = new Vector([rigidBody.velocity.x,0])
      this.runnerCollisionEvent =  this.collisionEvent(collider.object,new Vector([0,-rigidBody.weight*9.82*rigidBody.gravity]));
      EventManager.instance.registerEvent(this.runnerCollisionEvent)
      rigidBody.acceleration = new Vector([rigidBody.acceleration.x,0])
    }
  };
  onCollisionEnd = collider => {
    if (collider.object.constructor.name === "Runner") {
      EventManager.instance.registerEvent({...this.runnerCollisionEvent,end:true})
    }
  }
  beforeFrameRender() {
    this.gameComponent.position.x = 0;
  }
}
