import React from 'react'
import './HUDManager.css'
import Menu from './Menu'
import WithResources from '../Resource Manager/HOC/WithResources'

class HUDManager extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: 0,
            start: false,
            dead: false,
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
                <Menu start={this.state.start} dead={this.state.dead} score={this.state.score} bestScore={this.state.bestScore}/>
                {/* <h2 style={this.state.styleScore}>{this.state.score}</h2> */}
            </div>
        )
    }
}
export default WithResources(HUDManager)