if (typeof require.context === "undefined") {
  const fs = require("fs");
  const path = require("path");

  require.context = (
    base = ".",
    scanSubDirectories = false,
    regularExpression = /\.js$/
  ) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach(file => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}

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
