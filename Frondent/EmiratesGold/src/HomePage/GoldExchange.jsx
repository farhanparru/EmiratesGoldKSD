// eslint-disable-next-line no-unused-vars
import React from 'react';

const UAEGoldExchange = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-white p-6 md:p-12 rounded-xl shadow-xl border border-yellow-100 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png"
              alt="Gold Exchange Dubai"
              className="w-full h-auto md:h-96 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold">
            <span className="text-sm">0%</span> Deduction
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">EMIRATES GOLD EXCHANGE</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upgrade Your Gold in Dubai</h2>
            
            <div className="relative mb-6">
              <div className="absolute left-0 top-1/2 w-16 h-1 bg-yellow-600 transform -translate-y-1/2 hidden lg:block"></div>
              <div className="w-16 h-1 bg-yellow-600 mx-auto lg:mx-0"></div>
            </div>

            <ul className="space-y-4 mb-8 text-gray-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero deduction on gold exchange value - best rates in UAE</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exchange any gold jewelry - not limited to our products</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant valuation at our Dubai Gold Souk locations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Government-approved gold purity certification</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                </svg>
                Visit Our Exchange
              </button>
              <button className="bg-white hover:bg-gray-50 text-yellow-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-yellow-600 flex-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEGoldExchange;