import React from 'react'
import Sprite from './Sprite'
import GameObject from '../GameObject/GameObjectBase/GameObject';
import AudioManager from '../AudioManager/AudioManager';

class Bird extends GameObject {
    constructor(props) {
        super(props);

        var am = new AudioManager();

        this.hitBox.width = 40;
        this.hitBox.height = 40;

        this.position.y = 200;
        this.position.x = 300;

        this.state = {am : am }

    }

    jump = () => {
        console.log("hemp")
        this.state.am.playSound('../AudioManager/sounds/sfx_wing.wav');
       
    }

    render() {
        return (
            <div onClick={this.jump.bind(this)} style={{position:"absolute", top: this.props.top, left: this.props.left} }>
                <Sprite hitBox={this.hitBox} />
           </div>
        )
    }
}

export default Bird;