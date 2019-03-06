import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Vector from "../../../../Vector/Vector";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Sprite from "../../../../GameComponents/Sprite";
import PropTypes from "prop-types";
import Game from "../Game";
<<<<<<< HEAD
import Bird from "./Bird";
=======
import AudioManager from "../../../../AudioManager/AudioManager";
>>>>>>> dev

class Pipes extends GameComponent {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
<<<<<<< HEAD
=======
    this.AudioManager = new AudioManager()
  }

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }

  render() {
>>>>>>> dev
    const upperPipeOffset = 0;
    const upperPipeSize = this.upperPipeLength ? this.upperPipeLength : 20;
    const gap = this.gap ? this.gap : 20;
    const lowerPipeSize = 100 - upperPipeSize + gap;
    const lowerPipeOffset = upperPipeOffset + upperPipeSize + gap;

    this.children = [
      // <Sprite
      //   offset={new Vector([this.offset, upperPipeOffset])}
      //   size={new Vector([this.width, upperPipeSize])}
      //   imagesource="pipeDown.png"
      // />,
      <CollisionZone
        offset={new Vector([this.offset, upperPipeOffset])}
        dimensions={new Vector([this.width, upperPipeSize])}
      />,
      // <Sprite
      //   offset={new Vector([this.offset, lowerPipeOffset])}
      //   size={new Vector([this.width, 70])}
      //   imagesource="pipeUp.png"
      // />,

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
    // if (object.constructor.name !== "Bird") return;

    if (collisionZone.name === "scoreZone") {
      ++Game.instance.score;
      this.AudioManager.playSound("sfx_point.wav")

    } else {
      Game.instance.gameOver = true;
<<<<<<< HEAD
      if (Game.instance.score > Game.instance.highScore) {
        Game.instance.highScore = Game.instance.score;
=======
      this.AudioManager.playSound("sfx_hit.wav")
      this.AudioManager.playSound("sfx_die.wav")
      if(Game.instance.score > Game.instance.highScore){
        Game.instance.highScore = Game.instance.score
>>>>>>> dev
      }
      // document.body.innerHTML = "<h1>You Lost</h1>";
      // console.log("you lost!");
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

export default Pipes;
