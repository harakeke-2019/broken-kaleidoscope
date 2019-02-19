import React, {Component} from 'react'
import { green } from 'ansi-colors';

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()
      }
    }
    this.setStyle = this.setStyle.bind(this)
  }

  setStyle = () => {
    this.setState({
      style: this.state.style
    })
  }
  hover = () => {
    const style = {
      height: '100px',
      width: '100px',
      backgroundColor: 'green'
    }
    this.setState({style})
  }

  render () {
    return (
      <div onClick={this.setStyle} onMouseEnter={this.hover} style={this.state.style}>
      </div>
    )
  }
}

export default Pixel

