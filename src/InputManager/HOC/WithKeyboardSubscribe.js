import React from "react";
import KeyboardObservableContextConsumer from "../Context/KeyboardObservableContextConsumer";

const WithKeyboardSubscribe = WrappedComponent => props => (
  <KeyboardObservableContextConsumer>
    {subscribe => (
      <WrappedComponent {...props} keyboardSubscribe={subscribe}>
        {props ? props.children : []}
      </WrappedComponent>
    )}
  </KeyboardObservableContextConsumer>
);

export default WithKeyboardSubscribe;
