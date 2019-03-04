import React from "react";
import "./HUDManager.css";
import Menu from "./Menu";
import WithResources from "../Resource Manager/HOC/WithResources";
import Game from "../Resources/Games/FlappyBird/Game";
import Timer from "../Timer/Timer";

class HUDManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: Game.instance.score,
      start: false,
      gameOver: Game.instance.gameOver,
      bestScore: 25
    };
  }

  handleScore() {
    this.setState(prevScore => {
      return {
        score: prevScore.score + 1
      };
    });
  }

  componentWillMount() {
    // Game.instance.pause = false;
    // Game.instance.start = true;

    document.addEventListener("keydown", event => {
      if (event.key !== " ") return;
      if (!Game.instance.started) {
        Game.instance.started = true;
        Game.instance.pause = false;
        this.setState({});
      }
    });

    Timer.instance.subscribe(() => {
      if (Game.instance.gameOver || Game.instance.pause) {
        this.setState({});
      }
    });
  }

  displayMenu() {}

  render() {
    return (
      <div>
        <Menu
          start={Game.instance.started}
          gameOver={Game.instance.gameOver}
          score={Game.instance.score}
          bestScore={Game.instance.bestScore}
        />
        {<h2>{Game.instance.score}</h2>}
      </div>
    );
  }
}
export default WithResources(HUDManager);
