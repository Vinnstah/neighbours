import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navigation/Nav";
import TopNavbar from './components/Navigation/TopNav';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LendingPage from './pages/LendingPage';
import ProfilePage from './pages/ProfilePage';
import CategoryPageVerktyg from './pages/Category Pages/CategoryPageVerktyg';
import CategoryPageTradgard from './pages/Category Pages/CategoryPageTradgard';
import CategoryPageDjur from './pages/Category Pages/CategoryPageDjur';
import CategoryPageParty from './pages/Category Pages/CategoryPageParty';
import CategoryPageLivsmedel from './pages/Category Pages/CategoryPageLivsmedel';
import CategoryPageOvrigt from './pages/Category Pages/CategoryPageOvrigt';
import CategoryPage from './pages/Category Pages/CategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import MessagePage from './pages/MessagePage';
import PaymentPage from './pages/PaymentPage';
import { CartProvider } from './context/CartContext';

const AppRoutes = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/logga-in", "/registrera-konto"];
  const shouldHideNavbars = hideNavbarPaths.includes(location.pathname);

  return (
    <CartProvider>
      {!shouldHideNavbars && <TopNavbar />}
      {!shouldHideNavbars && <Navbar />}
      <Routes>

        {/* Page links */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/logga-in" element={<LoginPage />} />
        <Route path="/registrera-konto" element={<RegisterPage />} />
        <Route path="/sok" element={<SearchPage />} />
        <Route path="/lana-ut" element={<LendingPage />} />
        <Route path="/min-profil" element={<ProfilePage />} />
        <Route path="/kategorier" element={<CategoryPage />} />
        <Route path="/produkt/:id" element={<SingleProductPage />} />
        <Route path="/produkter" element={<ProductsPage />} />
        <Route path="/varukorg" element={<CartPage />} />
        <Route path="/meddelanden" element={<MessagePage />} />
        <Route path="/betalning" element={<PaymentPage />} />

         {/* Category links */}
        <Route path="/kategori/verktyg" element={<CategoryPageVerktyg />} />
        <Route path="/kategori/tradgard" element={<CategoryPageTradgard />} />
        <Route path="/kategori/djur" element={<CategoryPageDjur />} />
        <Route path="/kategori/party" element={<CategoryPageParty />} />
        <Route path="/kategori/livsmedel" element={<CategoryPageLivsmedel />} />
        <Route path="/kategori/ovrigt" element={<CategoryPageOvrigt />} />
      </Routes>
    </CartProvider>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
