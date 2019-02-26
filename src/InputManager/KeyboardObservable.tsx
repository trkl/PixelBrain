import GameObject from "../GameObject/GameObjectBase/GameObject";
<<<<<<< HEAD
import Event from "../Events/Event";
import EventManager from "../EventManager/EventManager";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";
import CollisionManger from "../CollisionManager/CollisionManager";
import { isRegExp } from "util";

// data-structure for subscriber
class KeyboardSubscriber {
  constructor(object: GameObject, key: string, event: Event) {
    this.key = key;
    this.event = { ...event, gameObject: object };
  }
  key: string;
  event: Event;
=======
import React, { PureComponent } from "react";

// data-structure for subscriber
class KeyboardSubscriber {
  constructor(object: GameObject, key: string, action: () => void) {
    this.object = object;
    this.key = key;
    this.action = action;
  }

  object: GameObject;
  key: string;
  action: () => void;
>>>>>>> dev
}

// This class will tie keyboard inputs to their actions
export default class KeyboardObservable {
  private subscribers: KeyboardSubscriber[];
<<<<<<< HEAD
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
    object: GameObject,
    key: string,
    event: Event,
    endOnKeyup: boolean = false
  ) => {
    this.subscribers.push(new KeyboardSubscriber(object, key, event));
    if (endOnKeyup)
      this.whileDownSubscribers.push(
        new KeyboardSubscriber(object, key, event)
      );
  };

  subscribeWhileDown = (object: GameObject, key: string, event: Event) => {
    this.subscribers.push(new KeyboardSubscriber(object, key, event));
  };
=======

  constructor() {
    this.subscribers = [];
    document.addEventListener("keydown", this.onNext, false);
  }
  // "key" is the letter of the key on the keyboard to listen for
  subscribe = (object: GameObject, key: string, action: () => void) =>
    this.subscribers.push(new KeyboardSubscriber(object, key, action));
>>>>>>> dev

  unsubscribe = (object: GameObject) => {
    const { length } = this.subscribers;
    if (length)
      for (let i = 0; i < length; ++i) {
        const subscriber = this.subscribers[i];
<<<<<<< HEAD
        if (subscriber.event.gameObject === object) {
=======
        if (subscriber.object === object) {
>>>>>>> dev
          this.subscribers.splice(i, 1);
        }
      }
    else {
      throw "No subscribers";
    }
  };

  // // supposed to be called after document is mounted
  // init = () =>
<<<<<<< HEAD

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
=======
  //   console.log('document.addEventListener("keydown", this.onNext, false)');

  onNext = (event: KeyboardEvent) => {
    if (!this.subscribers.length) return;
    this.subscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        gameObject.action();
      }
>>>>>>> dev
    });
  };
}
