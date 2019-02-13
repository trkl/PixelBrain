import React from "react";
import WorldContextConsumer from "./../Context/WorldContextConsumer";

const WithWorld = WrappedComponent => props => (
  <WorldContextConsumer>
    {world => (
      <WrappedComponent {...props} World={world}>
        {props.children}
      </WrappedComponent>
    )}
  </WorldContextConsumer>
);

export default WithWorld;
