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

    var birdy = {
      top: 200,
      left: 300
    }

    var pipe = {
      top: 0,
      left: 400
    }


    this.state = { birdy: birdy, pipe: pipe };
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);// egine start
  }
  
  tick() {
    this.timer += (Date.now() * 0.001) - this.clock; // delta time = current - prev
    if (this.timer > 1.0 / 15) {
      this.timer = 0; // timer 0
      var birdCopy = this.state.birdy;
      var pipeCopy = this.state.pipe;
      console.log("tick")
      if (pipeCopy.left < 0) {
        pipeCopy.left = window.innerWidth;
      } else {
        pipeCopy.left -= 8;
      }
      if (birdCopy.top > 550) {
        birdCopy.top = 300;
      } else {
        birdCopy.top += 5.5
      }
      this.setState({ birdy: birdCopy, pipe: pipeCopy });
    }

    this.clock = Date.now() * 0.001 // prev time
    window.requestAnimationFrame(this.tick);
  }

  move = () => {
    var birdCopy = this.state.birdy;

    birdCopy.top -= 30;

    this.setState({ birdy: birdCopy });
  }

  render() {
    return (
      <div className="frame" onClick={this.move.bind(this)} >
        <Bird top={this.state.birdy.top} left={this.state.birdy.left} />
        {/* <Pipes top={this.state.pipe.top} left={this.state.pipe.left} /> */}
        <PipesManager />
      </div>
    );
  }
}

export default App;
