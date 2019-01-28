import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        style: {
          fontFamily: 'Times New Roman',
          height: '20px',
          width: '20px',
          backgroundColor: 'teal'
        }
      }
  }
  render () {
    return (
      <div style = {this.state.style}></div>
    )
  }
}

export default Pixel