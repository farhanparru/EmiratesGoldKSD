import React, { useState, useEffect } from "react";
import video from "../assets/Images/5106444-hd_1920_1080_25fps.mp4";
import TopCollection from "./TopCollection";
import Smooth3D from "./Smooth3D";
import Jewelry from "./Jwellary";
import TeamMembers from "./TeamMembers";
import Support from "./Support";
import Advance from "./Advance";
import GoldExchange from "./GoldExchange";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  const phrases = [
    "Emirati Luxury Collections",
    "24K Pure Gold Craftsmanship",
    "Dubai's Finest Jewelry",
    "Arabian Heritage Designs"
  ];

  const slides = [
    { 
      type: "video", 
      src: video,
      title: "Emirates Gold & Diamonds",
      subtitle: "Since 1999"
    },
    { 
      type: "image", 
      src: "https://static.malabargoldanddiamonds.com/media/bsimages/Diamond-necklace-set-20102024.jpg",
      title: "Dubai Gold Souk",
      subtitle: "Authentic Arabian Designs"
    },
    { 
      type: "image", 
      src: "https://static.malabargoldanddiamonds.com/media/bsimages/Gold-Chain-web-24092024.jpg",
      title: "Diamond Masterpieces",
      subtitle: "GIA Certified Quality"
    },
    { 
      type: "image", 
      src: "https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/POP+3.0/Desktop1920x694.jpg",
      title: "Gold Investment",
      subtitle: "Secure Your Future"
    },
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

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative w-full h-screen max-h-[800px]">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === activeSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {slide.type === "video" ? (
                  <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={slide.src} 
                    className="w-full h-full object-cover" 
                    alt={`Slide ${index + 1}`} 
                  />
                )}
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
                  <div className="px-4">
                    <motion.h1 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="text-xl md:text-2xl text-yellow-300 mb-8"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1 }}
                      className="flex justify-center space-x-4"
                    >
                      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Shop Now
                      </button>
                      <button className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Animated Text Banner */}
        <div className="absolute bottom-20 left-0 right-0 z-20">
          <div className="bg-black/70 py-4">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Discover Our <span className="text-yellow-400">{animatedText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${index === activeSlide ? "bg-yellow-500 w-12" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="bg-gradient-to-b from-yellow-50 to-white">
        <TopCollection />
        <Smooth3D />
        <Jewelry />
        
        {/* UAE Special Section */}
        <div className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Emirati Heritage, Global Standards</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
              Our Dubai-based master craftsmen combine traditional Arabian techniques with modern technology to create jewelry worthy of royalty.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "👑", title: "Royal Collections", desc: "Fit for Arabian royalty" },
                { icon: "💎", title: "GIA Certified", desc: "Authentic diamond quality" },
                { icon: "🕌", title: "Arabic Designs", desc: "Traditional motifs" },
                { icon: "🏆", title: "Award Winning", desc: "Recognized excellence" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-yellow-100">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <TeamMembers />
        <GoldExchange />
        <Advance />
        <Support />
      </div>
    </div>
  );
};

export default Home;