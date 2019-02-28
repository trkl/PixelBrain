import React, { Component } from 'react'
import './PipeUp.css'
import WithResources from '../../Resource Manager/HOC/WithResources'

class PipeUp extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="PipeUp">
                <img className="pipeupimg" src={this.props.resourceManager.getImage("pipeUp.png")} style={{transition: "left 100ms linear", height: this.props.down + "vh", width: "50px"}}/>
            </div>
        )
    }
}

export default WithResources(PipeUp);
