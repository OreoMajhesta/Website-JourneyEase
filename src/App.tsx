import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/pages/HomePage';
import { ThemeProvider } from './app/functions/ThemeContext'
import PriceList from './app/pages/PriceList';
import ScrollToTop from '../src/app/functions/ScrollTop'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PriceList" element={<PriceList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
