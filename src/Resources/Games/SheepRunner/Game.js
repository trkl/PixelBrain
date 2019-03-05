import React from "react";
import Vector from "./../../../Vector/Vector";
import Runner from "../SheepRunner/Runner";
import SheepPool from "../SheepRunner/SheepPool";
import BackgorundManager from "./../../../BackgroundManager/BackgroundManager";
import Floor from "../SheepRunner/Floor";
import Background from '../../../BackgroundManager/Background'

class Game extends React.Component {
  render = () =>
    Game.gameComponents.map((component, idx) => ({ ...component, key: idx }));
  shouldComoponentUpdate = () => false;
}

Game.instance = {
  name: "Sheep Runner",
  score: 0,
  gameOver: false,
  start: false,
  pause: true,
  highScore: 0
};

Game.gameComponents = [
  // <BackgorundManager />,
  <Background imagesource="SheepGrass.png" speed={-1} zindex={1} />,
  <Background imagesource="kalsoy.png" speed={-0.2} zindex={-1} />,
  <Background imagesource="Clouds.png" speed={-0.6} zindex={-2} />,
  <Background imagesource="SheepBackground.png" speed={-0.2} zindex={-3} />,
  <Background imagesource="disneyTruck.png" speed={-0.2} zindex={0} />,
  <Runner
    cameraFollows={true}
    force={new Vector([300, 0])}
    position={new Vector([0, 60])}
    gravity={4}
    weight={40}
    controller={true}
  />,
  <SheepPool position={new Vector([70, 0])} />,
  <Floor position={new Vector([0, 80])} dimensions={new Vector([100, 20])} />
];

export default Game;
