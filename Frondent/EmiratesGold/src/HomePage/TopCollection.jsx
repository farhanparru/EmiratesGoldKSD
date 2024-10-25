import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Log from "../assets/Images/DRH_LOGO_CUTOUT_new.png";

const TopCollection = () => {
  const settings = {
    dots: false, // Disable dots to focus on scrolling
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      image:
        "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/e/oer23j28.jpg",
      discount: "10%",
    },
    {
      id: 2,
      image:
        "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/r/org24k52_final.jpg",
      discount: "20%",
    },
    {
      id: 3,
      image:
        "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/b/obr24s06_1.jpg",
      discount: "15%",
    },
    {
      id: 4,
      image:
        "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/b/n/bnk23c07_1.jpg",
      discount: "25%",
    },
  ];

  return (
    <div className="mt-3 relative">
      <img
        src={Log}
        className="w-80 h-30 object-contain mx-auto mb-6"
        alt="Logo"
      />
      <Slider {...settings} className="relative">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>
              <h3 className="mt-4 text-lg text-center font-semibold">
                {product.title}
              </h3>
              <button className="explore-button absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-full py-2 rounded-lg transition-all duration-300 group-hover:bottom-4">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-800 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-800 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 5l-7 7 7 7"
        />
      </svg>
    </div>
  );
};

export default TopCollection;
