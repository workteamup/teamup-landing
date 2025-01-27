"use client";
import Landing from "../components/landing";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Check if gtag is available
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        "send_to": "AW-16735538512/OGioCMTi9dsZENCakKw-",
        "value": 1.0,
        "currency": "EUR",
      });
    }
  }, []);
  return (
    <div className="bg-white">
      <Landing />
    </div>
  );
}
