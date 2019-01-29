import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '5px',
        width: '5px',
        background: randomHexColor()
      }
    }
  }
  

  render () {
    return (
      <div style ={ this.state.style } > </div>
    )
  }
}

export default Pixel
