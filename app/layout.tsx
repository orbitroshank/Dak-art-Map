import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import * as React from "react";

// Debug wrapper for useState (cannot override React.useState directly)
function debugUseState<S>(...args: Parameters<typeof React.useState<S>>) {
  if (
    !(React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher.current
  ) {
    console.error("⚠️ useState() called outside of React render! Stack:");
    console.error(new Error().stack);
  }
  return React.useState<S>(...args);
}
// To use: replace React.useState with debugUseState in your components if needed.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dak(art) Map",
  description: "An Interactive Map of Art Locations in Dakar",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/*
        Body uses flex-column to push footer to bottom.
        Header remains at top, without extra padding pushing content down,
        allowing content to appear behind its semi-transparent background.
      */}
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed header at top */}
        <Header />

        {/* Main content fills space; no top padding */}
        <main className="flex-1">{children}</main>

        {/* Sticky footer */}
        <footer className="bg-black text-white py-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dak(art). All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
