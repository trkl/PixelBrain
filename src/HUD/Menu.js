import React from 'react'
import StartMenu from './StartMenu';
import GameOverMenu from './GameOverMenu';

class Menu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            start: this.props.start,
            dead: this.props.dead,
        }
    }

    handleClick(){
        
        this.setState((prevState) => {
            console.log(prevState.dead)
            return {  
                dead: !prevState.dead
            }
        })
    }

    render(){
        let menu = null
        if(this.state.start === false){
            menu = <StartMenu />
        }
        if(this.state.dead){
            menu = <GameOverMenu score={0}/>
        }
        if(this.start && !this.dead){
            menu = null
        }
        return(
            <div>
                {<GameOverMenu score={0} />}
                {/* {menu} */}
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
            </div>
        )
    }
}
export default Menu