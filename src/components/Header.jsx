// src/components/Header.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Ocean</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              hashSpy={true}
              className="cursor-pointer text-gray-100 hover:text-blue-400 transition-colors font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-100 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-900">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-200 py-2 border-b border-gray-700 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;