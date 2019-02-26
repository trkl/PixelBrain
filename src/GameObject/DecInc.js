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

export default WithKeyboardSubscribe(DecInc);
