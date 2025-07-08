// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Ocean</h1>

        {/* Menu + Dark Mode Toggle (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 dark:text-white hover:text-blue-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <DarkModeToggle />
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-gray-700 dark:text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu + Dark Mode Toggle */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 dark:text-white py-2 border-b hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;