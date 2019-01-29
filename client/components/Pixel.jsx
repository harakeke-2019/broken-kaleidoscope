import React from 'react'

// const Pixel = () => {
//   return (
//     <div style= {{
//       height: '40px',
//       width: '40px',
//       backgroundColor: 'blue'
//     }}></div>
//   )
// }
const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
  }

  hoverHandler = () => { this.setState(
    {style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor()
    }
    })
  }
  clickHandler = () => { this.setState(
    {style: {
      height: '50px',
      width: '50px',
      backgroundColor: 'green'
    }
    })
  }
  dragHandler = () => { this.setState(
    {style: {
      height: '50px',
      width: '50px',
      backgroundColor: 'yellow'
    }
    })
  }
  rClick = (evt) => {
    evt.preventDefault();
    return this.setState(
    {style: {
      height: '50px',
      width: '50px',
      backgroundColor: 'black'
    }
    })
  }


  render () {
    return (
      <div style = 
      {this.state.style}
       onMouseEnter={() => this.hoverHandler()}
       onClick={() => this.clickHandler()}
        onDragEnter={()=> this.dragHandler()}
        onContextMenu={(evt)=> this.rClick(evt)} ></div>
    )
  }
}


// render(){
//   return(
//     <div onClick={this.state.backgroundColor}></div>
//   )
// }

export default Pixel
