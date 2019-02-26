import React, { Component } from 'react'
import Pipes from './Pipes'
import GameComponent from '../../GameObject/GameComponent'
import Vector from'../../Vector/Vector'
import RigidBody from '../../GameObject/RigidBody'
import CollisionZone from '../../GameObject/CollisionZone'



export default class PipesManager extends Component {
    constructor(props) {
        super(props)
        this.counter = 0;
    }

    pipePool = [];


    // componentDidUpdate() {
    //     this.move();
    // }

    move = () => {
        var pipesCopy = this.state.pipes.slice();
        for (let i = 0; i < pipesCopy.length; i++) {
            if (pipesCopy[i].left < -60) {
                pipesCopy[i].left = (window.innerWidth/5)*4.8
                var newDown = Math.random() * (65 - 15 + 1) + 15;
                pipesCopy[i].down = newDown;
                pipesCopy[i].up = 100-newDown - 20;
            }
            pipesCopy[i].left = pipesCopy[i].left - 4;
        }
        this.state = ({ pipes: pipesCopy });
    }

    render() {
        return (
            <GameComponent >
                <Pipes up={20} down={20}/>
                <Pipes up={30} down={30}/>
                <Pipes up={40} down={40}/>
            </GameComponent>

        )
    }
}
