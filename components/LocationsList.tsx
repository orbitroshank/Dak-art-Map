"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MapClient = dynamic(() => import("./MapClient"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.03, y: -5 },
};

export default function LocationsList({
  locations,
}: {
  locations: {
    slug: string;
    title: string;
    excerpt?: string;
    image?: string;
  }[];
}) {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string>();

  return (
    <>
      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {locations.map((loc) => (
          <motion.div
            key={loc.slug}
            className="rounded-2xl shadow-lg flex flex-col overflow-hidden cursor-pointer card"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => router.push(`/locations/${loc.slug}`)}
          >
            {loc.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={loc.image}
                  alt={loc.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1 text-center">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {loc.title}
              </h2>
              {loc.excerpt && (
                <p className="text-gray-600 mb-4">{loc.excerpt}</p>
              )}
              <div className="mt-auto flex w-full justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlug(loc.slug);
                    setShowMap(true);
                  }}
                  className="px-4 py-2 border-2 rounded-lg font-medium text-green-600 hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-400 hover:to-red-500 hover:text-white transition-all duration-300"
                >
                  Show on Map
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Map modal */}
      {showMap && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-6 right-6 bg-white p-2 rounded-full text-xl"
          >
            ✕
          </button>
          <div className="relative w-11/12 max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden">
            <MapClient selectedSlug={selectedSlug} />
          </div>
        </div>
      )}
    </>
  );
}
