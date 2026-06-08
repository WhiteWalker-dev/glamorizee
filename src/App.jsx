import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import all pages
import Home from './pages/Glamorizee';
import Boutique from './pages/Boutique';
import MyAccount from './pages/MyAccount';
import NewArrivals from './pages/NewArrivals';
import ShoppingBag from './pages/ShoppingBag';
import Wishlist from './pages/Wishlist';
import Collections from './pages/Collections';
import SearchOverlay from './pages/SearchOverlay';
import AllCategories from './pages/AllCategories';
import Atelier from './pages/Atelier';
import ContactUs from './pages/ContactUs';
import Editorial from './pages/Editorial';
import InfoPages from './pages/InfoPages';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/bag" element={<ShoppingBag />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<SearchOverlay />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/info/:topic" element={<InfoPages />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
