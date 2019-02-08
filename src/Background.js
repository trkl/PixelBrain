import React, { Component } from 'react';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: props.speed,
            counter: 0,
            imagesource: '',
            styleImg: {
                height: '100vh',
                width: '100vw',
                backgroundPosition: '300px',
                backgroundImage: 'url('+(props.ResourceManager.getImage(props.imagesource)),
                backgroundRepeat: "repeat-x",
                position: 'absolute',
                zIndex: props.zindex
            },                
            ResourceManager: props.ResourceManager  
        }
    }

    componentDidMount() {
        this.gameLoop();
    }

    gameLoop = () => {
        this.setState({
            counter: this.state.counter + this.state.speed,
            styleImg: {...this.state.styleImg,backgroundPosition:this.state.counter}  
        })
        requestAnimationFrame(this.gameLoop)
    }

    render() {
        return (
            <div style={this.state.styleImg}>
        
                
            </div>
        )

    }
}
export default Background;
