import React from "react";
import StartMenu from "./StartMenu";
import GameOverMenu from "./GameOverMenu";

class Menu extends React.Component {
  render() {
    let temp;
    if (!this.props.start) {
      temp = <StartMenu />;
    }
    if (this.props.gameOver) {
      temp = (
        <GameOverMenu
          score={this.props.score}
          highScore={this.props.highScore}
        />
      );
    }
    return <div>{temp}</div>;
  }
}
export default Menu;
