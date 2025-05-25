import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yudava Roopnarine</h1>

        {/* Hamburger icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 font-medium hidden md:items-center`}>
          <a href="/" onClick={() => window.location.reload()} className="hover:text-gray-400">
              <FaHome className="inline mr-1"/> Home
            </a>
          <li><a href="#about" className="hover:text-gray-400"><FaUser className="inline mr-1"/> About</a></li>
          <li><a href="#projects" className="hover:text-gray-400"><FaBriefcase className="inline mr-1"/> Projects</a>
          </li>
          <li><a href="#contact" className="hover:text-gray-400"><FaEnvelope className="inline mr-1"/> Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-gray-800">
            <a href="/" onClick={() => window.location.reload()} className="hover:text-gray-400">
              <FaHome className="inline mr-1"/> Home
            </a>
            <a href="#about" className="block hover:text-gray-400"><FaUser className="inline mr-1"/> About</a>
            <a href="#projects" className="block hover:text-gray-400"><FaBriefcase
                className="inline mr-1"/> Projects</a>
            <a href="#contact" className="block hover:text-gray-400"><FaEnvelope className="inline mr-1"/> Contact</a>
          </div>
      )}

    </nav>
  );
};

export default Navbar;

