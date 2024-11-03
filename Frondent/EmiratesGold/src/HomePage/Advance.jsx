// eslint-disable-next-line no-unused-vars
import React from 'react';

const Advance = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Gifting & More Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Gifting & More</h2>
        <p className="text-gray-600">Gifts that make a moment</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {/* Card 1 - Birthday */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Birthday.jpg" alt="Birthday" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Birthday</span>
          </div>
        </div>
        
        {/* Card 2 - Anniversary */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/anniversary.jpg" alt="Anniversary" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Anniversary</span>
          </div>
        </div>
        
        {/* Card 3 - Personalised Jewellery */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Personalized.jpg" alt="Personalised Jewellery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Personalised Jewellery</span>
          </div>
        </div>
        
        {/* Card 4 - Baby Birth */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/baby-birth.jpg" alt="Baby Birth" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Baby Birth</span>
          </div>
        </div>
        
        {/* Card 5 - Festive Collection */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://content3.jdmagicbox.com/comp/kasaragod/s5/9999p4994.4994.190331214712.u9s5/catalogue/kasargod-emirates-gold-international-kasaragod-ho-kasaragod-jewellery-showrooms-he6y55ospt.jpg" alt="Festive Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Festive Collection</span>
          </div>
        </div>
        
        {/* Card 6 - Customized Jewellery */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Customized.jpg" alt="Customized Jewellery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Customized Jewellery</span>
          </div>
        </div>
      </div>

       {/* About Our Store Section */}
       <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">About Our Store</h2>
        <p className="text-gray-600">
          Get in touch with us for a complete jewellery shopping experience!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Store Image */}
        <div className="bg-gray-200 p-4 rounded-lg w-full md:w-1/3">
          <img src="https://scontent.fccj1-1.fna.fbcdn.net/v/t39.30808-6/330548085_1811125935922697_2687050383290931160_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-6ihyLWFh-UQ7kNvgG2dWAE&_nc_zt=23&_nc_ht=scontent.fccj1-1.fna&_nc_gid=AJguJtg7IX-kh3l2vBUTVAT&oh=00_AYCiMFOMpeXhRGeA6W_M8TBr4DHSKXZr5Ubnao9ToEub3Q&oe=672DAA17" alt="Our Store" className="w-full h-full object-cover rounded-lg" />
          <div className="text-center mt-2">
            <h3 className="text-purple-700 text-2xl font-bold">360+ SHOWROOMS</h3>
            <p className="text-xs text-gray-600">13 COUNTRIES</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-200 p-4 rounded-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-purple-700">1800 5720 916</h3>
          <p className="text-gray-600">Any Questions? Toll-free for all stores</p>
        </div>

        {/* Gold Scheme & Rate */}
        <div className="flex flex-col w-full md:w-1/3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h4 className="font-semibold text-purple-700">GOLD SCHEME</h4>
            <p className="text-gray-600">Payment for India stores</p>
            <button className="text-blue-500 hover:underline">Pay Online</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <h4 className="font-semibold text-purple-700">GOLD RATE</h4>
            <p className="text-gray-600">One best rate across India!</p>
            <button className="text-blue-500 hover:underline">View Gold Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advance;