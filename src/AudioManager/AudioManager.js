import ResourceManager from "../Resource Manager/Resource Manager";

class AudioManager {
  constructor(props) {
    // super(props);
    this.playSound = this.playSound.bind(this);
    this.resourceManager = new ResourceManager();
  }

  playSound(sound) {
    var audio = new Audio(this.resourceManager.getAudioPath(sound));
    audio.play();
  }
}

export default AudioManager;
