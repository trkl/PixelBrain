import React, { Component } from 'react'
import ResourceManager from '../../Resource Manager/Resource Manager'
import './PipeDown.css'


class PipeDown extends Component {
    constructor(props) {
        super(props)

        this.rm = new ResourceManager();
    }
    render() {
        return (
            <div className="PipeDown">
                <img className="pipedownimg" src={this.rm.getImage("pipeDown.png")} style={{height: this.props.up + "vh", width: "50px"}}  />         
           </div>
        )
    }
}

export default PipeDown;