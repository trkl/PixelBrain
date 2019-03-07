import Vector from "../Vector/Vector";

export default class Camera {
  // moving objects on screen to simulate camera movement

  constructor(rigidBody) {
    this.protagonist = rigidBody;
  }

  moveCamera(time, gameObjects) {
    const distance = this.protagonist.rigidBody.velocity.multiply(time / 1000);
    gameObjects.forEach((val, idx) => {
      gameObjects[idx].position = new Vector([
        gameObjects[idx].position.x - distance.x,
        gameObjects[idx].position.y
      ]);
    });
  }
}
