import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-text-light py-6 md:py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 md:mb-0">&copy; 2023 ROI Calculator. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;