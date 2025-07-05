// src/components/Header.jsx
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-blue-500";

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
        <nav className="space-x-6 text-lg">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
