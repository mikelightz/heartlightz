import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  // Global smooth scroll intercept
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#94150D] selection:text-[#FCDFB9] flex flex-col md:flex-row">
      <Navbar />

      <main className="flex-1 w-full md:ml-[18rem] md:my-4 md:mr-4 md:w-[calc(100%-19rem)] pt-[100px] md:pt-0 bg-stars frame-inset">
        <Hero />
        <Features />
        <Philosophy />
        <Portfolio />
        <Protocol />
        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}

export default App;
