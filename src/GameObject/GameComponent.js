import React, { Component } from "react";
import WithWorld from "../World/HOC/WithWorld";
import Vector from "./../Vector/Vector";
import GameObject from "./GameObjectBase/GameObject";
import PropTypes from "prop-types";

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.children = [];
    this._position = new Vector(this.props.position.vector);
    this.components = [];
  }
  _isChanged = false;

  add(component) {
    this.components.push(component);
  }

  componentWillMount() {
    this.position = new Vector([30, 30]);
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
