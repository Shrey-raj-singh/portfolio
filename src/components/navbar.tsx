import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow sticky top-0 z-50 border-b-2 border-white">
      <div className="w-[98vw] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src="/logo/logo.svg" alt="" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 py-2 font-medium"
                    : "text-white py-2 hover:text-blue-600 transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              key="/resume"
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-medium"
                  : "text-white hover:text-blue-600 transition"
              }
            >
              <button className="font-semibold px-4 py-2 bg-[#0A80ED] rounded-[20px] hover:bg-blue-700 cursor-pointer transition text-white">Resume</button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-medium"
                  : "block text-gray-700 hover:text-blue-600"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            key="/resume"
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-white hover:text-blue-600 transition"
            }
          >
            <button className="px-4 py-2 bg-[#0A80ED] rounded-[20px] cursor-pointer font-bold">Resume</button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
