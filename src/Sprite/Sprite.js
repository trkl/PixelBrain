import React from "react";
import WithResources from "../Resource Manager/Resource Manager";
import image from "../logo.svg"
import ResourceManager from "../Resource Manager/Resource Manager";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    let { height, width, n, scale } = this.props;

    this.rm = new ResourceManager();

    height = height * scale;
    width = (width / n) * scale;
    this.state = {
      height: height,
      width: width,
      scale: scale,
      n: n,
      styleSprite: {
        width: width,
        height: height,
        background:
          "url(" +
          this.rm.getImage(this.props.imagesource) +
          ") left center",
        backgroundSize: "cover",
        animation: "play 0.3s steps(" + n + ") infinite",
        backgroundSize: "cover",
        position: "absolute"
      }
    };
  }
  render() {
    return (
      <div style={this.state.styleSprite}>
        <style>{`@keyframes play {100% { background-position: ${-this.state.width * this.state.n}px; }}`}</style>
      </div>
    );
  }
}

export default Sprite;
