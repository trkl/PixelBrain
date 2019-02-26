import React from "react";
import TimerContextConsumer from "../Context/TimerContextConsumer";

const WithKeyboardSubscribe = WrappedComponent => props => (
  <TimerContextConsumer>
    {subscribe => (
      <WrappedComponent {...props} timerSubscribe={subscribe}>
        {props.children}
      </WrappedComponent>
    )}
  </TimerContextConsumer>
);

export default WithKeyboardSubscribe;
