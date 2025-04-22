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
  const [hoverTimeout, setHoverTimeout] = useState(null);

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
                  className={`flex items-center text-brand-700 hover:text-purple-600 cursor-pointer transition-colors relative ${
                    item.label !== "Sign in"
                      ? "hidden xl:flex"
                      : "hidden sm:flex"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  <span>{item.label}</span>
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
                                  <span className="text-brand-700 text-sm">
                                    Auditorium
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/planning.svg"
                                    width={20}
                                    height={20}
                                    alt="Planning"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Planning
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/sailboat-retrospective.svg"
                                    width={20}
                                    height={20}
                                    alt="Sailboat Retrospective"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Sailboat Retrospective
                                  </span>
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
                                  <span className="text-brand-700 text-sm">
                                    Campfire
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/this-or-that.svg"
                                    width={20}
                                    height={20}
                                    alt="This or That"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    This or That
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/debate-room.svg"
                                    width={20}
                                    height={20}
                                    alt="Debate Room"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Debate Room
                                  </span>
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
                                  <span className="text-brand-700 text-sm">
                                    The Floor is Lava
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/connect-4.svg"
                                    width={20}
                                    height={20}
                                    alt="Connect 4"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Connect 4
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/the-farmyard.svg"
                                    width={20}
                                    height={20}
                                    alt="The Farmyard"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    The Farmyard
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/football-field.svg"
                                    width={20}
                                    height={20}
                                    alt="Football Field"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Football Field
                                  </span>
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
                                  <span className="text-brand-700 text-sm">
                                    Employee Turnover
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/employee-disengagement.svg"
                                    width={20}
                                    height={20}
                                    alt="Employee Disengagement"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Employee Disengagement
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/remote-disconnection.svg"
                                    width={20}
                                    height={20}
                                    alt="Remote Disconnection"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Remote Disconnection
                                  </span>
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
                                  <span className="text-brand-700 text-sm">
                                    CXOs
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/hr.svg"
                                    width={20}
                                    height={20}
                                    alt="HR"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    HR
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/managers.svg"
                                    width={20}
                                    height={20}
                                    alt="Managers"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Managers
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/employees.svg"
                                    width={20}
                                    height={20}
                                    alt="Employees"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Employees
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/marketing.svg"
                                    width={20}
                                    height={20}
                                    alt="Marketing"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Marketing
                                  </span>
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
                                  <span className="text-brand-700 text-sm">
                                    Daily Activity
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/events.svg"
                                    width={20}
                                    height={20}
                                    alt="Events"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Events
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/fun-competitions.svg"
                                    width={20}
                                    height={20}
                                    alt="Fun Competitions"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Fun Competitions
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/svg/custom-icons/menu/custom-office-space.svg"
                                    width={20}
                                    height={20}
                                    alt="Custom Office Space"
                                  />
                                  <span className="text-brand-700 text-sm">
                                    Custom Office Space
                                  </span>
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
                <div className="px-6 pb-8 bg-white">
                  {item.label === "Spaces" ? (
                    <div className="flex flex-col gap-8">
                      {/* Daily Activity */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Daily activity
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/auditorium.svg"
                            width={20}
                            height={20}
                            alt="Auditorium"
                          />
                          <span className="text-brand-700 text-sm">
                            Auditorium
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/planning.svg"
                            width={20}
                            height={20}
                            alt="Planning"
                          />
                          <span className="text-brand-700 text-sm">
                            Planning
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/sailboat-retrospective.svg"
                            width={20}
                            height={20}
                            alt="Sailboat Retrospective"
                          />
                          <span className="text-brand-700 text-sm">
                            Sailboat Retrospective
                          </span>
                        </div>
                      </div>
                      {/* Engagement */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Engagement
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/campfire.svg"
                            width={20}
                            height={20}
                            alt="Campfire"
                          />
                          <span className="text-brand-700 text-sm">
                            Campfire
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/this-or-that.svg"
                            width={20}
                            height={20}
                            alt="This or That"
                          />
                          <span className="text-brand-700 text-sm">
                            This or That
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/debate-room.svg"
                            width={20}
                            height={20}
                            alt="Debate Room"
                          />
                          <span className="text-brand-700 text-sm">
                            Debate Room
                          </span>
                        </div>
                      </div>
                      {/* Fun */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          Fun
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/the-floor-is-lava.svg"
                            width={20}
                            height={20}
                            alt="The Floor is Lava"
                          />
                          <span className="text-brand-700 text-sm">
                            The Floor is Lava
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/connect-4.svg"
                            width={20}
                            height={20}
                            alt="Connect 4"
                          />
                          <span className="text-brand-700 text-sm">
                            Connect 4
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/the-farmyard.svg"
                            width={20}
                            height={20}
                            alt="The Farmyard"
                          />
                          <span className="text-brand-700 text-sm">
                            The Farmyard
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/football-field.svg"
                            width={20}
                            height={20}
                            alt="Football Field"
                          />
                          <span className="text-brand-700 text-sm">
                            Football Field
                          </span>
                        </div>
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
                          <span className="text-brand-700 text-sm">
                            Employee Turnover
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/employee-disengagement.svg"
                            width={20}
                            height={20}
                            alt="Employee Disengagement"
                          />
                          <span className="text-brand-700 text-sm">
                            Employee Disengagement
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/remote-disconnection.svg"
                            width={20}
                            height={20}
                            alt="Remote Disconnection"
                          />
                          <span className="text-brand-700 text-sm">
                            Remote Disconnection
                          </span>
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
                          <span className="text-brand-700 text-sm">CXOs</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/hr.svg"
                            width={20}
                            height={20}
                            alt="HR"
                          />
                          <span className="text-brand-700 text-sm">HR</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/managers.svg"
                            width={20}
                            height={20}
                            alt="Managers"
                          />
                          <span className="text-brand-700 text-sm">
                            Managers
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/employees.svg"
                            width={20}
                            height={20}
                            alt="Employees"
                          />
                          <span className="text-brand-700 text-sm">
                            Employees
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/marketing.svg"
                            width={20}
                            height={20}
                            alt="Marketing"
                          />
                          <span className="text-brand-700 text-sm">
                            Marketing
                          </span>
                        </div>
                      </div>
                      {/* By Type */}
                      <div className="flex flex-col gap-4">
                        <span className="text-purple-300 text-xs font-medium tracking-[0.08em] uppercase">
                          By type
                        </span>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/daily-activity.svg"
                            width={20}
                            height={20}
                            alt="Daily Activity"
                          />
                          <span className="text-brand-700 text-sm">
                            Daily Activity
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/events.svg"
                            width={20}
                            height={20}
                            alt="Events"
                          />
                          <span className="text-brand-700 text-sm">Events</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/fun-competitions.svg"
                            width={20}
                            height={20}
                            alt="Fun Competitions"
                          />
                          <span className="text-brand-700 text-sm">
                            Fun Competitions
                          </span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                          <Image
                            src="/svg/custom-icons/menu/custom-office-space.svg"
                            width={20}
                            height={20}
                            alt="Custom Office Space"
                          />
                          <span className="text-brand-700 text-sm">
                            Custom Office Space
                          </span>
                        </div>
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
