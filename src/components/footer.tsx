import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-0 sm:p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Ronit Mahalanobish</h1>
          <p className="text-sm text-gray-400">© 2024 All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.73 7.73 0 0 1 2.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V5.637H2.542v7.757h2.401zM3.743 4.616c.837 0 1.515-.678 1.515-1.515A1.516 1.516 0 0 0 3.743 1.586c-.837 0-1.515.678-1.515 1.515 0 .837.678 1.515 1.515 1.515zm4.778 8.778h2.4V9.359c0-1.047.02-2.393-1.462-2.393-1.464 0-1.69 1.146-1.69 2.316v4.582h2.401v-4.23c0-.69.013-1.388-.377-1.975-.35-.525-.976-.855-1.67-.855-.694 0-1.238.342-1.515.832-.224.418-.301.93-.301 1.444v4.784h2.4v-4.23c0-.69.013-1.388-.377-1.975-.35-.525-.976-.855-1.67-.855-.694 0-1.238.342-1.515.832-.224.418-.301.93-.301 1.444v4.784z" />
            </svg>
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.283-.004-.425A6.676 6.676 0 0 0 16 3.542a6.563 6.563 0 0 1-1.889.518A3.293 3.293 0 0 0 15.555 2.1a6.573 6.573 0 0 1-2.084.797A3.28 3.28 0 0 0 7.875 6.03 9.325 9.325 0 0 1 1.114 2.124a3.288 3.288 0 0 0 1.015 4.384A3.273 3.273 0 0 1 .64 6.575v.041a3.28 3.28 0 0 0 2.632 3.218 3.286 3.286 0 0 1-.865.114c-.212 0-.419-.021-.62-.06a3.28 3.28 0 0 0 3.065 2.278A6.588 6.588 0 0 1 0 13.026a9.29 9.29 0 0 0 5.026 1.474" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
