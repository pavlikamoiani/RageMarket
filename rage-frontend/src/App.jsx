import { useState } from 'react'
import './App.css'
import './assets/i18n/i18n'
import Header from './assets/components/Header'
import Banner from './assets/components/Banner'
import PopulalGames from './assets/components/PopulalGames'
import HotOffers from './assets/components/HotOffers'
import Games from './assets/components/Games'
import PurchasingProcess from './assets/components/PurchasingProcess'
import NewArrivals from './assets/components/NewArrivals'
import ForSellers from './assets/components/ForSellers'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <PopulalGames />
      <HotOffers />
      <Games />
      <PurchasingProcess />
      <NewArrivals />
      <ForSellers />
      <Footer />
    </>
  )
}

export default App
