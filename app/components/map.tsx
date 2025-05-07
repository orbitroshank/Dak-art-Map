import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import artData from "../art-locations.json";
import Link from "next/link";

type MapProps = { interactive: boolean };

export default function Map({ interactive }: MapProps) {
  return (
    <MapContainer
      center={[14.6927, -17.4467]}
      zoom={13}
      // only allow wheel‐zoom when “interactive” is true
      scrollWheelZoom={interactive}
      // map dragging will naturally respect pointer-events, so no need to disable it separately
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {artData.map((item) => (
        <Marker key={item.id} position={[item.lat, item.lng]}>
          <Popup>
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.excerpt}</p>
            <Link href={`/art/${item.slug}`}>Learn more</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
