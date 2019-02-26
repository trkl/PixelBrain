import React, { Component } from "react";
<<<<<<< HEAD
import "./App.css";
import WorldContextProvider from "./World/Context/WorldContextProvider"
import World from "./World/World";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";
=======
import DecInc from "./GameObject/DecInc";
>>>>>>> dev

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
<<<<<<< HEAD
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
=======
      <KeyboardObservableProvider>
        <DecInc />
      </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
>>>>>>> dev
}

export default App;
