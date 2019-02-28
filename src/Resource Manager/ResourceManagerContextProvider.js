import ResourceManagerContext from "./ResourceManagerContext";
import React from "react";
import ResourceManager from "./Resource Manager";

export default class ResourceManagerContextProvider extends React.Component {
  ResourceManager;
  constructor() {
    super();
    this.ResourceManager = new ResourceManager("Flappy Bird");
  }
  render = () => (
    <ResourceManagerContext.Provider value={this.ResourceManager}>
      {this.props.children}
    </ResourceManagerContext.Provider>
  );
}