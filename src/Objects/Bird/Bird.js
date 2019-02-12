import React from 'react'
import Sprite from './Sprite'
import GameObject from '../../GameObject/GameObjectBase/GameObject';
import WithKeyboardSubscribe from '../../InputManager/HOC/WithKeyboardSubscribe'
<<<<<<< HEAD
import AudioManager from '../../AudioManager/AudioManager'
import Sound from '../../AudioManager/sounds/sfx_die.wav';
=======
>>>>>>> 767b5c90e902d5d662d079ac72b8cbd7ed4621e3

class Bird extends GameObject {
    constructor(props) {
        super(props);

        this.hitBox.width = 40;
        this.hitBox.height = 40;

        this.position.y = 200;
        this.position.x = 300;
    }

    componentDidMount() {
        this.props.keyboardSubscribe(this, " ", {callback:this.jump, audio: {soundTrack: "sfx_wing.wav"}});
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
<<<<<<< HEAD
        this.position.y -= 30;
        this.am.playSound(Sound);  
=======
        this.position.y -= 30; 
>>>>>>> 767b5c90e902d5d662d079ac72b8cbd7ed4621e3
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