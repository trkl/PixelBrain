import React from "react";
import WithResources from "../Resource Manager/HOC/WithResources";

class Sprite extends React.Component {
  constructor(props) {
    super(props);
    let { height, width, n, scale } = this.props;

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
          this.props.resourceManager.getImage(this.props.imagesource) +
          ") left center",
        backgroundSize: "cover",
        animation: "play 0.5s steps(" + n + ") infinite",
        backgroundSize: "cover"
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

export default WithResources(Sprite);
