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
    Timer.instance.subscribe(CollisionManger.instance.handleCollisions);
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

  render = () => (
    <>
      <Bird position={new Vector([0, 0])} />
    </>
  );
}

export default WithKeyboardSubscribe(World);
