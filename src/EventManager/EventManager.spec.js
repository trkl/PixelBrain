import EventManager from "./EventManager";
import Vector from "../Vector/Vector";
import { render } from "react-testing-library";
import GameComponent from "../GameObject/GameComponent";
import React from "react";
import AudioManager from "../AudioManager/AudioManager";
import RigidBody from "../GameObject/RigidBody";
import CollisionZone from "../GameObject/CollisionZone";

const rm = { getImage: jest.fn(), getFont: jest.fn() };
AudioManager.prototype.resourceManager = { rm };

describe("EventManager", () => {
  let eventManager, event;

  beforeEach(() => {
    eventManager = EventManager.instance;
    let gameComp;
    const world = { registerComponent: component => (gameComp = component) };
    render(
      <GameComponent name="hey" world={world}>
        <RigidBody weight={10} />
        <CollisionZone dimensions={Vector.Zero} />
      </GameComponent>
    );

    event = {
      gameObject: gameComp,
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
    let succes = false;

    event.callback = () => (succes = true);

    eventManager.registerEvent(event);
    eventManager.handleTick(0.2);

    expect(succes).toBeTruthy();
  });
});
