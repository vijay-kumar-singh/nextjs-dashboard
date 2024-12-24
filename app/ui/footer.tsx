import React from 'react';

const Footer = () => {
  return (
    <footer className="mb-6 bg-gray-800 px-6 py-4 text-white shadow-md">
      <div className="container mx-auto text-center">
        <p>
          Built with <span className="text-red-500">React 19</span> and{' '}
          <span className="text-blue-500">Next.js 15+</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
