import { render, cleanup } from "react-testing-library";
import {constructMockHoc} from "react-mock-hoc-utils"
import React from 'react'

const resourceManager = {getFont: jest.fn(), getImage: jest.fn()}

const GameOverMenu = constructMockHoc("GameOverMenu.js")
                .mock('../../../../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();

describe("GameOverMenu renders correctly", () => {
    it("GameOverMenu renders and calls get image function", () => {
        render(<GameOverMenu />);
        expect(resourceManager.getImage).toHaveBeenCalled();
    })

})