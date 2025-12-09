import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './assets/i18n/i18n'

import Layout from './Layout';

// Pages
import Banner from './components/Banner'
import PopulalGames from './components/PopulalGames'
import HotOffers from './components/HotOffers'
import Games from './components/Games'
import PurchasingProcess from './components/PurchasingProcess'
import NewArrivals from './components/NewArrivals'
import ForSellers from './components/ForSellers'
import Login from './components/Auth/Login'
import CategoryPage from './components/CategoryPage';

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
          <Route path="/category/:gameId" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
