import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

// Import your image
import JewelryImage from '../assets/Images/first.jpg'; // Update with correct path
import JewelryImageS from '../assets/Images/seond.jpg'; // Update with correct path

const Smooth3D = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Animation duration
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto p-6 gap-8">
      {/* Left Section */}
      <div data-aos="fade-up" >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
        </h1>
        <img src={JewelryImage} alt="Karwachauth Necklace" className="mt-4 rounded-md shadow-md" />
      </div>

      {/* Right Section */}
      <div data-aos="fade-down" >
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
        </h1>
        <img src={JewelryImageS } alt="Platinum Jewelry for Men" className="mt-4 rounded-md shadow-md" />
      </div>
    </div>
  );
};

export default Smooth3D;
