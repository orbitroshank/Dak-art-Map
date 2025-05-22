import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about the interactive art map of Dakar and its creator, Roshan Kalantarian.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-left">About the Project</h1>
        <p className="mb-4">
          I'm Roshan Kalantarian, a gap-year student from St. John, USVI,
          currently living in Dakar, Senegal through the YES Abroad program.
          Drawn to the vibrant fusion of traditional and contemporary art here,
          I set out to explore Dakar’s creative landscape firsthand.
        </p>
        <p className="mb-4">
          Inspired by the 2024 Dakar Biennale—where public murals,
          installations, and gallery exhibitions brought an amazing energy to
          the city—I built this interactive map to share Senegal’s rich art
          scene. Each location features photos, context, and local insights
          gathered through visits and artist conversations.
        </p>
        <p>
          Powered by Next.js, React-Leaflet, and Framer Motion, this site is
          designed to be intuitive for both locals and travelers. Going forward,
          I plan to add artist interviews, new art routes, and multilingual
          support, hoping to spark curiosity and connection through art.
        </p>
      </main>
    </div>
  );
}
