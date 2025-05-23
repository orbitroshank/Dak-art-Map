// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-80 z-40">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        <Link
          href="/"
          className="   
           text-lg      
            sm:text-xl     
            font-bold
            text-white
            hover:text-transparent
            hover:bg-clip-text
            hover:bg-gradient-to-r
            hover:from-green-500
            hover:via-yellow-400
            hover:to-red-500
            transition-colors
            duration-200
          "
        >
          Dak(art)
        </Link>
        <nav className="flex space-x-3 sm:space-x-6 text-white text-s sm:text-base">
          <Link
            href="/locations"
            className="hover:text-green-500 transition-colors duration-500"
          >
            Locations
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-400 transition-colors duration-500"
          >
            Contact
          </Link>
          <Link
            href="/interview"
            className="hover:text-gray-300 transition-colors duration-500"
          >
            Interview
          </Link>
        </nav>
      </div>
    </header>
  );
}
