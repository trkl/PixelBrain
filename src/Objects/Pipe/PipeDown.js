import React, { Component } from 'react'
import WithResources from '../../Resource Manager/HOC/WithResources'
import './PipeDown.css'

class PipeDown extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="PipeDown">
                <img className="pipedownimg" src={this.props.resourceManager.getImage("pipeDown.png")} style={{height: this.props.up + "vh", width: "50px"}}  />         
           </div>
        )
    }
}

export default WithResources(PipeDown)
