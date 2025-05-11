"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 py-6 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#1b1e24]/95 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-white border-4 border-white rounded-full bg-transparent p-4">
            VM
          </div>
          <span className="hidden uppercase font-light text-2xl sm:inline text-white">
            Viraj <span className="font-bold">Meegahapola</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:ml-auto">
          <nav>
            <ul className="flex flex-row gap-6 items-center text-base font-medium text-white">
              <li className="cursor-pointer hover:text-blue-600">
                <Link href="#project">Projects</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link href="#about">About</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link href="#">Blogs</Link>
              </li>
              <li className="cursor-pointer bg-[#D9D9D9] hover:bg-[#c9c9c9] rounded-full px-6 py-3 text-black">
                <Link href="#contact">Get in touch</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#1b1e24] z-40 sm:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold text-white">
              <li onClick={() => setIsMenuOpen(false)}>Projects</li>
              <li onClick={() => setIsMenuOpen(false)}>About</li>
              <li onClick={() => setIsMenuOpen(false)}>Blogs</li>
              <li onClick={() => setIsMenuOpen(false)}>Get in touch</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
