import React from 'react'
import LightDark from './components/Light-Dark/LightDark'
import ScrollIndicator from './components/Scroll-Indicator/ScrollIndicator'

const App = () => {
  return (
      <>
        {/* Light && Dark mode  */}
        {/* <LightDark/>  */}

        {/* Scroll Indicator */}
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

    </>
  )
}

export default App