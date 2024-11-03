// eslint-disable-next-line no-unused-vars
import React from 'react';

const GoldExchange = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-50 p-6 md:p-12 rounded-lg shadow-lg mx-auto max-w-4xl">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" // Replace with the actual image URL
          alt="Gold Exchange Program"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
     
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">A Stylish Upgrade</h2>
        <div className="border-b-2 border-purple-600 w-16 mb-4 mx-auto md:mx-0"></div>
        
        <p className="text-gray-600 mb-4">
          - Enjoy 0% Deduction on your gold exchange value. Please note: The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have.
        </p>
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
          Know More
        </button>
      </div>
    </div>
  );
};

export default GoldExchange;
