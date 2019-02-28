import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import Event from "../Events/Event";
import CollisionManger from "../CollisionManager/CollisionManager";
import Timer from "../Timer/Timer";

export default class EventManager {
  eventQueue: Event[] = [];
  collisionManager: CollisionManger;

<<<<<<< HEAD
  private static _instance: EventManager;
=======
  private static _instance: EventManager = new EventManager();
>>>>>>> dev
  public static get instance() {
    if (EventManager._instance === undefined) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  // // audioManager: AudioManager;

  private constructor() {
    Timer.instance.subscribe(this.handleTick);
    this.collisionManager = new CollisionManger();
    // this.audioManager = audioManager;
  }

  public registerEvent = (event: Event) => {
    this.eventQueue.push(event);
  };

<<<<<<< HEAD
  handleTick = (time: number) => {
=======
  handleTick = async (time: number) => {
>>>>>>> dev
    // copy elements for processing and delete queue, so dublicate processing is less likely to occur
    const eventQueue = [...this.eventQueue];
    this.eventQueue = [];
    const { length } = eventQueue;
    for (let i = 0; i < length; ++i) {
      const event = eventQueue[i];

      PhysicsEngine.instance.processEvent(event);
      const { callback } = event;
      if (callback) callback();
    }
  };
}
