import Event from "../Events/Event";
import EventManager from "../EventManager/EventManager";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";
// import { isRegExp } from "util";

// data-structure for subscriber
class KeyboardSubscriber {
  constructor(object: any, key: string, event: Event) {
    this.key = key;
    this.event = { ...event, gameObject: object };
  }
  key: string;
  event: Event;
}

// This class will tie keyboard inputs to their actions
export default class KeyboardObservable {
  private subscribers: KeyboardSubscriber[];
  private whileDownSubscribers: KeyboardSubscriber[];

  constructor(eventManager: EventManager) {
    this.subscribers = [];
    this.whileDownSubscribers = [];
    document.addEventListener("keydown", this.onNext, false);
    document.addEventListener("keyup", this.endEvent, false);
    // document.addEventListener("keyup", this.endEvent, false);
  }

  // "key" is the letter of the key on the keyboard to listen for
  subscribe = (
    object: any,
    key: string,
    event: Event,
    endOnKeyup: boolean = false
  ) => {
    const subscriber = new KeyboardSubscriber(object, key, event);
    this.subscribers.push(subscriber);
    if (endOnKeyup) this.whileDownSubscribers.push(subscriber);
  };

  subscribeWhileDown = (object: any, key: string, event: Event) => {
    this.subscribers.push(new KeyboardSubscriber(object, key, event));
  };

  unsubscribe = (object: any) => {
    const { length } = this.subscribers;
    if (length)
      for (let i = 0; i < length; ++i) {
        const subscriber = this.subscribers[i];
        if (subscriber.event.gameObject === object) {
          this.subscribers.splice(i, 1);
        }
      }
    else {
      throw "No subscribers";
    }
  };

  // // supposed to be called after document is mounted
  // init = () =>

  endEvent = (event: KeyboardEvent) => {
    this.registerKeyUp(event.key);
    if (!this.whileDownSubscribers) return;
    this.whileDownSubscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        EventManager.instance.registerEvent({ ...gameObject.event, end: true });
      }
    });
  };

  keysDown: any = [];

  registerKeyDown(key: string) {
    this.keysDown[key] = true;
  }
  registerKeyUp(key: string) {
    delete this.keysDown[key];
  }

  isRepeatKey(key: string) {
    return this.keysDown[key];
  }

  onNext = (event: KeyboardEvent) => {
    if (this.isRepeatKey(event.key)) return;
    this.registerKeyDown(event.key);
    if (!this.subscribers.length) return;
    this.subscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        EventManager.instance.registerEvent(gameObject.event);
      }

      // this.eventManager.registerEvent(gameObject.event);
    });
  };
}
