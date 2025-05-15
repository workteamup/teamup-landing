"use client";
import React, { useState, useEffect } from "react";
import Button from "./button";
import {
  ChevronDown,
  ChevronUp,
  AlignJustify,
  X,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleMouseEnter = (label) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setExpandedItems((prev) => {
      // Close all other menus first
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      // Open the current menu
      newState[label] = true;
      return newState;
    });
  };

  const handleMouseLeave = (label) => {
    const timeout = setTimeout(() => {
      setExpandedItems((prev) => {
        // Only close the current menu
        return { ...prev, [label]: false };
      });
    }, 200); // 200ms delay
    setHoverTimeout(timeout);
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

  useEffect(() => {
    setIsClient(true);
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
            <Link href="/">
              <Image
                src="/svg/logos/teamup-logo-dark.svg"
                alt="Team Up! Logo"
                width={193}
                height={40}
              />
            </Link>
          </div>

          {/* Menu and Buttons */}
          <div className="flex items-center gap-8">
            {/* Menu Items */}
            <div className="flex items-center gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center text-brand-700 hover:text-purple-600 cursor-pointer transition-colors relative ${
                    item.label !== "Sign in"
                      ? "hidden xl:flex"
                      : "hidden sm:flex"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  {item.label === "Sign in" ? (
                    <a
                      href="https://app.teamup.works/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{item.label}</span>
                    </a>
                  ) : item.label === "Pricing" ? (
                    <Link href="/pricing">
                      <span>{item.label}</span>
                    </Link>
                  ) : item.label === "About us" ? (
                    <Link href="/about-us">
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {item.hasIcon && (
                    <>
                      <ChevronDown className="w-4 h-4 ml-1" strokeWidth={2} />
                      {/* Floating menu bubble */}
                      <div
                        className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[640px] rounded-[20px] px-8 py-6 bg-white shadow-lg transition-opacity duration-200 ${
                          expandedItems[item.label]
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={() => handleMouseLeave(item.label)}
                      >
                        <div className="w-full h-full grid grid-cols-3 gap-4">
                          {item.label === "Spaces" ? (
                            <>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  Daily activity
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/auditorium.svg"
                                    width={20}
                                    height={20}
                                    alt="Auditorium"
                                  />
                                  <a
                                    href="/spaces/auditorium"
                                    className="text-brand-700 text-sm"
                                  >
                                    Auditorium
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/planning.svg"
                                    width={20}
                                    height={20}
                                    alt="Planning"
                                  />
                                  <a
                                    href="/spaces/planning"
                                    className="text-brand-700 text-sm"
                                  >
                                    Planning
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/sailboat-retrospective.svg"
                                    width={20}
                                    height={20}
                                    alt="Sailboat Retrospective"
                                  />
                                  <a
                                    href="/spaces/sailboat-retrospective"
                                    className="text-brand-700 text-sm"
                                  >
                                    Sailboat Retrospective
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  Engagement
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/campfire.svg"
                                    width={20}
                                    height={20}
                                    alt="Campfire"
                                  />
                                  <a
                                    href="/spaces/campfire"
                                    className="text-brand-700 text-sm"
                                  >
                                    Campfire
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/this-or-that.svg"
                                    width={20}
                                    height={20}
                                    alt="This or That"
                                  />
                                  <a
                                    href="/spaces/this-or-that"
                                    className="text-brand-700 text-sm"
                                  >
                                    This or That
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/debate-room.svg"
                                    width={20}
                                    height={20}
                                    alt="Debate Room"
                                  />
                                  <a
                                    href="/spaces/debate-room"
                                    className="text-brand-700 text-sm"
                                  >
                                    Debate Room
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  Fun
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/the-floor-is-lava.svg"
                                    width={20}
                                    height={20}
                                    alt="The Floor is Lava"
                                  />
                                  <a
                                    href="/spaces/the-floor-is-lava"
                                    className="text-brand-700 text-sm"
                                  >
                                    The Floor is Lava
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/connect-4.svg"
                                    width={20}
                                    height={20}
                                    alt="Connect 4"
                                  />
                                  <a
                                    href="/spaces/connect-4"
                                    className="text-brand-700 text-sm"
                                  >
                                    Connect 4
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/the-farmyard.svg"
                                    width={20}
                                    height={20}
                                    alt="The Farmyard"
                                  />
                                  <a
                                    href="/spaces/the-farmyard"
                                    className="text-brand-700 text-sm"
                                  >
                                    The Farmyard
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/football-field.svg"
                                    width={20}
                                    height={20}
                                    alt="Football Field"
                                  />
                                  <a
                                    href="/spaces/football-field"
                                    className="text-brand-700 text-sm"
                                  >
                                    Football Field
                                  </a>
                                </div>
                              </div>
                            </>
                          ) : item.label === "Solutions" ? (
                            <>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  By pain
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/employee-turnover.svg"
                                    width={20}
                                    height={20}
                                    alt="Employee Turnover"
                                  />
                                  <a
                                    href="/solutions/for-employee-turnover"
                                    className="text-brand-700 text-sm"
                                  >
                                    Employee Turnover
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/employee-disengagement.svg"
                                    width={20}
                                    height={20}
                                    alt="Employee Disengagement"
                                  />
                                  <a
                                    href="/solutions/for-employee-disengagement"
                                    className="text-brand-700 text-sm"
                                  >
                                    Employee Disengagement
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/remote-disconnection.svg"
                                    width={20}
                                    height={20}
                                    alt="Remote Disconnection"
                                  />
                                  <a
                                    href="/solutions/for-remote-disconnection"
                                    className="text-brand-700 text-sm"
                                  >
                                    Remote Disconnection
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  By role
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/cxos.svg"
                                    width={20}
                                    height={20}
                                    alt="CXOs"
                                  />
                                  <a
                                    href="/solutions/for-cxos"
                                    className="text-brand-700 text-sm"
                                  >
                                    CXOs
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/hr.svg"
                                    width={20}
                                    height={20}
                                    alt="HR"
                                  />
                                  <a
                                    href="/solutions/for-hr"
                                    className="text-brand-700 text-sm"
                                  >
                                    HR
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/managers.svg"
                                    width={20}
                                    height={20}
                                    alt="Managers"
                                  />
                                  <a
                                    href="/solutions/for-managers"
                                    className="text-brand-700 text-sm"
                                  >
                                    Managers
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/employees.svg"
                                    width={20}
                                    height={20}
                                    alt="Employees"
                                  />
                                  <a
                                    href="/solutions/for-employees"
                                    className="text-brand-700 text-sm"
                                  >
                                    Employees
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col gap-6">
                                <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                                  By type
                                </span>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/daily-activity.svg"
                                    width={20}
                                    height={20}
                                    alt="Daily Activity"
                                  />
                                  <a
                                    href="/solutions/for-daily-activity"
                                    className="text-brand-700 text-sm"
                                  >
                                    Daily Activity
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/events.svg"
                                    width={20}
                                    height={20}
                                    alt="Events"
                                  />
                                  <a
                                    href="/solutions/for-company-events"
                                    className="text-brand-700 text-sm"
                                  >
                                    Events
                                  </a>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/fun-competitions.svg"
                                    width={20}
                                    height={20}
                                    alt="Fun Competitions"
                                  />
                                  <a
                                    href="/solutions/for-fun-competitions"
                                    className="text-brand-700 text-sm"
                                  >
                                    Fun Competitions
                                  </a>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                className="hidden sm:flex"
                onClick={() =>
                  window.open("https://app.teamup.works/signup", "_blank")
                }
              >
                Request access
              </Button>
              <Button
                variant="tertiary"
                size="md"
                className="hidden md:flex"
                onClick={() => (window.location.href = "/contact")}
              >
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
        className={`fixed top-[88px] left-0 w-full h-[calc(100vh-88px)] bg-white z-40 overflow-y-auto scrollbar-hide ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Mobile menu items */}
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className={`w-full ${
                index === menuItems.length - 1 ||
                (item.label === "About us" &&
                  isClient &&
                  window.innerWidth >= 640)
                  ? "border-b-0"
                  : "border-b border-dark-smoke"
              } ${item.label === "Sign in" ? "sm:hidden" : ""}`}
            >
              <div
                className="px-6 h-20 flex items-center justify-between cursor-pointer"
                onClick={() => item.hasIcon && toggleExpand(item.label)}
              >
                {item.label === "Sign in" ? (
                  <a
                    href="https://app.teamup.works/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    {item.label}
                  </a>
                ) : item.label === "Pricing" ? (
                  <Link href="/pricing" className="text-xl">
                    {item.label}
                  </Link>
                ) : item.label === "About us" ? (
                  <Link href="/about-us" className="text-xl">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-xl">{item.label}</span>
                )}
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
                <div className="px-6 pb-8 bg-white">
                  {item.label === "Spaces" ? (
                    <div className="flex flex-col gap-8">
                      {/* Daily Activity */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Daily activity
                        </span>
                        <a
                          href="/spaces/auditorium"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/auditorium.svg"
                            width={20}
                            height={20}
                            alt="Auditorium"
                          />
                          <span className="text-brand-700 text-sm">
                            Auditorium
                          </span>
                        </a>
                        <a
                          href="/spaces/planning"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/planning.svg"
                            width={20}
                            height={20}
                            alt="Planning"
                          />
                          <span className="text-brand-700 text-sm">
                            Planning
                          </span>
                        </a>
                        <a
                          href="/spaces/sailboat-retrospective"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/sailboat-retrospective.svg"
                            width={20}
                            height={20}
                            alt="Sailboat Retrospective"
                          />
                          <span className="text-brand-700 text-sm">
                            Sailboat Retrospective
                          </span>
                        </a>
                      </div>
                      {/* Engagement */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Engagement
                        </span>
                        <a
                          href="/spaces/campfire"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/campfire.svg"
                            width={20}
                            height={20}
                            alt="Campfire"
                          />
                          <span className="text-brand-700 text-sm">
                            Campfire
                          </span>
                        </a>
                        <a
                          href="/spaces/this-or-that"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/this-or-that.svg"
                            width={20}
                            height={20}
                            alt="This or That"
                          />
                          <span className="text-brand-700 text-sm">
                            This or That
                          </span>
                        </a>
                        <a
                          href="/spaces/debate-room"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/debate-room.svg"
                            width={20}
                            height={20}
                            alt="Debate Room"
                          />
                          <span className="text-brand-700 text-sm">
                            Debate Room
                          </span>
                        </a>
                      </div>
                      {/* Fun */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Fun
                        </span>
                        <a
                          href="/spaces/the-floor-is-lava"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/the-floor-is-lava.svg"
                            width={20}
                            height={20}
                            alt="The Floor is Lava"
                          />
                          <span className="text-brand-700 text-sm">
                            The Floor is Lava
                          </span>
                        </a>
                        <a
                          href="/spaces/connect-4"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/connect-4.svg"
                            width={20}
                            height={20}
                            alt="Connect 4"
                          />
                          <span className="text-brand-700 text-sm">
                            Connect 4
                          </span>
                        </a>
                        <a
                          href="/spaces/the-farmyard"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/the-farmyard.svg"
                            width={20}
                            height={20}
                            alt="The Farmyard"
                          />
                          <span className="text-brand-700 text-sm">
                            The Farmyard
                          </span>
                        </a>
                        <a
                          href="/spaces/football-field"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/football-field.svg"
                            width={20}
                            height={20}
                            alt="Football Field"
                          />
                          <span className="text-brand-700 text-sm">
                            Football Field
                          </span>
                        </a>
                      </div>
                    </div>
                  ) : item.label === "Solutions" ? (
                    <div className="flex flex-col gap-8">
                      {/* By Pain */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          By pain
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/employee-turnover.svg"
                            width={20}
                            height={20}
                            alt="Employee Turnover"
                          />
                          <a
                            href="/solutions/for-employee-turnover"
                            className="text-brand-700 text-sm"
                          >
                            Employee Turnover
                          </a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/employee-disengagement.svg"
                            width={20}
                            height={20}
                            alt="Employee Disengagement"
                          />
                          <a
                            href="/solutions/for-employee-disengagement"
                            className="text-brand-700 text-sm"
                          >
                            Employee Disengagement
                          </a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/remote-disconnection.svg"
                            width={20}
                            height={20}
                            alt="Remote Disconnection"
                          />
                          <a
                            href="/solutions/for-remote-disconnection"
                            className="text-brand-700 text-sm"
                          >
                            Remote Disconnection
                          </a>
                        </div>
                      </div>
                      {/* By Role */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          By role
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/cxos.svg"
                            width={20}
                            height={20}
                            alt="CXOs"
                          />
                          <a
                            href="/solutions/for-cxos"
                            className="text-brand-700 text-sm"
                          >
                            CXOs
                          </a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/hr.svg"
                            width={20}
                            height={20}
                            alt="HR"
                          />
                          <a
                            href="/solutions/for-hr"
                            className="text-brand-700 text-sm"
                          >
                            HR
                          </a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/managers.svg"
                            width={20}
                            height={20}
                            alt="Managers"
                          />
                          <a
                            href="/solutions/for-managers"
                            className="text-brand-700 text-sm"
                          >
                            Managers
                          </a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/employees.svg"
                            width={20}
                            height={20}
                            alt="Employees"
                          />
                          <a
                            href="/solutions/for-employees"
                            className="text-brand-700 text-sm"
                          >
                            Employees
                          </a>
                        </div>
                      </div>
                      {/* By Type */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          By type
                        </span>
                        <a
                          href="/solutions/for-daily-activity"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/daily-activity.svg"
                            width={20}
                            height={20}
                            alt="Daily Activity"
                          />
                          <span className="text-brand-700 text-sm">
                            Daily Activity
                          </span>
                        </a>
                        <a
                          href="/solutions/for-company-events"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/events.svg"
                            width={20}
                            height={20}
                            alt="Events"
                          />
                          <span className="text-brand-700 text-sm">Events</span>
                        </a>
                        <a
                          href="/solutions/for-fun-competitions"
                          className="flex items-center gap-4 cursor-pointer"
                        >
                          <Image
                            src="/svg/custom-icons/menu/fun-competitions.svg"
                            width={20}
                            height={20}
                            alt="Fun Competitions"
                          />
                          <span className="text-brand-700 text-sm">
                            Fun Competitions
                          </span>
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Buttons for mobile - moved below menu items */}
        <div className="px-6 pt-8 pb-8 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:hidden"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
          >
            Request access
          </Button>
          <Button
            variant="tertiary"
            size="md"
            className="w-full md:hidden"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact sales
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
