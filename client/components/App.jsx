import React from 'react'
import Pixel from './Pixel'

const App = () => {

  const components = []

  for(let i = 0; i < 6000; i++){
    components.push(<Pixel/>)
  }

  return (
    <div>
    {components}
    </div>
  )
}

export default App
