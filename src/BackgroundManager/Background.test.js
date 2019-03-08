import { constructMockHoc } from "react-mock-hoc-utils";
import React from "react";
import { render, cleanup } from "react-testing-library";
import Timer from "../Timer/Timer";
import Game from "../Resources/Games/Test/Game";
import Adapter from "enzyme-adapter-react-16";

import { configure, shallow, mount } from "enzyme";

configure({ adapter: new Adapter() });

let callback = null;
jest.spyOn(window, "requestAnimationFrame").mockImplementation(() => {});
// jest.spyOn(Timer.instance, "subscribe").mockImplementation(acallback => {
//   console.log(acallback);
//   callback = acallback;
// });
const resourceManager = { getImage: jest.fn() };
const Background = constructMockHoc("Background.js")
  .mock("../Resource Manager/HOC/WithResources.js")
  .with({ resourceManager })
  .create();

describe("Testing background", () => {
  let background;
  beforeEach(async () => {
    // stops timer from running

    Game.instance.pause = false;
    await render(<Background />);
  });

  afterEach(cleanup);

  it("testing if getImage() gets called on resourceManager", () => {
    expect(resourceManager.getImage).toHaveBeenCalled();
  });

  it("gameLoop calls setState", () => {
    const wrapper = shallow(<Background />).dive();
    background = wrapper.instance();
    background.setState = jest.fn();
    background.gameLoop();
    expect(background.setState).toHaveBeenCalledTimes(1);
  });
});
