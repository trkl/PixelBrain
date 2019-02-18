import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import Event from "../Events/Event";
import CollisionManger from "../CollisionManager/CollisionManager";
import Timer from "../Timer/Timer";
import AudioManager from "../AudioManager/AudioManager";

export default class EventManager {
  eventQueue: any = [];
  physicsEngine: PhysicsEngine;
  collisionManager: CollisionManger;
  timer: Timer;
  audioManager: AudioManager;

  constructor(
    physicsEngine: PhysicsEngine,
    collisionManager: CollisionManger, // // audioManager: AudioManager
    audioManager: AudioManager
    ) {
    this.timer = new Timer(1 / 15);
    this.timer.subscribe(this.handleTick);
    this.physicsEngine = physicsEngine;
    this.collisionManager = collisionManager;
    this.audioManager = audioManager;
  }

  registerEvent = (event:Event) => 
    this.eventQueue.push(event);
 

  handleTick = () => {
    let event;
    while ((event = this.eventQueue.pop())) {
<<<<<<< HEAD
      console.log(event)
      const { callback, physics, audio, gameObject } = event;
      // this.physicsEngine.processGameObject(gameObject, event);
=======
      const { callback, physics, audio, gameObject } = event;
      this.physicsEngine.processGameObject(gameObject, event);
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
      callback();
      //  this.collisionManager.processGameObject(
      //    gameObject
      //  );
<<<<<<< HEAD
      console.log(audio.soundTrack)
=======
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
      this.audioManager.playSound(audio.soundTrack);
    }
  };
}
