import React, { Component } from 'react'
import Pipes from './Pipes'


class PipesManager extends Component {
    constructor(props) {
        super(props)
        this.counter = 0;
        var pipes = [
            { top: 0, left: ((window.innerWidth/5)*0.8) -4, up: 15, down: 65 },
            { top: 0, left: ((window.innerWidth/5)*1.8)   , up: 25, down: 55 },
            { top: 0, left: ((window.innerWidth/5)*2.8)   , up: 35, down: 45 },
            { top: 0, left: ((window.innerWidth/5)*3.8)   , up: 45, down: 35 },
            { top: 0, left: ((window.innerWidth/5)*4.8)   , up: 55, down: 25 }
        ]
        this.state = { pipes: pipes }
    }

    componentDidUpdate() {
        this.move();
    }

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
            <div >
                <Pipes top={this.state.pipes[0].top} left={this.state.pipes[0].left} up={this.state.pipes[0].up}  down={this.state.pipes[0].down} />
                <Pipes top={this.state.pipes[1].top} left={this.state.pipes[1].left} up={this.state.pipes[1].up}  down={this.state.pipes[1].down}/>
                <Pipes top={this.state.pipes[2].top} left={this.state.pipes[2].left} up={this.state.pipes[2].up}  down={this.state.pipes[2].down} />
                <Pipes top={this.state.pipes[3].top} left={this.state.pipes[3].left} up={this.state.pipes[3].up}  down={this.state.pipes[3].down} />
                <Pipes top={this.state.pipes[4].top} left={this.state.pipes[4].left} up={this.state.pipes[4].up}  down={this.state.pipes[4].down} />
            </div>
        )
    }
}

export default PipesManager;