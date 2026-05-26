import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-heading font-medium tracking-wide rounded-full transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white px-8 py-3.5 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-surface border-2 border-primary text-primary hover:bg-primary-light px-8 py-3.5 shadow-sm hover:shadow-md transform hover:-translate-y-0.5',
    accent: 'bg-accent hover:bg-orange-500 text-white px-8 py-3.5 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    ghost: 'text-text-secondary hover:text-primary hover:bg-primary-light/50 px-6 py-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
