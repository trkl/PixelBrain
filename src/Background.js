import React, { Component } from "react";
import WithResources from "./Resource Manager/HOC/WithResources";
import Timer from "./Timer/Timer";
class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: props.speed,
      counter: 0,
      imagesource: "",
      styleImg: {
        height: "100vh",
        width: "100vw",
        backgroundPosition: "300px",
        backgroundImage:
          "url(" + props.resourceManager.getImage(props.imagesource),
        backgroundRepeat: "repeat-x",
        position: "absolute",
        zIndex: props.zindex
      },
      ResourceManager: props.ResourceManager
    };
  }

  componentDidMount() {
    Timer.instance.subscribe(this.gameLoop);
  }

  gameLoop = dt => {
    this.setState({
      counter: dt + this.state.speed,
      styleImg: {
        ...this.state.styleImg,
        backgroundPosition: this.state.counter
      }
    });
  };

  render() {
    return <div style={this.state.styleImg} />;
  }
}
export default WithResources(Background);
