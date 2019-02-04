import React, { Component } from 'react';
import title from './Images/title.svg';
import bird from './Images//bird.svg';
import Game from './Game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={title} className="App-logo" alt="logo" />        
        </header>
      
        <img src={bird} className="App-logo" alt="bird" />
        <Game />
      </div>
    );
  }
}

export default App;
