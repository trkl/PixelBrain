import React from 'react'
import Sprite from '../../Sprite/Sprite'
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
        this.props.keyboardSubscribe(this, " ", {gameObject: this, callback:this.jump, physics:{forces: [100,200]} ,audio: {soundTrack: "sfx_wing.wav"}});
    }

    componentWillUpdate() {
        this.fall();
    }

    fall = () => {
        if (this.position.y > window.innerHeight - 100) {
            this.position.y = 300;
        } else {
            this.position.y += 10.5
        }
    }

    jump = () => {
        if(this.position.y > 10) {
            this.position.y -= 50; 
        }
    }

    

    render() {
        return (
            <div style={{ transition: "top 100ms linear", position:"absolute", top: this.position.y, left: this.position.x} }>
               <Sprite width={1584} height={583} n={3} scale={.1} imagesource={"puffinpixel.png"} />
           </div>
        )
    }
}

export default WithKeyboardSubscribe(Bird);