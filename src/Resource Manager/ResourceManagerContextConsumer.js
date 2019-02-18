import ResourceManagerContext from "./ResourceManagerContext";
import React from "react";

const ResourceManagerContextConsumer = props => (
  <ResourceManagerContext.Consumer>
    {resourcecemanager => props.children(resourcecemanager)}
  </ResourceManagerContext.Consumer>
);
export default ResourceManagerContextConsumer;