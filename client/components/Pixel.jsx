import React, { Component} from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends Component {
  constructor (props){
    super(props)
    this.state={
        style:{
              height: '100px',
              width: '100px',
              backgroundColor: randomHexColor ()
            }
        }
    }




// setStyle = () => {
//   this.setState({
//     style: {this.state.style}
//   })
// }


render(){
  return(
    <div style={this.state.style}>
    </div>
  )
}
}



export default Pixel


// style: {
//       height: {height: '100px'},
//       width:  {width: '100px'},
//       backgroundColor: {backgroundColor: 'yellow'}
//
