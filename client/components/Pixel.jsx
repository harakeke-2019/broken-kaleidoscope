import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: randomHexColor()
      }
    })
  }

  onDragEnter = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'yellow'
      }
    })
  }

  onMouseEnter = evt => {
    this.setState({
      style: {
        height: '40px',
        width: '40px',
        backgroundColor: 'green'
      }
    })
  }

  render (props) {
    return (
      <div style ={this.state.style} onClick={this.clickHandler} onDragEnter={this.onDragEnter} onMouseEnter={this.onMouseEnter}></div>
    )
  }
}

export default Pixel
