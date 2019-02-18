import React from "react";
import "./HUDManager.css";
import WithResources from "../Resource Manager/HOC/WithResources";

class HUDManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      playing: false,
      font: this.props.font,
      styleScore: {
        zIndex: props.zindex,
        position: props.position,
        top: props.top,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        textAlign: this.props.textAlign,
        color: "#FFF",
        width: "100%",
      }
    };
  }

  handleScore() {
    this.setState(prevScore => {
      return {
        score: prevScore.score + 1
      };
    });
  }

  displayMenu() {}

  render() {
    return (
      <div>
          
        <h2 style={this.state.styleScore}>
        <style>{`@font-face {
                 font-family: '${this.state.styleScore.fontFamily}';
                font-style: normal;
                font-weight: 400;
                 src: url('${this.props.resourceManager.getFont(this.state.font)}');}`}
                 </style>
          {this.state.score}
        </h2>
      </div>
    );
  }
}
export default WithResources(HUDManager);
