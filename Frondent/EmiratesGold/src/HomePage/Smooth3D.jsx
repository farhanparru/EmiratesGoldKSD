// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import JewelryImage from '../assets/Images/first.jpg';
import JewelryImageS from '../assets/Images/seond.jpg';

const UAEJewelryShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // Animations trigger only once
      easing: 'ease-in-out-quart'
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-600">Emirati</span> Luxury Collections
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Inspired by the rich heritage and modern elegance of the UAE
        </p>
      </div>

      {/* Jewelry Display */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Jewelry Item - Women's Collection */}
        <div 
          className="relative group overflow-hidden rounded-xl shadow-lg border border-yellow-100"
          data-aos="fade-right"
        >
          <img 
            src={JewelryImage} 
            alt="Emirati Gold Necklace" 
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Emirati Gold Collection</h3>
              <p className="text-yellow-200 mb-4">Exclusive designs for women</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300">
                Explore Collection
              </button>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full">
            New Arrival
          </div>
        </div>

        {/* Right Jewelry Item - Men's Collection */}
        <div 
          className="relative group overflow-hidden rounded-xl shadow-lg border border-yellow-100"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img 
            src={JewelryImageS} 
            alt="Arabian Platinum Jewelry" 
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Arabian Platinum Collection</h3>
              <p className="text-yellow-200 mb-4">Elegant pieces for men</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300">
                Discover More
              </button>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
            Limited Edition
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          View All UAE Collections
        </button>
      </div>
    </div>
  );
};

export default UAEJewelryShowcase;