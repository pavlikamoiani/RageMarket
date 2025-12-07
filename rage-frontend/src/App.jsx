import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './assets/i18n/i18n'

import Layout from './Layout';

// Pages
import Banner from './assets/components/Banner'
import PopulalGames from './assets/components/PopulalGames'
import HotOffers from './assets/components/HotOffers'
import Games from './assets/components/Games'
import PurchasingProcess from './assets/components/PurchasingProcess'
import NewArrivals from './assets/components/NewArrivals'
import ForSellers from './assets/components/ForSellers'
import Login from './assets/components/Auth/Login'

function Home() {
  return (
    <>
      <Banner />
      <PopulalGames />
      <HotOffers />
      <Games />
      <PurchasingProcess />
      <NewArrivals />
      <ForSellers />
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
