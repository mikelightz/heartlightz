import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Shop from './components/Shop';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Global smooth scroll intercept
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.defaultPrevented) return;

      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // Only intercept actual section anchors, not empty '#' links
      if (href?.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        if (currentPage !== 'home') {
          setCurrentPage('home');
          // Wait for DOM to update then scroll
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentPage]);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#94150D] selection:text-[#FCDFB9] flex flex-col md:flex-row">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main className="flex-1 w-full md:ml-[18rem] md:my-4 md:mr-4 md:w-[calc(100%-19rem)] pt-[100px] md:pt-0 bg-stars frame-inset">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <Philosophy />
            <Portfolio />
            <Protocol />
            <Subscribe />
          </>
        ) : currentPage === 'shop' ? (
          <Shop />
        ) : currentPage === 'tos' ? (
          <TermsOfService />
        ) : null}
        <Footer setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
}

export default App;

