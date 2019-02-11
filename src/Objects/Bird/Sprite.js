import React, { Component } from 'react'
import birdImage from '../../Images/bird.png'
import ResourceManager from '../../Resource Manager/Resource Manager'

class Sprite extends Component {
    constructor(props) {
        super(props)

        this.rm = new ResourceManager();
    }
        render() {
            return (
                <div style={{width: this.props.hitBox.width}}>
                    <img src={this.rm.getImage("bird.png")} style={{width: "100%"}}/>
                </div>
            )
        }
    }

    export default Sprite;