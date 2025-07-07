import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} MERN App. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 