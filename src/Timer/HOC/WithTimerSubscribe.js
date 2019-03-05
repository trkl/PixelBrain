import React from "react";
import TimerContextConsumer from "../Context/TimerContextConsumer";

const WithTimerSubcribe = WrappedComponent => props => (
  <TimerContextConsumer>
    {subscribe => (
      <WrappedComponent {...props} timerSubscribe={subscribe}>
        {props.children}
      </WrappedComponent>
    )}
  </TimerContextConsumer>
);

export default WithTimerSubcribe;
