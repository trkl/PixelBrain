import {constructMockHoc} from "react-mock-hoc-utils"
import { render, cleanup } from "react-testing-library";
import React from 'react'
import Vector from "../Vector/Vector";


const resourceManager = { getImage: jest.fn()}

const Sprite = constructMockHoc("Sprite.js")
                .mock('../Resource Manager/HOC/WithResources.js')
                .with({resourceManager })
                .create();
                               
describe("Sprite",() => {
    it("getImage is called", () => {
        const parent = {
            add: jest.fn(),
            position: new Vector()
        }
        
        const position = {
            x: "25",
            y: "25"
        }
        render(<Sprite position={position} parent={parent}/>);
        expect(resourceManager.getImage).toHaveBeenCalled();
        expect(parent.add).toHaveBeenCalled();
    })
})
