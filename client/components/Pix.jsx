import React from 'react'


const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
const width = '5%'
const height = '10%'

export default class Pix extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        width,
        height,
        backgroundColor: randomColour()
      }
    }
  }

  changeColour = () => {
    const style = {
      width,
      height,
      backgroundColor: randomColour()
    }

    this.setState({
      style
    })
  }

  render () {
    const { style } = this.state
    return (
      <div
        onClick={() => this.changeColour()}
        onMouseEnter={() => this.changeColour()}
        style={style} />
    )
  }
}
