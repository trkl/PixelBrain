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
            ]
        }
    }
    getImagePath = (index) => {
        if (this.state.GameInstance === 'Flappy Bird') {
            return this.state.imagesPuffin[index]
        } //else statement here
    }    
}


export default ResourceManager;