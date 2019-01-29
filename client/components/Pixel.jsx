import React from 'react'
import { green, black } from 'ansi-colors';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        style: {
          height: '0px',
          width: '0px',
          // borderRadius: '50%',
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderTop: '50px solid white',
          backgroundColor: 'black'
        }
      } 
  }

  clickHandler = evt => {
    this.setState({
      style: {
        height: '0px',
        width: '0px',
        // borderRadius: '50%',
        borderLeft: '25px solid transparent',
        borderRight: '25px solid transparent',
        borderBottom: '50px solid black',
        backgroundColor: 'black'
      }
    })
  }

  mouseEnter = evt => {
    this.setState({
      style: {
          height: '0px',
          width: '0px',
          // borderRadius: '50%',
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderTop: '50px solid white',
          backgroundColor: randomHexColor()
      }
    })
  }

  mouseLeave = evt => {
    this.setState({
      style: {
          height: '0px',
          width: '0px',
          // borderRadius: '50%',
          borderLeft: '25x solid transparent',
          borderRight: '25px solid transparent',
          borderTop: '50px solid light grey',
          backgroundColor: 'black'
      }
    })
  }

  render () {
    return (
      <div onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseEnter} onClick={this.clickHandler} style={this.state.style}></div>
    )
  }
}

export default Pixel