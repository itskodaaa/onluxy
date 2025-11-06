import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import { getProducts } from './services/productService';
import { Product } from './types';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Button from './components/Button';
import StarIcon from './components/icons/StarIcon';

type View = 'home' | 'shop' | 'about' | 'contact' | 'login';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  const handleNavigate = (newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (view) {
      case 'shop':
        return <ShopView products={products} isLoading={isLoading} />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'login':
        return <LoginView onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomeView products={products} onShopNow={() => handleNavigate('shop')} />;
    }
  };

  return (
    <CartProvider>
      <div className="bg-brand-background text-brand-text font-sans">
        <Header onNavigate={handleNavigate} />
        <main>
          {renderView()}
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

const Section: React.FC<{children: React.ReactNode, className?: string}> = ({children, className = ''}) => (
    <div className={`container mx-auto px-6 py-16 md:py-24 ${className}`}>
        {children}
    </div>
);

const SectionTitle: React.FC<{children: React.ReactNode, subtitle?: string}> = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-4">{children}</h2>
        {subtitle && <p className="font-sans text-brand-primary max-w-2xl mx-auto">{subtitle}</p>}
    </div>
);


const HomeView: React.FC<{ products: Product[], onShopNow: () => void }> = ({ products, onShopNow }) => (
  <>
    <Hero onShopNow={onShopNow} />
    <EverydayWearSection products={products.slice(0, 6)} />
    <BestSellersSection products={products.slice(6, 9)} />
    <DiscountBannerSection onShopNow={onShopNow}/>
    <FashionTrendsSection />
    <TestimonialsSection />
    <NewsletterSection />
  </>
);

const EverydayWearSection: React.FC<{ products: Product[] }> = ({ products }) => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Tops', 'Dress', 'Bottoms'];
    
    const filteredProducts = products.filter(p => filter === 'All' || p.category === filter);

    return (
        <Section>
            <SectionTitle subtitle="Discover a wide range of women's clothing categories tailored to suit your fashion needs.">
                Choose the best everyday wear
            </SectionTitle>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors font-sans ${filter === cat ? 'bg-brand-primary text-white' : 'bg-brand-accent text-brand-text hover:bg-brand-secondary'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="text-center mt-12">
                <Button variant="secondary" onClick={() => alert('Navigate to full shop page!')}>See All</Button>
            </div>
        </Section>
    );
};

const BestSellersSection: React.FC<{ products: Product[] }> = ({ products }) => (
    <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-4 md:mb-0">Shop our best-selling</h2>
            <p className="font-sans text-brand-primary max-w-sm">Be inspired by our carefully curated selection of the season's hottest fashion picks.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </Section>
);

const DiscountBannerSection: React.FC<{onShopNow: () => void}> = ({onShopNow}) => (
    <Section>
        <div className="bg-brand-accent rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
                <h3 className="font-serif text-4xl md:text-5xl text-brand-text">Discount up to 40%</h3>
                <div className="flex items-center space-x-4 my-4">
                    <span className="font-serif text-3xl text-brand-primary line-through">$76</span>
                    <span className="font-serif text-3xl text-brand-text">$46</span>
                </div>
                <Button onClick={onShopNow} variant="light">Buy Now</Button>
            </div>
             <div className="order-1 md:order-2 h-64 md:h-auto">
                <img src="https://picsum.photos/seed/discount/800/600" alt="Discounted T-shirt" className="w-full h-full object-cover rounded-lg"/>
            </div>
        </div>
    </Section>
);

const FashionTrendsSection: React.FC = () => (
    <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-text mb-4 md:mb-0">The latest fashion trends</h2>
            <p className="font-sans text-brand-primary max-w-sm">Stay ahead of the fashion curve with our new arrivals.</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Simple casual', 'Hangout dress', 'Polo dress'].map((trend, i) => (
                <div key={trend} className="relative rounded-lg overflow-hidden h-96">
                    <img src={`https://picsum.photos/seed/trend${i}/600/800`} alt={trend} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
                        <h3 className="font-serif text-3xl text-white mb-8">{trend}</h3>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        { name: 'Riya Mediana', rating: 5.0, text: "I've never been disappointed with my purchases. The clothing is not only fashionable but also made with excellent craftsmanship.", avatar: 'https://picsum.photos/seed/riya/100/100' },
        { name: 'Sarah', rating: 4.5, text: "Onluxy has become my go-to online store for women's apparel. The quality is exceptional, and the prices are reasonable.", avatar: 'https://picsum.photos/seed/sarah/100/100' },
        { name: 'Emily', rating: 4.5, text: "I'm impressed by the fast shipping and hassle-free returns policy. The clothing I've ordered has always arrived promptly.", avatar: 'https://picsum.photos/seed/emily/100/100' },
        { name: 'Jessica', rating: 5.0, text: "I absolutely love the selection and quality of clothing at Onluxy. From trendy dresses to stylish tops, every item has exceeded my expectations.", avatar: 'https://picsum.photos/seed/jessica/100/100' }
    ];
    return (
        <Section>
            <SectionTitle subtitle="Read the testimonials below to see what they have to say about their experience with our women's clothing store.">
                Hear what our happy customers say
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map(t => (
                    <div key={t.name} className="bg-brand-accent p-8 rounded-lg">
                        <div className="flex items-center mb-4">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4"/>
                            <div>
                                <h4 className="font-serif text-lg text-brand-text">{t.name}</h4>
                                <div className="flex items-center">
                                    <span className="text-sm font-sans text-brand-primary mr-2">({t.rating.toFixed(1)})</span>
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" isFilled={i < Math.round(t.rating)} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-sans text-brand-primary">"{t.text}"</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const NewsletterSection: React.FC = () => (
    <Section>
        <div className="relative bg-brand-accent rounded-lg p-8 md:p-16 text-center overflow-hidden">
            <img src="https://picsum.photos/seed/newsletter/1200/400" alt="Fashion model" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
            <div className="relative z-10">
                <SectionTitle subtitle="Be the first to know about the latest fashion trends, exclusive offers, and exciting updates from our women's clothing store.">
                    Subscribe to our newsletter for exclusive offers
                </SectionTitle>
                <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Enter your email" required className="w-full px-6 py-3 rounded-full font-sans focus:ring-2 focus:ring-brand-primary focus:outline-none"/>
                    <Button type="submit" variant="primary" className="flex-shrink-0">Subscribe</Button>
                </form>
            </div>
        </div>
    </Section>
);

const ShopView: React.FC<{ products: Product[], isLoading: boolean }> = ({ products, isLoading }) => (
    <Section>
        <SectionTitle>Our Collection</SectionTitle>
        {isLoading ? (
            <div className="text-center font-sans text-brand-primary">Loading products...</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        )}
    </Section>
);

const AboutView: React.FC = () => (
    <Section>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/about/800/1000" alt="Onluxy boutique" className="w-full h-auto object-cover rounded-lg shadow-xl"/>
            </div>
            <div className="md:w-1/2">
                <h1 className="font-serif text-4xl md:text-5xl text-brand-text mb-6">Our Story</h1>
                <div className="font-sans text-brand-primary space-y-4 text-lg leading-relaxed">
                    <p>At Onluxy, we redefine sophistication through the art of fashion import and export. Specializing in luxury women’s clothing, we connect global brands, boutiques, and retailers with premium apparel that embodies elegance, quality, and timeless style.</p>
                    <p>With a deep understanding of the international fashion market, Onluxy curates and supplies exclusive collections from leading designers and trusted manufacturers across the world. From haute couture pieces to contemporary ready-to-wear outfits, we ensure every item reflects exceptional craftsmanship and refined taste.</p>
                    <p>Our mission is simple — to make luxury accessible through seamless global trade.</p>
                </div>
            </div>
        </div>
    </Section>
);

const ContactView: React.FC = () => (
    <Section>
        <div className="text-center max-w-3xl mx-auto">
            <SectionTitle subtitle="Whether you’re sourcing high-end garments for your boutique or seeking international expansion for your fashion line, we're here to help.">
                Get in Touch
            </SectionTitle>
            <ContactForm />
        </div>
    </Section>
);

const inputClasses = "w-full px-4 py-3 bg-brand-background border border-brand-accent rounded-full font-sans text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none transition-colors";

const LoginForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login functionality is a demo.");
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="login-email" className="sr-only">Email</label>
                <input type="email" id="login-email" placeholder="Email Address" required className={inputClasses} />
            </div>
            <div>
                <label htmlFor="login-password" className="sr-only">Password</label>
                <input type="password" id="login-password" placeholder="Password" required className={inputClasses} />
            </div>
            <Button type="submit" className="w-full">Login</Button>
        </form>
    );
};

const SignUpForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Sign up functionality is a demo.");
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="signup-name" className="sr-only">Full Name</label>
                <input type="text" id="signup-name" placeholder="Full Name" required className={inputClasses} />
            </div>
             <div>
                <label htmlFor="signup-email" className="sr-only">Email</label>
                <input type="email" id="signup-email" placeholder="Email Address" required className={inputClasses} />
            </div>
            <div>
                <label htmlFor="signup-password" className="sr-only">Password</label>
                <input type="password" id="signup-password" placeholder="Password" required className={inputClasses} />
            </div>
            <Button type="submit" className="w-full">Create Account</Button>
        </form>
    );
};


const LoginView: React.FC<{onNavigate: (view: View) => void}> = ({onNavigate}) => {
    const [isLoginView, setIsLoginView] = useState(true);

    const toggleView = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoginView(!isLoginView);
    }

    return (
        <Section className="flex justify-center items-center min-h-[calc(100vh-250px)]">
            <div className="w-full max-w-md bg-brand-surface p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="font-serif text-4xl text-brand-text text-center mb-2">
                    {isLoginView ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="font-sans text-brand-primary text-center mb-8">
                    {isLoginView ? 'Sign in to continue' : 'Join the Onluxy family'}
                </p>

                {isLoginView ? <LoginForm /> : <SignUpForm />}

                <div className="text-center mt-6">
                    <button onClick={toggleView} className="font-sans text-sm text-brand-primary hover:underline hover:text-brand-text transition-colors">
                        {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </Section>
    )
};


export default App;