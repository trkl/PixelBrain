import React, { Component } from 'react'
import WithResources from '../../Resource Manager/HOC/WithResources'

class SpriteSlayer extends Component {
    constructor(props) {
        super(props)
    }
        render() {
            return (
                <div style={{width: this.props.hitBox.width}}> style={{  transition: "transform 500ms ease-in-out",
                    width: "100%"}}/>
                </div>
            )
        }
    }

    export default WithResources(SpriteSlayer);

