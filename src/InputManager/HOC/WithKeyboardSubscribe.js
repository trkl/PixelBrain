import React from "react";
import KeyboardObservableContextConsumer from "../Context/KeyboardObservableContextConsumer";

const WithKeyboardSubscribe = WrappedComponent => props => (
  <KeyboardObservableContextConsumer>
    {subscribe => (
      <WrappedComponent {...props} keyboardSubscribe={subscribe}>
<<<<<<< HEAD
        {props ? props.children : []}
=======
        {props.children}
>>>>>>> dev
      </WrappedComponent>
    )}
  </KeyboardObservableContextConsumer>
);

export default WithKeyboardSubscribe;
