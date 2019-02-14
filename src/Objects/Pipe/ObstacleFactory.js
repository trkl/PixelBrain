import React, {Component} from 'react'
import Pipes from './Pipes'
import WithTimerSubscribe from '../../Timer/HOC/WithTimerSubscribe'


class ObstacleFactory extends Component {
    constructor(props) {
        super(props);
        this.state = {pipes:[]}
        var pipe = <Pipes left={300} up={15} down={65}/>;
        var pipe2 = <Pipes left={100} up={15} down={65}/>;
        this.state.pipes.push(pipe, pipe2);
    }
    componentDidUpdate() {
        this.move();
    }

    move = () => {
        var pipesCopy = this.state.pipes.slice();
        console.log(pipesCopy)
        for (let i = 0; i < pipesCopy.length; i++) {
            if (pipesCopy[i].left < -60) {
                pipesCopy[i].left = (window.innerWidth/5)*4.8
                var newDown = Math.random() * (65 - 15 + 1) + 15;
                pipesCopy[i].down = newDown;
                pipesCopy[i].up = 100-newDown - 20;
            }
            pipesCopy[i].props.left -=  4;
        }
        this.state = ({ pipes: pipesCopy });
    }

    // componentDidMount() {
    //     this.addObstacle()
    // }

    // addObstacle = () => {
    //      if(this.state.pipes[0].Yposition < 0) {
    //         this.removeObstacle(this.state.pipes[0])
    //     }
    //     console.log(this.state.pipes[0].props.left)
    //     requestAnimationFrame(this.addObstacle)
    // }

    // removeObstacle(e) {
    //     var array = [...this.state.pipes]; // make a separate copy of the array
    //     var index = array.indexOf(e)
    //     if (index !== -1) {
    //       array.splice(index, 1);
    //       this.setState({pipes: array});
    //     }
    //   }

    render() {
        return (
            this.state.pipes
        )
    }
}

export default ObstacleFactory;