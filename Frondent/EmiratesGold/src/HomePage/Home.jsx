// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import video from "../assets/Images/5106444-hd_1920_1080_25fps.mp4";
import TopCollection from "./TopCollection";
import Smooth3D from "./Smooth3D";
import Jewelry from "./Jwellary";
import TeamMembers from "./TeamMembers";
import Support from "./Support";
import Advance from "./Advance";
import GoldExchange from "./GoldExchange";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: "video", src: video },
    { type: "image", src: "https://static.malabargoldanddiamonds.com/media/bsimages/Diamond-necklace-set-20102024.jpg" },
    { type: "image", src: "https://static.malabargoldanddiamonds.com/media/bsimages/Gold-Chain-web-24092024.jpg" },
    { type: "image", src: "https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/POP+3.0/Desktop1920x694.jpg" },
  ];

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-[35rem] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full duration-700 ease-in-out ${index === activeSlide ? "block" : "hidden"}`}
              data-carousel-item
            >
              {slide.type === "video" ? (
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={slide.src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
              )}
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeSlide ? "bg-white" : "bg-gray-400"}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white/30 rounded-full group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 1L1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white/30 rounded-full group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 9l4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Responsive Sections */}
      <div className="p-4 md:p-8">
        <TopCollection />
        <Smooth3D />
        <Jewelry />
        <TeamMembers />
        <GoldExchange/>
        <Advance/>
        <Support />
      </div>
    </div>
  );
};

export default Home;
