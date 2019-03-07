import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import Event from "../Events/Event";
import CollisionManger from "../CollisionManager/CollisionManager";
import Timer from "../Timer/Timer";
import AudioManager from "../AudioManager/AudioManager";

export default class EventManager {
  eventQueue: Event[] = [];
  collisionManager: CollisionManger;
  audioManager: any;

  private static _instance: EventManager;
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
    // @ts-ignore
    this.audioManager = new AudioManager() as any;
  }

  public registerEvent = (event: Event) => {
    this.eventQueue.push(event);
  };

  handleTick = (time: number) => {
    const eventQueue = this.eventQueue;
    const { length } = eventQueue;

    for (let i = 0; i < length; ++i) {
      const event = eventQueue[i];
      PhysicsEngine.instance.processEvent(event);
      if (!event.end) {
        if (event.audio) {
          this.audioManager.playSound(event.audio.soundName);
        }
      }
      const { callback } = event;
      if (callback) callback();
    }
    this.eventQueue = [];
  };
}
