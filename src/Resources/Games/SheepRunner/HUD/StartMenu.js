import React from 'react'
import {WithResources} from '../../../../Resource Manager/HOC/WithResources'

class StartMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            styleImg: {
                height: '100vh',
                width: '100vw',
                maxWidth: "45%",
                maxHeight: "45%",
                backgroundImage: 'url('+(props.resourceManager.getImage("GetReady.png")),
                position: 'absolute',
                top: "23%",
                left: "35%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                backgroundRepeat: "repeat-x",
                overflow: "hidden",
                backgroundSize: "contain",
            },
             tapSpaceImgStyle: {
                height: '100vh',
                width: '100vw',
                maxWidth: "25%",
                maxHeight: "25%",
                backgroundImage: 'url('+(props.resourceManager.getImage("TapSpaceBar.png")),
                position: 'absolute',
                top: "50%",
                left: "45%",
                marginTop: "-50px",
                marginLeft: "-100px",
                zIndex: 5,
                backgroundRepeat: "repeat-x",
                overflow: "hidden",
                backgroundSize: "contain",
             },
        }
    }

    render(){
        return(
            <div>
                <div style={this.state.styleImg }>

                </div>
                <div style={this.state.tapSpaceImgStyle} >

                </div>
            </div>
        )
    }
}

export default WithResources(StartMenu)