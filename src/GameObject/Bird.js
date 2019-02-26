import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";

export default class Bird extends Component {
  render = () => (
    <GameComponent parent={this} position={this.props.position}>
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
      />
      <CollisionZone dimensions={new Vector([100, 100])} />
    </GameComponent>
  );
  handleCollision(collider) {
    console.log(this, " collided with ", collider);
  }
}
