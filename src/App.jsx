import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { initGSAP } from './components/animations/gsapConfig';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import PageLoader from './components/common/PageLoader';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseHistory from './pages/CaseHistory';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader duration={1500} />
      <ScrollToTop />
      <Toaster position="bottom-center" />
      
      <Navbar />
      
      <main className={`flex-grow ${location.pathname === '/' ? '' : 'pt-[88px] lg:pt-[136px]'}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-history" element={<CaseHistory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
