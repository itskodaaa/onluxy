import React, { useState, useRef, useEffect } from 'react';
import CartIcon from './icons/CartIcon';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

interface HeaderProps {
  onNavigate: (view: 'home' | 'shop' | 'about' | 'contact' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { cartCount, openCart } = useCart();
  const { currentUser, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

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
            {currentUser ? (
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 px-4 py-2 bg-brand-accent rounded-full hover:bg-brand-secondary transition-colors"
                    >
                        <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-sans text-sm">
                            {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <span className="hidden sm:block font-sans text-sm text-brand-text">
                            {currentUser.displayName || 'User'}
                        </span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                            <div className="px-4 py-2 border-b border-brand-accent">
                                <p className="font-sans text-sm text-brand-text truncate">
                                    {currentUser.displayName || 'User'}
                                </p>
                                <p className="font-sans text-xs text-brand-primary truncate">
                                    {currentUser.email}
                                </p>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="w-full text-left px-4 py-2 font-sans text-sm text-brand-text hover:bg-brand-accent transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Button variant="primary" className="hidden sm:block !px-6 !py-2" onClick={() => onNavigate('login')}>
                    Login
                </Button>
            )}
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