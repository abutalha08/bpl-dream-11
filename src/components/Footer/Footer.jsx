import React from "react";

import footerLogo from "../../assets/logo-footer.png";
import NewsLetter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <footer className=" relative bg-[#050816] text-white pt-56">

        <div className="w-[90vw] max-w-7xl mx-auto absolute left-1/2 -top-25 -translate-x-1/2 z-20">
        <NewsLetter />
      </div>


      <div className="flex justify-center mb-10">
        <img
          src={footerLogo}
          alt="logo"
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services
            to our customers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
            <li className="cursor-pointer hover:text-white transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Services
            </li>
            <li className="cursor-pointer hover:text-white transition">
              About
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Subscribe</h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="px-5 py-2 bg-linear-to-r from-yellow-400 to-pink-500 text-black font-semibold cursor-pointer hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;