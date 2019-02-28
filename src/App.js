import React, { Component } from "react";
<<<<<<< HEAD
=======
import "./App.css";
import WorldContextProvider from "./World/Context/WorldContextProvider"
import World from "./World/World";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";

>>>>>>> dev
import "./App.css";

import WorldContextProvider from "./World/Context/WorldContextProvider";
import World from "./World/World";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";

class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <WorldContextProvider>
        <KeyboardObservableProvider>
          <World />
        </KeyboardObservableProvider>
=======
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
>>>>>>> dev
      </WorldContextProvider>
      // <KeyboardObservableProvider>
      //   <World camera={new Camera()} />
      // </KeyboardObservableProvider>
    );
  }
  componentDidMount() { }
}
export default App;
