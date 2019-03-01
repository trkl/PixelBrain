import WorldContext from "./WorldContext";
import React, { Component } from "react";

export default class WorldContextProvider extends Component {
  static WorldInstance;

  render = () => (
    <WorldContext.Provider value={WorldContextProvider.WorldInstance}>
      {this.props.children}
    </WorldContext.Provider>
  );
}
