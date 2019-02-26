import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";

class Bird extends Component {
  componentWillMount() {
    this.props.keyboardSubscribe(
      this,
      " ",
      { physics: { force: new Vector([0, 20]) } },
      true
    );
  }

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

export default WithKeyboardSubscribe(Bird);
