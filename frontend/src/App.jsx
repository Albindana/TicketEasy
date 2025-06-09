import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Checkout from './pages/Checkout';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import Login from './pages/Login';
import Register from './pages/Register';
import EventSearch from './pages/EventSearch';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventSearch />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
