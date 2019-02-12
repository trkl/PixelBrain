import React, {Component} from 'react'
import Pipes from './Pipes'
import _ from 'lodash';
import { timeout } from 'q';

class ObstacleFactory extends Component {
    constructor(props) {
        super(props);

        this.state = {pipes:[]}
    }


    componentDidMount() {
        setInterval(this.addObstacle,1000);
    }

    addObstacle = () => {
        var pipe = <Pipes top={200} left={200} up={10} down={10}/>;
        //pipes.top = 400;
        var pipes = _.cloneDeep(this.state.pipes);
        pipes.push(pipe);
        this.setState({pipes}); 
        this.move();
    }

    move = () => {
        for(let i = 0; i < this.state.pipes.length; i++) {
            var pipeCopy = this.state.pipes[i];
            pipeCopy.props.top = 400;
            this.state.pipes[i].props.top = pipeCopy;
          
        }
    }

    render() {
        return (
            this.state.pipes
        )
    }
}

export default ObstacleFactory;