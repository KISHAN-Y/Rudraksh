import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, Mail } from 'lucide-react';
import ToothIcon from './ToothIcon';

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
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/#team' }, // Anchor tag for home page team section
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerClass = `w-full transition-all duration-300 ${
    isScrolled 
      ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10' 
      : 'bg-brand-dark py-6 border-b border-white/5'
  }`;

  return (
    <>
      <div className="fixed w-full z-[60] top-0 left-0 transition-all duration-300">
        {/* Top Utility Bar */}
        <div className="bg-brand-accent text-brand-dark font-heading text-xs py-2.5 select-none hidden lg:block border-b border-brand-accent/25">
          <div className="container mx-auto flex justify-between items-center px-6">
            <div className="flex items-center gap-2 font-medium">
              <Clock size={14} />
              <span>Open Hours: Monday - Saturday 09:00 AM - 08:00 PM</span>
            </div>
            <div className="flex gap-6 font-semibold">
              <a href="tel:+919725041336" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Phone size={14} />
                <span>Call: +91 97250 41336</span>
              </a>
              <a href="mailto:info@rudrekshdentalclinic.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Mail size={14} />
                <span>Email: info@rudrekshdentalclinic.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <header className={headerClass}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <NavLink to="/" className="flex items-center gap-2.5 text-white z-[70]">
                <ToothIcon className="w-8 h-8 md:w-9 md:h-9 text-brand-accent" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-heading font-black text-xl md:text-2xl leading-none tracking-tight">RUDREKSH</span>
                    <span className="font-heading font-black text-xl md:text-2xl leading-none tracking-tight text-brand-accent ml-1.5">DENTAL</span>
                  </div>
                  <span className="text-[8px] md:text-[9px] font-bold tracking-[0.28em] text-white/40 uppercase mt-1 leading-none">CLINIC</span>
                </div>
              </NavLink>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8 z-[70]">
                <ul className="flex gap-8">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.path.startsWith('/#') ? (
                        <a
                          href={link.path}
                          className="font-heading font-semibold text-sm transition-colors text-white/80 hover:text-brand-accent"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <NavLink 
                          to={link.path}
                          className={({ isActive }) => 
                            `font-heading font-semibold text-sm transition-colors hover:text-brand-accent ${
                              isActive ? 'text-brand-accent font-bold' : 'text-white/80'
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-4 ml-4">
                  <NavLink to="/contact">
                    <button className="bg-[#0e2c2c] border border-brand-accent/30 hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 transition-all duration-300 cursor-pointer rounded-sm">
                      Book Appointment
                    </button>
                  </NavLink>
                </div>
              </nav>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden text-white p-2 z-[70] cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

            </div>
          </div>
        </header>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-brand-dark z-50 flex flex-col pt-32 px-8 transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith('/#') ? (
                <a
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-heading font-semibold text-white/95 border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block font-heading font-semibold transition-colors border-b border-white/5 pb-4 ${isActive ? 'text-brand-accent' : 'text-white/95'}`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Phone className="text-brand-accent" size={18} />
            <span>+91 97250 41336</span>
          </div>
          <NavLink to="/contact">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-heading font-bold text-sm uppercase tracking-wider py-4 transition-colors cursor-pointer rounded-sm"
            >
              Book Appointment
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
