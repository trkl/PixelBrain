import React, { Component } from "react";
import World from "./World/World";
import "./App.css";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";

class App extends Component {
  render() {
    return (
      <KeyboardObservableProvider>
        <World />
      </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}

export default App;
