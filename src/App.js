import React, { Component } from "react";
import "./App.css";
import WorldContextProvider from "./World/Context/WorldContextProvider"
import World from "./World/World";
import ResourceManagerContextProvider from "./Resource Manager/ResourceManagerContextProvider";

class App extends Component {
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
