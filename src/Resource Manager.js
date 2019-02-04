import React, { Component } from 'react'

class ResourceManager extends Component {
    
     gameName;
     backgroundImage;
     mainCharacter;
    
    constructor(props){
        super(props);
    }

    setGameName = (value) =>{

        this.setState({
            gameName: value
          });
    }

    setImage = () => {
        {
            if(gameName == "Flappy Bird"){         
                return <div>
                    <img src='src\Resources\Images\bird.svg'></img>
                </div>
            }
        }
    }

    render() {
        var test = "test"

        return (
            <setImage/>
        )
    }
}

export default ResourceManager;