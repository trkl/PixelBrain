import WorldContext from "./WorldContext";
import React, { Component } from "react";
import World from "./../World";

export default class WorldContextProvider extends Component {
  worldInstance;
  constructor(props) {
    super(props);
    this.worldInstance = <World />;
  }

  render = () => (
    <WorldContext.Provider value={this.worldInstance.registerComponent}>
      {this.props.children}
    </WorldContext.Provider>
  );
}
