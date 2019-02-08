import ResourceManagerContext from "./ResourceManagerContext";
import React from "react";
import ResourceManager from "./Resource Manager";

export default class ResourceManagerProvider extends React.Component {
  ResourceManager;
  constructor() {
    super();
    this.ResourceManager = new ResourceManager();
  }
  render = () => (
    <ResourceManagerContext.Provider value={this.ResourceManager}>
      {this.props.children}
    </ResourceManagerContext.Provider>
  );
}