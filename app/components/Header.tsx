// app/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* DESKTOP NAV */}
      <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white shadow">
        <Link href="/" className="text-2xl font-bold">
          Dak(art)
        </Link>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* MOBILE TOP BAR */}
      <header className="flex md:hidden items-center justify-between px-4 py-3 bg-white shadow fixed top-0 left-0 right-0 z-40">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="p-2 focus:outline-none"
        >
          <svg width="24" height="24" fill="currentColor">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Link href="/" className="text-xl font-bold">
          Dak(art)
        </Link>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:hidden z-50
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 focus:outline-none"
          >
            {/* X */}
            <svg width="24" height="24" fill="currentColor">
              <path
                d="M6 6l12 12M6 18L18 6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-3 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="md:hidden h-[56px]"></div>
    </>
  );
}
