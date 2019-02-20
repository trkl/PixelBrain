import GameObject from "../GameObject/GameObjectBase/GameObject";
import Event from "../Events/Event";
import EventManager from "../EventManager/EventManager";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";

// data-structure for subscriber
class KeyboardSubscriber {
  constructor(object: GameObject, key: string, event: Event) {
    this.key = key;
    this.event = { ...event, gameObject: object };
  }
  key: string;
  event: Event;
}

// This class will tie keyboard inputs to their actions
export default class KeyboardObservable {
  private subscribers: KeyboardSubscriber[];

  constructor(eventManager: EventManager) {
    this.subscribers = [];
    document.addEventListener("keydown", this.onNext, false);
    // document.addEventListener("keyup", this.endEvent, false);
  }

  // "key" is the letter of the key on the keyboard to listen for
  subscribe = (object: GameObject, key: string, event: Event) =>
    this.subscribers.push(new KeyboardSubscriber(object, key, event));

  unsubscribe = (object: GameObject) => {
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
  //   console.log('document.addEventListener("keydown", this.onNext, false)');

  endEvent = (event: KeyboardEvent) => {
    console.log("end");
    if (!this.subscribers.length) return;
    this.subscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        EventManager.instance.registerEvent({ ...gameObject.event, end: true });
        console.log(gameObject);
      }
    });
  };

  onNext = (event: KeyboardEvent) => {
    console.log("begin");
    if (!this.subscribers.length) return;
    this.subscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        console.log(gameObject);
        EventManager.instance.registerEvent(gameObject.event);
      }

      // this.eventManager.registerEvent(gameObject.event);
    });
  };
}
