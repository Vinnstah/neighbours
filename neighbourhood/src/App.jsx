import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Navbar from "./components/Nav";
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LendingPage from './pages/LendingPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sok" element={<SearchPage />} />
            <Route path="/lana-ut" element={<LendingPage />} />
            <Route path="/min-profil" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;