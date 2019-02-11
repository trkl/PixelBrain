import React from 'react'
import Sprite from './Sprite'
import GameObject from '../../GameObject/GameObjectBase/GameObject';
import WithKeyboardSubscribe from '../../InputManager/HOC/WithKeyboardSubscribe'
import ResourceManager from'../../Resource Manager/Resource Manager'
import AudioManager from '../../AudioManager/AudioManager'

class Bird extends GameObject {
    constructor(props) {
        super(props);

        this.rm = new ResourceManager();
        this.am = new AudioManager({sound:this.rm.getAudioPaths("sfx_swooshing.wav")});
        this.hitBox.width = 40;
        this.hitBox.height = 40;

        this.position.y = 200;
        this.position.x = 300;
    }

    componentDidMount() {
        this.props.keyboardSubscribe(this, " ", {callback:this.jump});
    }

    componentWillUpdate() {
        this.fall();
    }

    fall = () => {
        if (this.position.y > 550) {
            this.position.y = 300;
          } else {
            this.position.y += 5.5
          }
    }


    jump = () => {
        this.position.y -= 30;
        console.log(this.am)
        this.am.playSound();  
    }

    render() {
        return (
            <div style={{position:"absolute", top: this.position.y, left: this.position.x} }>
                <Sprite hitBox={this.hitBox} />
           </div>
        )
    }
}

export default WithKeyboardSubscribe(Bird);