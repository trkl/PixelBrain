import React from 'react'
import './HUDManager.css'
import Menu from './Menu'
import WithResources from '../Resource Manager/HOC/WithResources'
import Game from '../Game/Game';
import Timer from '../Timer/Timer';

class HUDManager extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: Game.instance.score,
            start: Game.instance.score,
            gameOver: Game.instance.gameOver,
            highScore: Game.instance.highScore
        }
    }

    componentWillMount() {
        Timer.instance.subscribe(this.updateScore);
        Timer.instance.subscribe(this.updateGameOver);
    }
    updateScore = () => {
        if(Game.instance.score !==this.state.score) {
            this.setState({score: Game.instance.score})
            if(this.state.score > this.state.highScore){
                this.setState({highScore: this.state.score})
            }
        }
    }
    updateGameOver = () => {
        if(Game.instance.gameOver !== this.state.gameOver) {
            this.setState({gameOver: Game.instance.gameOver})
            Game.instance.pause = true
        }
    }
    
    render(){
        return(
            <div>
                <Menu start={this.state.start} gameOver={this.state.gameOver} score={this.state.score} highScore={this.state.highScore}/>
                {<h2>{this.state.score}</h2>}
            </div>
        )
    }
}
export default WithResources(HUDManager)