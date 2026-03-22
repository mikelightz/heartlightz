import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Meditations', href: 'https://www.youtube.com/@444FREQUENCIES', external: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Protocol', href: '#protocol' },
    { name: 'Subscribe', href: '#subscribe' }
  ];

  return (
    <>
      {/* Mobile Topbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] frame-outset m-2 p-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-[#94150D]" />
          <span className="font-serif text-xl font-bold tracking-wider text-3d">
            HeArt Lightz
          </span>
        </a>
        <button
          className="text-[#FCDFB9] hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Desktop Sidebar & Mobile Menu Dropdown */}
      <aside className={`
        fixed z-40 w-full md:w-64 bg-[#0a0a0a] frame-outset
        transform md:translate-x-0 transition-none
        flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        ${isMenuOpen ? 'inset-y-0 left-0 translate-x-0 top-[80px]' : '-translate-x-full md:translate-x-0 md:top-4 md:bottom-4 md:left-4'}
      `}>
        {/* Logo - Desktop Only */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hidden md:flex flex-col items-center mt-12 mb-12 gap-4 px-4 hover:opacity-80 transition-opacity">
          <Heart className="w-12 h-12 text-[#94150D]" />
          <div className="font-serif text-3xl font-bold tracking-wider text-3d text-center leading-tight">
            HeArt<br/>Lightz
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-col w-full px-6 py-8 md:py-0 gap-4 mt-auto md:mt-0 md:mb-auto">
          <hr className="border-[3px] [border-style:ridge] border-[#94150D] my-2 w-full" />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 px-4 bg-black border-[4px] border-[#94150D] [border-style:outset] hover:[border-style:inset] hover:bg-[#94150D] text-[#FCDFB9] hover:text-white font-bold tracking-widest uppercase text-center transition-none shadow-[2px_2px_0px_#000]"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-[3px] [border-style:ridge] border-[#94150D] my-2 w-full" />
          
          <a href="#subscribe" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-4 mb-8 text-center shadow-[4px_4px_0px_#000] active:shadow-[1px_1px_0px_#000]">
            Commence
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
