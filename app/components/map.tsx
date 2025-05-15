"use client";

import React from "react";
import { MapContainer, TileLayer, Pane, Marker, Popup } from "react-leaflet";
import artData from "../art-locations.json";
import { createPinIcon } from "./PinIcon";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

export default function Map({
  center = [14.6927, -17.4467],
  zoom = 13,
}: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      style={{ width: "100%", height: "100%" }}
    ></MapContainer>
  );
}
