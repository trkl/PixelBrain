import React from "react";
import GameObject from "./GameObjectBase/GameObject";
import WithKeyboardSubscribe from "./../InputManager/HOC/WithKeyboardSubscribe";

export class DecInc extends GameObject {
  state = { number: 100 };
  componentWillMount() {
    this.props.keyboardSubscribe(this, "i", () =>
      this.setState({ number: this.state.number + 1 })
    );
    this.props.keyboardSubscribe(this, "d", () =>
      this.setState({ number: this.state.number - 1 })
    );
  }
  render = () => {
    console.log("hey");
    return <div>{this.state.number}</div>;
  };
}

export default WithKeyboardSubscribe(DecInc);
