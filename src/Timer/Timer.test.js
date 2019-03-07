import Timer from "./Timer";
import Game from "../Resources/Games/Test/Game";

describe("Timer", () => {
  const now = require("performance-now");
  jest.useFakeTimers();

  beforeEach(() => {
    Timer.instance.framerate = 1;
    Game.instance.pause = true;
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(() => {});
  });

  afterEach(() => {
    Timer.instance.callbacks = [];
    Timer.instance.oneTimeCallBacks = [];
  });

  it("Timer.instance should return instance of timer", () => {
    jest.runAllTimers();
    expect(Timer.instance).toBeTruthy();
  });
  if (
    ("expect framerate to be set",
    () => {
      const framerate = 0.1;
      Timer.instance.framerate = framerate;
      expect(Timer.instance._interval).toEqual(1000 / framerate);
    })
  )
    it("subscribing and unsubscribing to Timer should work", () => {
      const testFunc = jest.fn();
      Timer.instance.subscribe(testFunc);
      expect(Timer.instance.callbacks.length).toEqual(1);
      expect(Timer.instance.callbacks[0] === testFunc).toBeTruthy();
      Timer.instance.unsubscribe(testFunc);
      expect(Timer.instance.callbacks.length).toEqual(0);
    });

  it("timer should run callback on step frame", () => {
    Game.instance.pause = false;
    const testFunc = jest.fn();
    Timer.instance.subscribe(() => testFunc());
    Timer.instance._interval = -1;
    Timer.instance.step();

    expect(testFunc).toHaveBeenCalled();
  });

  it("oneTimers should be called", () => {
    Game.instance.pause = false;
    const testFunc = jest.fn();
    Timer.instance.subscribeToTime(() => testFunc(), -1);
    Timer.instance._interval = -1;
    Timer.instance.step();
    expect(testFunc).toHaveBeenCalled();
  });

  it("Nothing should happen on Game.instance.pause", () => {
    const testFunc = jest.fn();
    Timer.instance.subscribeToTime(() => testFunc(), 0.1);
    Timer.instance._interval = -1;
    Timer.instance.step();
    expect(testFunc).not.toHaveBeenCalled();
  });
  it("Nothing should happen if dt < interval", () => {
    Game.instance.pause = false;
    const testFunc = jest.fn();
    Timer.instance.subscribeToTime(() => testFunc(), 1000);
    Timer.instance._interval = 1000;
    Timer.instance.step();
    expect(testFunc).not.toHaveBeenCalled();
  });

  it("Nothing should happen with oneTimers if !this.handleOneTimersEnter", () => {
    Game.instance.pause = false;
    const testFunc = jest.fn();
    Timer.instance.subscribeToTime(() => testFunc(), -1);
    Timer.instance._interval = -1;
    Timer.instance.handleOneTimersEnter = false;
    Timer.instance.step();
    expect(testFunc).not.toHaveBeenCalled();
  });

  it("unsubscribing non existing subscription should return false", () => {
    const testFunc = jest.fn();
    const othertestFunc = () => console.log("test");
    Timer.instance.subscribe(testFunc);
    expect(Timer.instance.unsubscribe(othertestFunc)).not.toBeTruthy();
  });
  it("unsubscribing with empty subscriptions should return false", () => {
    const othertestFunc = () => console.log("test");
    expect(Timer.instance.unsubscribe(othertestFunc)).not.toBeTruthy();
  });
  it("Constructor should work", () => {
    expect(new Timer(0.1)).toBeTruthy();
  });
});
