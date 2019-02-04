import React, { Component } from "react";

function randomIntFromInterval(min, max) {
  // min and max included
  return (Math.random() * (max - min + 1) + min) | 0;
}

export default class Canvas extends Component {
  state = { x: 0, y: 0, r: 0 };

  componentDidMount() {
    document.getElementsByTagName("circle")[0].addEventListener("keydown");
  }
  randomPos = () => {
    const radius = Math.floor(
      randomIntFromInterval(
        0,
        Math.min(window.innerHeight, window.innerWidth) / 2
      )
    );
    this.setState({
      x: randomIntFromInterval(radius, window.innerWidth - radius),
      y: randomIntFromInterval(radius, window.innerHeight - radius),
      r: radius
    });
  };
  render = () => {
    return (
      <svg width={window.innerWidth} height={window.innerHeight}>
        <circle
          fill={
            "rgb(" +
            randomIntFromInterval(0, 255) +
            "," +
            randomIntFromInterval(0, 255) +
            "," +
            randomIntFromInterval(0, 255) +
            ")"
          }
          cx={this.state.x}
          cy={this.state.y}
          r={this.state.r}
        />
      </svg>
    );
  };
}
