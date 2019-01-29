import React from 'react'
import { green, black } from 'ansi-colors';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        style: {
          fontFamily: 'Times New Roman',
          height: '5px',
          width: '5px',
          backgroundColor: randomHexColor()
        }
      } 
  }

  clickHandler = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '5px',
        width: '5px',
        backgroundColor: 'black'
      }
    })
  }

  mouseLeave = evt => {
    this.setState({
      style: {
        height: '5px', 
        width: '5px',
        backgroundColor: randomHexColor()
      }
    })
  }

  render () {
    return (
      <div onMouseLeave={this.mouseLeave} onClick={this.clickHandler} style={this.state.style}></div>
    )
  }
}

export default Pixel