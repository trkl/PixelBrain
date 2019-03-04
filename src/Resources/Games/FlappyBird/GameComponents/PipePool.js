import React, { Component } from "react";

import GameComponent from "../../../../GameObject/GameComponent";
import Pipes from "./Pipes";
import Vector from "../../../../Vector/Vector";
import PropTypes from "prop-types";
import Game from "../Game";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class PipePool extends Component {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.interval = 20;
    this.pipes = [];
    this.pipeKey = 0;

    this.prepareForRender();
    this.renderObj = React.createElement(
      GameComponent,
      { position: this.position, parent: this },
      this.pipes
    );
  }

  shouldComponentUpdate() {
    return false;
  }

  prepareForRender = () => {
    while (this.pipes.length < 7) {
      this.pipes.push(
        React.createElement(Pipes, {
          offset: this.pipeKey++ * this.interval,
          position: this.position,
          upperPipeLength: getRandomArbitrary(10, 50),
          key: this.pipeKey
        })
      );
    }
  };

  rotateRender = () => {
    this.pipes.push(
      React.cloneElement(this.pipes.shift(), {
        offset: this.pipeKey++ * this.interval,
        upperPipeLength: getRandomArbitrary(10, 50),
        key: this.pipeKey
      })
    );

    this.renderObj = React.cloneElement(this.renderObj, {}, this.pipes);
  };

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = this.props[i];
    }
  }

  render = () => this.renderObj;

  beforeFrameRender = () => {
    const { position } = this.gameComponent;
    if (position.x + this.interval * this.pipeKey - 3 < 100) {
      this.rotateRender();
    }
  };

  handleCollision({ object, collisionZone }) {
    if (object.constructor.name !== "Bird") return;
    if (collisionZone.name === "scoreZone") {
      Game.instance.score += 1;
    }
  }
}

PipePool.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

PipePool.defaultProps = {
  position: Vector.Zero
};
