import React from "react";
import { WithResources } from "../Resource Manager/HOC/WithResources";
import PropTypes from "prop-types";
import Vector from "../Vector/Vector";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    let { parent, height, width, n, scale } = this.props;
    parent.add(this);
    height = height * scale;
    width = (width / n) * scale;
    this.state = {
      height: height,
      width: width,
      scale: scale,
      n: n,
      styleSprite: {
        position: "absolute",
        width: width,
        height: height,
        background:
          "url(" +
          this.props.resourceManager.getImage(this.props.imagesource) +
          ") left center",
        backgroundSize: "cover",
        animation: "play 1s steps(" + n + ") infinite"
      }
    };
  }

  update() {
    this.setState({});
  }

  render() {
    return (
      <div
        style={{
          ...this.state.styleSprite,
          top: this.props.parent.position.y + "%",
          left: this.props.parent.position.x + "%"
        }}
      >
        <style>{`@keyframes play {100% { background-position: ${-this.state
          .width * this.state.n}px; }}`}</style>
      </div>
    );
  }
}

Sprite.propTypes = {
  position: PropTypes.instanceOf(Vector).isRequired,
  n: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
  // parent: PropTypes.any.isRequired
};

export default WithResources(Sprite);
