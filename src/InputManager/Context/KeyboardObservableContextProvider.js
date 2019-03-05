import KeyboardObservableContext from "./KeyboardObservableContext";
import React from "react";
import KeyboardObservable from "../KeyboardObservable";

export default class KeyboardObservableProvider extends React.Component {
  observable;
  constructor() {
    super();
    this.observable = new KeyboardObservable();
  }
  render = () => (
    <KeyboardObservableContext.Provider value={this.observable.subscribe}>
      {this.props.children}
    </KeyboardObservableContext.Provider>
  );
}
