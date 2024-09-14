import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white  pb-12">
      <div className="container mx-auto grid py-24 grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Urban Rides</h2>
          <p className="text-gray-400">
            Urban Rides is your go-to bike rental service, offering fast and
            convenient rides in your city. Experience freedom on two wheels,
            wherever you are.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-4">
            123 Bike Lane, Cycle City, NY 10001
          </p>
          <p className="text-gray-400">Email: support@urbanrides.com</p>
          <p className="text-gray-400 mb-4">Phone: +1 (800) 123-4567</p>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-white hover:text-gray-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-white hover:text-gray-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-white hover:text-gray-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-500"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Urban Rides. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
