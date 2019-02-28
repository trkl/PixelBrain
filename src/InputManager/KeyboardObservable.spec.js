import KeyboardObservable from "./KeyboardObservable";

describe("KeyboardObservable", () => {
  it("subscribers should be subscribed", () => {
    const event = { gameObject: null, physics: { force: 20 } };
    const observable = new KeyboardObservable();
    observable.subscribe(null, "w", event);
    expect(observable.subscribers.length === 1).toBeTruthy();
  });
  it("subscribers should be unsubscibed", () => {
    const event = { gameObject: null, physics: { force: 20 } };
    const observable = new KeyboardObservable();
    observable.subscribe(null, "w", event);
    observable.unsubscribe(null);
    expect(observable.subscribers.length === 0).toBeTruthy();
  });
});
