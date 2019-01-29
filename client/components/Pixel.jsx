import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        style: {
          fontFamily: 'Times New Roman',
          height: '100px',
          width: '100px',
          backgroundColor: randomHexColor()
        }
      } 
  }

  clickHandler = evt => {
    this.setState({
      style: {
        fontFamily: 'Times New Roman',
        height: '200px',
        width: '200px',
        backgroundColor: randomHexColor()
      }
      // ... update style here ...
    })
  }

  render () {
    return (
      <div onClick={this.clickHandler} style={this.state.style}></div>
    )
  }
}

export default Pixel