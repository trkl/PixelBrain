<<<<<<< HEAD
import React, { Component } from "react";
import GameObject from "./GameObjectBase/GameObject";
import Logo from "./../logo.svg";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";

export class DecInc extends React.Component {
  hey = () => console.log("hey");

  render = () => (
    <img
      style={{
        position: "absolute",
        left: this.props.position.x + "%",
        top: this.props.position.y + "%"
      }}
      src={Logo}
      alt=""
    />
  );
}

DecInc.propTypes = GameObject.propTypes;
DecInc.defaultProps = GameObject.defaultProps;

=======
import React from "react";
import GameObject from "./GameObjectBase/GameObject";
import Logo from "./../logo.svg";
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

  componentDidMount() {
    this.props.keyboardSubscribe(this, " ", () =>
      console.log("millumrúm var sligið")
    );
  }
  render = () => {
    return (
      <object id="hey" type="image/svg+xml" data={Logo} className="logo">
        Kiwi Logo
      </object>
    );
  };
}

>>>>>>> dev
export default WithKeyboardSubscribe(DecInc);
