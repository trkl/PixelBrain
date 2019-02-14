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
            <div className="pipesDiv" style={{position:"absolute", top: 0, left: this.props.left}} >
                <PipeDown up = {this.props.up}/>
                <PipeUp down = {this.props.down}/>
            </div>
        )
    }
}

export default Pipes;