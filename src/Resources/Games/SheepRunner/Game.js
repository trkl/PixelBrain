import React from "react";
import Vector from "./../../../Vector/Vector";
import Runner from "./GameComponents/Runner";
import SheepPool from "./GameComponents/SheepPool";
import Floor from "./GameComponents/Floor";
import Background from "../../../BackgroundManager/Background";
import HUDManager from "./HUD/HUDManager";
import Sheep from "./GameComponents/Sheep";

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
  <HUDManager
    font="pixel.ttf"
    fontFamily="Pixel"
    textAlign="center"
    position="absolute"
    top="20px"
  />,
  <Background imagesource="SheepGrass.png" speed={-1} zindex={1} />,
  <Background imagesource="kalsoy.png" speed={-0.2} zindex={-1} />,
  <Background imagesource="Clouds.png" speed={-0.6} zindex={-2} />,
  <Background imagesource="SheepBackground.png" speed={-0.2} zindex={-3} />,
  <Background imagesource="disneyTruck.png" speed={-0.2} zindex={0} />,
  <Runner
    name="Runner"
    cameraFollows={true}
    force={new Vector([300, 0])}
    position={new Vector([0, 60])}
    gravity={4}
    weight={40}
    controller={true}
  />,
  <SheepPool position={new Vector([60, 0])} />,
  <Floor
    name="Floor"
    position={new Vector([0, 77])}
    dimensions={new Vector([100, 20])}
  />
];

export default Game;
