import React, { Component } from "react";
import "./App.css";
import WorldContextProvider from "./World/Context/WorldContextProvider"
import World from "./World/World";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";

import "./App.css";
import KeyboardObservable from "./InputManager/KeyboardObservable";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
class App extends Component {
  decInc = new DecInc();
  constructor() {
    super();
    this.keyboardObservable = new KeyboardObservable();
  }
  render() {
    return (
      <WorldContextProvider>
        <ResourceManagerContextProvider>
          <World />
        </ResourceManagerContextProvider>
      </WorldContextProvider>
      // <KeyboardObservableProvider>
      //   <World camera={new Camera()} />
      // </KeyboardObservableProvider>
    );
  }
  componentDidMount() { }
}

export default App;
