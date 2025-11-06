import React from 'react';
import Button from './Button';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-text leading-tight mb-6">
            Find stylish clothes for your daily life
          </h1>
          <p className="font-sans text-lg text-brand-primary max-w-md mx-auto md:mx-0 mb-8">
            Shop our wide selection of stylish women's clothing and accessories in our online store.
          </p>
          <Button onClick={onShopNow} variant="primary" className="mb-8">
            Shop now
          </Button>
          <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/avatar1/100/100" alt="Customer 1"/>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/avatar2/100/100" alt="Customer 2"/>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/avatar3/100/100" alt="Customer 3"/>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/avatar4/100/100" alt="Customer 4"/>
              </div>
              <div>
                <p className="font-sans font-bold text-brand-text">20K+</p>
                <p className="font-sans text-sm text-brand-primary">Happy customer</p>
              </div>
          </div>
        </div>
        <div className="relative h-full min-h-[400px] md:min-h-[600px]">
           <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[90%] bg-brand-accent rounded-t-full rounded-b-[10px]"></div>
           </div>
           <img 
            src="https://picsum.photos/seed/heromain/800/1200" 
            alt="Stylish woman" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-contain z-10"
          />
          <img 
            src="https://picsum.photos/seed/herosub/600/800"
            alt="Close-up of jeans"
            className="absolute bottom-10 left-0 w-1/3 rounded-lg shadow-xl z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;