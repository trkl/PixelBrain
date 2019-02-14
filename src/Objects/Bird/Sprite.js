import React, { Component } from 'react'
import WithResources from '../../Resource Manager/HOC/WithResources'

class Sprite extends Component {
    constructor(props) {
        super(props)
    }
        render() {
            return (
                <div style={{width: this.props.hitBox.width}}>
                    <img src={this.props.resourceManager.getImage("bird.png")} style={{  transition: "transform 500ms ease-in-out",
                    width: "100%"}}/>
                </div>
            )
        }
    }

    export default WithResources(Sprite);

