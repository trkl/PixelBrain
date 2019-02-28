import React, { Component } from "react";
import WithWorld from "../World/HOC/WithWorld";
import Vector from "./../Vector/Vector";
import PropTypes from "prop-types";

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.children = [];
    this._position = new Vector(this.props.position.vector);
    this.components = [];
    this.rigidBody = null;
    this.collisionZones = [];
    this.props.parent.gameComponent = this;
  }
  _isChanged = false;

  add(component) {
    this.components.push(component);

    if (component.constructor.name === "CollisionZone") {
      this.collisionZones.push(component);
    } else if (component.constructor.name === "RigidBody") {
      if (!this.rigidBody) {
        this.rigidBody = component;
      } else throw "more than one rigidBody not supported";
    }
  }

  get position() {
    return this._position;
  }
  set position(position) {
    this._isChanged = true;
    this._position = position;
  }

  update() {
    this.setState({});
    this.components.forEach(component => component.update());
  }

  shouldComponentUpdate() {
    return this._isChanged;
  }

  render = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, { position: this.position, parent: this })
    );
}

GameComponent.defaultProps = {
  position: new Vector()
};

GameComponent.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

export default WithWorld(GameComponent);
