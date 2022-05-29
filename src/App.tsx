import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import Product from './components/Product';
import About from './components/About';
import ProductDatail from './components/ProductDatail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDatail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
