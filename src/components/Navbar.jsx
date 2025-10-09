
import { useState } from "react";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo_Efac.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 backdrop-blur-md shadow-md">
      <div className="max-w-full mx-auto flex items-center justify-between px-4 md:px-15 py-2">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img src={logo1} alt="Logo" className="w-8" />
          <img src={logo2} alt="Logo" className="w-8" />
          <span  className="text-1xl md:text-xl font-bold text-slate-950">
            Faculty of Engineering
          </span>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-base font-normal">
          <li><a href="#about" className="hover:text-red-700 transition">About Us</a></li>
          <li><a href="#departments" className="hover:text-red-700 transition">Departments</a></li>
          <li><a href="#exhibits" className="hover:text-red-700 transition">Exhibits</a></li>
          <li><a href="#gallery" className="hover:text-red-700 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-red-700 transition">Contact</a></li>
        </ul>
        {/* Hamburger Menu */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-white/80 backdrop-blur-md shadow-md px-6 py-4 absolute top-full left-0 w-full text-lg font-medium">
          <li><a href="#about" className="hover:text-red-800 transition" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="#departments" className="hover:text-red-800 transition" onClick={() => setOpen(false)}>Departments</a></li>
          <li><a href="#exhibits" className="hover:text-red-800 transition" onClick={() => setOpen(false)}>Exhibits</a></li>
          <li><a href="#gallery" className="hover:text-red-800 transition" onClick={() => setOpen(false)}>Gallery</a></li>
          <li><a href="#contact" className="hover:text-red-800 transition" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
