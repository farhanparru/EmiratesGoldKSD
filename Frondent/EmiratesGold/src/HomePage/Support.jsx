// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BiSolidPhoneCall,BiSolidXCircle } from "react-icons/bi";

const Support = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown on click
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3">
      {/* Button to trigger dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-pink-400 text-white py-3 px-5 rounded-full shadow-lg flex items-center"
        type="button"
        aria-expanded={isDropdownOpen}
        aria-label="Support options"
      >
        {isDropdownOpen ? <BiSolidXCircle size={24} /> : <BiSolidPhoneCall size={24} />}
      </button>

      {/* Dropdown list */}
      {isDropdownOpen && (
        <div className="bg-white shadow-lg rounded-md mt-2 p-3 text-gray-700">
          <ul className="flex flex-col gap-2">
            <li>
              <button
                className="bg-purple-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center"
                type="button"
              >
                🎥 Live Video Call
              </button>
            </li>
            <li>
              <button
                className="bg-orange-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center"
                type="button"
              >
                🏪 Book a Store Visit
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center"
                type="button"
              >
                🏠 Book Try At Home
              </button>
            </li>
            <li>
              <button
                className="bg-green-500 text-white py-3 px-5 rounded-full shadow-lg flex items-center"
                type="button"
              >
                💬 Chat on WhatsApp
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Support;
