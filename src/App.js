import React, { Component } from 'react';
import title from './Images/title.svg';
import bird from './Images//bird.svg';
import Game from './Game'
import './App.css';
import ResourceManager from './Resource Manager'

class App extends Component {
  ResourceManager;

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={title} className="App-logo" alt="logo" />        
        </header>
<<<<<<< HEAD
      
        <img src={bird} className="App-logo" alt="bird" />
        <Game />
=======

        <img src={<ResourceManager />} className="App-logo" alt="bird" />
>>>>>>> 0782b7dcdfb635fa7489da6a74728de52c85bd01
      </div>
    );
  }
}

export default App;
