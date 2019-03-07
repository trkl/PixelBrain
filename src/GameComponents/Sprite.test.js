import {constructMockHoc} from "react-mock-hoc-utils"
import { render, cleanup } from "react-testing-library";
import React from 'react'
import Vector from '../Vector/Vector'


const resourceManager = { getImage: jest.fn()}

const Sprite = constructMockHoc("Sprite.js")
                .mock('../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();

                               
describe("Sprite",() => {
    afterEach(cleanup);
    let sprite;
    const parent = {
        add: component => sprite = component,
        position: new Vector()
    }
    const vector = new Vector();
    it("getImage is called", () => {
        render(<Sprite position={parent.position} parent={parent} vector={vector} />);
        expect(resourceManager.getImage).toHaveBeenCalled();
        sprite.update();
    })
})
