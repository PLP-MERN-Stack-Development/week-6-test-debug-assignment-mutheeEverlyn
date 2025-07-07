import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Our MERN Blog</h1>
      <p className="text-lg mb-4">This is a sample MERN (MongoDB, Express.js, React, Node.js) stack application built to demonstrate various web development concepts, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">Full-stack development with a React frontend and Node.js/Express backend.</li>
        <li className="mb-2">Database integration using MongoDB and Mongoose.</li>
        <li className="mb-2">Comprehensive testing strategies: unit, integration, and end-to-end (E2E) testing.</li>
        <li className="mb-2">Debugging techniques for both client and server sides.</li>
        <li className="mb-2">Building a user-friendly and responsive UI with modern CSS frameworks.</li>
      </ul>
      <p className="text-lg">Our goal is to provide a robust and scalable platform for sharing and discovering blog posts.</p>
    </div>
  );
};

export default About; 