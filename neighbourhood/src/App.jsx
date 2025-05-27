import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navigation/Nav";
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LendingPage from './pages/LendingPage';
import ProfilePage from './pages/ProfilePage';
import TopNavbar from './components/Navigation/TopNav';
import CategoryPageVerktyg from './pages/Category Pages/CategoryPageVerktyg';
import CategoryPageTradgard from './pages/Category Pages/CategoryPageTradgard';
import CategoryPageDjur from './pages/Category Pages/CategoryPageDjur';
import CategoryPageParty from './pages/Category Pages/CategoryPageParty';
import CategoryPageLivsmedel from './pages/Category Pages/CategoryPageLivsmedel';
import CategoryPageOvrigt from './pages/Category Pages/CategoryPageOvrigt';
import SingleProductPage from './pages/SingleProductPage';
import CategoryPage from './pages/Category Pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import MessagePage from './pages/MessagePage';
import { CartProvider } from './context/CartContext';
import PaymentPage from './pages/PaymentPage';
import PaidPage from './pages/PaidPage';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
       <TopNavbar />
        <Navbar />
          <Routes>
            {/* LOG IN LINKS */}
            <Route path="/logga-in" element={<LoginPage />} />
            <Route path="/registrera-konto" element={<RegisterPage />} />

            {/* NAVBAR LINKS */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/sok" element={<SearchPage />} />
            <Route path="/lana-ut" element={<LendingPage />} />
            <Route path="/min-profil" element={<ProfilePage />} />

            {/* TOP NAVBAR LINKS */}
            <Route path="/varukorg" element={<CartPage />} />
            <Route path="/meddelanden" element={<MessagePage />} />

            {/* CATEGORY LINKS */}
            <Route path="/kategori/verktyg" element={<CategoryPageVerktyg />} />
            <Route path="/kategori/tradgard" element={<CategoryPageTradgard />} />
            <Route path="/kategori/djur" element={<CategoryPageDjur />} />
            <Route path="/kategori/party" element={<CategoryPageParty />} />
            <Route path="/kategori/livsmedel" element={<CategoryPageLivsmedel />} />
            <Route path="/kategori/ovrigt" element={<CategoryPageOvrigt />} />
            <Route path="/kategorier" element={<CategoryPage />} /> 

             {/* PRODUCT LINKS */}
            <Route path="/produkt/:id" element={<SingleProductPage />} />
            <Route path="/produkter" element={<ProductsPage />} /> 
            <Route path="/betalning" element={<PaymentPage />} /> 
            <Route path="/genomfort-kop" element={<PaidPage />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
  );
}

export default App;