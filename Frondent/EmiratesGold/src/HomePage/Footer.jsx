import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import { SiMastercard, SiAmericanexpress } from 'react-icons/si';

const UAEFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Emirates Gold */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Emirates Gold</h3>
          <p className="text-gray-400 mb-4">
            The premier destination for luxury gold and diamond jewelry in the UAE, offering exquisite craftsmanship since 1999.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-yellow-600 pb-2">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Gold Rate Today</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">New Collections</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Custom Jewelry</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Gold Investment</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">VIP Services</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-yellow-600 pb-2">Customer Service</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Return Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-yellow-600 pb-2">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-yellow-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-400">Gold Souk, Deira, Dubai, UAE</span>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-yellow-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-400">+971 4 123 4567</span>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-yellow-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-400">info@emiratesgold.ae</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-gray-800">
        <h5 className="text-center text-gray-400 mb-6">We Accept</h5>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <RiVisaLine className="text-3xl text-blue-900" />
            <span className="ml-2 text-gray-300">Visa</span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <SiMastercard className="text-3xl text-red-600" />
            <span className="ml-2 text-gray-300">Mastercard</span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <SiAmericanexpress className="text-3xl text-blue-500" />
            <span className="ml-2 text-gray-300">American Express</span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            <span className="ml-2 text-gray-300">Cash</span>
          </div>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            <span className="ml-2 text-gray-300">Bank Transfer</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Emirates Gold & Diamonds. All Rights Reserved.</p>
        <p className="mt-2">Certified by Dubai Gold & Jewellery Group</p>
      </div>
    </footer>
  );
}

export default UAEFooter;