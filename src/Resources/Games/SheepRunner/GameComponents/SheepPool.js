import React, { Component } from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Sheep from './Sheep'
import Vector from "../../../../Vector/Vector";
import PropTypes from "prop-types";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class SheepPool extends Component {
  constructor(props) {
    super(props);
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.interval = () => 30
    this.sheep = [];
    this.pipeKey = 0;

    this.prepareForRender();
    this.renderObj = React.createElement(
      GameComponent,
      { position: this.position, parent: this },
      this.sheep
    );
  }

  shouldComponentUpdate() {
    return false;
  }

  prepareForRender = () => {
    while (this.sheep.length < 9) {
      this.sheep.push(
        React.createElement(Sheep, {
          offset: this.pipeKey++ * this.interval(),
          position: this.position,
          key: this.pipeKey
        })
      );
    }
  };

  rotateRender = (offset) => {
    this.sheep.push(
      React.cloneElement(this.sheep.shift(), {
        offset: offset,

        key: this.pipeKey
      })
    );

    this.renderObj = React.cloneElement(this.renderObj, {}, this.sheep);
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
