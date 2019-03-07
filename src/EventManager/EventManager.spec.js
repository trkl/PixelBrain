import EventManager from "./EventManager";
import GameComponent from "./../GameObject/GameComponent";
import Vector from "../Vector/Vector";
import React from "react";
import ReactDOM from "react-dom";
import Bird from "../Resources/Games/FlappyBird/GameComponents/Bird";
import { act } from "react-dom/test-utils";
import AudioManager from "../AudioManager/AudioManager";

describe("EventManager", () => {
  let eventManager, event, container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    eventManager = EventManager.instance;
    event = {
      gameObject: null,
      physics: { force: new Vector([10, 20]), duration: 20 }
    };
  });

  it("event should be subscribed", () => {
    eventManager.registerEvent({ gameObject: null });
    expect(eventManager.eventQueue.length).toEqual(1);
  });

  it("'handleTick:' should empty eventQueue", () => {
    eventManager.registerEvent(event);
    eventManager.handleTick(0.2);

    expect(eventManager.eventQueue.length).toEqual(0);
  });

  it("'handleTick should call callbacks of events'", () => {
    let best = { success: false };

    event.callback = () => (best = { success: true });

    eventManager.registerEvent(event);
    eventManager.handleTick(0.2);

    expect(best.success).toBeTruthy();
  });
});
