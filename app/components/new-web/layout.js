"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";

export default function WebLayout({ children }) {
  const pathname = usePathname();

  // Calculate top padding based on the navbar height (two-row navbar)
  // This ensures content doesn't get hidden under the navbar

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Account for exact navbar heights: 72px on mobile, 120.615px on desktop */}
      <main className="flex-grow pt-[72px] md:pt-[120.615px]">{children}</main>
      <Footer />
    </div>
  );
}
