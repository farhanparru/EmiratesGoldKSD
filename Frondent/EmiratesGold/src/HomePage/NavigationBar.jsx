import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHeart, FaUserAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import Gold from "../assets/Images/EmiratesGoldLogo.png";

const NavigationBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Menu items with paths for navigation
  const menuItems = [
    { name: "About", path: "/diamond" },
    { name: "Contact", path: "/gold" },
    { name: "Career", path: "/gemstone" },
    { name: "Uncut Diamond", path: "/uncut-diamond" },
    { name: "Platinum", path: "/platinum" },
    { name: "Gold Coins", path: "/gold-coins" },
    { name: "Silver", path: "/silver" },
    { name: "Watches", path: "/watches" },
    { name: "Gifts", path: "/gifts" },
    { name: "Jewellery", path: "/jewellery" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Gold Rate", path: "/gold-rate" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="h-16 flex justify-between items-center px-4 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Gold} alt="EmiratesGold Logo" className="h-10 w-auto mr-2" />
          <span className="text-xl lg:text-3xl font-bold text-yellow-600">EmiratesGold</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
          <CiMenuFries />
        </button>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-lg font-medium hover:text-yellow-600 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:translate-y-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Icons and Search Bar */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for Jewellery"
            className="p-2 w-72 md:w-96 border border-gray-300 rounded-l-md"
          />
          <button className="bg-red-500 px-4 py-2 text-white rounded-r-md">
            <AiOutlineSearch />
          </button>
          <Link to="" className="transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <FaHeart />
          </Link>
          <Link to="" className="transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <AiOutlineShoppingCart />
          </Link>
          <Link to="" className="transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <FaUserAlt />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} z-50 w-64`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={closeSidebar} className="text-xl">
            <FaTimes />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="text-lg font-medium">
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="hover:text-yellow-600 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:translate-y-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-around p-4 border-t">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:translate-y-1">
            Login
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:translate-y-1">
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeSidebar}></div>
      )}
    </nav>
  );
};

export default NavigationBar;
