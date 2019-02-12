import TimerContext from "./TimerContext";
import React from "react";
import Timer from "./../Timer";

export default class TimerContextProvider extends React.Component {
  observable;
  constructor(interval = 1 / 15) {
    super();
    this.observable = new Timer(interval);
  }
  render = () => (
    <TimerContext.Provider value={this.observable.subscribe}>
      {this.props.children}
    </TimerContext.Provider>
  );
}
