import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import Event from "../Events/Event";
import CollisionManger from "../CollisionManager/CollisionManager";
import Timer from "../Timer/Timer";

export default class EventManager {
  eventQueue: Event[] = [];
  physicsEngine: PhysicsEngine;
  collisionManager: CollisionManger;

  private static _instance: undefined | EventManager = undefined;
  public static get instance() {
    if (EventManager._instance === undefined) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  // // audioManager: AudioManager;

  private constructor(
    physicsEngine = PhysicsEngine.instance,
    collisionManager = new CollisionManger() // // audioManager: AudioManager
  ) {
    Timer.instance.subscribe(this.handleTick);
    this.physicsEngine = physicsEngine;
    this.collisionManager = collisionManager;
    // this.audioManager = audioManager;
  }

  public registerEvent = (event: Event) => {
    this.eventQueue.push(event);
  };

  handleTick = async (time: number) => {
    // copy elements for processing and delete queue, so dublicate processing is less likely to occur
    const eventQueue = [...this.eventQueue];
    this.eventQueue = [];
    const { length } = eventQueue;
    for (let i = 0; i < length; ++i) {
      const event = eventQueue[i];

      this.physicsEngine.processGameObject(event, time);

      const { callback } = event;
      if (callback) callback();
    }
  };
}
