import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          MERN App
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/posts" className="hover:text-gray-300">
              Posts
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 