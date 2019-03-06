import React from 'react'
import {WithResources} from '../../../../Resource Manager/HOC/WithResources'


class GameOverMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            gameOverStyleImg: {
                height: '100vh',
                width: '100vw',
                maxWidth: "35%",
                maxHeight: "35%",
                backgroundImage: 'url('+(props.resourceManager.getImage("GameOver.png")),
                position: 'absolute',
                top: "23%",
                left: "35%",
                zIndex: 5,
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                backgroundSize: "contain",
            },
            scoreBoardStyleImg: {
                height: '100vh',
                width: '100vw',
                maxWidth: "35%",
                maxHeight: "35%",
                backgroundImage: 'url('+(props.resourceManager.getImage("FlappyScoreBoard.png")),
                position: 'absolute',
                top: "40%",
                left: "35%",
                zIndex: 5,
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                backgroundSize: "contain",
            },
            scoreStyle: {
                position: 'absolute',
                top: "28%",
                left: "85%",
                zIndex: 5,
                fontSize: 60,
                fontWeight: "bold",
                fontFamily: "Pixel"
            },
            highScoreStyle: {
                position: 'absolute',
                top: "64%",
                left: "85%",
                zIndex: 5,
                fontSize: 60,
                fontWeight: "bold",
                fontFamily: "Pixel"
            },          
        }
    }

    render(){
        return(
            <div>
                <div style={this.state.gameOverStyleImg}></div>
                <div style={this.state.scoreBoardStyleImg}>
                    <div style={this.state.scoreStyle}>{this.props.score}</div>
                    <div style={this.state.highScoreStyle}>{this.props.highScore}</div>
                </div>
            </div>
        )
    }
}
export default WithResources(GameOverMenu)