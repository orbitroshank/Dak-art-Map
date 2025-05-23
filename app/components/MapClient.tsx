"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import artData from "../art-locations.json";
import { createPinIcon } from "./PinIcon";

interface MapClientProps {
  selectedSlug?: string;
}

export default function MapClient({ selectedSlug }: MapClientProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Map centered on Dakar
    const map = L.map(mapRef.current).setView([14.6937, -17.4441], 13);

    // Create a pane for tiles at lower z-index
    map.createPane("jawgTilePane");
    map.getPane("jawgTilePane")!.style.zIndex = "200";

    // Create a pane for markers above tiles
    map.createPane("markerPane");
    map.getPane("markerPane")!.style.zIndex = "650";

    // Jawg Lagoon tiles
    L.tileLayer(
      "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=4lZjkUdrGevRil0B9heeZfW4UXznnXoqrgSkiV7szXmw2qYp7ALTgqYl9FC4aJjn",
      {
        pane: "jawgTilePane",
        attribution: `
          <a href=\"https://www.jawg.io\" target=\"_blank\">© Jawg</a> –
          <a href=\"https://www.openstreetmap.org\" target=\"_blank\">© OSM</a> contributors
        `,
      }
    ).addTo(map);

    // Recenter and zoom in
    if (selectedSlug) {
      const selected = artData.find((item) => item.slug === selectedSlug);
      if (selected) {
        map.setView([selected.lat, selected.lng], 15, { animate: true });
      }
    }

    // Add all markers
    artData.forEach((item) => {
      const popupContent = `
        <div style=\"display: flex; flex-direction: column; gap: 4px;\">
          <strong>${item.name}</strong>
          <p>${item.excerpt}</p>
          <a href=\"/Dak-art-Map/locations/${item.slug}\" style=\"color: #2563EB; text-decoration: underline;\">Read more →</a>
        </div>
      `;

      L.marker([item.lat, item.lng], {
        pane: "markerPane",
        icon: createPinIcon("#EF4444"),
      })
        .addTo(map)
        .bindPopup(popupContent);
    });

    return () => {
      map.remove();
    };
  }, [selectedSlug]);

  return <div ref={mapRef} className="w-full h-full rounded-2xl" />;
}
