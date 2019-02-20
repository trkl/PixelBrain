import ReactDom from "react-dom";

export default class Camera {
  // moving objects on screen to simulate camera movement

  moveCamera(distance, gameObjects) {
    gameObjects.forEach(
      (val, idx) =>
        (gameObjects[idx].position = gameObjects[idx].position.minus(distance))
    );

    // ReactDom.unstable_batchedUpdates(() => {
    //   gameObjects.forEach(element => {
    //     console.log(element.ref);
    //   });
    //   //   for (let i = 0; i < gameObjects.length; ++i) {
    //     console.log(gameObjects[i]);
    //     // console.log(gameObjects);
    //     // gameObjects[i].position = gameObjects[i].position.minus(distance);
    //     // gameObjects[i].updateState();
    //   }
    // });
  }
  //TODO: hook background movement into this.
}
