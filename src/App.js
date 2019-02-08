import React, { Component } from 'react';
import './App.css';
import Bird from './Objects/Bird';
import PipesManager from './Objects/PipeManager';


class App extends Component {
  constructor(props) {
    super(props)

    this.tick = this.tick.bind(this);
    this.timer = 0;
    this.clock = Date.now() * 0.001;

    var bird = new Bird();

    var pipe = {
      top: 0,
      left: 400
    }


    this.state = { bird: bird, pipe: pipe };
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);// egine start
  }
  
  tick() {
    this.timer += (Date.now() * 0.001) - this.clock; // delta time = current - prev
    if (this.timer > 1.0 / 15) {
     
      this.timer = 0; // timer 0
      var birdCopy = this.state.bird;
      var pipeCopy = this.state.pipe;


      if (pipeCopy.left < 0) {
        pipeCopy.left = window.innerWidth;
      } else {
        pipeCopy.left -= 8;
      }
      if (birdCopy.position.y > 550) {
        birdCopy.position.y = 300;
      } else {
        birdCopy.position.y += 5.5
      }
      this.setState({ bird: birdCopy, pipe: pipeCopy });
    }

    this.clock = Date.now() * 0.001 // prev time
    window.requestAnimationFrame(this.tick);
  }

  jump = () => {
    var birdCopy = this.state.bird;

    birdCopy.position.y -= 30;

    this.setState({ bird: birdCopy });
  }

  render() {
    return (
      <div className="frame" onClick={this.jump.bind(this)} >
        <Bird top={this.state.bird.position.y} left={this.state.bird.position.x} style={{height:"100vh"}} />
        <PipesManager />
      </div>
    );
  }
}

export default App;
