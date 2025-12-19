import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaPhone,
  FaProjectDiagram,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Project", icon: <FaProjectDiagram /> },
    { name: "Experience", icon: <FaBriefcase /> },
    { name: "Skill", icon: <FaTools /> },
    { name: "Contact", icon: <FaPhone /> },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center space-x-3">
              <span className="bg-blue-200 text-gray-900 w-14 h-10 flex items-center justify-center font-bold rounded-md">
                AM
              </span>
              <div className="flex flex-col">
                <span className="text-white font-bold uppercase text-sm">
                  Amanullah
                </span>
                <span className="text-gray-300 text-xs">
                  Software Engineer
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden sm:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center gap-2 text-white px-3 py-2 text-sm font-medium
                             border-b-2 border-transparent transition duration-300
                             hover:text-blue-500 hover:border-blue-500"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md bg-white text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${mobileMenuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-col items-center gap-6 py-6 bg-gray-900">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white text-lg font-medium
                           transition duration-300 hover:text-blue-500"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
