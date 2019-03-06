import React, { Component } from "react";
import Vector from "./../Vector/Vector";
import PropTypes from "prop-types";
import Camera from "../Camera/Camera";
import CollisionManger from "../CollisionManager/CollisionManager";

export default class GameComponent extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this._position = this.props.position;
    this.components = [];
    this.rigidBody = null;
    this.collisionZones = [];
    if (this.props.cameraFollows) {
      this.props.world.camera = new Camera(this);
      this.props.world.startCamera();
    }
    console.log(this.props);
  }
  _isChanged = false;

  addRigidBody = component => {
    this.add(component);
    if (!this.rigidBody) {
      this.rigidBody = component;
    } else throw new Error("more than one rigidBody not supported");
  };

  add = component => this.components.push(component);
  addCollisionZone = component => {
    this.add(component);
    this.collisionZones.push(component);
  };

  remove = component => {
    console.log(this.components.length);
    this.components.filterInPlace(component2 => component2 !== component);
    this.collisionZones.filterInPlace(component2 => component2 !== component);
  };

  get position() {
    if (this.rigidBody) return this.rigidBody.position;
    return this._position;
  }
  set position(position) {
    this._isChanged = true;
    if (this.rigidBody) this.rigidBody.position = position;
    this._position = position;
  }

  update = () => {
    if (!this.mounted) return;
    this.setState({});
    this.components.forEach(component => component.update());
  };

  // shouldComponentUpdate() {
  //   return this._isChanged;
  // }

  render = () => this.children;

  shouldComponentUpdate = () => true;

  componentWillMount() {
    this.children = this.children ? this.children : [];
    this.children = this.children.map((child, idx) =>
      React.cloneElement(child, {
        ...this.props,
        ...child.props,
        world: this.props.world,
        parent: this,
        key: idx,
        position: this.rigidBody ? this.rigidBody.position : this.props.position
      })
    );
    console.log(this.props.world);
    this.props.world.registerComponent(this);
  }
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    // this.props.world.unregisterComponent(this);
    // this.components = [];
  }
  components = [];
}

GameComponent.defaultProps = {
  position: new Vector()
};

GameComponent.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired
};

// export default WithWorld(GameComponent);
