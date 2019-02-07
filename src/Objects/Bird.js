import React, { Component } from 'react'
import Sprite from './Sprite'

class Bird extends Component {
    render() {
        return (
            <div style={{position:"absolute", top: this.props.top, left: this.props.left}}>
                <Sprite  />
           </div>
        )
    }
}

export default Bird;