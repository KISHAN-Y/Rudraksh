import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case History', path: '/case-history' },
    { name: 'Contact', path: '/contact' },
  ];

  // The outer header wrapper is fixed and always matches the scrolling transitions
  const headerClass = `fixed w-full z-[60] top-0 left-0 transition-all duration-300 ${
    isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-md' : 'bg-white'
  }`;

  return (
    <>
      <header className={headerClass}>
        {/* Tier 1: Top Contact & Social Bar (Collapses on Scroll) */}
        <div 
          className={`bg-primary text-white text-xs transition-all duration-300 ease-in-out overflow-hidden hidden lg:block ${
            isScrolled ? 'h-0 opacity-0' : 'h-11 py-3 border-b border-white/10'
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center h-full">
            {/* Left side info */}
            <div className="flex items-center gap-6 font-medium">
              <a 
                href="tel:+919725041336" 
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                aria-label="Phone number"
              >
                <Phone size={14} className="shrink-0" />
                <span>+91 97250 41336</span>
              </a>
              <a 
                href="mailto:info@rudrekshdentalclinic.com" 
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
                aria-label="Email address"
              >
                <Mail size={14} className="shrink-0" />
                <span>info@rudrekshdentalclinic.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={14} className="shrink-0" />
                <span>Opposite City Center, Main Road, Gujarat</span>
              </div>
            </div>
            {/* Right side social links using inline SVGs for reliability */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1.1-1.2H15V2h-2.5C10 2 9 3.2 9 5.5V8z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Youtube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.503a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.503a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Brand & Navigation Bar */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            
            {/* Logo matching the screenshot (Brand logo inside a D-shape container) */}
            <NavLink to="/" className="flex items-center gap-3 z-[70] group">
              <div className="w-10 h-10 bg-primary rounded-l-[8px] rounded-r-[20px] flex items-center justify-center shadow-md shadow-primary/25 transition-transform group-hover:scale-105 duration-300">
                <Logo className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl md:text-2xl leading-none text-text-primary">
                  Rudreksh<span className="text-primary font-black">.</span>
                </span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-text-muted uppercase mt-0.5">Dental Clinic</span>
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `font-heading font-semibold text-sm transition-all duration-300 py-1.5 border-b-2 hover:text-primary ${
                          isActive 
                            ? 'text-primary border-primary' 
                            : 'text-text-secondary border-transparent'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              {/* Rounded pill Book Now button from the screenshot */}
              <NavLink to="/contact" className="ml-4">
                <button className="bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm px-7 py-3 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Book Now
                </button>
              </NavLink>
            </nav>

            {/* Mobile Menu Toggle button */}
            <button 
              className="lg:hidden text-text-primary p-2 z-[70] rounded-xl hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (covers screens smaller than lg) */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col pt-28 px-6 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block font-heading font-bold transition-colors border-b border-divider pb-4 ${
                    isActive ? 'text-primary' : 'text-text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-text-secondary">
            <Phone className="text-primary shrink-0" size={24} />
            <span className="text-lg font-semibold">+91 97250 41336</span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <Mail className="text-primary shrink-0" size={24} />
            <span className="text-sm font-semibold truncate">info@rudrekshdentalclinic.com</span>
          </div>
          <NavLink to="/contact">
            <button className="bg-primary hover:bg-primary-dark text-white font-heading font-bold text-base py-4 rounded-xl w-full shadow-lg shadow-primary/20 transition-all duration-300">
              Book Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
