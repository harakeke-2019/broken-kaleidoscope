import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


 export class Pixel extends React.Component{
    constructor(){
        super()
        this.state = {
            style: {
                width: "10px",
                height: "10px",
                backgroundColor: randomHexColor()
            }
        }
    }

    clickHandler = ()=>{
        this.setState ({
            style: {
                width: "20px",
                height: "20px",
                backgroundColor: "black"
        }})
    }
   
    render(){
        return(
            <div style = {this.state.style} onClick = {this.clickHandler}></div>
        )
    }
}


