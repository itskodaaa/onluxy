import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'px-8 py-3 font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full';
  
  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-brand-text focus:ring-brand-primary',
    secondary: 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    light: 'bg-white/80 text-brand-text hover:bg-white focus:ring-brand-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;