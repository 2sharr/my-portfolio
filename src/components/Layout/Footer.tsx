import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 