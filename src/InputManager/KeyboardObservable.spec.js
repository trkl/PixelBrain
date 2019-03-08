import KeyboardObservable from "./KeyboardObservable";
import Vector from "../Vector/Vector";
import EventManager from "../EventManager/EventManager";
import { fireEvent } from "react-testing-library";

describe("KeyboardObservable", () => {
  let observable, event;
  const registerEventSpy = jest.spyOn(EventManager.instance, "registerEvent");
  beforeEach(() => {
    observable = new KeyboardObservable();
    event = {
      gameObject: null,
      physics: { force: new Vector([20, 20]) }
    };
  });
  it("subscribers should be subscribed", () => {
    observable.subscribe(null, "w", event);
    expect(observable.subscribers.length).toEqual(1);
  });

  it("subscribers should be unsubscibed", () => {
    const gameObj1 = {};
    observable.subscribe(gameObj1, "w", event);
    observable.subscribe({}, "w", { ...event });

    observable.unsubscribe(gameObj1);
    expect(observable.subscribers.length).toEqual(1);
  });
  it("pressing key should send event", () => {
    observable.subscribe(null, "w", event);
    fireEvent.keyDown(document.body, { key: "w" });
    expect(registerEventSpy).toHaveBeenCalledWith(event);
  });
  it("releasing key should send  event with end=true", () => {
    observable.subscribe(null, "w", event, true);
    fireEvent.keyDown(document.body, { key: "w" });
    expect(registerEventSpy).toHaveBeenCalledWith(event);
    fireEvent.keyUp(document.body, { key: "w" });
    expect(registerEventSpy).toHaveBeenCalledWith({ end: true, ...event });
  });
  it("attempting to unsubscribe on empty keyboardObservable throws an error", () => {
    expect(() => observable.unsubscribe(null)).toThrow();
  });
});
