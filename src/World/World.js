import React from "react";
import ReactDOM from "react-dom";

import WithKeyboardSubscribe from "../InputManager/HOC/WithKeyboardSubscribe";
import Timer from "../Timer/Timer";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";

import EventManager from "../EventManager/EventManager";
import Camera from "./../Camera/Camera";
import WorldContextProvider from "./Context/WorldContextProvider";
import Game from "./../Resources/Games/FlappyBird/Game";
import HUDManager from "../HUD/HUDManager";



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
    ReactDOM.unstable_batchedUpdates(() => {
      this.components.forEach(component => component.update());
      this.setState({});
    });
  };

  componentWillMount() {}

  shouldComponentUpdate() {
    return false;
  }

  render = () => (
    <WorldContextProvider>
<<<<<<< HEAD
      { <BackgroundManager /> }
      <Bird
        cameraFollows={true}
        force={new Vector([30, 0])}
        position={new Vector([5, 30])}
        gravity={3}
        weight={20}
        controller={true}
        
      />
      
      <PipePool position={new Vector([40, 0])} />
=======
      <Game />

>>>>>>> 22c022a4d475312b5fce69406f38f597aa121432
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
