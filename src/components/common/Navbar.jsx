import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';
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
    { name: 'About', path: '/about' },
    { name: 'Case History', path: '/case-history' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed w-full z-[60] transition-all duration-300 ${
    isScrolled 
      ? 'bg-surface/95 backdrop-blur-md shadow-sm py-3' 
      : 'bg-page-bg py-5'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 text-primary z-[70]">
              <ToothIcon className="w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl md:text-2xl leading-none">Rudreksh</span>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-text-secondary uppercase mt-1">Dental Clinic</span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 z-[70]">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `font-medium text-sm transition-colors hover:text-primary ${
                          isActive ? 'text-primary font-semibold' : 'text-text-secondary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4 ml-4">
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <Phone size={18} />
                  <span>+91 97250 41336</span>
                </div>
                <NavLink to="/contact">
                  <Button variant="primary" className="!px-6 !py-2.5 !text-sm">
                    Book Appointment
                  </Button>
                </NavLink>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-text-primary p-2 z-[70]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col pt-28 px-6 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block font-heading font-medium transition-colors border-b border-border pb-4 ${isActive ? 'text-primary' : 'text-text-primary'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center gap-3 text-text-secondary">
            <Phone className="text-primary" size={24} />
            <span className="text-lg">+91 97250 41336</span>
          </div>
          <NavLink to="/contact">
            <Button variant="primary" fullWidth>
              Book Appointment
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
