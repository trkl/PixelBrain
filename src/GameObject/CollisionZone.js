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
    this.props.parent.add(this);
  }

  componentWillMount() {
    CollisionManger.instance.add(this);
    // setInterval(this.update, 2000);
  }

  componentWillUnmount() {
    CollisionManger.instance.remove(this);
  }

  update = () => {
    this.setState({ ...this.props });
  };

  render = () => {
    const newPosition = this.props.position.plus(this.props.offset);
    const { dimensions } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          height: dimensions.y + "%",
          width: dimensions.x + "%",
          top: newPosition.y + "%",
          left: newPosition.x + "%",
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
