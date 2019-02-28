import React from "react";
import WorldContext from "./WorldContext";

const WorldContextConsumer = props => (
  <WorldContext.Consumer>
    {world => props.children(world)}
  </WorldContext.Consumer>
);

export default WorldContextConsumer;
