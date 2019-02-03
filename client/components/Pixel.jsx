import React from 'react'

 export class Pixel extends React.Component{
    constructor(){
        super()
        this.state = {
            style: {
                width: "10px",
                height: "10px",
                backgroundColor: "cornflowerblue"
            }
        }
    }
    render(){
        return(
            <div style = {this.state.style}></div>
        )
    }
}


