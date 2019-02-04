import React from "react";
import GameObject from "./GameObjectBase/GameObject";

export default class DecInc extends GameObject {
  state = { number: 100 };
  componentWillMount() {
    this.props.keyboardObservable.subscribe(this, "i", () =>
      this.setState({ number: this.state.number + 1 })
    );
    this.props.keyboardObservable.subscribe(this, "d", () =>
      this.setState({ number: this.state.number - 1 })
    );
  }
  render = () => <div>{this.state.number}</div>;
}
