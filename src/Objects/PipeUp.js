import React, { Component } from 'react'
import './PipeUp.css'
import pipeUp from '../Images/pipeUp.png'

class PipeUp extends Component {
    constructor(props) {
        super(props)
    }

    //style={{backgroundImage: "url(" + pipeUp + ")" , width:"60px",height:"360px", position: "absolute", top: this.props.down}}
    render() {
        return (
            <div className="PipeUp">
                <img className="pipeupimg" src={pipeUp} />
            </div>
        )
    }
}

export default PipeUp;