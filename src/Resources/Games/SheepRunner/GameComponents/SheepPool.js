import React from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import Sheep from "./Sheep";
import Vector from "../../../../Vector/Vector";
import PropTypes from "prop-types";
import { WithWorld } from "../../../../World/HOC/WithWorld";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class SheepPool extends GameComponent {
  constructor(props) {
    super(props);
    this.interval = () => getRandomArbitrary(30, 50);
    this.children = [];
    this.sheepKey = 0;

    this.prepareForRender();
  }

  shouldComponentUpdate = () => true;

  prepareForRender = () => {
    while (this.children.length < 7) {
      this.children.push(
        React.createElement(Sheep, {
          offset: new Vector([this.sheepKey++ * this.interval(), 70]),
          position: this.position,
          key: this.sheepKey
        })
      );
    }
  };

  rotateRender = offset => {
    this.children.push(
      React.cloneElement(this.children.shift(), {
        offset: new Vector([offset, 70]),
        position: this.position,
        key: this.sheepKey
      })
    );
  };

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = this.props[i];
    }
  }

  beforeFrameRender = () => {
    const { position } = this;
    const offset = this.interval() * this.sheepKey - 3;
    if (position.x + offset > 100 && position.x + offset < 150) {
      ++this.sheepKey;
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

export default WithWorld(SheepPool);
