import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";

class Bard extends Component {
  render = () => (
    <GameComponent parent={this} position={this.props.position}>
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
      />
      <CollisionZone
        offset={new Vector([400, 100])}
        dimensions={new Vector([100, 100])}
      />
    </GameComponent>
  );
}

class Bird extends Component {
  render = () => (
    <GameComponent parent={this} position={this.props.position}>
      <Bard />
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
      />
      <CollisionZone
        offset={new Vector([100, 100])}
        dimensions={new Vector([100, 100])}
      />
    </GameComponent>
  );
  handleCollision(collider) {
    console.log(this, " collided with ", collider);
  }
}

export default WithKeyboardSubscribe(Bird);
