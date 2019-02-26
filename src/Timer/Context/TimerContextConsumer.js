import TimerContext from "./TimerContext";
import React from "react";

const KeyboardObservableContextConsumer = props => (
  <TimerContext.Consumer>
    {subscribe => props.children(subscribe)}
  </TimerContext.Consumer>
);

export default KeyboardObservableContextConsumer;
