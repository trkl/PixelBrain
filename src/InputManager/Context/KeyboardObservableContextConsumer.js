import KeyboardObservableContext from "./KeyboardObservableContext";
import React from "react";

const KeyboardObservableContextConsumer = props => (
  <KeyboardObservableContext.Consumer>
    {subscribe => props.children(subscribe)}
  </KeyboardObservableContext.Consumer>
);

export default KeyboardObservableContextConsumer;
