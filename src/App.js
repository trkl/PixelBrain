import React, { Component } from "react";
//import Game from './Game'
import "./App.css";
//import ResourceManager from './Resource Manager/Resource Manager';
import Background from "./Background";
import ResourceManagerProvider from "./Resource Manager/ResourceManagerContextProvider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "Flappy Bird",
      img: null
    };
  }
    
  render() {
    return (
      <div className="App">
        <div>
          {" "}
          <ResourceManagerProvider>
            <Background
              imagesource={"GrassForeground.png"}
              speed={-2.5}
              zindex={3}
            />
            <Background imagesource={"kalsoy.png"} speed={-0.2} zindex={2} />
            <Background imagesource={"Clouds.png"} speed={-0.6} zindex={1} />
            <Background
              imagesource={"Background.png"}
              speed={-0.2}
              zindex={0}
            />
          </ResourceManagerProvider>
        </div>
      </div>
    );
  }
}
export default App;
