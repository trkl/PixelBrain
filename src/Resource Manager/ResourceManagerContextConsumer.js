import ResourceManagerContext from "./ResourceManagerContext";
import React from "react";

const ResourceManagerContextConsumer = props => (
  <ResourceManagerContext.Consumer>
    {resourcemanager => props.children(resourcemanager)}
  </ResourceManagerContext.Consumer>
);
export default ResourceManagerContextConsumer;