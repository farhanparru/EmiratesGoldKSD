// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-pink-200 text-gray-700 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Our Store */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About Our Store</h2>
          <p className="text-sm">Get in touch with us for a complete jewellery shopping experience!</p>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <p className="text-3xl font-bold text-pink-700">1800 5720 916</p>
          <p className="text-sm">Any Questions? Tollfree no for all stores</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div>
          <h3 className="text-lg font-semibold">GOLD SCHEME</h3>
          <p className="text-sm">Payment for India stores</p>
          <a href="#pay-online" className="text-pink-600 hover:underline">Pay Online</a>
        </div>
        <div>
          <h3 className="text-lg font-semibold">GOLD RATE</h3>
          <p className="text-sm">One best rate across India!</p>
          <a href="#view-gold-rate" className="text-pink-600 hover:underline">View Gold Rate</a>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 border-t border-gray-200 pt-8">
        {/* Get To Know Us */}
        <div>
          <h3 className="text-lg font-semibold">Get To Know Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about-us" className="hover:text-pink-600">About Us</a></li>
            <li><a href="#brides-of-india" className="hover:text-pink-600">Brides Of India</a></li>
            <li><a href="#our-stores" className="hover:text-pink-600">Our Stores</a></li>
            <li><a href="#csr" className="hover:text-pink-600">CSR</a></li>
            <li><a href="#blog" className="hover:text-pink-600">Blog</a></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className="text-lg font-semibold">Let Us Help You</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-pink-600">FAQ</a></li>
            <li><a href="#track-my-order" className="hover:text-pink-600">Track My Order</a></li>
            <li><a href="#ring-size-guide" className="hover:text-pink-600">Ring Size Guide</a></li>
            <li><a href="#bangle-size-guide" className="hover:text-pink-600">Bangle Size Guide</a></li>
            <li><a href="#site-map" className="hover:text-pink-600">Site Map</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#refund-policy" className="hover:text-pink-600">Refund Policy</a></li>
            <li><a href="#buyback-policy" className="hover:text-pink-600">Buyback Policy</a></li>
            <li><a href="#exchange-policy" className="hover:text-pink-600">Exchange Policy</a></li>
            <li><a href="#shipping-policy" className="hover:text-pink-600">Shipping Policy</a></li>
            <li><a href="#terms-of-service" className="hover:text-pink-600">Terms of Service</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <p className="text-sm">+91 22 62300916 (9:00am - 6:00pm)</p>
          <p className="text-sm">care.in@malabargoldanddiamonds.com</p>
          <p className="text-sm mt-4">Malabar Gold & Diamonds, Plot No 44, 45, Street Number 14, Marol MIDC Industry Estate, Andheri East, Mumbai - 400093</p>
        </div>
      </div>

      {/* Footer Bottom with Social Media and Payment Icons */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-600">
          <a href="#facebook" className="hover:text-pink-600">
          <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="#instagram" className="hover:text-pink-600">
          <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#twitter" className="hover:text-pink-600">
          <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#linkedin" className="hover:text-pink-600">
          <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Payment Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="/visa.png" alt="Visa" className="w-8" />
          <img src="/mastercard.png" alt="MasterCard" className="w-8" />
          <img src="/americanexpress.png" alt="American Express" className="w-8" />
          <img src="/cash-on-delivery.png" alt="Cash On Delivery" className="w-8" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
