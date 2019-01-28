import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        background: 'cornflowerblue'
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
