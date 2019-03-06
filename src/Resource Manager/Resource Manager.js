class ResourceManager {
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  constructor(GameName) {
    this.GameInstance = GameName;

    const images = this.importAll(
      require.context("./../Resources/Images", false, /\.(png|jpe?g|svg)$/)
    );
    this.images = images;

    const audio = this.importAll(
      require.context("./../Resources/sounds", false, /\.(wav)$/)
    );
    this.audio = audio;

    const fonts = this.importAll(
      require.context("./../Resources/fonts", false, /\.(ttf)$/)
    );

    this.fonts = fonts;
  }

  getImage = name => {
    return this.images[name];
  };

  getAudioPath = index => {
    return this.audio[index];
  };

  getFont = font => {
    return this.fonts[font];
  };
}

export default ResourceManager;
