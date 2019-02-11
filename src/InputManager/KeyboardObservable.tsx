import GameObject from "../GameObject/GameObjectBase/GameObject";

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
}

// This class will tie keyboard inputs to their actions
export default class KeyboardObservable {
  private subscribers: KeyboardSubscriber[];

  constructor() {
    this.subscribers = [];
    document.addEventListener("keydown", this.onNext, false);
  }

  // "key" is the letter of the key on the keyboard to listen for
  subscribe = (object: GameObject, key: string, action: () => void) =>
    this.subscribers.push(new KeyboardSubscriber(object, key, action));

  unsubscribe = (object: GameObject) => {
    const { length } = this.subscribers;
    if (length)
      for (let i = 0; i < length; ++i) {
        const subscriber = this.subscribers[i];
        if (subscriber.object === object) {
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

  onNext = (event: KeyboardEvent) => {
    if (!this.subscribers.length) return;
    this.subscribers.forEach(gameObject => {
      if (event.key === gameObject.key) {
        gameObject.action();
      }
    });
  };
}
