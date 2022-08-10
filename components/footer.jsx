import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>Footer</div>

      <div className="flex gap-10 text-pink-dark text-2xl">
        <span>
          <FaFacebookF className="hover:text-white cursor-pointer transition" />
        </span>
        <span>
          <FiInstagram className="hover:text-white cursor-pointer transition" />
        </span>
        <span>
          <FiTwitter className="hover:text-white cursor-pointer transition" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
