import React from 'react'
import WithResources from '../Resource Manager/HOC/WithResources'


class GameOverMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            styleImg: {
                height: '50vh',
                width: '50vw',
                backgroundPosition: '300px',
                backgroundImage: 'url('+(props.resourceManager.getImage(props.imagesource)),
                backgroundRepeat: "repeat-x",
                position: 'absolute',
                zIndex: props.zindex,
                overflow: "hidden"
            }
        }

    }

    render(){
        return(
            <div>
                <h1 style={this.state.styleImg}>Game Over</h1>
                <div>
                   Score = {this.props.score}
                   Best score = Get score from file somewhere.
                </div>
                <button>Restart</button>
            </div>
        )
    }
}
export default WithResources(GameOverMenu)