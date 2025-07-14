// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';
import { GiPlainCircle, GiNecklace, GiRing, GiEarrings, GiCrown } from 'react-icons/gi';

const Platinum = () => {
  // Sample platinum product data
  const platinumProducts = [
    {
      id: 1,
      name: 'Emirati Platinum Necklace',
      price: 12500,
      weight: '15.2g',
      purity: '950 Platinum',
      rating: 4.9,
      image: 'https://example.com/platinum-necklace.jpg',
      isNew: true,
      isCertified: true,
      discount: '15% OFF',
      category: 'necklace'
    },
    {
      id: 2,
      name: 'Royal Platinum Bracelet',
      price: 9800,
      weight: '12.8g',
      purity: '900 Platinum',
      rating: 4.8,
      image: 'https://example.com/platinum-bracelet.jpg',
      isBestSeller: true,
      category: 'bracelet'
    },
    {
      id: 3,
      name: 'Luxury Platinum Earrings',
      price: 6500,
      weight: '8.5g',
      purity: '950 Platinum',
      rating: 4.7,
      image: 'https://example.com/platinum-earrings.jpg',
      isCertified: true,
      discount: '10% OFF',
      category: 'earrings'
    },
    {
      id: 4,
      name: 'Platinum Crown Ring',
      price: 8900,
      weight: '10.2g',
      purity: '950 Platinum',
      rating: 4.8,
      image: 'https://example.com/platinum-ring.jpg',
      isNew: true,
      category: 'ring'
    },
    {
      id: 5,
      name: 'Platinum Diamond Set',
      price: 24500,
      weight: '22.5g',
      purity: '900 Platinum',
      rating: 5.0,
      image: 'https://example.com/platinum-set.jpg',
      isCertified: true,
      discount: '12% OFF',
      category: 'set'
    },
    {
      id: 6,
      name: 'Platinum Pendant',
      price: 7200,
      weight: '9.8g',
      purity: '950 Platinum',
      rating: 4.6,
      image: 'https://example.com/platinum-pendant.jpg',
      isBestSeller: true,
      category: 'pendant'
    }
  ];

  // Categories for filtering
  const categories = [
    { name: 'All', icon: <GiPlainCircle />, value: 'all' },
    { name: 'Necklaces', icon: <GiNecklace />, value: 'necklace' },
    { name: 'Rings', icon: <GiRing />, value: 'ring' },
    { name: 'Earrings', icon: <GiEarrings />, value: 'earrings' },
    { name: 'Bracelets', icon: <GiPlainCircle />, value: 'bracelet' },
    { name: 'Pendants', icon: <GiCrown />, value: 'pendant' },
    { name: 'Sets', icon: <GiPlainCircle />, value: 'set' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with platinum info */}
        <div className="text-center mb-12">
          <div className="bg-gray-800 text-white py-2 px-4 rounded-full inline-flex items-center mb-4">
            <GiPlainCircle className="mr-2" />
            <span className="font-bold">Platinum: The Ultimate Luxury Metal</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exclusive Platinum Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rare, durable, and naturally white - our platinum jewellery maintains its beauty forever
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.value}
                className="flex flex-col items-center justify-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all min-w-[100px] border border-gray-200 hover:border-gray-400"
              >
                <span className="text-gray-700 text-xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2">
            <GiPlainCircle className="text-2xl text-gray-700" />
            <span className="font-medium">{platinumProducts.length} Platinum Items</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Purity</option>
                <option>Highest Weight</option>
              </select>
              <FaFilter className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search platinum items..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {platinumProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
              {/* Product Image */}
              <div className="relative">
                <div className="h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EPlatinum Jewellery%3C/text%3E%3C/svg%3E"
                    }}
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isCertified && (
                    <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                      CERTIFIED
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      BESTSELLER
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
                
                <div className="mb-3">
                  <div className="flex items-center space-x-4">
                    <div>
                      <span className="text-sm text-gray-500">Purity</span>
                      <p className="font-medium">{product.purity}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Weight</span>
                      <p className="font-medium">{product.weight}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-800 mr-2">
                      AED {product.price.toLocaleString()}
                    </span>
                    {product.discount && (
  <span className="text-sm text-gray-500 line-through">
    AED {(product.price / (1 - parseInt(product.discount)/100)).toFixed(2)}
  </span>
)}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
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
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium">
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

        {/* Platinum Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose Platinum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Platinum Qualities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 30 times rarer than gold</li>
                <li>• Naturally white and wont fade or tarnish</li>
                <li>• Extremely durable and dense</li>
                <li>• Hypoallergenic and pure (950 platinum is 95% pure)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Our Platinum Promise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Authentic platinum hallmarked in UAE</li>
                <li>• Lifetime craftsmanship guarantee</li>
                <li>• Free professional cleaning and inspection</li>
                <li>• Competitive platinum prices with transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;