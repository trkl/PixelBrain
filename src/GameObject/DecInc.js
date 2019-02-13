import React from "react";
import GameObject from "./GameObjectBase/GameObject";
import Logo from "./../logo.svg";
import WithKeyboardSubscribe from "./../InputManager/HOC/WithKeyboardSubscribe";

export class DecInc extends GameObject {
  state = { number: 100 };
  componentWillMount() {}

  componentDidMount() {
    // this.props.keyboardSubscribe(this, " ", {
    //   callback: () => console.log("millumrúm var sligið")
    // });
  }

  render = () => {
    return (
      <object id="hey" type="image/svg+xml" data={Logo} className="logo">
        Kiwi Logo
      </object>
    );
  };
}

export default WithKeyboardSubscribe(DecInc);
