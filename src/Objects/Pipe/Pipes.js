import React from 'react'
import PipeDown from './PipeDown'
import PipeUp from './PipeUp'
import GameObject from '../../GameObject/GameObjectBase/GameObject';


class Pipes extends GameObject {
    constructor(props) {
        super(props)

        this.hitBox.width = 50;
    }
   
    render() {
        return (
<<<<<<< HEAD
            <div className="pipesDiv" style={{transition: "left 60ms ease-in-out", position:"absolute", top: 0, left: this.props.left}} >
=======
            <div className="pipesDiv" style={{transition: "left 100ms linear ", position:"absolute", top: 0, left: this.props.left}} >
>>>>>>> 4ba3c8d8d22019f06b41850d296a60186e26a988
                <PipeDown up = {this.props.up}/>
                <PipeUp down = {this.props.down}/>
            </div>
        )
    }
}

export default Pipes;