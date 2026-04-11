import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-4">
      
      {/* Outer container */}
      <div className="relative w-full max-w-7xl rounded-2xl border border-gray-300 bg-white/60 backdrop-blur-md shadow-lg p-6 sm:p-10">
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-200 via-gray-100 to-orange-200 opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-black">
            Subscribe to our Newsletter
          </h2>

          <p className="text-gray-800 text-sm sm:text-base mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-2 text-gray-800 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button className="w-full sm:w-auto px-5 py-2 rounded-lg text-black font-semibold bg-linear-to-r from-pink-400 to-yellow-400 hover:scale-105 transition">
              Subscribe
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsLetter;