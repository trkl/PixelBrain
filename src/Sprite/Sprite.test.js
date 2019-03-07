import { constructMockHoc } from "react-mock-hoc-utils";
import { render, cleanup } from "react-testing-library";
import React from "react";
import Vector from "../Vector/Vector";

const resourceManager = { getImage: jest.fn() };
const position = new Vector([25, 25]);

const Sprite = constructMockHoc("Sprite.js")
  .mock("../Resource Manager/HOC/WithResources.js")
  .with({ resourceManager, position })
  .create();

describe("Sprite", () => {
  let parent, sprite;

  beforeEach(() => {
    parent = {
      add: jest.fn().mockImplementation(component => (sprite = component)),
      position
    };
    render(<Sprite height={10} width={10} parent={parent} />);
  });
  afterEach(cleanup);

  it("getImage is called", () => {
    expect(resourceManager.getImage).toHaveBeenCalled();
  });
  it("Sprite adds itself to parent", () => {
    expect(parent.add).toHaveBeenCalled();
  });
  it("update function calls React.setState()", () => {
    sprite.setState = jest.fn();
    sprite.update();
    expect(sprite.setState).toHaveBeenCalled();
  });
});
