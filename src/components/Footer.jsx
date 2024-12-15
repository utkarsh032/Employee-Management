import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export let Footer = () => {
  const { theme } = useContext(ThemeContext)


  return (
    <footer className={`${theme ? 'dark' : 'light'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Employee Management</h3>
            <p className="text-gray-400">
              Streamline your workforce with our efficient employee management
              system.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2024 Employee Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

