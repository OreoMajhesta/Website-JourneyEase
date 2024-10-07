import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/pages/HomePage';
import { ThemeProvider } from './app/functions/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
