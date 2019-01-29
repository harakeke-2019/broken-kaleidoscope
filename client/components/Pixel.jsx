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
        height: '40px',
        width: '40px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = () => { this.setState(
    {style: {
      height: '40px',
      width: '40px',
      backgroundColor: randomHexColor()
    }
    })
  }

  render () {
    return (
      <div style = {this.state.style} onClick={() => this.clickHandler()}></div>
    )
  }
}


// render(){
//   return(
//     <div onClick={this.state.backgroundColor}></div>
//   )
// }

export default Pixel
