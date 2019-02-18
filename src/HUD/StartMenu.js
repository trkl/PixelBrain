import React from 'react'

class StartMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            //highScore: Get score from somewhere
        }
    }

    render(){
        return(
            <div>
                <h1>Flappy Bird</h1>
                <button>Play</button>
            </div>
        )
    }
}

export default StartMenu