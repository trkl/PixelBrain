import React, { Component } from 'react'
import birdImage from '../Images/bird.png'

class Sprite extends Component {
    constructor(props) {
        super(props)
    }
        render() {
            return (
                <div style={{width: this.props.hitBox.width}}>
                    <img src={birdImage} style={{width: "100%"}}/>
                </div>
            )
        }
    }

    export default Sprite;