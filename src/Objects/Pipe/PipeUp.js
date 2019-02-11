import React, { Component } from 'react'
import './PipeUp.css'
import pipeUp from '../../Images/pipeUp.png'

class PipeUp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="PipeUp">
                <img className="pipeupimg" src={pipeUp} style={{height: this.props.down + "vh"}}/>
            </div>
        )
    }
}

export default PipeUp;