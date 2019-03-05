import React, { Component } from "react";
import GameComponent from "../../../GameObject/GameComponent";
import Pipes from "../SheepRunner/Sheep";
import Vector from "../../../Vector/Vector";
import PropTypes from "prop-types";
import Game from "../SheepRunner/Game";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class SheepPool extends Component {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.interval = () => getRandomArbitrary(20,30);
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
    while (this.pipes.length < 9) {
      this.pipes.push(
        React.createElement(Pipes, {
          offset: this.pipeKey++ * this.interval(),
          position: this.position,
          key: this.pipeKey
        })
      );
    }
  };

  rotateRender = (offset) => {
    this.pipes.push(
      React.cloneElement(this.pipes.shift(), {
        offset: offset,

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
    const offset =this.interval() * this.pipeKey-3;
    if (position.x + offset > 100 && position.x +offset < 150) {
      ++this.pipeKey
      this.rotateRender(offset);
    }
  };

}

SheepPool.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

SheepPool.defaultProps = {
  position: Vector.Zero
};
