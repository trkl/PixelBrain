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

        <img src={<ResourceManager />} className="App-logo" alt="bird" />
      </div>
    );
  }
}

export default App;
