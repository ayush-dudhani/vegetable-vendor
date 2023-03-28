import React from 'react'
import Carousal from '../components/Carousal'
import Header from '../components/Header'
import { VegetableCard } from '../components/VegetableCard'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Carousal/>
      <VegetableCard/>
    </div>
  )
}

export default LandingPage
