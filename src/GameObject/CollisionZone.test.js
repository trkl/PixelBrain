import React from "react";
import { render } from "react-testing-library";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";
import GameComponent from "./GameComponent";
import WorldContextProvider from "../World/Context/WorldContextProvider";
import World from "../World/World";

test("collisionDetection", () => {
  const parent = { registerComponent: jest.fn() };
  const world = 5;

  const da = render(
    <GameComponent parent={parent} world={world}>
      <CollisionZone dimensions={new Vector([10, 10])} position={Vector.Zero} />
      <CollisionZone
        dimensions={new Vector([10, 10])}
        position={new Vector([0, 5])}
      />
    </GameComponent>
  );
});
