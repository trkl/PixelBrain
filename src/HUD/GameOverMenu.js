import React from 'react'

class GameOverMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Game Over</h1>
                <div>
                   Score = {this.props.score}
                   Best score = Get score from file somewhere.
                </div>
                <button>Restart</button>
            </div>
        )
    }
}
export default GameOverMenu