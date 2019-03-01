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
            bestScore: 25,
            font: this.props.font,
            styleScore:{
                fontFamily: props.fontFamily,
                fontSize: props.fontSize
            }
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
                <Menu start={this.state.start} dead={this.state.dead} score={this.state.score} bestScore={this.state.bestScore}>
                <style>{`@font-face {
                    font-family: '${this.state.styleScore.fontFamily}';
                    font-style: normal;
                    font-weight: 400;
                    src: url('${this.props.resourceManager.getFont(this.state.font)}');}`}
                 </style>
                </Menu>
                
                {/* <h2 style={this.state.styleScore}>{this.state.score}</h2> */}
            </div>
        )
    }
}
export default WithResources(HUDManager)