import GameComponent from "./GameComponent";
import React, { Component } from "react";
import RigidBody from "./RigidBody";
import CollisionZone from "./CollisionZone";
import Vector from "../Vector/Vector";

export default class Bird extends Component {
  render = () => (
    <GameComponent position={new Vector([10, 10])}>
      <RigidBody
        weight={10}
        velocity={new Vector([0, 0])}
        force={new Vector([10, 0])}
      />
      <CollisionZone dimensions={new Vector([10, 10])} />
    </GameComponent>
  );
}
