import React, { Component } from "react";
import World from "./World/World";
import "./App.css";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
import Camera from "./Camera/Camera";
import { DecInc } from "./GameObject/DecInc";

class App extends Component {
  render() {
    return (
      <KeyboardObservableProvider>
        <World camera={new Camera()} />
      </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}

export default App;
