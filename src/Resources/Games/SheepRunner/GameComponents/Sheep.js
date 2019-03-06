import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Vector from "../../../../Vector/Vector";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Sprite from "../../../../GameComponents/Sprite";
import PropTypes from "prop-types";
import Game from "../Game";
import AudioManager from "../../../../AudioManager/AudioManager";
import { WithWorld } from "../../../../World/HOC/WithWorld";

class Sheep extends GameComponent {
  constructor(props) {
    super(props);
    this.AudioManager = new AudioManager();
  }

  CollisionHeight = 10;
  sheepSize = 100;
  sheepOffset = 50;

  children = [
    <Sprite
      offset={this.props.offset}
      imagesource="sheep.png"
      size={new Vector([this.props.width, 10])}
    />,
    <CollisionZone
      offset={this.props.offset}
      dimensions={new Vector([this.props.width, 10])}
    />,
    <CollisionZone
      name={"scoreZone"}
      offset={new Vector([this.props.offset.x + this.props.width / 4, 0])}
      dimensions={new Vector([this.props.width / 2, this.props.offset.y])}
    />
  ];

  handleCollision = collider => {
    const { object, collisionZone } = collider;
    // if (object.constructor.name !== "Bird") return;
    if (object.name !== "Runner") {
      return;
    }

    if (collisionZone.name === "scoreZone") {
      ++Game.instance.score;
      this.AudioManager.playSound("sfx_point.wav");
    } else {
      Game.instance.gameOver = true;
      this.AudioManager.playSound("sfx_hit.wav");
      this.AudioManager.playSound("sfx_die.wav");
      if (Game.instance.score > Game.instance.highScore) {
        Game.instance.highScore = Game.instance.score;
      }
    }
  };
}

Sheep.propTypes = {
  width: PropTypes.number
};
Sheep.defaultProps = {
  width: 4
};

export default WithWorld(Sheep);
