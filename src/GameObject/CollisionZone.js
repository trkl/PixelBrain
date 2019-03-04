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
    this.collision = new Set();
    for (const i in this.props) {
      this[i] = this.props[i];
    }
  }

  componentWillReceiveProps(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }

  componentWillMount() {
    this.props.parent.add(this);
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
    const realPosition = this.props.position.plus(this.props.offset);
    const { dimensions } = this.props;
<<<<<<< HEAD
    return (<></>
      // <div
      //   style={{
      //     position: "absolute",
      //     height: dimensions.y + "%",
      //     width: dimensions.x + "%",
      //     top: newPosition.y + "%",
      //     left: newPosition.x + "%",
      //     backgroundColor: "rgba(99,99,99,.1)"
      //   }}
      // />
=======
    return (
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
>>>>>>> 22c022a4d475312b5fce69406f38f597aa121432
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
