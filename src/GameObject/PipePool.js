import React, { Component } from "react";

import GameComponent from "./GameComponent";
import Pipes from "../Objects/Pipe/Pipes";
import Vector from "../Vector/Vector";
import PropTypes from "prop-types";
import GameObject from "./GameObjectBase/GameObject";

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
  pipeObj = React.createElement(Pipes, {
    offset: new Vector([this.pipeKey++ * this.interval, 0]),
    upperPipeLength: getRandomArbitrary(10, 50),
    key: this.pipeKey++
  });

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

  notOnScreen = [];

  rotateRender = () => {
    console.log("rotate");
    this.pipes.shift();
    this.pipes.push(
      React.createElement(Pipes, {
        offset: this.pipeKey++ * this.interval,
        upperPipeLength: getRandomArbitrary(10, 50),
        key: this.pipeKey
      })
    );

    this.renderObj = React.cloneElement(
      this.renderObj,
      { parent: this, position: this.gameComponent.position },
      this.pipes
    );
  };

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = this.props[i];
    }
  }

  render = () => this.renderObj;

  beforeFrameRender = () => {
    const { position } = this.gameComponent;
    if (position.x + this.interval * (this.pipeKey - 1) < 100) {
      console.log("rotate");
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
