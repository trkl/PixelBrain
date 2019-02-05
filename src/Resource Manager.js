class ResourceManager {
    constructor(GameName) {
        this.state = {
            GameInstance: GameName,
            imagesPuffin: [
                './flappybirdBackground.png',
                './Resources/Images/Kalsoy.svg',
                './Resources/Images/puffone.svg',
                './Resources/Images/puffthree.svg',
                './Resources/Images/pufftwo.svg'
            ]

        }
    }
    getImagePath() {
        if (this.state.GameInstance === 'Flappy Bird') {
            return this.state.imagesPuffin
        } //else statement here
    }    
}


export default ResourceManager;