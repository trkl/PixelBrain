import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import Event from "../Events/Event";
import CollisionManger from "../CollisionManager/CollisionManager";
import Timer from "../Timer/Timer";

export default class EventManager {
  eventQueue: any = [];
  physicsEngine: PhysicsEngine;
  collisionManager: CollisionManger;
  timer: Timer;

  // // audioManager: AudioManager;

  constructor(
    physicsEngine: PhysicsEngine,
    collisionManager: CollisionManger // // audioManager: AudioManager
  ) {
    this.timer = new Timer(1 / 15);
    this.timer.subscribe(this.handleTick);
    this.physicsEngine = physicsEngine;
    this.collisionManager = collisionManager;
    // // this.audioManager = audioManager;
  }

  registerEvent = (event: any) => {
    this.eventQueue.push(event);
  };

  handleTick = () => {
    let event;
    while ((event = this.eventQueue.pop())) {
      const { callback, physics, sound, gameObject } = event;
      // this.physicsEngine.processGameObject(gameObject, event);
      callback();
      //  this.collisionManager.processGameObject(
      //    gameObject
      //  );
      // this.audioManager.playSound(sound);
    }
  };
}
