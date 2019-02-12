import React, { Component } from 'react';
import './App.css';
import Bird from './Objects/Bird/Bird';
import PipesManager from './Objects/Pipe/PipeManager'
import KeyboardObservableProvider from './InputManager/Context/KeyboardObservableContextProvider'
import ResourceManagerContextProvider from './Resource Manager/ResourceManagerContextProvider'
import Background from './Background.js'

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

      this.setState({ bird: this.state.bird, pipes: this.state.pipes });
    }

    this.clock = Date.now() * 0.001 // prev time
    window.requestAnimationFrame(this.tick);
  }



  render() {
    return (
      <>
        <ResourceManagerContextProvider>
          <Background imagesource={"GrassForeground.png"} speed={-1} zindex={1} />
          <Background imagesource={"kalsoy.png"} speed={-0.2} zindex={-1} />
          <Background imagesource={"Clouds.png"} speed={-0.6} zindex={-2} />
          <Background imagesource={"Background.png"} speed={-0.2} zindex={-3} />


          <KeyboardObservableProvider>
            <div className="frame"  >
              <Bird />
              <PipesManager />
            </div>
          </KeyboardObservableProvider>
        </ResourceManagerContextProvider>
      </>
    );
  }
}

export default App;

