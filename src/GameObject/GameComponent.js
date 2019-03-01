import React, { Component } from "react";
import WithWorld from "../World/HOC/WithWorld";
import Vector from "./../Vector/Vector";
import PropTypes from "prop-types";
import Camera from "../Camera/Camera";

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.children = [];
    this._position = new Vector(this.props.position.vector);
    this.components = [];
    this.rigidBody = null;
    this.collisionZones = [];
    this.props.parent.gameComponent = this;
    if (this.props.cameraFollows) {
      this.props.world.camera = new Camera(this);
      this.props.world.startCamera();
    }
  }
  _isChanged = false;

  add = component => {
    this.components.push(component);

    if (component.constructor.name === "CollisionZone") {
      this.collisionZones.push(component);
    } else if (component.constructor.name === "RigidBody") {
      if (!this.rigidBody) {
        this.rigidBody = component;
      } else throw new Error("more than one rigidBody not supported");
    }
  };

  remove = component => {
    this.components.filterInPlace(component2 => component2 !== component);
    this.collisionZones.filterInPlace(component2 => component2 !== component);
  };

  get position() {
    return this._position;
  }
  set position(position) {
    this._isChanged = true;
    this._position = position;
  }

  update = () => {
    if (!this.mounted) return;
    this.setState({});
    this.components.forEach(component => component.update());
  };

  shouldComponentUpdate() {
    return this._isChanged;
  }

  render = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, { position: this.position, parent: this })
    );

  componentWillMount() {
    this.mounted = true;
    this.props.world.registerComponent(this);
  }

  componentWillUnmount() {
    this.mounted = false;
    this.props.world.unregisterComponent(this);
    this.components = [];
  }
}

GameComponent.defaultProps = {
  position: new Vector()
};

GameComponent.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

export default WithWorld(GameComponent);
