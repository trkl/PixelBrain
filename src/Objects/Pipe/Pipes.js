import React from "react";
import PipeDown from "./PipeDown";
import PipeUp from "./PipeUp";
import GameComponent from "../../GameObject/GameComponent";
import RigidBody from "../../GameObject/RigidBody";
import Vector from "../../Vector/Vector";
import CollisionZone from "../../GameObject/CollisionZone";

class Pipes extends React.Component {
  render() {
    return (
      <GameComponent parent={this} position={new Vector([10, 10])}>
        <div style={{ transition: "left 100ms linear ", position: "absolute" }}>
          <PipeDown up={this.props.up} />
          <PipeUp down={this.props.down} />
        </div>
        <CollisionZone dimensions={new Vector([40, 40])} />
        <CollisionZone dimensions={new Vector([20, 10])} />
        <CollisionZone dimensions={new Vector([30, 30])} />
      </GameComponent>
    );
  }
}

export default Pipes;
