"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapClient() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map centered on Dakar
    const map = L.map(mapRef.current).setView([14.6937, -17.4441], 13);

    // Jawg Lagoon tiles
    L.tileLayer(
      "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=4lZjkUdrGevRil0B9heeZfW4UXznnXoqrgSkiV7szXmw2qYp7ALTgqYl9FC4aJjn",
      {
        attribution: `
          <a href="https://www.jawg.io" target="_blank">© Jawg</a> –
          <a href="https://www.openstreetmap.org" target="_blank">© OSM</a> contributors
        `,
      }
    ).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="w-full h-screen" />;
}
