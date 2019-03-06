import React from "react";
import WithResources from "../Resource Manager/HOC/WithResources";
import "./GameOverMenu.css";
import WithTimerSubcribe from "../Timer/HOC/WithTimerSubscribe";

class GameOverMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      font: "pixel.ttf",
      gameOverStyleImg: {
        height: "100vh",
        width: "100vw",
        maxWidth: "35%",
        maxHeight: "35%",
        backgroundImage:
          "url(" + this.props.resourceManager.getImage("GameOver.png") + ")",
        position: "absolute",
        top: "23%",
        left: "35%",
        zIndex: 5,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "contain"
      },
      scoreBoardStyleImg: {
        height: "100vh",
        width: "100vw",
        maxWidth: "35%",
        maxHeight: "35%",
        backgroundImage:
          "url(" + this.props.resourceManager.getImage("ScoreBoard.png") + ")",
        position: "absolute",
        top: "40%",
        left: "35%",
        zIndex: 5,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "contain"
      },
      scoreStyle: {
        position: "absolute",
        top: "28%",
        left: "85%",
        zIndex: 5,
        fontSize: 60,
        color: "white",
        fontWeight: "bold",
        fontFamily: "Pixel"
      },
      highScoreStyle: {
        position: "absolute",
        top: "64%",
        left: "85%",
        zIndex: 5,
        fontSize: 60,
        color: "white",
        fontWeight: "bold",
        fontFamily: "Pixel"
      }
    };
  }

  render() {
    return (
      <div>
        <div style={this.state.gameOverStyleImg} />
        <div style={this.state.scoreBoardStyleImg}>
          <div style={this.state.scoreStyle}>
            <style>
              {`@font-face {
                    font-family: '${this.state.scoreStyle.fontFamily}';
                    src: url('${this.props.resourceManager.getFont(
                      this.state.font
                    )}')}`}
            </style>
            {this.props.score}
          </div>
          <div style={this.state.highScoreStyle}>{this.props.highScore}</div>
        </div>
      </div>
    );
  }
}
export default WithResources(GameOverMenu);
