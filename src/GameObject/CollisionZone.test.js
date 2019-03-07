import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { constructMockHoc } from "react-mock-hoc-utils";
// import Vector from "../Vector/Vector";
// import CollisionZone from "./CollisionZone";
// import constructBuilder from "test-component-builder";
// import Test from "./Testy";
// import World from "../World/World";

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
    const { getByTestId } = render(
      <GameComponent data-testid="shit" world={world} />
    );
    const node = await waitForElement(() => getByTestId("shit"));

    expect(world.registerComponent).toHaveBeenCalled();
  });
});
