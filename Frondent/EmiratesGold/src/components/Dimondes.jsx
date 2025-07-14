// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GiDiamondRing} from 'react-icons/gi';

const DiamondProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Emirates Diamond Ring',
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      image: 'https://example.com/diamond-ring.jpg',
      isNew: true,
      isCertified: true,
      discount: '17% OFF'
    },
    {
      id: 2,
      name: 'Arabian Gold Necklace',
      price: 8900,
      originalPrice: 11000,
      rating: 4.5,
      image: 'https://example.com/gold-necklace.jpg',
      isCertified: true,
      discount: '19% OFF'
    },
    {
      id: 3,
      name: 'Dubai Pearl Earrings',
      price: 4500,
      originalPrice: 5500,
      rating: 4.2,
      image: 'https://example.com/pearl-earrings.jpg',
      isNew: true,
      discount: '18% OFF'
    },
    {
      id: 4,
      name: 'Royal Platinum Bracelet',
      price: 9800,
      originalPrice: 12000,
      rating: 4.7,
      image: 'https://example.com/platinum-bracelet.jpg',
      isCertified: true,
      discount: '22% OFF'
    },
    {
      id: 5,
      name: 'Sheikh Collection Diamond Set',
      price: 24500,
      originalPrice: 29500,
      rating: 4.9,
      image: 'https://example.com/diamond-set.jpg',
      isNew: true,
      isCertified: true,
      discount: '17% OFF'
    },
    {
      id: 6,
      name: 'Traditional Gold Bangle',
      price: 6500,
      originalPrice: 7500,
      rating: 4.3,
      image: 'https://example.com/gold-bangle.jpg',
      discount: '13% OFF'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Diamond Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exquisite range of certified diamonds and luxury jewellery, crafted with precision in the UAE.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <GiDiamondRing className="text-2xl text-yellow-600" />
            <span className="font-medium">{products.length} Products</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
              <option>Filter by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>New Arrivals</option>
              <option>Certified Only</option>
            </select>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search diamonds..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Product Image */}
              <div className="relative">
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3EJewellery Image%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isCertified && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      CERTIFIED
                    </span>
                  )}
                </div>
                
                {/* Discount */}
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaHeart className="text-gray-700 hover:text-red-500" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FaSearch className="text-gray-700 hover:text-blue-500" />
                  </button>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700">{product.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 mr-2">
                      AED {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        AED {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="w-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100">
                    <FaHeart className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Previous
            </button>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DiamondProducts;