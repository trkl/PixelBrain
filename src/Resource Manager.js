import Bird from './Resources/Images/bird.svg';
import Mario from './Resources/Images/title.svg';

class ResourceManager {
    constructor(GameName) {
        this.state = {
            GameInstance: GameName
        }
    }
    
    getImagePath() {
        {
            if (this.state.GameInstance === 'Flappy Bird') {
                return Bird
            } else {
                return Mario
            }
        }
    }
}
export default ResourceManager;