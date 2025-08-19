import React from "react";

const Footer = () => (
  <footer className="w-full py-6 mt-12 border-t text-center text-gray-500 text-sm">
    Developed by {""}
    <a
      href="https://metierdigitals.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-700 underline hover:text-green-900"
    >
      Metier Digital Solutions
    </a> © {new Date().getFullYear()}. All rights reserved. 
  </footer>
);

export default Footer;