import React from "react";
import WithKeyboardSubscribe from "../../../../InputManager/HOC/WithKeyboardSubscribe";
// import PropTypes from "prop-types";
// import Game from "./../Game";
import { WithWorld } from "../../../../World/HOC/WithWorld";

import Vector from "../../../../Vector/Vector";
import RigidBody from "../../../../GameObject/RigidBody";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Sprite from "../../../../Sprite/Sprite";
import GameComponent from "../../../../GameObject/GameComponent";

class Bird extends GameComponent {
  componentWillMount() {
    super.componentWillMount();
    if (this.props.controller)
      this.props.keyboardSubscribe(this, " ", {
        physics: { force: new Vector([0, -2000]), duration: 100 },
        audio: { soundName: "sfx_wing.wav" }
      });
  }
  children = [
    <RigidBody
      weight={10}
      velocity={this.props.velocity}
      force={this.props.force}
      gravity={this.props.gravity}
      drag={0.5}
    />,
    <CollisionZone
      offset={new Vector([0, 0])}
      dimensions={new Vector([3.1, 7.1])}
    />,
    <Sprite
      position={new Vector([5, 30])}
      scale={0.1}
      width={1674}
      height={620}
      n={3}
      imagesource="puffinpixel.png"
    />
  ];
}

// Bird.propTypes = { cameraFollows: PropTypes.bool.isRequired };
// Bird.defaultProps = { cameraFollows: false };

export default WithWorld(WithKeyboardSubscribe(Bird));
