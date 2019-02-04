import React, { Component } from 'react';
import title from './Resources/Images/title.svg';
//import bird from './Resources/Images/bird.svg';
//import Game from './Game'
import './App.css';
import './Resource Manager'
import ResourceManager from './Resource Manager';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      gameName: "Flappy Bird",
      ResourceManager: new ResourceManager('Flappy Bird')
    }

  }

  render() {
    return (
      <div className="App">
        <div>
           <img src={this.state.ResourceManager.getImagePath()} className='CharacterSprite' /> 

           <img />
        </div>

      </div>
    );
  }
}

export default App;
