import React, { Component } from "react";
import CollisionManger from "../CollisionManager/CollisionManager";
import PropTypes from "prop-types";
import Vector from "./../Vector/Vector";

export default class CollisionZone extends Component {
  constructor(props) {
    super(props);
    this.position = this.props.parent.position;
    this.dimensions = this.props.dimensions;
    this.name = this.props.name;
    for (const i in this.props) {
      this[i] = this.props[i];
    }
    this.collision = new Set();
  }

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }
  get position() {
    return this.parent.position;
  }

  set position(position) {
    this._position = position;
  }

  componentWillMount() {
    this.props.parent.addCollisionZone(this);
    this.idx = CollisionManger.instance.add(this);
  }

  componentWillUnmount() {
    CollisionManger.instance.remove(this.idx);
    this.props.parent.remove(this);
  }

  update = () => {
    this.setState({});
  };

  render = () => {
    const realPosition = this.props.parent.position.plus(this.props.offset);
    const { dimensions } = this.props;
    return (
      // <></>
      <div
        style={{
          position: "absolute",
          height: dimensions.y + "%",
          width: dimensions.x + "%",
          top: realPosition.y + "%",
          left: realPosition.x + "%",
          backgroundColor: "rgba(99,99,99,.1)"
        }}
      />
    );
  };
}

CollisionZone.propTypes = {
  dimensions: PropTypes.instanceOf(Vector).isRequired,
  offset: PropTypes.instanceOf(Vector).isRequired,
  name: PropTypes.string.isRequired
};

CollisionZone.defaultProps = {
  offset: new Vector(),
  name: "unnamed"
};
