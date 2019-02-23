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

    import("../logo.svg").then(url => this.setState({ url: url.default }));

    this.gameObjects = [
      new GameObject({
        force: new Vector([0, 0]),
        weight: 15,
        gravity: 1,
        drag: 1,
        elementType: DecInc,
        cameraFollows: true
      }),
      new GameObject({
        force: new Vector(),
        weight: 20,
        gravity: 0,
        elementType: DecInc,
        drag: 1,
        position: new Vector([30, 30])
      })
    ];
    this.camera = new Camera(this.gameObjects[1]);
  }

  ComponentWillUpdate() {}

  componentWillMount() {
    const gameObj = this.gameObjects[1];
    const { keyboardSubscribe } = this.props;

    keyboardSubscribe(gameObj, "a", {
      physics: { force: new Vector([-1000, 0]), duration: 1000 }
    });
    keyboardSubscribe(gameObj, "d", {
      physics: { force: new Vector([1000, 0]), duration: 1000 }
    });
    keyboardSubscribe(gameObj, "w", {
      physics: { force: new Vector([0, -1000]), duration: 1000 }
    });
    keyboardSubscribe(gameObj, "s", {
      physics: { force: new Vector([0, 1000]), duration: 1000 }
    });

    Timer.instance.subscribe(dt => {
      this.gameObjects.forEach(val => {
        PhysicsEngine.instance.processGameObject(val, dt);
      });
    });
    Timer.instance.subscribe(dt => {
      console.log(gameObj.velocity);
      this.camera.moveCamera(dt, this.gameObjects);
    });
    Timer.instance.subscribe(() => {
      this.setState({});
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
