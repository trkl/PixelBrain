import React, { Component } from 'react';
import ResourceManagerObservable from './Resource Manager/Resource Manager';

class Background extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 100,
            height: 100,
            ResourceManagerObservable: new ResourceManagerObservable("Flappy Bird"),
        }
        this.animate = this.animate.bind(this)
    }

    animate() {
        console.log('hey')


        if(this.state.height === 100){
            this.setState({
                height: 500,
                width: 500
            })
        }
        this.frame = requestAnimationFrame(this.animate);
    }

    componentDidMount() {
        this.animate();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frame);
    }

    findImage = (index) => {
        return this.state.ResourceManagerObservable.getImagePaths(index)
      }
    render() {
        return (
            <div id='image'>
            <img src={require(`${this.state.ResourceManagerObservable.getImagePaths(0) }`)} height={this.state.height} width={this.state.width} alt='background'/>
                {this.animate()}
            </div>
        );
    }
}

export default Background