import React, { Component } from 'react'
import pipeDown from '../../Images/pipeDown.png'
import './PipeDown.css'


class PipeDown extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="PipeDown">
                <img className="pipedownimg" src={pipeDown} style={{height: this.props.up + "vh"  }}  />         
           </div>
        )
    }
}

export default PipeDown;