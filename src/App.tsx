import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './app/functions/ThemeContext'
import HomePage from './app/pages/HomePage';
import PriceList from './app/pages/PriceList';
import ScrollToTop from '../src/app/functions/ScrollTop'; 
import ContactPage from './app/pages/ContactPage';
import OrderPage from './app/pages/OrderPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="pricelist" element={<PriceList />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/order/:gameId" element={<OrderPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
