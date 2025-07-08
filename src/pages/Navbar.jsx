import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-2 z-50 bg-transparent w-full px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">

        {/* Logo */}
        <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-cyan-400">
          PORTFOLIO
        </h1>

        {/* Hamburger Icon */}
        <div className="sm:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden sm:flex gap-6 text-base font-poppins font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Nav Links (Mobile dropdown) */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 pb-6 text-white font-poppins font-bold bg-[#0e0e0e] rounded-b-xl shadow-md">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/project"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-white hover:text-cyan-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;


