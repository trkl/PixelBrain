class ResourceManager{
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
            audioPuffin: [
                './Resources/sounds/sfx_die.wav',
                './Resources/sounds/sfx_hit.wav',
                './Resources/sounds/sfx_point.wav',
                './Resources/sounds/sfx_swooshing.wav',
                './Resources/sounds/sfx_wing.wav'
            ]
        }
    }
    getImagePaths = (index) => {
        if (this.state.GameInstance === 'Flappy Bird') {
            return this.state.imagesPuffin[index]
        } //else statement here
    }
    
    getAudioPaths = (index) => {
        if (this.state.GameInstance === 'Flappy Bird') {
            return this.state.audioPuffin[index]
        } //else statement here
    }
    
}


export default ResourceManager;