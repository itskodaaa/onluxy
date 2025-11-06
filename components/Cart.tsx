import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';
import CloseIcon from './icons/CloseIcon';
import SpinnerIcon from './icons/SpinnerIcon';

const Cart: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    // Simulate API call for checkout
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderPlaced(true);
      clearCart();
    }, 1500);
  };
  
  const handleClose = () => {
      closeCart();
      if(isOrderPlaced) {
          setTimeout(() => setIsOrderPlaced(false), 500); // Reset for next time
      }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-brand-accent">
            <h2 className="font-serif text-2xl text-brand-text">Your Bag</h2>
            <button onClick={handleClose} className="text-brand-primary hover:text-brand-text">
              <CloseIcon />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-6">
            {isOrderPlaced ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="font-serif text-2xl text-brand-text">Thank You!</h3>
                    <p className="font-sans text-brand-primary mt-2">Your order has been placed successfully.</p>
                </div>
            ) : cartItems.length === 0 ? (
              <p className="text-center text-brand-primary font-sans mt-8">Your bag is empty.</p>
            ) : (
              <ul className="divide-y divide-brand-accent">
                {cartItems.map(item => (
                  <li key={item.id} className="flex py-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-32 object-cover mr-4 rounded-md"/>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-brand-text">{item.name}</h3>
                        <p className="font-sans text-sm text-brand-primary">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-brand-accent rounded-full">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-brand-primary hover:bg-brand-accent rounded-l-full">-</button>
                          <span className="px-4 text-sm font-sans">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-brand-primary hover:bg-brand-accent rounded-r-full">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs font-sans text-red-500 hover:underline">Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {cartItems.length > 0 && !isOrderPlaced && (
            <div className="p-6 border-t border-brand-accent bg-white">
                <div className="flex justify-between items-center mb-4 font-sans">
                    <span className="text-brand-primary">Subtotal</span>
                    <span className="font-semibold text-brand-text text-lg">${totalPrice.toFixed(2)}</span>
                </div>
                <form onSubmit={handleCheckout}>
                    <div className="space-y-3 mb-4">
                        <input type="text" placeholder="Full Name" required className="w-full p-3 border border-brand-accent rounded-full font-sans text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                        <input type="email" placeholder="Email Address" required className="w-full p-3 border border-brand-accent rounded-full font-sans text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                        <textarea placeholder="Shipping Address" rows={2} required className="w-full p-3 border border-brand-accent rounded-2xl font-sans text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"></textarea>
                    </div>
                    <Button type="submit" className="w-full flex justify-center items-center" disabled={isCheckingOut}>
                        {isCheckingOut ? <SpinnerIcon /> : 'Proceed to Checkout'}
                    </Button>
                </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;