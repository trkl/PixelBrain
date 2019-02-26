import KeyboardObservable from "./KeyboardObservable";
<<<<<<< HEAD
import { isMainThread } from "worker_threads";
import GameObject from "./../GameObject/GameObjectBase/GameObject";
import Event from "./../Events/Event";
describe("KeyboardObservable", () => {
  it("subscribers should be subscribed", () => {
    const gameObject = new GameObject();
    const event = new Event();
    const observable = new KeyboardObservable();
    observable.subscribe(gameObject, "w", event);
    expect(observable.subscribers.length === 1).toBeTruthy();
  });
});
=======
>>>>>>> dev
