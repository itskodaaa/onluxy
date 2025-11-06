import React from 'react';
import { Product } from '../types';
import Button from './Button';
import { useCart } from '../context/CartContext';
import HeartIcon from './icons/HeartIcon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative bg-brand-accent rounded-lg overflow-hidden text-center">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-auto aspect-[3/4] object-cover" 
        />
        <button className="absolute top-4 right-4 text-brand-text bg-white/70 p-2 rounded-full hover:text-red-500 transition-colors">
            <HeartIcon />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex justify-between items-center text-white">
            <div>
                <h3 className="font-serif text-lg text-left">{product.name}</h3>
                <p className="font-sans text-md text-left">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-white/90 text-brand-text text-xs uppercase font-bold px-4 py-2 rounded-full hover:bg-white"
            >
              Shop Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;