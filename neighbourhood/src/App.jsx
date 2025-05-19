import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Nav";
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LendingPage from './pages/LendingPage';
import ProfilePage from './pages/ProfilePage';
import TopNavbar from './components/TopNav';
import CategoryPageVerktyg from './pages/CategoryPageVerktyg';
import CategoryPageTradgard from './pages/CategoryPageTradgard';
import CategoryPageDjur from './pages/CategoryPageDjur';
import CategoryPageParty from './pages/CategoryPageParty';
import CategoryPageLivsmedel from './pages/CategoryPageLivsmedel';
import CategoryPageOvrigt from './pages/CategoryPageOvrigt';
import SingleProductPage from './pages/SingleProductPage';
import ProductsPage from './pages/ProductsPage';

function App() {

  return (
    <div>
      <TopNavbar />
      <BrowserRouter>
        <Navbar />
          <Routes>
            {/* NAVBAR LINKS */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/sok" element={<SearchPage />} />
            <Route path="/lana-ut" element={<LendingPage />} />
            <Route path="/min-profil" element={<ProfilePage />} />

            {/* CATEGORY LINKS */}
            <Route path="/kategori/verktyg" element={<CategoryPageVerktyg />} />
            <Route path="/kategori/tradgard" element={<CategoryPageTradgard />} />
            <Route path="/kategori/djur" element={<CategoryPageDjur />} />
            <Route path="/kategori/party" element={<CategoryPageParty />} />
            <Route path="/kategori/livsmedel" element={<CategoryPageLivsmedel />} />
            <Route path="/kategori/ovrigt" element={<CategoryPageOvrigt />} />
            <Route path="/produkter" element={<ProductsPage />} /> 

             {/* PRODUCT LINKS */}
            <Route path="/produkt/:id" element={<SingleProductPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;