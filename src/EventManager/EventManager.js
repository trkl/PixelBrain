export default class EventManager {
  eventQueue = [];
  physicsEngine;
  collissionManager;
  audioManager;

  registerEvent(event) {
    this.eventQueue.push(event);
  }
  handleTick() {
    let event;
    while ((event = this.eventQueue.pop())) {
      const { sound, gameObject } = event;
      this.physicsEngine.processGameObject(gameObject);
      this.collisionManager.processGameObject(gameObject);
      this.audioManager.emit(sound);
    }
  }
}
