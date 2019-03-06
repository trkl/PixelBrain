import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import Vector from "../Vector/Vector";
import CollisionZone from "./CollisionZone";
import { constructMockHoc } from "react-mock-hoc-utils";
import constructBuilder from "test-component-builder";

const world = { registerComponent: jest.fn() };

const GameComponent = constructMockHoc("GameComponent.js")
  .mock("../World/HOC/WithWorld.js")
  .with({ world })
  .create();

let component;
describe("", () => {
  // beforeEach(() => {
  //   component = constructBuilder(builder).using(render);
  // });

  afterEach(cleanup);

  it("collisionDetection", async () => {
    const parent = {};
    const { getByTestId } = render(
      <GameComponent parent={parent}>
        <CollisionZone
          dimensions={new Vector([10, 10])}
          position={Vector.Zero}
        />
        <div data-testid="divy" />
      </GameComponent>
    );
    const node = await waitForElement(() => getByTestId("divy"));

    expect(parent.gameComponent).toBeDefined();
    expect(world.registerComponent).toHaveBeenCalled();
  });
});
