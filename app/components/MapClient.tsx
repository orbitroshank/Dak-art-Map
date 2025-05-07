"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet.markercluster";

type Location = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  color: string; // e.g. 'red' or hex '#EF4444'
};

export default function MapClient({ locations }: { locations: Location[] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // 1️⃣ Initialize map
    const map = L.map(mapRef.current).setView([14.6937, -17.4441], 13);

    // 2️⃣ Jawg Lagoon tiles (clean, pastel)
    L.tileLayer(
      "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=4lZjkUdrGevRil0B9heeZfW4UXznnXoqrgSkiV7szXmw2qYp7ALTgqYl9FC4aJjn",
      { attribution: "" }
    ).addTo(map);
    map.attributionControl
      .setPrefix("")
      .addAttribution(
        '<a href="https://www.jawg.io" target="_blank">© Jawg</a> – ' +
          '<a href="https://www.openstreetmap.org" target="_blank">© OSM</a> contributors'
      );

    // 3️⃣ Helper: build a colored SVG pin
    const createPin = (color: string) =>
      L.divIcon({
        className: "highlightable-marker",
        iconAnchor: [12, 24],
        html: `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="${color}">
            <path d="M12 2C8 2 5 5.03 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.97-3-7-7-7z"/>
          </svg>`,
      });

    // 4️⃣ Cluster group & markers
    const clusterGroup = L.markerClusterGroup();
    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: createPin(loc.color),
      }).bindPopup(`
        <strong>${loc.name}</strong><br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}"
           target="_blank">Google Maps</a>
        |
        <a href="maps://?daddr=${loc.lat},${loc.lng}">Apple Maps</a>
      `);
      clusterGroup.addLayer(marker);
    });
    map.addLayer(clusterGroup);

    // 5️⃣ Custom filter control (top-right)
    const FilterControl = L.Control.extend({
      options: { position: "topright" },
      onAdd: () => {
        const container = L.DomUtil.create(
          "div",
          "leaflet-control custom-filter"
        );
        container.innerHTML = `
          <button data-col="all">All</button>
          <button data-col="red">Reds</button>
          <button data-col="blue">Blues</button>
        `;
        L.DomEvent.disableClickPropagation(container);
        return container;
      },
    });
    map.addControl(new FilterControl());

    document.querySelectorAll(".custom-filter button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const col = btn.getAttribute("data-col");
        clusterGroup.clearLayers();
        locations
          .filter((loc) => col === "all" || loc.color === col)
          .forEach((loc) => {
            clusterGroup.addLayer(
              L.marker([loc.lat, loc.lng], { icon: createPin(loc.color) })
            );
          });
      });
    });

    return () => {
      map.remove();
    };
  }, [locations]);

  return <div ref={mapRef} className="w-full h-screen" />;
}
