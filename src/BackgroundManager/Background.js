import React, { Component } from "react";
import { WithResources } from "../Resource Manager/HOC/WithResources";
import Timer from "./../Timer/Timer";
class Background extends Component {
  constructor(props) {
    super(props);

    Timer.instance.subscribe(() => {
      //   this.second = !this.second;
      //   if (this.second)
      this.gameLoop();
    });

    this.state = {
      speed: props.speed,
      counter: 0,
      imagesource: "",
      styleImg: {
        height: "100%",
        width: "100%",
        backgroundImage:
          "url(" + props.resourceManager.getImage(props.imagesource),
        backgroundRepeat: "repeat-x",
        position: "absolute",
        zIndex: props.zindex,
        overflow: "hidden"
      }
    };
  }

  second = false;
  componentDidMount() {
    Timer.instance.subscribe(() => {
      //   this.second = !this.second;
      //   if (this.second)
      this.gameLoop();
    });
  }

  gameLoop = () => {
    this.setState({
      counter: this.state.counter + this.state.speed,
      styleImg: {
        ...this.state.styleImg,
        backgroundPosition: this.state.counter
        // backgroundPosition: this.state.counter
      }
    });
  };

  render() {
    return <div style={this.state.styleImg} />;
  }
}
export default WithResources(Background);
