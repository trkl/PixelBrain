import React from "react";
import DecInc from "./../GameObject/DecInc";

export default class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameObjects: [<DecInc />]
    };
  }

  render = () =>
    this.state.gameObjects.map((elem, keyid) => ({
      ...elem,
      key: { keyid }
    }));
}
