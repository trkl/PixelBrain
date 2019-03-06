import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Vector from "../../../../Vector/Vector";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Sprite from "../../../../GameComponents/Sprite";
import PropTypes from "prop-types";
import Game from "../Game";
import AudioManager from "../../../../AudioManager/AudioManager";

class Sheep extends GameComponent {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.AudioManager = new AudioManager();
  }

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }

  CollisionHeight = 10;
  sheepSize = 100;
  sheepOffset = 71.5;

  children = [
    <Sprite
      offset={new Vector([this.offset, this.sheepOffset])}
      size={new Vector([this.width, 10])}
      imagesource="sheep.png"
    />,

    <CollisionZone
      offset={new Vector([this.offset, this.sheepOffset])}
      dimensions={new Vector([3.5, this.sheepSize])}
    />,
    <CollisionZone
      name="scoreZone"
      offset={new Vector([this.offset + this.width, this.CollisionHeight])}
      dimensions={new Vector([this.width, 200])}
    />
  ];

  handleCollision = collider => {
    const { object, collisionZone } = collider;
    // if (object.constructor.name !== "Bird") return;
    if (object.constructor.name !== "Runner") {
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

export default Sheep;
