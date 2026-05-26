import React from 'react';
import { Link } from 'react-router-dom';
import ToothIcon from './ToothIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-0 border-t border-white/10">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-6 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <ToothIcon className="w-8 h-8 text-brand-accent" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-heading font-black text-xl tracking-tight">RUDREKSH</span>
                  <span className="font-heading font-black text-xl tracking-tight text-brand-accent ml-1.5">DENTAL</span>
                </div>
                <span className="text-[8px] font-bold tracking-[0.28em] text-white/40 uppercase mt-1 leading-none">CLINIC</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Expert dental care specializing in implants, single-sitting RCT, orthodontics, and cosmetic smile designs. Your healthy smile is our pride.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-accent mb-6">Navigation</h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-white/60 hover:text-brand-accent transition-colors text-sm font-heading"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-accent mb-6">Services</h4>
            <ul className="space-y-3.5">
              {[
                'Teeth Whitening',
                'Teeth Checkup',
                'Teeth Implants',
                'Root Canal Treatment'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-white/60 hover:text-brand-accent transition-colors text-sm font-heading"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details / Resources */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-accent mb-6">Resources</h4>
            <ul className="space-y-3.5">
              {[
                'Customer Services',
                'FAQ',
                'Blog',
                'Terms & Policy'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-white/60 hover:text-brand-accent transition-colors text-sm font-heading"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-accent text-brand-dark py-4 text-xs font-heading font-semibold select-none border-t border-brand-accent/20">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-center sm:text-left">
            Copyright &copy; {currentYear} Rudreksh Dental. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>-</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
