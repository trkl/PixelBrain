import React, { Component } from 'react';
import bird from './Resources/Images/flappybirdBackground.png';
//import Game from './Game'
import './App.css';
import ResourceManager from './Resource Manager';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameName: "Flappy Bird",
      ResourceManager: new ResourceManager('Flappy Bird')
    }
  }

  findImage = (index) => {
    return <img src={require(`${ this.state.ResourceManager.getImagePaths(index) }`)} />; // require makes it possible to use local paths
  }

  render() {
    return (
      <div className="App">
        <div>
          {
            this.findImage(2) // get desired image 
          }
        </div>

        <div>
          {/* <img src={bird} className='CharacterSprite' alt='sprite' /> */}
        </div>

      </div>
    );
  }
}

export default App;
