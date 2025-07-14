import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHeart, FaUserAlt, FaSearch } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavigationBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Organized menu items by category
  const menuCategories = [
    {
      title: "Shop",
      items: [
        { name: "Diamond", path: "/Dimondes" },
        { name: "Gold", path: "/Gold" },
        { name: "Gemstone", path: "/gemstone" },
        { name: "Uncut Diamond", path: "/uncut-diamond" },
        { name: "Platinum", path: "/platinum" },
      ]
    },
    {
      title: "More",
      items: [
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Career", path: "/career" },
        { name: "Gold Rate", path: "/gold-rate" },
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-1 px-4 lg:px-20 text-center">
        Free shipping on orders over $500 | 30-day returns guarantee
      </div>
      
      {/* Main Navigation */}
      <div className="h-20 flex justify-between items-center px-4 lg:px-20 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl lg:text-3xl font-serif font-bold text-yellow-600 tracking-wider">EmiratesGold</span>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex space-x-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="group relative">
              <button className="text-gray-800 hover:text-yellow-600 font-medium py-2 px-1 flex items-center">
                {category.title}
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={toggleSearch}
            className="text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <FaSearch />
          </button>
          <Link to="/wishlist" className="text-gray-600 hover:text-yellow-600 transition-colors relative">
            <FaHeart />
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-yellow-600 transition-colors relative">
            <AiOutlineShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
          </Link>
          <Link to="/account" className="text-gray-600 hover:text-yellow-600 transition-colors">
            <FaUserAlt />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden text-2xl text-gray-700" onClick={toggleSidebar}>
          <CiMenuFries />
        </button>
      </div>

      {/* Search Bar - Desktop */}
      {searchOpen && (
        <div className="hidden lg:block bg-white py-3 px-20 shadow-md">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jewellery, diamonds, gold..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-all duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} z-50 w-80`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-gray-800">EmiratesGold</span>
          <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        
        <div className="p-4">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-8 border border-gray-300 rounded-md"
            />
            <FaSearch className="absolute left-2.5 top-3 text-gray-400" />
          </div>
          
          {/* Mobile Menu */}
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      onClick={closeSidebar}
                      className="block py-2 px-3 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Mobile Account Links */}
          <div className="border-t pt-4">
            <Link
              to="/account"
              onClick={closeSidebar}
              className="block py-2 px-3 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md"
            >
              My Account
            </Link>
            <Link
              to="/wishlist"
              onClick={closeSidebar}
              className="block py-2 px-3 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              onClick={closeSidebar}
              className="block py-2 px-3 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md"
            >
              Shopping Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity" 
          onClick={closeSidebar}
        ></div>
      )}
    </nav>
  );
};

export default NavigationBar;