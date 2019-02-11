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
    console.log("shitty")
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
      console.log(event)
      const { callback, physics, audio, gameObject } = event;
      // this.physicsEngine.processGameObject(gameObject, event);
      callback();
      //  this.collisionManager.processGameObject(
      //    gameObject
      //  );
      console.log(audio.soundTrack)
      this.audioManager.playSound(audio.soundTrack);
    }
  };
}
