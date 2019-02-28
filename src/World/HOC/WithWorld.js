import React from "react";
import WorldContextConsumer from "./../Context/WorldContextConsumer";

const WithWorld = WrappedComponent => props => (
  <WorldContextConsumer>
    {world => (
      <WrappedComponent {...props} world={world}>
        {props.children}
      </WrappedComponent>
    )}
  </WorldContextConsumer>
);

export default WithWorld;
