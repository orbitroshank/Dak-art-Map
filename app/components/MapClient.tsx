"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Simple client-only map component. Interactive behavior handled at page level.
const Map = dynamic(() => import("./map"), { ssr: false });

type MapClientProps = {
  interactive: boolean;
};

export default function MapClient({ interactive }: MapClientProps) {
  return (
    <div className="w-full h-full">
      <Map interactive={interactive} />
    </div>
  );
}
