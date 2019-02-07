import React, { Component } from "react";
import "./App.css";
import ResourceManager from "./Resource Manager/Resource Manager";
import Background from "./Background";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ResourceManager: new ResourceManager()
    };
  }

  findImage = index => {
    return (
      <img
        src={require(`${this.state.ResourceManager.getImagePaths(index)}`)}
        alt="searched"
      />
    );
  };

  findSVG = index => {
    return this.state.ResourceManager.getSvgs(index);
  };

  render() {
    return (
      <div className="App">
        <div>
          <Background />
        </div>
        {}
        <div>{/* {this.findSVG(0)} */}</div>
      </div>
    );
  }
}

export default App;
