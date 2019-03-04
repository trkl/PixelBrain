import React from "react";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";

import EventManager from "../EventManager/EventManager";

import Camera from "./../Camera/Camera";
import WorldContextProvider from "./Context/WorldContextProvider";

import Game from "./../Resources/Games/FlappyBird/Game";

class World extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.components = [];
    WorldContextProvider.WorldInstance = this;
  }

  registerComponent = component => {
    if (this.camera === null && component.cameraFollows) {
      this.camera = new Camera(component.rigidBody);
      this.startCamera();
    }
    this.components.push(component);
  };

  unregisterComponent = component => {
    console.log(this.components.length);
    this.components.filterInPlace(aComponent => aComponent !== component);
    console.log(this.components.length);
  };

  updateWorld = () => {
    this.components.forEach(component => component.update());
    this.setState({});
  };

  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <WorldContextProvider>
      <Game />
    </WorldContextProvider>
  );

  startCamera = () => {
    Timer.instance.subscribe(dt => this.camera.moveCamera(dt, this.components));
  };

  beforeFrameRender = () => {
    this.components.forEach(component => {
      let parent;

      component.props.parent && (parent = component.props.parent);
      parent.beforeFrameRender && parent.beforeFrameRender();
    });
  };

  componentDidMount() {
    Timer.instance.subscribe(EventManager.instance.handleTick);
    Timer.instance.subscribe(PhysicsEngine.instance.processRigidBodies);
    Timer.instance.subscribe(CollisionManger.instance.handleCollisions);
    Timer.instance.subscribe(this.beforeFrameRender);
    Timer.instance.subscribe(this.updateWorld);
  }
}

export default WithKeyboardSubscribe(World);
