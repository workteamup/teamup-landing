"use client";
import React from "react";
import { useState, useEffect } from "react";
import Button from "./button";
import {
  ChevronDown,
  ChevronUp,
  AlignJustify,
  X,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[88px] bg-white z-50 transition-shadow ${
          hasScrolled && !isMenuOpen ? "shadow-xl" : ""
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
                  className={`flex items-center text-brand-700 hover:text-purple-600 cursor-pointer transition-colors ${
                    item.label !== "Sign in"
                      ? "hidden xl:flex"
                      : "hidden sm:flex"
                  }`}
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
              <Button variant="primary" size="md" className="hidden sm:flex">
                Request access
              </Button>
              <Button variant="tertiary" size="md" className="hidden md:flex">
                Contact sales
              </Button>
              <Button
                variant={isMenuOpen ? "primary" : "tertiary"}
                size="md"
                iconOnly
                withShadow={false}
                className="xl:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <AlignJustify className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      <div
        className={`fixed top-[88px] left-0 w-full h-[calc(100vh-88px)] bg-white z-40 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Mobile menu items */}
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className={`w-full ${
                index === menuItems.length - 1 ||
                (item.label === "About us" && window.innerWidth >= 640)
                  ? "border-b-0"
                  : "border-b border-dark-smoke"
              } ${item.label === "Sign in" ? "sm:hidden" : ""}`}
            >
              <div
                className="px-6 h-20 flex items-center justify-between cursor-pointer"
                onClick={() => item.hasIcon && toggleExpand(item.label)}
              >
                <span className="text-xl">{item.label}</span>
                {item.hasIcon ? (
                  expandedItems[item.label] ? (
                    <ChevronUp className="w-5 h-5" strokeWidth={2} />
                  ) : (
                    <ChevronDown className="w-5 h-5" strokeWidth={2} />
                  )
                ) : (
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                )}
              </div>
              {item.hasIcon && expandedItems[item.label] && (
                <div className="px-6 py-4 bg-white">
                  <span className="text-gray-500">TBD</span>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Buttons for mobile - moved below menu items */}
        <div className="px-6 pt-8 pb-4 flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="md" className="w-full sm:hidden">
            Request access
          </Button>
          <Button variant="tertiary" size="md" className="w-full md:hidden">
            Contact sales
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
