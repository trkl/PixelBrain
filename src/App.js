import React, { Component } from "react";
import DecInc from "./GameObject/DecInc";

import "./App.css";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
class App extends Component {
  render() {
    return (
      <KeyboardObservableProvider>
        <DecInc />
      </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}

export default App;
