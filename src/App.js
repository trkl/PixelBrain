import React, { Component } from "react";
import "./App.css";

import World from "./World/World";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";
import HUDManager from "./HUD/HUDManager";

class App extends Component {
  render() {
    return (
      <KeyboardObservableProvider>
        <ResourceManagerContextProvider>
        <HUDManager font="pixel.ttf" fontFamily="Pixel" textAlign="center" position="absolute" top="20px" fontSize="50"/>
          <World />
        </ResourceManagerContextProvider>
      </KeyboardObservableProvider>
      // <KeyboardObservableProvider>
      //   <World camera={new Camera()} />
      // </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}
export default App;
