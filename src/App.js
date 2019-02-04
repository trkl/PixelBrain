import React, { Component } from "react";
import DecInc from "./GameObject/DecInc";

import "./App.css";
import KeyboardObservable from "./InputManager/KeyboardObservable";
class App extends Component {
  decInc = new DecInc();
  constructor() {
    super();
    this.keyboardObservable = new KeyboardObservable();
  }
  render() {
    return <DecInc keyboardObservable={this.keyboardObservable} />;
  }
  componentDidMount() {
    console.log("hello");
    this.keyboardObservable.init();
    this.keyboardObservable.subscribe(this.decInc, " ", this.decInc);
  }
}

export default App;
