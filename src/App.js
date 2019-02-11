import React, { Component } from 'react';
import './App.css';
import Bird from './Objects/Bird/Bird';
import PipesManager from './Objects/Pipe/PipeManager'
import AudioManager from './AudioManager/AudioManager';



class App extends Component {
  constructor(props) {
    super(props)

    this.tick = this.tick.bind(this);
    this.timer = 0;
    this.clock = Date.now() * 0.001;

    var bird = new Bird();
    var pipes = new PipesManager();

    this.state = { bird: bird, pipes: pipes };
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);// egine start
  }
  
  tick() {
    this.timer += (Date.now() * 0.001) - this.clock; // delta time = current - prev
    if (this.timer > 1.0 / 15) {
     
      this.timer = 0; // timer 0
    
      this.setState({bird: this.state.bird, pipes: this.state.pipes  });
    }

    this.clock = Date.now() * 0.001 // prev time
    window.requestAnimationFrame(this.tick);
  }

  jump = () => {

    console.log(this.state.bird)
    // this.state.bird.position.y -= 30;

    this.setState({ bird: {...this.state.bird,position:{y:this.state.bird.position.y - 30, x:this.state.bird.position.x} }}, ()=> console.log(this.state.bird)
    );
  }

  render() {
    return (
      <div className="frame" onClick={this.state.bird.jump.bind(this.state.bird)} >
        <Bird />
        <PipesManager />
      </div>
    );
  }
}

export default App;
