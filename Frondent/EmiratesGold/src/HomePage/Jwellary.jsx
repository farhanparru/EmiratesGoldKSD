// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UAEJewelryShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out-quart'
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-600">Emirati</span> Diamond Excellence
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Masterpieces crafted with Arabian precision and global standards
        </p>
      </div>

      {/* Polished Diamonds Section */}
      <div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center"
        data-aos="fade-right"
      >
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-[500px]">
          <img
            src="https://www.asianstargroup.com/wp-content/uploads/2022/11/Home2.png"
            alt="Polished Diamonds"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Emirati Diamond Cutting</h3>
              <p className="text-yellow-200 mb-6">Five generations of master craftsmanship</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center">
                Discover Craftsmanship
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Arabian Diamond Precision</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Our Dubai-based master cutters transform rough diamonds into dazzling gems through techniques perfected over decades in the Arabian jewelry tradition. Each facet reflects our commitment to Emirati excellence.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">100% conflict-free diamonds sourced ethically</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">GIA-certified quality assurance</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Traditional Arabian cutting techniques</span>
            </li>
          </ul>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors font-medium flex items-center">
            View Diamond Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Diamond Jewelry Section */}
      <div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        data-aos="fade-left"
      >
        <div className="px-4 md:px-8 order-last lg:order-first">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Dubai Jewelry Collections</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Our Dubai Design District atelier creates jewelry that blends Arabian motifs with contemporary luxury. Each piece tells a story of Emirati heritage through modern craftsmanship.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <div className="text-yellow-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">Custom Designs</h4>
              <p className="text-sm text-gray-600">Personalized Arabian jewelry</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <div className="text-yellow-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800">24K Gold</h4>
              <p className="text-sm text-gray-600">Pure Emirati gold craftsmanship</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors font-medium flex items-center">
            Browse Collections
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-[500px]">
          <img
            src="https://www.asianstargroup.com/wp-content/uploads/2022/12/Home3.png"
            alt="Diamond Jewelry"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Dubai Luxury Jewelry</h3>
              <p className="text-yellow-200 mb-6">Where tradition meets innovation</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center">
                View Gallery
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute top-6 right-6 bg-yellow-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
            GIA Certified
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEJewelryShowcase;