import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        background: randomHexColor()
      }
    }
  }
// event handler
  clickHandler = evt => {
    this.setState({
        style: {
          height: '100px',
          width: '100px',
          background: randomHexColor()
        }
       })
    }
// onMouseEnter handler

mouseOver = evt => {
  this.setState({
      style: {
        height: '100px',
        width: '100px',
        background: 'green'
      }
     })
  }

  render () {
    return (
      <div style ={ this.state.style } onClick={this.clickHandler} onMouseEnter={this.mouseOver}>  </div>
    )
  }
}

export default Pixel
