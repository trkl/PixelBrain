import GameComponent from "../../GameObject/GameComponent";
import React, { Component } from "react";
import RigidBody from "../../GameObject/RigidBody";
import CollisionZone from "../../GameObject/CollisionZone";
import Vector from "../../Vector/Vector";
import Sprite from "./Sprite";

export default class Bird extends Component {
  render = () => (
    <GameComponent position={new Vector([10, 10])}>
      <RigidBody
        weight={200}
        velocity={new Vector([100, 100])}
        force={new Vector([100, 100])}
      />
      <Sprite width={1584} height={583} n={3} scale={.1} imagesource={"puffinpixel.png"} />
      <CollisionZone dimensions={new Vector([10, 10])} />
    </GameComponent>
  );
}
