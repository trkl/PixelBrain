import React from 'react'
import StartMenu from './StartMenu';
import GameOverMenu from './GameOverMenu';

class Menu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            start: this.props.start,
            dead: this.props.dead,
            score: this.props.score,
            bestScore: this.props.bestScore,
        }

        this.handleStart = this.handleStart.bind(this)
        this.handleDeath = this.handleDeath.bind(this)
    }

    handleStart(){
        this.setState((prevState) => {
            return {  
                start: !prevState.start,
                dead: false
            }
        })
    }

    handleDeath(){
        this.setState((prevState) => {
            return {  
                dead: !prevState.dead,
                start: false
            }
        })
    }
    render(){
        let temp
        if(this.state.start){
            temp = <StartMenu />
        }
        if(this.state.dead){
            temp = <GameOverMenu score={this.state.score} bestScore={this.state.bestScore}/>
        }
        return(
            <div>
                {temp}
                <button onClick={this.handleStart}>start</button>
                <button onClick={this.handleDeath}>die</button>
            </div>
        )
    }
}
export default Menu