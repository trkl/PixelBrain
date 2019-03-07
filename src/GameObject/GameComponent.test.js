import { render, cleanup } from 'react-testing-library'
import GameComponent from './GameComponent';
import RigidBody from './RigidBody';
import React from 'react'
import CollisionZone from './CollisionZone';
import Vector from '../Vector/Vector';

let component
const world = {
    registerComponent: gcomponent => component = gcomponent}
const gamecomponent = {update: jest.fn()}
const children = []
const dimension = new Vector(0,0)


describe("GameComponent", () => {
    afterEach(cleanup);

    it("render", () => {
        render(<GameComponent name={"comp"} world={world} >
            <RigidBody weight={40}/>
            <CollisionZone dimensions={dimension} />
        </GameComponent>)
        component.update()
        
    })

  
})