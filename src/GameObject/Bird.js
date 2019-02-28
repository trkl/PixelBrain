import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import EventManager from "../EventManager/EventManager";

class Bird extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.keyboardSubscribe(this, " ", {
      physics: { force: new Vector([0, -2000]), duration: 100 },
      callback: () => console.log("fly")
    });
  }
  render = () => (
    <GameComponent parent={this} position={this.props.position}>
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
        drag={0.5}
      />
      <CollisionZone
        offset={new Vector([2, 2])}
        dimensions={new Vector([10, 10])}
      />
    </GameComponent>
  );
  handleCollision(collider) {
    console.log(this, " collided with ", collider);
  }
}

export default WithKeyboardSubscribe(Bird);
