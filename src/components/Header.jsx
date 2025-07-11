// src/components/Header.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Ocean</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                hashSpy={true}
                className="cursor-pointer text-gray-700 dark:text-white hover:text-blue-500"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
          <DarkModeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-700 dark:text-white py-2 border-b hover:text-blue-500"
            >
              {link.label}
            </ScrollLink>
          ))}
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;
