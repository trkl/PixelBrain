import React from "react";
import Menu from "./Menu";
import {WithResources} from '../../../../Resource Manager/HOC/WithResources'
import Game from '../Game'
import Timer from "../../../../Timer/Timer"

class HUDManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      font: props.font,
      styleScore: {
        zIndex: 6,
        position: props.position,
        top: props.top,
        fontFamily: props.fontFamily,
        fontSize: 50,
        textAlign: this.props.textAlign,
        color: "#FFF",
        width: "100%"
      }
    };
  }

  componentWillMount() {
    Timer.instance.subscribe(this.updateScore);
    Timer.instance.subscribe(this.updateGameOver);
    Timer.instance.subscribe(this.updateStart);

    document.addEventListener("keydown", event => {
      if (event.key !== " ") return;
      if (Game.instance.start === false) {
        Game.instance.pause = false;
        Game.instance.start = true;
      }
    });
  }
  updateScore = () => {
    if (Game.instance.score !== this.state.score) {
      this.setState({ score: Game.instance.score });
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
    }
  };
  updateGameOver = () => {
    if (Game.instance.gameOver) {
      this.setState({ gameOver: Game.instance.gameOver });
      Game.instance.pause = true;
    }
  };
  updateStart = () => {
    if (Game.instance.start !== this.state.start) {
      this.setState({ start: Game.instance.start });
    }
  };

  render() {
    return (
      <div>
        <Menu
          start={Game.instance.start}
          gameOver={Game.instance.gameOver}
          score={Game.instance.score}
          highScore={Game.instance.highScore}
        />
        <h2 style={this.state.styleScore}>
          <style>
            {`@font-face {
                    font-family: '${this.state.styleScore.fontFamily}';
                    font-style: normal;
                    font-weight: 400;
                    src: url('${this.props.resourceManager.getFont(
                      this.state.font
                    )}');}`}
          </style>
          {this.state.score}
        </h2>
      </div>
    );
  }
}
export default WithResources(HUDManager);
