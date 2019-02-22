import React from "react";
import DecInc from "./../GameObject/DecInc";
import GameObject from "../GameObject/GameObjectBase/GameObject";
import Camera from "../Camera/Camera";
import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";

class World extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: "" };
    this.camera = new Camera();
    import("../logo.svg").then(url => this.setState({ url: url.default }));

    this.gameObjects = [
      new GameObject({
        force: new Vector([10, 0]),
        weight: 15,
        gravity: 1,
        drag: 0.25,
        elementType: DecInc,
        cameraFollows: true
      }),
      new GameObject({
        force: new Vector([0, 0]),
        weight: 20,
        gravity: 1,
        elementType: DecInc,
        drag: 0.5,
        position: new Vector([30, 0])
      })
    ];
  }

  ComponentWillUpdate() {}

  componentWillMount() {
    const gameObj = this.gameObjects[1];
    const { keyboardSubscribe } = this.props;
    keyboardSubscribe(this.gameObjects[0], " ", {
      callback: () => {
        this.camera.moveCamera(new Vector([0, 0]), this.gameObjects);
        this.setState({});
      }
    });
    keyboardSubscribe(gameObj, "a", {
      physics: { force: new Vector([-10, 0]), duration: 1000 }
    });
    keyboardSubscribe(gameObj, "d", {
      physics: { force: new Vector([10, 0]), duration: 2000 }
    });
    keyboardSubscribe(gameObj, "w", {
      physics: { force: new Vector([0, -10000]), duration: 1 }
    });
    keyboardSubscribe(gameObj, "s", {
      physics: { force: new Vector([0, 1000]), duration: 1000 }
    });
    Timer.instance.subscribeToTime(
      () => console.log("5 sekonds elapsed"),
      5000
    );
    Timer.instance.subscribe(dt =>
      this.gameObjects.forEach(val => {
        PhysicsEngine.instance.processGameObject({ gameObject: val }, dt);
      })
    );
    Timer.instance.subscribe(() => this.setState({}));
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
