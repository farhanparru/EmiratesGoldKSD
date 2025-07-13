// eslint-disable-next-line no-unused-vars
import React from 'react';
import emirates from '../assets/Images/image.png'

const UAEGiftingSection = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-12 px-4 md:px-8 lg:px-16">
      {/* Gifting Section */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            <span className="text-yellow-600">Emirati</span> Luxury Gifting
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exquisite jewelry gifts for life s most precious moments
          </p>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        {/* Gifting Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {[
            {
              title: "Emirati Birthday",
              image: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Birthday.jpg",
              description: "Gold gifts for special birthdays"
            },
            {
              title: "Arabian Anniversary",
              image: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/anniversary.jpg",
              description: "Celebrate love with Arabian gold"
            },
            {
              title: "Personalized Arabic",
              image: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Personalized.jpg",
              description: "Custom Arabic calligraphy jewelry"
            },
            {
              title: "Royal Baby Gift",
              image: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/baby-birth.jpg",
              description: "Traditional gold gifts for newborns"
            },
            {
              title: "Eid Collection",
              image: "https://content3.jdmagicbox.com/comp/kasaragod/s5/9999p4994.4994.190331214712.u9s5/catalogue/kasargod-emirates-gold-international-kasaragod-ho-kasaragod-jewellery-showrooms-he6y55ospt.jpg",
              description: "Festive jewelry for Eid celebrations"
            },
            {
              title: "Bespoke Creations",
              image: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Customized.jpg",
              description: "Custom designs by our Dubai artisans"
            }
          ].map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg h-48 md:h-64">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">{item.title}</h3>
                <p className="text-yellow-200 text-sm">{item.description}</p>
              </div>
              <div className="absolute top-3 right-3 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </div>
            </div>
          ))}
        </div>

        {/* About Our Dubai Boutique */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our <span className="text-yellow-600">Dubai</span> Boutique
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury jewelry shopping in the heart of Dubai
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Boutique Image */}
          <div className="lg:w-2/5 relative group rounded-xl overflow-hidden shadow-xl h-64 md:h-96">
            <img 
              src={emirates} 
              alt="Emirates Gold Dubai Boutique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105">
                Virtual Tour
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">+971 4 123 4567</p>
              <button className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Call Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Gold Souk, Deira, Dubai</p>
              <button className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Get Directions
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Gold Rates</h3>
              <p className="text-gray-600 mb-4">Today s 24K Gold Rate: AED 220/g</p>
              <button className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                View Rates
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Gold Scheme</h3>
              <p className="text-gray-600 mb-4">Flexible payment plans available</p>
              <button className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEGiftingSection;