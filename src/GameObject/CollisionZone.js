import React, { Component } from "react";
import CollisionManger from "../CollisionManager/CollisionManager";
import PropTypes from "prop-types";
import Vector from "./../Vector/Vector";

export default class CollisionZone extends Component {
  constructor(props) {
    super(props);
    this.position = this.props.parent.position;
    this.dimensions = this.props.dimensions;
<<<<<<< HEAD
    this.name = this.props.name;
=======
    this.state = { ...props };
>>>>>>> dev
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
<<<<<<< HEAD
    const { dimensions } = this.props;
=======
>>>>>>> dev
    return (
      <div
        style={{
          position: "absolute",
<<<<<<< HEAD
          height: dimensions.y + "%",
          width: dimensions.x + "%",
          top: newPosition.y + "%",
          left: newPosition.x + "%",
          backgroundColor: "rgba(99,99,99,.1)"
=======
          height: this.props.dimensions.y,
          width: this.props.dimensions.x,
          top: newPosition.y,
          left: newPosition.x,
          backgroundColor: "black"
>>>>>>> dev
        }}
      />
    );
  };
}

CollisionZone.propTypes = {
  dimensions: PropTypes.instanceOf(Vector).isRequired,
<<<<<<< HEAD
  offset: PropTypes.instanceOf(Vector).isRequired,
  name: PropTypes.string.isRequired
};

CollisionZone.defaultProps = {
  offset: new Vector(),
  name: "unnamed"
=======
  offset: PropTypes.instanceOf(Vector).isRequired
};

CollisionZone.defaultProps = {
  offset: new Vector()
>>>>>>> dev
};
