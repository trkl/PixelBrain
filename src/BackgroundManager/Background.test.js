import {constructMockHoc} from "react-mock-hoc-utils"
import React from "react"
import {render} from "react-testing-library"

const resourceManager = {getImage:jest.fn()}
const Background = constructMockHoc("Background.js")
            .mock("../Resource Manager/HOC/WithResources.js")
            .with({resourceManager})
            .create()

describe("Testing background", () =>{

    it("testing if getImage() gets called on resourceManager", () =>{
        render(<Background/>)

        expect(resourceManager.getImage).toHaveBeenCalled()
    })
})
