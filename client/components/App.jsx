import React from 'react'
import Pixel from './Pixel'

//const pixels = Array.from({length:5},(v,i)=>i)
const App = () => {
  return (  
    Array.from({length:500}, (e,i) => i).fill(<Pixel />)    
  )
}

export default App
