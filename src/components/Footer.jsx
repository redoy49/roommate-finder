import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 dark:bg-amber-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We room share to student save money. Join thousands who trust us.
            </p>
          </div>
          <div className="md:pl-20">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy and Policy</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a target="_blank" href="https://www.facebook.com">
                <FaFacebook className="text-blue-500" size={28} />
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <FaYoutube className="text-red-500" size={30} />
              </a>

              <a target="_blank" href="https://www.instagram.com">
                <FaInstagram className="text-pink-500" size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-gray-500">
          &copy; Roommate All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
