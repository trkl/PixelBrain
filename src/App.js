import React, { Component } from 'react';
//import Game from './Game'
import './App.css';
import ResourceManager from './Resource Manager/Resource Manager';
import Background from './Background'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: "Flappy Bird",
      ResourceManager: new ResourceManager('Flappy Bird'),
      img:null
    }
  }
    
  render() {
    return (
      <div className="App">
        <div>  
        <Background ResourceManager = {this.state.ResourceManager} imagesource= {'GrassForeground.png'} speed = {-2.5} zindex={3}/>
        <Background ResourceManager = {this.state.ResourceManager} imagesource= {'kalsoy.png'} speed = {-0.2} zindex={2}/>
        <Background ResourceManager = {this.state.ResourceManager} imagesource= {'Clouds.png'} speed = {-0.6} zindex={1}/>
        <Background ResourceManager = {this.state.ResourceManager} imagesource= {'Background.png'} speed = {-0.2} zindex={0}/>
        </div>
      </div>
    );
  }
}
export default App;
