import React from 'react';

const Footer: React.FC = () => {
    const SocialIcon = ({ href, path }: { href: string; path: string }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-primary transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={path} />
            </svg>
        </a>
    );

  return (
    <footer className="bg-brand-background border-t border-brand-accent">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 text-center md:text-left">
            <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-brand-text tracking-wider mb-4">Onluxy</h2>
                <p className="font-sans text-brand-primary max-w-sm mx-auto md:mx-0">
                    Online shop for stylish women's clothing and accessories, helping you always stay on trend.
                </p>
            </div>
            <div>
                <h3 className="font-serif text-lg text-brand-text mb-4">Customer Care</h3>
                <ul className="space-y-2 font-sans text-brand-primary">
                    <li><a href="#" className="hover:underline">Payment Options</a></li>
                    <li><a href="#" className="hover:underline">Track Your Order</a></li>
                    <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                </ul>
            </div>
            <div>
                 <h3 className="font-serif text-lg text-brand-text mb-4">About Us</h3>
                <ul className="space-y-2 font-sans text-brand-primary">
                    <li><a href="#" className="hover:underline">Our Story</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div>
                 <h3 className="font-serif text-lg text-brand-text mb-4">Social Media</h3>
                 <div className="flex justify-center md:justify-start space-x-4">
                    <SocialIcon href="#" path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                    <SocialIcon href="#" path="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.07,1.646,0.07,4.85s-0.012,3.584-0.07,4.85c-0.148,3.227-1.669,4.771-4.919,4.919c-1.266,0.058-1.646,0.07-4.85,0.07s-3.584-0.012-4.85-0.07c-3.252-0.148-4.771-1.691-4.919-4.919c-0.058-1.265-0.07-1.646-0.07-4.85s0.012-3.584,0.07-4.85C2.44,3.93,3.959,2.38,7.211,2.232C8.475,2.175,8.855,2.163,12,2.163 M12,0C8.741,0,8.333,0.014,7.053,0.072C2.695,0.272,0.273,2.69,0.073,7.052C0.014,8.333,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,6.98,6.98c1.281,0.058,1.689,0.072,4.948,0.072s3.668-0.014,4.948-0.072c4.354-0.2,6.782-2.618,6.979-6.98c0.058-1.28,0.072-1.689,0.072-4.948s-0.014-3.668-0.072-4.948C21.728,2.69,19.306,0.274,14.948,0.073C13.668,0.014,13.259,0,12,0L12,0z M12,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162S15.403,5.838,12,5.838z M12,16.2c-2.31,0-4.182-1.872-4.182-4.182s1.872-4.182,4.182-4.182s4.182,1.872,4.182,4.182S14.31,16.2,12,16.2z M16.965,5.595c-1.254,0-2.275,1.022-2.275,2.276s1.021,2.275,2.275,2.275c1.254,0,2.275-1.021,2.275-2.275S18.219,5.595,16.965,5.595z" />
                 </div>
            </div>
        </div>
        <div className="border-t border-brand-accent mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm font-sans text-brand-primary">
            <p>&copy; {new Date().getFullYear()} Onluxy. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <span>halo@onluxystore.com</span>
                <span>+00 235 695 58</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;