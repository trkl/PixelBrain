class ResourceManager{
     importAll(r) {
         console.log('in import all')
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }


    constructor(GameName) {
        this.state = {
            GameInstance: GameName,
            imagesPuffin: [
                './Resources/Images/flappybirdBackground.png',
                './Resources/Images/Kalsoy.svg',
                './Resources/Images/puffone.svg',
                './Resources/Images/puffthree.svg',
                './Resources/Images/pufftwo.svg'
            ],
            images: [],
            audioPuffin: [
                './Resources/sounds/sfx_die.wav',
                './Resources/sounds/sfx_hit.wav',
                './Resources/sounds/sfx_point.wav',
                './Resources/sounds/sfx_swooshing.wav',
                './Resources/sounds/sfx_wing.wav'
            ]
        }
        console.log('in constructor')
        const images = this.importAll(require.context('./Resources/Images', false, /\.(png|jpe?g|svg)$/));
        this.state.images=images;
        console.log('after import')
        console.log(images);
        // this.setState({imagesPuffin: this.state.imagesPuffin.map()})
    }
    getImagePaths = async (index) => {
        if (this.state.GameInstance === 'Flappy Bird') {
            return import(this.state.imagesPuffin[index])
        } //else statement here
    }

    getImage = (name) => { 
        console.log("in getImage");  
        console.log(this.state.images )
        return this.state.images[name];
    }
    
    getAudioPaths = (index) => {
        if (this.state.GameInstance === 'Flappy Bird') {
            return this.state.audioPuffin[index]
        } //else statement here
    }
    
}


export default ResourceManager;