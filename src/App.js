import React, { Component } from "react";
import "./App.css";

import World from "./World/World";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";

class App extends Component {
  render() {
    return (
      <KeyboardObservableProvider>
        <ResourceManagerContextProvider>
         
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
