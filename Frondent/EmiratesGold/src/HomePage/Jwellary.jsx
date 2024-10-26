// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jewelry = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
      
        {/* Section 1: Polished Diamonds (Left Margin) */}
        <div data-aos="flip-right" className="flex flex-col lg:flex-row items-center gap-8 lg:ml-10" style={{marginLeft:"-21.5rem"}}>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Polished Diamonds</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The difference between a rough diamond and a finished jewel is the countless hours put in by a craftsman to bring in the intense lustre and the spectacular finesse while delivering the best quality through diamond cutting and polishing.
              Over five decades, our qualified and skilled artisans have mastered the art of diamond cutting; the knowledge and experience to craft the best-polished masterpieces to reveal their full potential and intrinsic beauty. You hold a piece of that expert craftsmanship and secret knowledge in your hand when you purchase our natural diamonds.
            </p>
            <button className="mt-4 px-6 py-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-md inline-flex items-center">
              <span className="mr-2">→</span> Explore
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://www.asianstargroup.com/wp-content/uploads/2022/11/Home2.png"
              alt="Polished Diamond"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2: Diamond Jewellery (Right Margin) */}
        <div data-aos="flip-up" className="flex flex-col lg:flex-row items-center gap-8 lg:mr-10" style={{marginRight:"-24.5rem"}}>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Diamond Jewellery</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether it is life’s most memorable moments or even the small, mundane moments of everyday life, our diamonds illuminate life’s celebrations. The journey of creating breathtaking jewellery begins with the creativity and vision of our award-winning designers. We make jewellery more relevant and timeless, with superior craftsmanship and evocative everyday stories woven into our designs.
            </p>
            <button className="mt-4 px-6 py-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded-md inline-flex items-center">
              <span className="mr-2">→</span> Explore
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://www.asianstargroup.com/wp-content/uploads/2022/12/Home3.png"
              alt="Diamond Jewellery"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
