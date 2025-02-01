import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner px-6 py-3 border-t flex justify-center text-gray-600 text-sm">
      <p>&copy; {new Date().getFullYear()} BeyondChats. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
