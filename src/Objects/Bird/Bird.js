import React from 'react'
import Sprite from './Sprite'
import GameObject from '../../GameObject/GameObjectBase/GameObject';
import WithKeyboardSubscribe from '../../InputManager/HOC/WithKeyboardSubscribe'

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
            this.position.y += 10.5
        }
    }

    jump = () => {
        this.position.y -= 100; 
    }

    

    render() {
        return (
            <div style={{ transition: "top 100ms linear", position:"absolute", top: this.position.y, left: this.position.x} }>
                <Sprite hitBox={this.hitBox} />
           </div>
        )
    }
}

export default WithKeyboardSubscribe(Bird);