import React from "react";
import KeyboardObservableContextConsumer from "../Context/KeyboardObservableContextConsumer";

const WithKeyboardSubscribe = WrappedComponent => props => (
  <KeyboardObservableContextConsumer>
    {subscribe => (
      <WrappedComponent {...props} keyboardSubscribe={subscribe}>
        {props.children}
      </WrappedComponent>
    )}
  </KeyboardObservableContextConsumer>
);

export default WithKeyboardSubscribe;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.random() * (max - min + 1) + min || 0;
}
