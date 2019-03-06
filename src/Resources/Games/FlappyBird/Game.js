import React from "react";
import Vector from "./../../../Vector/Vector";
import Bird from "./GameComponents/Bird";
import PipePool from "./GameComponents/PipePool";
import Floor from "./GameComponents/Floor";
import HUDManager from "./HUD/HUDManager";
import Background from "../../../BackgroundManager/Background";

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
  pause: true,
  highScore: 0
};

Game.gameComponents = [
  <Background imagesource="Grass.png" speed={-1} zindex={1} />,
  <Background imagesource="kalsoy.png" speed={-0.2} zindex={-1} />,
  <Background imagesource="Clouds.png" speed={-0.6} zindex={-2} />,
  <Background imagesource="Background.png" speed={-0.2} zindex={-3} />,
  <HUDManager
    font="pixel.ttf"
    fontFamily="Pixel"
    textAlign="center"
    position="absolute"
    top="20px"
  />,
  <Bird
    name={"Bird"}
    position={new Vector([5, 30])}
    cameraFollows={true}
    force={new Vector([30, 0])}
    gravity={3}
    weight={20}
    controller={true}
  />,
  <PipePool position={new Vector([40, 0])} />
  // <Floor position={new Vector([0, 80])} dimensions={new Vector([100, 20])} />
];

export default Game;
