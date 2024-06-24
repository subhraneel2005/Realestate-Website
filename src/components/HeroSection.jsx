// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 flex items-center">
      <div className="absolute inset-0 bg-opacity-60 bg-black"></div> {/* Darker overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/heroImg.jpg)' }}></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-70 p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            We help you find the best properties at the best prices.
          </p>
          <button className="px-8 py-3 bg-blue-900 text-white text-lg rounded-full hover:bg-blue-800 focus:outline-none">
            View Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
