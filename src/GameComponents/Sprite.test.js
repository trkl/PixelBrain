import {constructMockHoc} from "react-mock-hoc-utils"
import { render, cleanup } from "react-testing-library";
import React from 'react'


const resourceManager = { getImage: jest.fn()}

const Sprite = constructMockHoc("Sprite.js")
                .mock('../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();
                               
describe("Sprite",() => {
    afterEach(cleanup);
    const vector = [0,0];
    it("getImage is called", () => {
        render(<Sprite position={vector}/>);
        expect(resourceManager.getImage).toHaveBeenCalled();
    })
})
