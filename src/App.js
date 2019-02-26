import React, { Component } from "react";
import "./App.css";

import WorldContextProvider from "./World/Context/WorldContextProvider";
import Bird from "./GameObject/Bird";
import World from "./World/World";

class App extends Component {
  render() {
    return (
      <WorldContextProvider>
        <World />
      </WorldContextProvider>
      // <KeyboardObservableProvider>
      //   <World camera={new Camera()} />
      // </KeyboardObservableProvider>
    );
  }
  componentDidMount() {}
}

export default App;
