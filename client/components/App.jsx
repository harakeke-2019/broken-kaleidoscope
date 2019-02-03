import React from 'react'
import {Pixel} from './Pixel'


const App = () => {
  return (
    <div className = 'container'>
    {Array.from({length:10000},()=><Pixel/>)}
    </div>
  )
}

export default App
