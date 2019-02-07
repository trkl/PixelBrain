import React, { Component } from 'react'
import PipeDown from './PipeDown'
import PipeUp from './PipeUp'


class Pipes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="pipesDiv" style={{position:"absolute", top: this.props.top, left: this.props.left}} >
                <PipeDown up = {this.props.up}/>
                <PipeUp down = {this.props.down}/>
            </div>
        )
    }
}

export default Pipes;