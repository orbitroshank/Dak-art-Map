"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Load interactive map client-only
const MapClient = dynamic(() => import("@/app/components/MapClient"), {
  ssr: false,
});

export default function Home() {
  const [showMap, setShowMap] = useState(false);

  return (
    // Flex-1 ensures this page fills space between header and footer
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/Dak-art-Map/images/city-map.jpg"
          alt="Map of Dakar Artistic Spots"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          style={{ filter: "blur(1px)" }}
        />

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black bg-opacity-70 p-8 rounded-2xl max-w-lg shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Exploring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-red-500">
                Dakar
              </span>{" "}
              Through Art
            </h1>
            <p className="text-gray-200 mb-6">
              This interactive art map of Dakar guides you through street
              murals, galleries, and public art installations. Built with
              Next.js, React-Leaflet, and Framer Motion.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowMap(true)}
                className="bg-white text-black border-2 px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:via-yellow-500 hover:to-red-600 hover:text-white transition-all duration-300"
              >
                Open Map
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            className="fixed inset-0 backdrop-blur-xs bg-black/20 bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-6 right-6 z-60 bg-white bg-opacity-75 hover:bg-gray-300 p-2 rounded-full text-xl"
            >
              ✕
            </button>

            <motion.div
              className="relative w-11/12 max-w-4x1 h-[80vh] bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Interactive Map */}
              <div className="absolute inset-0 z-40 pointer-events-auto">
                <MapClient />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            About This Project
          </h2>
          <p className="leading-relaxed mb-6">
            Art is a central part of Senegalese culture, reflecting the
            country’s history, traditions, and identity. In Dakar, art is woven
            into everyday life—on the walls of neighborhoods, in galleries, and
            in public spaces. Walking down the corniche, there are countless
            murals, sculptures, and other pieces of art. The goal of this
            project is to count them. Traditional Senegalese art, such as
            textile weaving, beadwork, and wood carving, has long been a way to
            tell stories, preserve history, and build community. Over time,
            these practices have merged with modern styles, creating a diverse
            artistic culture.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="px-6 py-3 border-2 border-green-500 hover:bg-green-500 hover:text-white rounded-lg text-green-500 font-medium transition"
            >
              View Locations
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg text-yellow-400 font-medium transition"
            >
              Contact Me
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-lg text-red-500 font-medium transition"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
