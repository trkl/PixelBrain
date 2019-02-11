import React, { Component } from "react";
import DecInc from "./GameObject/DecInc";

import "./App.css";
import KeyboardObservable from "./InputManager/KeyboardObservable";
import KeyboardObservableProvider from "./InputManager/Context/KeyboardObservableContextProvider";
class App extends Component {
  constructor() {
    super();
    this.keyboardObservable = new KeyboardObservable();
  }
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
