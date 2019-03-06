import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Vector from "../../../../Vector/Vector";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Sprite from "../../../../GameComponents/Sprite";
import PropTypes from "prop-types";
import Game from "../Game";
import { WithWorld } from "../../../../World/HOC/WithWorld";
import EventManager from "../../../../EventManager/EventManager";

class Pipes extends GameComponent {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    const upperPipeOffset = 0;
    const upperPipeSize = this.upperPipeLength ? this.upperPipeLength : 20;
    const gap = this.gap ? this.gap : 20;
    const lowerPipeSize = 100 - upperPipeSize + gap;
    const lowerPipeOffset = upperPipeOffset + upperPipeSize + gap;

    this.children = [
      <Sprite
        offset={new Vector([this.offset, upperPipeOffset])}
        size={new Vector([this.width, upperPipeSize])}
        imagesource="pipeDown.png"
      />,
      <CollisionZone
        offset={new Vector([this.offset, upperPipeOffset])}
        dimensions={new Vector([this.width, upperPipeSize])}
      />,
      <Sprite
        offset={new Vector([this.offset, lowerPipeOffset])}
        size={new Vector([this.width, 70])}
        imagesource="pipeUp.png"
      />,

      <CollisionZone
        offset={new Vector([this.offset, lowerPipeOffset])}
        dimensions={new Vector([this.width, lowerPipeSize])}
      />,
      <CollisionZone
        name="scoreZone"
        offset={new Vector([this.offset + this.width, upperPipeSize])}
        dimensions={new Vector([this.width, gap])}
      />
    ];
  }

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }

  handleCollision = collider => {
    const { object, collisionZone } = collider;
    if (object.name !== "Bird") return;

    if (collisionZone.name === "scoreZone") {
      ++Game.instance.score;
      EventManager.instance.registerEvent({
        audio: { soundName: "sfx_point.wav" }
      });
    } else {
      EventManager.instance.registerEvent({
        audio: { soundName: "sfx_die.wav" }
      });
      Game.instance.gameOver = true;
      if (Game.instance.score > Game.instance.highScore) {
        Game.instance.highScore = Game.instance.score;
      }
    }
  };
}

Pipes.propTypes = {
  width: PropTypes.number,
  position: PropTypes.instanceOf(Vector)
};
Pipes.defaultProps = {
  width: 4,
  position: new Vector()
};

export default WithWorld(Pipes);
