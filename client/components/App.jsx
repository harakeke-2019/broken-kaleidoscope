import React from 'react'


import Pixel from './Pixel'

const App = () => {
  let componentArray = []
  for (let i = 0; i < 100000; i++)
  componentArray.push(<Pixel key={i}/>)
  return (
    <div>
      {componentArray}
    </div>
  )
}

export default App
