import React, { Component } from 'react';
import bird from './Resources/Images/flappybirdBackground.png';
//import Game from './Game'
import './App.css';
import './Resource Manager'
import ResourceManager from './Resource Manager';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameName: "Flappy Bird",
      ResourceManager: new ResourceManager('Flappy Bird')
    }
  }
  createImage = (index) => {
    return this.state.ResourceManager.getImagePath()[index];
  }

  render() {
    return (
      <div className="App">

        <div>
          <img src={this.createImage(0)} />
        </div>

        <div>
          {/* <img src={bird} className='CharacterSprite' alt='sprite' /> */}
        </div>

      </div>
    );
  }
}

export default App;
