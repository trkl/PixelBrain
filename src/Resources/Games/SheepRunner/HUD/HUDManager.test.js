import {constructMockHoc} from "react-mock-hoc-utils"
import { render, cleanup } from "react-testing-library";
import React from 'react'

const resourceManager = {getFont: jest.fn(), getImage: jest.fn()}

const HUDManager = constructMockHoc("HUDManager.js")
                .mock('../../../../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();
                               
describe("HudManager",() => {
    afterEach(cleanup);
    it("getFont is called", () => {
        render(<HUDManager/>);
        expect(resourceManager.getFont).toHaveBeenCalled();
    })
    it("getImage is called", () => {
        render(<HUDManager/>);
        expect(resourceManager.getImage).toHaveBeenCalled();
    })
})
