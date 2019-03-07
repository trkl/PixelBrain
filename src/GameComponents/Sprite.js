import React from "react";
import { WithResources } from "../Resource Manager/HOC/WithResources";
import Vector from "../Vector/Vector";
import PropTypes from "prop-types";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    for (const i in props) {
      this[i] = this.props[i];
    }
    this.size = this.size.multiply(this.scale);
    this.parent.add(this);
    this.style = {
      width: this.size.x + "%",
      height: this.size.y + "%",
      // animation: "play 0.3s steps(" + this.n + ") infinite",
      position: "absolute"
    };
  }

  render() {
    const actualPosition = this.parent.position.plus(this.offset);
    return (
      // <div
      //   style={{
      //     ...this.style
      //   }}
      // >
      <img
        style={{
          position: "absolute",
          top: actualPosition.y + "%",
          left: actualPosition.x + "%",
          objectFit: "fill",
          objectPosition: "0 0",
          maxHeight: this.size.y + "%",
          minHeight: this.size.y + "%",
          minWidth: this.size.x + "%",
          maxWidth: this.size.x + "%",
          ...this.props.imageStyle
        }}
        alt="pipeDown"
        src={this.resourceManager.getImage(this.imagesource)}
      />
      // {/* <style>{`@keyframes play {100% { background-position: ${-this.size.x *
      //   this.n}px; }}`}</style> */}
      // </div>
    );
  }
  update = () => {
    this.setState({});
  };
}

Sprite.propTypes = {
  size: PropTypes.instanceOf(Vector).isRequired,
  position: PropTypes.instanceOf(Vector).isRequired,
  scale: PropTypes.number,
  offset: PropTypes.instanceOf(Vector).isRequired
};

Sprite.defaultProps = {
  size: Vector.Zero,
  scale: 1,
  position: Vector.Zero,
  offset: Vector.Zero
};

export default WithResources(Sprite);
