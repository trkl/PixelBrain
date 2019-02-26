import React from "react";

import Vector from "../Vector/Vector";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";
import Bird from "../GameObject/Bird";

class World extends React.Component {
  constructor(props) {
    super(props);

    this.components = [];

    this.rigidBodies = [];

    // this.gameObjects = [
    //   new GameObject({
    //     force: new Vector([0, 0]),
    //     weight: 15,
    //     gravity: 1,
    //     drag: 1,
    //     elementType: props => (
    //       <div
    //         style={{
    //           top: props.position.y + "%",
    //           left: props.position.x + "%",
    //           position: "absolute"
    //         }}
    //       >
    //         <h1>{props.fps}</h1>
    //       </div>
    //     ),
    //     cameraFollows: true,
    //     fps: 0,
    //     hitBox: new Vector([10, 10])
    //   }),
    //   new GameObject({
    //     force: new Vector(),
    //     weight: 20,
    //     gravity: 0,
    //     elementType: DecInc,
    //     drag: 1,
    //     position: new Vector([30, 30]),
    //     hitBox: new Vector([10, 10])
    //   })
    // ];
    // this.camera = new Camera(this.gameObjects[1]);
  }

  registerComponent = component => {
    this.components.push(component);
  };

  updateWorld = () => {
    this.components.forEach(component => component.update());
    this.setState({});
  };

  componentWillMount() {
    Timer.instance.subscribe(PhysicsEngine.instance.processRigidBodies);
    Timer.instance.subscribe(this.updateWorld);
    // Timer.instance.subscribe(
    //   CollisionManger.instance.withObjects(this.gameObjects).handleCollisions
    // );
    // Timer.instance.subscribe(dt => {
    //   this.camera.moveCamera(dt, this.gameObjects);
    // });
    // Timer.instance.subscribe(
    //   dt => (this.gameObjects[0].fps = Math.round(1000 / dt))
    // );
    // Timer.instance.subscribe(() => {
    //   this.setState({});
    // });
  }

  render = () => <Bird />;
}

export default WithKeyboardSubscribe(World);
