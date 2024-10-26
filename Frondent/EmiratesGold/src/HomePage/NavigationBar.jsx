// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHeart, FaUserAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlinePhone,
} from "react-icons/ai";
import Gold from "../assets/Images/EmiratesGoldLogo.png";

const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const mobileMenu = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-5">
        <Link to="/">
          <li className="my-4 py-2 border-b border-slate-800 hover:bg-slate-800">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="my-4 py-2 border-b border-slate-800 hover:bg-slate-800">
            About
          </li>
        </Link>
        <Link to="/jewellery">
          <li className="my-4 py-2 border-b border-slate-800 hover:bg-slate-800">
            Jewellery
          </li>
        </Link>
        <Link to="/offers">
          <li className="my-4 py-2 border-b border-slate-800 hover:bg-slate-800">
            Special Offers
          </li>
        </Link>
        <Link to="/brands">
          <li className="my-4 py-2 border-b border-slate-800 hover:bg-slate-800">
            Brands
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="h-16 flex justify-between items-center px-5 lg:px-20">
        <div className="flex items-center flex-1">
          <img
            src={Gold}
            alt="EmiratesGold Logo"
            className="h-10 w-auto mr-3"
          />

          <span className="text-3xl font-bold text-yellow-600">
            EmiratesGold
          </span>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search for Jewellery"
            className="p-2 w-96 border border-gray-300 rounded-l-md"
          />
          <button className="bg-red-500 px-5 py-2 text-white rounded-r-md">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <span>18004190066</span>
          </div>
          <Link to="/recently-viewed">
            <FaHeart />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          <Link to="/login">
            <FaUserAlt />
          </Link>
        </div>

        <button className="lg:hidden block transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {click && mobileMenu}

      <div className="hidden lg:flex justify-center bg-blue-900 text-white py-3">
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Career</li>
          <li className="hover:text-yellow-300 cursor-pointer">Brands</li>
          <li className="hover:text-yellow-300 cursor-pointer">Solitaire</li>
          <li className="hover:text-yellow-300 cursor-pointer">
            All Jewellery
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">Gifts</li>
          <li className="hover:text-yellow-300 cursor-pointer">Gold Coins</li>
          <li className="hover:text-yellow-300 cursor-pointer">Offers</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
