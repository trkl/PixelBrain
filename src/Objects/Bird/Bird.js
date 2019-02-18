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
<<<<<<< HEAD
        this.props.keyboardSubscribe(this, " ", {callback:this.jump, audio: {soundTrack: "sfx_wing.wav"}});
=======
        this.props.keyboardSubscribe(this, " ", {gameObject: this, callback:this.jump, physics:{forces: [100,200]} ,audio: {soundTrack: "sfx_wing.wav"}});
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
    }

    componentWillUpdate() {
        this.fall();
    }

    fall = () => {
<<<<<<< HEAD
        if (this.position.y > 550) {
=======
        if (this.position.y > window.innerHeight - 100) {
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
            this.position.y = 300;
        } else {
            this.position.y += 10.5
        }
    }

    jump = () => {
<<<<<<< HEAD
        this.position.y -= 100; 
=======
        if(this.position.y > 10) {
            this.position.y -= 50; 
        }
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
    }

    

    render() {
        return (
            <div style={{ transition: "top 100ms linear", position:"absolute", top: this.position.y, left: this.position.x} }>
               <Sprite width={1584} height={583} n={3} scale={.1} imagesource={"PuffinSprite.png"} />
           </div>
        )
    }
}

export default WithKeyboardSubscribe(Bird);