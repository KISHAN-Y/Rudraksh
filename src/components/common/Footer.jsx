import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import ToothIcon from './ToothIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary font-heading font-bold text-2xl">
              <ToothIcon className="w-8 h-8" />
              <span>Rudreksh</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Expert dental care in Gujarat specializing in implants, RCT, braces, and cosmetic dentistry. 
              Your smile is the top priority.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Case History', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Dental Implants', 'Root Canal Treatment', 'Orthodontics', 'Cosmetic Dentistry', 'Teeth Whitening'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">
                  Rudreksh Dental Clinic,<br />
                  Your City, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919725041336" className="text-text-secondary text-sm hover:text-primary transition-colors">
                  +91 97250 41336
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@rudrekshdentalclinic.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                  info@rudrekshdentalclinic.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {currentYear} Rudreksh Dental Clinic. All rights reserved.
          </p>
          <p className="text-text-muted text-sm text-center md:text-right">
            Designed for Dr. Malkesh Pankhaniya BDS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
