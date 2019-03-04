import React from "react";
import Vector from "./../../../Vector/Vector";
import Bird from "./GameComponents/Bird";
import PipePool from "./GameComponents/PipePool";
import BackgorundManager from "./../../../BackgroundManager/BackgroundManager";
import Floor from "./GameComponents/Floor";

class Game extends React.Component {
  render = () =>
    Game.gameComponents.map((component, idx) => ({ ...component, key: idx }));
  shouldComoponentUpdate = () => false;
}

Game.instance = {
  name: "Flappy Bird",
  score: 0,
  gameOver: false,
  start: false,
  pause: true
};

Game.gameComponents = [
  <BackgorundManager />,
  <Bird
    cameraFollows={true}
    force={new Vector([30, 0])}
    position={new Vector([5, 30])}
    gravity={3}
    weight={20}
    controller={true}
  />,
  <PipePool position={new Vector([40, 0])} />,
  <Floor position={new Vector([0, 80])} dimensions={new Vector([100, 20])} />
];

export default Game;
