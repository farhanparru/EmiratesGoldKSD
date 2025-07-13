// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Log from "../assets/Images/finallogo.gif";

const TopCollection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const phrases = ["Luxury Collections", "Exclusive Designs", "UAE Craftsmanship", "24K Gold Pieces"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 800
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 600
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 400
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      image: "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/e/oer23j28.jpg",
      title: "Emirati Diamond Ring",
      price: "AED 2,499",
      originalPrice: "AED 2,999",
      discount: "10% OFF"
    },
    {
      id: 2,
      image: "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/r/org24k52_final.jpg",
      title: "Dubai Gold Necklace",
      price: "AED 3,299",
      originalPrice: "AED 4,199",
      discount: "20% OFF"
    },
    {
      id: 3,
      image: "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/b/obr24s06_1.jpg",
      title: "Abu Dhabi Pearl Set",
      price: "AED 5,999",
      originalPrice: "AED 6,999",
      discount: "15% OFF"
    },
    {
      id: 4,
      image: "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/b/n/bnk23c07_1.jpg",
      title: "Sharjah Royal Collection",
      price: "AED 7,499",
      originalPrice: "AED 9,999",
      discount: "25% OFF"
    },
    {
      id: 5,
      image: "https://www.orra.co.in/media/catalog/product/cache/d746469e6b012b04e6ccf325b028e36b/o/e/oer23j28.jpg",
      title: "Arabian Gold Bracelet",
      price: "AED 1,899",
      originalPrice: "AED 2,299",
      discount: "18% OFF"
    }
  ];

  // Text animation effect
  useEffect(() => {
    const typeWriter = () => {
      if (typing) {
        if (animatedText.length < phrases[currentPhraseIndex].length) {
          setAnimatedText(phrases[currentPhraseIndex].substring(0, animatedText.length + 1));
        } else {
          setTimeout(() => setTyping(false), 2000);
        }
      } else {
        if (animatedText.length > 0) {
          setAnimatedText(animatedText.substring(0, animatedText.length - 1));
        } else {
          setTyping(true);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(typeWriter, typing ? 100 : 50);
    return () => clearTimeout(timer);
  }, [animatedText, typing, currentPhraseIndex, phrases]);

  return (
    <div className="py-12 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      {/* UAE-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-yellow-200 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Animated heading */}
        <div className="text-center mb-12">
          <img
            src={Log}
            className="w-64 h-auto object-contain mx-auto mb-6 animate-pulse"
            alt="Emirates Gold Logo"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Discover Our <span className="text-yellow-600">{animatedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exquisite jewelry crafted with the finest materials, inspired by UAE heritage
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3 focus:outline-none">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-yellow-100">
                  <div className="relative overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      {product.discount}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-600 font-bold">{product.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Free Shipping</span>
                      <button className="text-yellow-600 hover:text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* UAE flag inspired indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-yellow-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Collections
          </button>
        </div>
      </div>
    </div>
  );
};

// Custom Arrows with UAE-inspired design
// eslint-disable-next-line react/prop-types
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
      onClick={onClick}
    >
      <div className="bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <svg
          className="w-6 h-6"
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
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer hidden md:block"
      onClick={onClick}
    >
      <div className="bg-yellow-600 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <svg
          className="w-6 h-6"
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
    </div>
  );
};

export default TopCollection;