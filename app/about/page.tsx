"use client";

import Header from "@/app/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lava-text text-4xl font-bold mb-6 text-left"
        >
          About the Project
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative block rounded-2xl mx-auto my-4 w-150 h-150"
        >
          <Image
            src="/Dak-art-Map/images/roshan-k.JPEG"
            alt="Roshan Kalantarian with their host parents"
            className="object-cover rounded-2x1 absolute inset-0 z-0"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          I am Roshan Kalantarian, a gap-year student from St. John, USVI,
          currently living in Dakar, Senegal through the YES Abroad program.
          Drawn to the art here, I wanted to explore and document Dakar&rsquo;s
          creativity firsthand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-4 text-center"
        >
          A key inspiration for my project was the Dakar Biennale of
          Contemporary African Art (Dak&rsquo;Art), which took place in 2024
          from November 7 to December 7. As one of the most significant art
          events in Africa, the Biennale showcases the creativity of artists
          from across the continent and brings art to the forefront of public
          life in Dakar. During the Biennale, I had the chance to visit numerous
          exhibition locations and experience the city&rsquo;s full artistic
          energy firsthand. I also participated in an art class led by an artist
          featured in the Biennale, which gave me unique insights into their
          creative process and the themes they explored in their work. The
          experience deepened my appreciation for the Biennale and its role in
          celebrating and sharing African art.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-4 text-center"
        >
          What makes the Dakar Biennale special is its accessibility—art is not
          confined to galleries but extends into the streets. There is the
          &ldquo;ON&ldquo; program and &ldquo;OFF,&ldquo; with the former
          corresponding to the bigger-name art sites and the latter to street
          art. Murals, sculptures, and installations pop up in neighborhoods and
          public spaces, transforming Dakar into an open-air museum. This
          approach reflects how deeply public art is embedded in Senegalese
          culture. Murals and other forms of street art are not just decorative;
          they carry messages about history, identity, and social change. They
          connect with local communities while also inviting visitors to see
          Dakar in a new way.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center"
        >
          Powered by Next.js, React-Leaflet, and Framer Motion, this site is
          designed to be intuitive for both locals and travelers. Going forward,
          I plan to add artist interviews, new art routes, and multilingual
          support in Wolof and French. I would also love to expand this project
          to include the insights of others as well as more locations in the
          world.
        </motion.p>
      </main>
    </div>
  );
}
