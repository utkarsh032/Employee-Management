import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`${theme ? "dark" : "light"} transition-colors duration-300 `}

    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Employee.</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`${theme ? "hover:text-gray-300" : "hover:text-gray-700"
              } transition duration-300`}
          >
            Home
          </Link>
          <Link
            to="/add-employee"
            className={`${theme ? "hover:text-gray-300" : "hover:text-gray-700"
              } transition duration-300`}
          >
            Add
          </Link>
          <Link
            to="/services"
            className={`${theme ? "hover:text-gray-300" : "hover:text-gray-700"
              } transition duration-300`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`${theme ? "hover:text-gray-300" : "hover:text-gray-700"
              } transition duration-300`}
          >
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Toggle Button for Light/Dark Mode */}
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme ? (
              <MdLightMode size={24} className="hover:text-yellow-400" />
            ) : (
              <MdDarkMode size={24} className="hover:text-blue-700" />
            )}
          </button>

          {/* Authentication Section */}
          <div>
            <Link
              to="/login"
              className={`${theme
                ? "text-gray-300 hover:text-white"
                : "text-gray-800 hover:text-black"
                } font-medium transition`}
            >
              Login
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="space-y-2 p-4"
        >
          <Link
            to="/"
            className="block hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/add-employee"
            className="block hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            Add
          </Link>
          <Link
            to="/services"
            className="block hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
