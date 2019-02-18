import React from 'react'
import StartMenu from './StartMenu';
import GameOverMenu from './GameOverMenu';

class Menu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isPlaying: props.isPlaying,
            isDead: props.isDead

        }
    }

    render(){
        return(
            <div>
                {
                    <GameOverMenu score={this.props.score}/>
                   //(this.state.isPlaying === false && this.state.isDead === false) ? 
                   //<StartMenu score={this.props.score} /> : <GameOverMenu />
                   //Tenary here. Vísa hvørja menu skal vísast
                }
            </div>
        )
    }
}
export default Menu