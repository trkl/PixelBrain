import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import PropTypes from "prop-types";
import Game from "./../Game/Game";
import Sprite from "../Sprite/Sprite";

class Bird extends Component {
  constructor(props) {
    super(props);
    this.cameraFollows = this.props.cameraFollows;
  }

  componentWillMount() {
    if (this.props.controller)
      this.props.keyboardSubscribe(this, " ", {
        physics: { force: new Vector([0, -2000]), duration: 100 }
      });
  }
  render = () => (
    <GameComponent
      cameraFollows={this.cameraFollows}
      parent={this}
      position={this.props.position}
    >
      <RigidBody
        weight={10}
        velocity={this.props.velocity}
        force={this.props.force}
        gravity={this.props.gravity}
        drag={0.5}
      />
      <CollisionZone
        offset={new Vector([0, 0])}
        dimensions={new Vector([3.1, 7.1])}
      />
      <Sprite scale={0.1} width={1674} height={620} n={3} imagesource="puffinpixel.png"/>
    </GameComponent>
  );
  handleCollision = collider => {};
}

Bird.propTypes = { cameraFollows: PropTypes.bool.isRequired };
Bird.defaultProps = { cameraFollows: false };

export default WithKeyboardSubscribe(Bird);

export const ScoreKeep = props => <h1>{Game.instance.score}</h1>;
