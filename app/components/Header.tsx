// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-80 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-xl font-bold
            hover:text-transparent hover:bg-clip-text
            hover:bg-gradient-to-r hover:from-green-500
            hover:via-yellow-400 hover:to-red-500
            transition-colors duration-200"
        >
          Dak(art)
        </Link>
        <nav className="flex space-x-6 text-white">
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
          ></Link>
        </nav>
      </div>
    </header>
  );
}
