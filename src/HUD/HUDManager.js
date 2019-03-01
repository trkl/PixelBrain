import React from 'react'
import './HUDManager.css'
import Menu from './Menu'
import WithResources from '../Resource Manager/HOC/WithResources'
import Game from '../Game/Game';

class HUDManager extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: Game.instance.score,
            start: false,
            gameOver: Game.instance.gameOver,
            bestScore: 25
        }
    }

    handleScore(){

        this.setState(prevScore => {
            return {  
                score: prevScore.score + 1
            }
        })
    }

    displayMenu(){


    }

    render(){
        return(
            <div>
                <Menu start={this.state.start} gameOver={this.state.gameOver} score={this.state.score} bestScore={this.state.bestScore}/>
                {<h2>{this.state.score}</h2>}
            </div>
        )
    }
}
export default WithResources(HUDManager)