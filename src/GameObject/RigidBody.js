import React, { Component } from "react";
import PropTypes from "prop-types";
import Vector from "./../Vector/Vector";

import { WithWorld } from "./../World/HOC/WithWorld";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";

class RigidBody extends Component {
  constructor(props) {
    super(props);

    for (let i in this.props) {
      this[i] = this.props[i];
    }
    this.parent.addRigidBody(this);
  }

  componentWillMount() {
    PhysicsEngine.instance.add(this);
  }

  render = () => <></>;

  update = () => {
    this.setState({});
  };
}

RigidBody.propTypes = {
  // parent: PropTypes.instanceOf(GameComponent),
  weight: PropTypes.number.isRequired,
  gravity: PropTypes.number.isRequired,
  drag: PropTypes.number.isRequired,
  force: PropTypes.instanceOf(Vector).isRequired,
  acceleration: PropTypes.instanceOf(Vector).isRequired,
  velocity: PropTypes.instanceOf(Vector).isRequired
};

RigidBody.defaultProps = {
  parent: null,
  gravity: 1,
  drag: 0,
  force: new Vector(),
  acceleration: new Vector(),
  velocity: new Vector()
};

export default WithWorld(RigidBody);
