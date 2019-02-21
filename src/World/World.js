import React from "react";
import DecInc from "./../GameObject/DecInc";
import GameObject from "../GameObject/GameObjectBase/GameObject";
import Camera from "../Camera/Camera";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";

class World extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: "" };
    this.camera = new Camera();
    import("../logo.svg").then(url => this.setState({ url: url.default }));
    this.gameObjects = [
      new GameObject({
        forces: [new Vector([0, 0])],
        weight: 30,
        elementType: DecInc
      })
    ];
    this.props.keyboardSubscribe(this.gameObjects[0], "j", {
      force: new Vector([0, 0])
    });
  }

  ComponentWillUpdate() {}

  componentWillMount() {
    this.props.keyboardSubscribe(this.gameObjects[0], " ", {
      callback: () => {
        this.camera.moveCamera(new Vector([0, 0]), this.gameObjects);
        this.setState({});
      }
    });
  }

  render = () => {
    return this.gameObjects.map((object, key) =>
      React.createElement(object.elementType, {
        ...object,
        gameObject: object,
        key: key
      })
    );
  };
}

export default WithKeyboardSubscribe(World);
