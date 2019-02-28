import React from "react";

import EventManager from "./../EventManager/EventManager";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
// import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";
import ResourceManagerContextProvider from "../Resource Manager/ResourceManagerContextProvider";
import Bird from "../Objects/Bird/Bird";
import BackgroundManager from "../BackgroundManager/BackgroundManager";
import PipesManager from "../Objects/Pipe/PipeManager";

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

  // componentWillMount() {
  //   // console.log(PhysicsEngine.instance);
  //   // Timer.instance.subscribe(EventManager.instance.handleTick);
  //   // // Timer.instance.subscribe(PhysicsEngine.instance.processRigidBodies);
  //   // Timer.instance.subscribe(this.updateWorld);
  //   // Timer.instance.subscribe(CollisionManger.instance.handleCollisions);
  // }

  render = () => (
    <ResourceManagerContextProvider>
      <BackgroundManager />
      <Bird />
      <PipesManager />
    </ResourceManagerContextProvider>
  );
}

export default WithKeyboardSubscribe(World);
