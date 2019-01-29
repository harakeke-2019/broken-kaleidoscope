import React from 'react'
import Pixel from './Pixel'

const App = () => {


  return Array.from(Array(6000), (_,i) => i + 1).fill(<Pixel />)

  // return (
  //   <div>
  //   {components}
  //   </div>
  // )
}

export default App
