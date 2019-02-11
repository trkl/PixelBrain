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

    const audio = this.importAll(
      require.context("./../Resources/sounds", false, /\.(wav)$/)
    );
    this.audio = audio;
console.log(audio)
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
      return this.audio[index]; 
  };
}

export default ResourceManager;
