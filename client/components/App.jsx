import React from 'react'
import Pixel from './Pixel'

const App = () => {

  const components = []

  for(let i = 0; i < 10000; i++){
    components.push(<Pixel/>)
  }
  return components

  return (
    <div>
    {components}
    </div>
  )
}

export default App
