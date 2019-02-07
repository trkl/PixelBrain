import React, { Component } from 'react'
import Pipes from './Pipes'


class PipesManager extends Component {
    constructor(props) {
        super(props)
        var pipes = [
            { top: 0, left: 300, up: -20, down: 500 },
            { top: 0, left: 600, up: -20, down: 500 },
            { top: 0, left: 900, up: -20, down: 500 },
            { top: 0, left: 1200, up: -20, down: 500 },
            { top: 0, left: 1500, up: -20, down: 500 }
        ]
        this.counter = 0;
        this.state = { pipes: pipes }
    }

    componentDidMount() {
        requestAnimationFrame(this.move)
    }

    move = () => {

        // if (this.counter > 100) {
        var pipesCopy = this.state.pipes.slice();
        for (let i = 0; i < pipesCopy.length; i++) {
            if (pipesCopy[i].left < -60) {
                pipesCopy[i].left = 1520
                var newUp = Math.random() * (100 - (-200)) + (-200);
                pipesCopy[i].up = newUp;
                pipesCopy[i].down = newUp + 500;
            }
            pipesCopy[i].left = pipesCopy[i].left - 4;
        }
        this.setState({ pipes: pipesCopy });
        this.counter = 0;
        // }
        // this.counter += 10;
        requestAnimationFrame(this.move);
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