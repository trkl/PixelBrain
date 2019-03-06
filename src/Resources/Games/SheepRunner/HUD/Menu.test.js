import {constructMockHoc} from "react-mock-hoc-utils"
import { render, cleanup } from "react-testing-library";
import React from 'react'
import Menu from "./Menu"

const resourceManager = {getFont: jest.fn(), getImage: jest.fn()}

const HUDManager = constructMockHoc("HUDManager.js")
                .mock('../../../../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();
                               
describe("HudManager",() => {
    afterEach(cleanup);
    it("gameOverMenu is called", () => {
        render(<Menu gameOver={true}/>);
    })
})
