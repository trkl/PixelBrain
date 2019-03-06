import React, { Component } from "react";
import {WithResources} from "../Resource Manager/HOC/WithResources";
import Background from "./Background";
import ResourceManagerContextProvider from "../Resource Manager/ResourceManagerContextProvider";

class BackgroundManager extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <ResourceManagerContextProvider>
          <Background imagesource="GrassForeground.png" speed={-1} zindex={1} />
          <Background imagesource="kalsoy.png" speed={-0.2} zindex={-1} />
          <Background imagesource="Clouds.png" speed={-0.6} zindex={-2} />
          <Background imagesource="Background.png" speed={-0.2} zindex={-3} />
        </ResourceManagerContextProvider>
      </div>
    );
  }
}
export default WithResources(BackgroundManager);
