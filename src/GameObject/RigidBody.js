import React, { Component } from "react";
import PropTypes from "prop-types";
import Vector from "./../Vector/Vector";

import WithWorld from "./../World/HOC/WithWorld";
import GameComponent from "./GameComponent";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";

class RigidBody extends Component {
  constructor(props) {
    super(props);

    for (let i in this.props) {
      this[i] = this.props[i];
    }
    // this.velocity = this.props.velocity;
    // this.acceleration = this.props.acceleration;
    // this.force = this.props.force;
    // this.drag = this.props.drag;
    // this.gravity = this.props.gravity;
    // this.weight = this.props.weight;
    // this.position = this.props.parent.position;
    // this.parent = this.props.parent;
    this.props.parent.add(this);
  }

  componentWillMount() {
    PhysicsEngine.instance.add(this);
  }

  render = () => {
    return (
      <h1
        style={{
          position: "absolute",
          top: this.props.position.y,
          left: this.props.position.x
        }}
      >
        hey
      </h1>
    );
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
