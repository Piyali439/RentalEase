import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // modern icons (optional)

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-10 mt-16"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div aria-label="Company info">
          <h4 className="text-xl font-semibold text-white mb-2">RentalEase</h4>
          <p className="text-sm leading-relaxed">
            Your platform for seamless car rentals across the globe. Reliable,
            affordable, and always ready when you are.
          </p>
        </div>

        {/* Quick Links */}
        <div aria-label="Navigation links">
          <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#cars" className="hover:text-white transition">
                Cars
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-white transition">
                Booking
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div aria-label="Social media">
          <h4 className="text-xl font-semibold text-white mb-2">Connect With Us</h4>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RentalEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
