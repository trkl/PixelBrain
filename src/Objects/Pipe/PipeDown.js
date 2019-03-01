import React, { Component } from "react";
import WithResources from "../../Resource Manager/HOC/WithResources";
import "./PipeDown.css";

class PipeDown extends Component {
  render() {
    return (
      <img
        alt="PipeDown"
        src={this.props.resourceManager.getImage("pipeDown.png")}
        style={{ height: this.props.up + "vh", width: "50px" }}
      />
    );
  }
}

export default WithResources(PipeDown);
