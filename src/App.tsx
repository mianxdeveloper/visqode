import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollProgress from './components/ScrollProgress';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-neon/30 selection:backdrop-blur-lg">
        <ScrollProgress />
        <StickyButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
