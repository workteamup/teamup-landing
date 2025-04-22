"use client";
import React from "react";
import { useState, useEffect } from "react";
import Button from "./button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Spaces", hasIcon: true },
    { label: "Solutions", hasIcon: true },
    { label: "Pricing" },
    { label: "About us" },
    { label: "Sign in" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[88px] bg-white z-50 transition-shadow ${
        hasScrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/svg/logos/teamup-logo-dark.svg"
            alt="Team Up! Logo"
            width={193}
            height={40}
          />
        </div>

        {/* Menu and Buttons */}
        <div className="flex items-center gap-8">
          {/* Menu Items */}
          <div className="flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-brand-700 hover:text-purple-600 cursor-pointer transition-colors"
              >
                <span>{item.label}</span>
                {item.hasIcon && (
                  <ChevronDown className="w-4 h-4 ml-1" strokeWidth={2} />
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="tertiary" size="md">
              Contact sales
            </Button>
            <Button variant="primary" size="md">
              Request access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
