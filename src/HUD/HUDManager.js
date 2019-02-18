import React from 'react'
import './HUDManager.css'
import {Font} from './pixel.ttf'
import Menu from './Menu'

class HUDManager extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            score: 0,
            isPlaying: false,
            isDead: true,
            zIndex: props.zIndex,
            styleScore: {
                zIndex: props.zindex,
                position: "absolute",
                top: "30px",
                fontFamily: Font,
                fontSize: "50px",
                textAlign: "center",
                color: "#FFF",
                width: "100%"
            },    
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
                <Menu isPlaying={this.state.isPlaying} isDead={this.state.isDead} score={this.state.score}/>
                <h2 style={this.state.styleScore}>{this.state.score}</h2>
            </div>
            
        )
    }
}
export default HUDManager