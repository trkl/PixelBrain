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
            dead: false,
            bestScore: 25,
            font: this.props.font,
            styleScore: {
                zIndex: props.zindex,
                position: props.position,
                top: props.top,
                fontFamily: props.fontFamily,
                fontSize: props.fontSize,
                textAlign: this.props.textAlign,
                color: "#FFF",
                width: "100%",
              },
            gameOver: Game.instance.gameOver
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
                {/* <Menu start={this.state.start} gameOver={this.state.gameOver} score={this.state.score} bestScore={this.state.bestScore}>
                <style>{`@font-face {
                    font-family: '${this.state.styleScore.fontFamily}';
                    font-style: normal;
                    font-weight: 400;
                    src: url('${this.props.resourceManager.getFont(this.state.font)}');}`}
                 </style>
                
                </Menu> */}
               
            </div>
        )
    }
}
export default WithResources(HUDManager)