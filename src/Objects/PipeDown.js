import React, { Component } from 'react'
import pipeDown from '../Images/pipeDown.png'
import './PipeDown.css'


class PipeDown extends Component {
    constructor(props) {
        super(props)
    }
    //style={{backgroundImage: "url(" + pipeDown + ")", width:"60px",height:"380px", position: "absolute", top: this.props.up}}
    render() {
        return (
            <div className="PipeDown">
                <img className="pipedownimg" src={pipeDown} alt="Italian Trulli" />         
           </div>
        )
    }
}

export default PipeDown;