import React, { Component } from 'react'
import './PipeUp.css'
import ResourceManager from '../../Resource Manager/Resource Manager'

class PipeUp extends Component {
    constructor(props) {
        super(props)

        this.rm = new ResourceManager()
    }
    render() {
        return (
            <div className="PipeUp">
                <img className="pipeupimg" src={this.rm.getImage("pipeUp.png")} style={{height: this.props.down + "vh", width: "50px"}}/>
            </div>
        )
    }
}

export default PipeUp;