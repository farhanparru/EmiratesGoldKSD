import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHeart, FaUserAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import Gold from "../assets/Images/EmiratesGoldLogo.png";

const NavigationBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Sample menu items (you can add submenus as needed)
  const menuItems = [
    { name: "Diamond", path: "/diamond" },
    { name: "Gold", path: "/gold" },
    { name: "Gemstone", path: "/gemstone" },
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
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={Gold} alt="EmiratesGold Logo" className="h-10 w-auto mr-2" />
          <span className="text-xl lg:text-3xl font-bold text-yellow-600">EmiratesGold</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
          <CiMenuFries />
        </button>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for Jewellery"
            className="p-2 w-72 md:w-96 border border-gray-300 rounded-l-md"
          />
          <button className="bg-red-500 px-4 py-2 text-white rounded-r-md">
            <AiOutlineSearch />
          </button>
          <Link to="/recently-viewed"><FaHeart /></Link>
          <Link to="/cart"><AiOutlineShoppingCart /></Link>
          <Link to="/login"><FaUserAlt /></Link>
        </div>
      </div>

      {/* Sidebar */}
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
              <Link to={item.path} onClick={closeSidebar} className="hover:text-yellow-600">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-around p-4 border-t">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Login</button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">Sign Up</button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </nav>
  );
};

export default NavigationBar;
