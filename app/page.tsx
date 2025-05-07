"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Load interactive map client-only
const MapClient = dynamic(() => import("./components/MapClient"), {
  ssr: false,
});

export default function Home() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Site Header */}
      <header className="fixed w-full bg-black bg-opacity-80 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-xl font-bold hover:text-gray-400 transition-colors duration-200"
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
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        {/* Background image */}
        <Image
          src="/images/city-map.jpg"
          alt="Map of Dakar Artistic Spots"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          style={{ filter: "blur(1px)" }}
        />

        {/* ⇨ New: contrast overlay ⇦ */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-70 p-8 rounded-2xl max-w-lg shadow-xl"
          >
            {" "}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Exploring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-red-500">
                Dakar
              </span>{" "}
              Through Art
            </h1>
            <p className="text-gray-200 mb-6">blahsakbdsknfdnfksnfdskn.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowMap(true)}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Open Map
              </button>
              <Link
                href="/about"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Colored Pins Filter Bar */}
      <section className="py-8 bg-white">
        <div className="flex justify-center space-x-4">
          {[
            "red",
            "yellow",
            "green",
            "blue",
            "orange",
            "purple",
            "black",
            "gray",
          ].map((color) => (
            <span
              key={color}
              className={`w-6 h-6 rounded-full bg-${color}-500 ring-2 ring-white`}
            />
          ))}
        </div>
      </section>

      {/* Map Modal */}
      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button (always on top) */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-6 right-6 z-60 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full text-xl"
            >
              ✕
            </button>

            <motion.div
              className="relative w-11/12 h-4/5 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Interactive Map */}
              <div className="absolute inset-0 z-40 pointer-events-auto">
                <MapClient interactive={true} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            About This Project
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This interactive art map of Dakar guides you through street murals,
            galleries, and public art installations. Built with Next.js,
            React-Leaflet, and Framer Motion, it lets you open the full map for
            pan, zoom and marker details, then close it to continue exploring.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium"
            >
              View Locations
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-blue-600 font-medium transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
