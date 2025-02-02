import React from "react";
import { MessageCircle } from "lucide-react"; // Importing an icon from lucide-react

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-3 flex items-center border-b mb-4">
      {/* Messenger Icon */}
      <MessageCircle className="w-6 h-6 text-blue-500 mr-3" />

      {/* Centered Text */}
      <h1 className="text-xl font-semibold text-gray-800 flex-1 text-center">
        Welcome to BeyondChats
      </h1>
    </header>
  );
};

export default Header;
