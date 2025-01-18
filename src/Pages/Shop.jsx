import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
import Hero2 from '../Components/Hero2/Hero2'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Shop
