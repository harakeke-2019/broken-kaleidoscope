import React from 'react'

class Pix extends React.Component {
  constructor () {
    super()
  }

  render () {
    const randomHexColor = () =>
      `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    return (
      <div className='pixel' style={{fontFamily: 'Times New Roman', backgroundColor: randomHexColor()}}>
      </div>
    )
  }
}

export default Pix
