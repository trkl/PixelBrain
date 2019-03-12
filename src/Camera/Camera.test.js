import Camera from "./Camera";
import { render, cleanup } from "react-testing-library";
import GameComponent from "../GameObject/GameComponent";
import Vector from "../Vector/Vector";
import RigidBody from "../GameObject/RigidBody";
import React from "react";
import CollisionZone from "../GameObject/CollisionZone";

describe("Camera", () => {
  let protagonist,
    camera,
    gameObjects = [];
  let world = {
    registerComponent: jest.fn().mockImplementation(component => {
      protagonist = component.name === "protagonist" ? component : protagonist;
      gameObjects.push(component);
    })
  };
  beforeEach(() => {
    render(
      <>
        <GameComponent cameraFollows={true} name="protagonist" world={world}>
          <RigidBody weight={10} />
          <CollisionZone dimensions={Vector.Zero} />
        </GameComponent>
        <GameComponent name="other" world={world}>
          <RigidBody weight={10} />
          <CollisionZone dimensions={Vector.Zero} />
        </GameComponent>
      </>
    );
    camera = new Camera(protagonist);
  });
  afterEach(() => {
    cleanup();
    gameObjects = [];
  });

  it("otherObjects will change position with speed of protagonist", () => {
    const other = gameObjects[1];
    const prePosition = new Vector([...other.position.vector]);
    camera.moveCamera(1000, gameObjects);
    expect(other.position.vector).toEqual(
      prePosition.plus(protagonist.rigidBody.velocity.multiply(1000 / 1000))
        .vector
    );
  });

  it("protagonist won't change position", () => {
    const prePosition = new Vector([...protagonist.position.vector]);
    camera.moveCamera(1000, gameObjects);
    expect(prePosition.vector).toEqual(protagonist.position.vector);
  });
});
