import React, { Component } from "react";
import "./App.css";

import WorldContextProvider from "./World/Context/WorldContextProvider";
import World from "./World/World";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";

class App extends Component {
  render() {
    return (
      <WorldContextProvider>
        <KeyboardObservableProvider>
          <World />
        </KeyboardObservableProvider>
      </WorldContextProvider>
      // <KeyboardObservableProvider>
      //   <World camera={new Camera()} />
      // </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}
export default App;
