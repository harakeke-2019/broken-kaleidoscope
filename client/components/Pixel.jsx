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
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
      }
    }
  }
  render () {
    return (
      <div style = {this.state.style} ></div>
    )
  }
}

export default Pixel
