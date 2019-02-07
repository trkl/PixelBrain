import puffTwo from "../Resources/Images/pufftwo";
import puffOne from "../Resources/Images/puffone";
import puffThree from "../Resources/Images/puffthree";
import kalsoy from "../Resources/Images/kalsoy";

class ResourceManager {
  constructor() {
    this.state = {
      imagePathsPuffin: [
        "./Resources/Images/flappybirdBackground.png",
        "./Resources/Images/Kalsoy.svg",
        "./Resources/Images/puffone.svg",
        "./Resources/Images/puffthree.svg",
        "./Resources/Images/pufftwo.svg"
      ],

      svgs: [puffOne, puffTwo, puffThree, kalsoy],

      audioPuffin: [
        "./Resources/sounds/sfx_die.wav",
        "./Resources/sounds/sfx_hit.wav",
        "./Resources/sounds/sfx_point.wav",
        "./Resources/sounds/sfx_swooshing.wav",
        "./Resources/sounds/sfx_wing.wav"
      ],
    };
  }
  getImagePaths = index => {
    return this.state.imagePathsPuffin[index];
  };

  getSvgs = index => {
    return this.state.svgs[index];
  };

  getAudioPaths = index => {
    return this.state.audioPuffin[index];
  };
}
export default ResourceManager;
