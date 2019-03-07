import React, { Component } from "react";
import GameComponent from "../../../../GameObject/GameComponent";
import CollisionZone from "../../../../GameObject/CollisionZone";
import Game from "./../Game";
import Bird from "./Bird";

export default class Floor extends Component {
  constructor(props) {
    super(props);

    for (const i in this.props) {
      this[i] = this.props[i];
    }
  }
  render = () => (
    <GameComponent parent={this} position={this.position}>
      <CollisionZone dimensions={this.props.dimensions} />
    </GameComponent>
  );
  handleCollision = collider => {
    if (collider.object.constructor.name === Bird.prototype.constructor.name) {
      Game.instance.gameOver = true;
    }
  };
  beforeFrameRender() {
    this.gameComponent.position.x = 0;
  }
}
