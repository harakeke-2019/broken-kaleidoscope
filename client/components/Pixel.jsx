import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


 export class Pixel extends React.Component{
    constructor(){
        super()
        this.state = {
            style: {
                width: "20px",
                height: "20px",
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

    mouseEnter = ()=>{
        this.setState ({
            style:{
                width:"20px",
                height: "20px",
                backgroundColor: "green"
            }})
    }

    contextMenu = ()=>{
        event.preventDefault()
        this.setState ({
            style:{
                width:"20px",
                height: "20px",
                backgroundColor: "aqua"
            }})
    }

    doubleClick = ()=>{
        this.setState ({
            style:{
                width:"20px",
                height: "20px",
                backgroundColor: "white"
            }})
    }

    dragEnter = ()=>{
        this.setState ({
            style:{
                width:"20px",
                height: "20px",
                backgroundColor: "yellow"
            }})
    }

   
    render(){
        return(
            <div style = {this.state.style} onClick = {this.clickHandler} onMouseEnter = {this.mouseEnter}
            onContextMenu = {this.contextMenu} onDoubleClick = {this.doubleClick} onDragEnter ={this.dragEnter}></div>
        )
    }
}


