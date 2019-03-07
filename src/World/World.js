import React from "react";
import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";

import EventManager from "../EventManager/EventManager";

import Camera from "./../Camera/Camera";
import WorldContextProvider from "./Context/WorldContextProvider";

import Game from "./../Resources/Games/SheepRunner/Game";

Array.prototype.filterInPlace = function(predicate) {
  for (let i = 0; i < this.length; ++i) {
    if (predicate(this[i])) {
      this[this.length - 1] = this[i];
      this.pop();
    }
  }
};

class World extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.components = [];
    WorldContextProvider.WorldInstance = this;
  }

  registerComponent = component => {
    if (this.camera === null && component.props.cameraFollows) {
      this.camera = new Camera(component);
    }
    this.components.push(component);
  };

  unregisterComponent = component => {
    this.components.filterInPlace(aComponent => aComponent !== component);
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

  beforeFrameRender = () => {
    this.components.forEach(component => {
      component.beforeFrameRender && component.beforeFrameRender();
    });
  };

  componentDidMount() {
    Timer.instance.subscribe(EventManager.instance.handleTick);
    Timer.instance.subscribe(PhysicsEngine.instance.processRigidBodies);
    Timer.instance.subscribe(CollisionManger.instance.handleCollisions);
    Timer.instance.subscribe(dt => this.camera.moveCamera(dt, this.components));
    Timer.instance.subscribe(this.beforeFrameRender);
    Timer.instance.subscribe(this.updateWorld);
  }
}

export default WithKeyboardSubscribe(World);
