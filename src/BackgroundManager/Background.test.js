import {constructMockHoc} from "react-mock-hoc-utils"
import React from "react"
import {render} from "react-testing-library"
import Timer from "../Timer/Timer";

const resourceManager = {getImage:jest.fn()}
const timer = Timer.instance;
timer.subscribe = jest.fn();
const Background = constructMockHoc("Background.js")
            .mock("../Resource Manager/HOC/WithResources.js")
            .with({resourceManager})
            .create()



describe("Testing background", () =>{

    it("testing if getImage() gets called on resourceManager", () =>{
       
        console.log(timer.subscribe)
        render(<Background/>)
        expect(resourceManager.getImage).toHaveBeenCalled()
        expect(Timer.instance.subscribe).toHaveBeenCalled();
    })
})
