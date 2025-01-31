import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-0 sm:p-5">
      <div className='max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center'>
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Ronit Mahalanobish</h1>
          <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
