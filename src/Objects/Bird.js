import React from 'react'
import Sprite from './Sprite'
import GameObject from '../GameObject/GameObjectBase/GameObject';

class Bird extends GameObject {
    constructor(props) {
        super(props);

        this.hitBox.width = 40;
        this.hitBox.height = 40;

        this.position.y = 200;
        this.position.x = 300;

    }
    render() {
        return (
            <div style={{position:"absolute", top: this.props.top, left: this.props.left}}>
                <Sprite hitBox={this.hitBox} />
           </div>
        )
    }
}

export default Bird;