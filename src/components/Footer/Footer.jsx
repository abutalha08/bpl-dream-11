import React from "react";
import footerLogo from "../../assets/logo-footer.png";
import NewsLetter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] text-white pt-40 sm:pt-48">

      {/* Newsletter */}
      <div className="w-[92vw] max-w-6xl mx-auto absolute left-1/2 -top-24 sm:-top-28 -translate-x-1/2 z-20">
        <NewsLetter />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8 sm:mb-10 pt-10">
        <img
          src={footerLogo}
          alt="logo"
          className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
        />
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 border-b border-gray-700 pb-10">

        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3">
            About Us
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services
            to our customers.
          </p>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3">
            Subscribe
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>

          {/* Input responsive */}
          <div className="bg-white rounded-full overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
          </div>
            <button className="w-full rounded-full px-5 py-2 bg-linear-to-r from-yellow-400 to-pink-500 text-black font-semibold cursor-pointer hover:opacity-90 transition">
              Subscribe
            </button>
        </div>

      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-xs sm:text-sm py-6 px-4">
        ©2024 Your Company All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;