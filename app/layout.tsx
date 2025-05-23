import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import * as React from "react";

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
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed header at top */}
        <Header />

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-black text-white py-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dak(art). All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
