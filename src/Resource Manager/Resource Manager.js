class ResourceManager {
  importAll(r) {
    console.log("in import all");
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  constructor(GameName) {
    this.GameInstance = GameName;

    this.audioPuffin = [
      "./Resources/sounds/sfx_die.wav",
      "./Resources/sounds/sfx_hit.wav",
      "./Resources/sounds/sfx_point.wav",
      "./Resources/sounds/sfx_swooshing.wav",
      "./Resources/sounds/sfx_wing.wav"
    ];
    const images = this.importAll(
      require.context("./../Resources/Images", false, /\.(png|jpe?g|svg)$/)
    );
    this.images = images;
  }
  getImagePaths = async index => {
    if (this.GameInstance === "Flappy Bird") {
      return import(this.imagesPuffin[index]);
    } 
  };

  getImage = name => {
    return this.images[name];
  };

  getAudioPaths = index => {
    if (this.GameInstance === "Flappy Bird") {
      return this.audioPuffin[index];
    } 
  };
}

export default ResourceManager;
