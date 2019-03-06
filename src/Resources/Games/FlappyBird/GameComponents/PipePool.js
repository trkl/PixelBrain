import React, { Component } from "react";

import GameComponent from "../../../../GameObject/GameComponent";
import Pipes from "./Pipes";
import Vector from "../../../../Vector/Vector";
import PropTypes from "prop-types";
import Game from "../Game";
import { WithWorld } from "../../../../World/HOC/WithWorld";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class PipePool extends GameComponent {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.interval = 20;
    this.children = [];
    this.pipeKey = 0;

    this.prepareForRender();
  }

  shouldComponentUpdate() {
    console.log(this.children);
    return true;
  }

  prepareForRender = () => {
    console.log("preparing");
    while (this.children.length < 7) {
      this.children.push(
        React.createElement(Pipes, {
          offset: this.pipeKey++ * this.interval,
          position: this.position,
          upperPipeLength: getRandomArbitrary(10, 50),
          key: this.key
        })
      );
    }
  };

  rotateRender = () => {
    this.children.push(
      React.cloneElement(this.children.shift(), {
        position: this.position,
        offset: this.pipeKey++ * this.interval,
        upperPipeLength: getRandomArbitrary(10, 50),
        key: this.pipeKey
      })
    );
    console.log("after", this.children);
  };

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = this.props[i];
    }
  }

  beforeFrameRender = () => {
    const { position } = this;
    if (position.x + this.interval * this.pipeKey < 100) {
      console.log("hey");
      this.rotateRender();
    }
  };
}

PipePool.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

PipePool.defaultProps = {
  position: Vector.Zero
};

export default WithWorld(PipePool);
