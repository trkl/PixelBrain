import React, { Component } from 'react'
import birdImage from '../Images/bird.svg'

class Sprite extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url(" + birdImage + ")", width:"40px",height:"40px", position: "absolute" }} />
        )
    }
}

export default Sprite;