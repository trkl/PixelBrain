import React from 'react'
import WithResources from '../Resource Manager/HOC/WithResources';

class Sprite extends React.Component {   
    
    constructor(props) {
        super(props)
        this.state = {
            frameWidth: '50px',
            frameHeight: '50px',
            styleSprite:{width: 190,
                height: 240,
                background: "url(" + (this.props.resourceManager.getImage(this.props.imagesource)) + ") left center"
            }
        }
        

    }
    render() {
        return (
            <div style={this.state.styleSprite}>
            </div>
        )
    }
}

export default WithResources(Sprite);