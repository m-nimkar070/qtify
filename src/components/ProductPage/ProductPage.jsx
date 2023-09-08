import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Cards/Cards'

const ProductPage = () => {
  return (
    <div>
      <HeroSection />
      <Cards followers={'100 follows'} name={'New Bollywood'}/>
    </div>
  )
}

export default ProductPage
