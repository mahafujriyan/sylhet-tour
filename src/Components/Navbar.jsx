"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-300 via-blue-500 to-green-300 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        

        <a href="/" className="flex items-center">
          <img
            src="/asscets/logo-1 (2).png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="#">Tours</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

     
        <div className="hidden lg:block">
          <a
            href="#"
            className="btn btn-sm bg-white text-red-700 hover:bg-red-200 border-none rounded-full px-4"
          >
            Get Started
          </a>
        </div>

    
        <button
          className="lg:hidden text-2xl p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    
      {open && (
        <div className="lg:hidden bg-red-800 px-6 py-4 space-y-3">
          <a href="/" >Home</a>
          <a href="#" >Tours</a>
          <a href="#" >About Us</a>
          <a href="#" >Contact</a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="block btn btn-sm bg-white text-red-700 hover:bg-red-200 border-none rounded-full w-full"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
