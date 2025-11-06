import React from 'react';
import CartIcon from './icons/CartIcon';
import { useCart } from '../context/CartContext';
import Button from './Button';

interface HeaderProps {
  onNavigate: (view: 'home' | 'shop' | 'about' | 'contact' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { cartCount, openCart } = useCart();

  const navLinkClasses = "font-sans text-sm tracking-wider uppercase text-brand-text hover:text-brand-primary transition-colors";

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-background border-b border-brand-accent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="font-serif text-3xl font-bold text-brand-text tracking-wider">
          Onluxy
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className={navLinkClasses}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }} className={navLinkClasses}>Shop</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className={navLinkClasses}>About</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className={navLinkClasses}>Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
            <Button variant="primary" className="hidden sm:block !px-6 !py-2" onClick={() => onNavigate('login')}>Login</Button>
            <button onClick={openCart} className="relative text-brand-text hover:text-brand-primary transition-colors">
                <CartIcon />
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-brand-primary text-white text-xs rounded-full">
                    {cartCount}
                </span>
                )}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;