import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { constructMockHoc } from "react-mock-hoc-utils";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import RigidBody from "./RigidBody";
import CollisionManager from "../CollisionManager/CollisionManager";

// import Test from "./Testy";
// import World from "../World/World";

let collisionZone, world, GameComponent, collisionManagerAddSpy, parent;
describe("", () => {
  beforeEach(() => {
    world = {
      registerComponent: jest
        .fn()
        .mockImplementation(component => (parent = component))
    };

    GameComponent = constructMockHoc("GameComponent.js")
      .mock("../World/HOC/WithWorld.js")
      .with({ world })
      .create();
    collisionManagerAddSpy = jest
      .spyOn(CollisionManager.instance, "add")
      .mockImplementation(component => (collisionZone = component));
    render(
      <GameComponent name="hey" world={world}>
        <CollisionZone dimensions={Vector.Zero} />
        <RigidBody weight={10} />
      </GameComponent>
    );
  });

  afterEach(cleanup);

  it("it registers itself to CollisionManager", () => {
    expect(collisionManagerAddSpy).toHaveBeenCalledWith(collisionZone);
  });
  it("returns position of parent", () => {
    expect(collisionZone.position).toBe(parent.position);
  });
  it("CollisionZone.update() calls React.setState()", () => {
    collisionZone.setState = jest.fn();
    collisionZone.update();
    expect(collisionZone.setState).toHaveBeenCalledTimes(1);
  });
});
