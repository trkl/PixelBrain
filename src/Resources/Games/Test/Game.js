import { Component } from "react";

export default class Game extends Component {
  render = () => Game.gameComponents;
  shouldComponentUpdate = () => false;
}

Game.instance = {
  pause: false,
  gameOver: false,
  start: true
};

Game.gameComponents = [];
