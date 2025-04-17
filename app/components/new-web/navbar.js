"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";
import Button from "./button";
import {
  semanticColors,
  greyColors,
  brandColors,
} from "../../lib/design-tokens";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

// Login button component
const LoginButton = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center text-brand-blue font-semibold hover:text-brand-purple transition-colors group"
    >
      {text}
      <ArrowRight className="h-5 w-5 ml-1 text-brand-blue group-hover:text-brand-purple transition-colors" />
    </Link>
  );
};

const Navbar = () => {
  const [isSpacesOpen, setIsSpacesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredSpace, setHoveredSpace] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [showTopBar, setShowTopBar] = useState(true);

  const spacesMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const mobileSpacesButtonRef = useRef(null);
  const mobileSolutionsButtonRef = useRef(null);
  const lastScrollY = useRef(0);

  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll events to show/hide the top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Save current scroll position
      setScrollY(currentScrollY);

      // Determine scroll direction and toggle top bar visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down & past threshold - hide top bar
        setShowTopBar(false);
      } else {
        // Scrolling up or at top - show top bar
        setShowTopBar(true);
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSpacesMenu = (e) => {
    e.stopPropagation();
    setIsSpacesOpen(!isSpacesOpen);
    if (isSolutionsOpen) setIsSolutionsOpen(false);
  };

  const toggleSolutionsMenu = (e) => {
    e.stopPropagation();
    setIsSolutionsOpen(!isSolutionsOpen);
    if (isSpacesOpen) setIsSpacesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset submenu states when toggling the main menu
    setIsSpacesOpen(false);
    setIsSolutionsOpen(false);
  };

  // Toggle functions for mobile dropdowns
  const toggleMobileSpacesMenu = () => {
    setIsSpacesOpen(!isSpacesOpen);
    setIsSolutionsOpen(false);
  };

  const toggleMobileSolutionsMenu = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsSpacesOpen(false);
  };

  // Handle clicks on the document to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile spaces dropdown if clicking outside
      if (
        isSpacesOpen &&
        mobileSpacesButtonRef.current &&
        !mobileSpacesButtonRef.current.contains(event.target) &&
        // Check if click is inside any part of the dropdown content
        !event.target.closest(".mobile-spaces-dropdown")
      ) {
        setIsSpacesOpen(false);
      }

      // Close mobile solutions dropdown if clicking outside
      if (
        isSolutionsOpen &&
        mobileSolutionsButtonRef.current &&
        !mobileSolutionsButtonRef.current.contains(event.target) &&
        // Check if click is inside any part of the dropdown content
        !event.target.closest(".mobile-solutions-dropdown")
      ) {
        setIsSolutionsOpen(false);
      }

      // Close desktop dropdowns if clicking outside
      if (
        spacesMenuRef.current &&
        !spacesMenuRef.current.contains(event.target) &&
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target)
      ) {
        setIsSpacesOpen(false);
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSpacesOpen, isSolutionsOpen]);

  // Define dropdown items with image paths
  const spacesItems = [
    {
      title: "Planning",
      href: `/${locale}/spaces/planning`,
      image: "/images/planning.jpg",
    },
    {
      title: "Sailboat Retrospective",
      href: `/${locale}/spaces/sailboat-retrospective`,
      image: "/images/planning.jpg",
    },
    {
      title: "Campfire",
      href: `/${locale}/spaces/campfire`,
      image: "/images/campfire.jpg",
    },
    {
      title: "Auditorium",
      href: `/${locale}/spaces/auditorium`,
      image: "/images/auditorium.jpg",
    },
    {
      title: "Debate Room",
      href: `/${locale}/spaces/debate-room`,
      image: "/images/debate.jpg",
    },
    {
      title: "The Floor is Lava",
      href: `/${locale}/spaces/floor-is-lava`,
      image: "/images/lava.jpg",
    },
    {
      title: "Connect 4",
      href: `/${locale}/spaces/connect-4`,
      image: "/images/four.jpg",
    },
    {
      title: "The Farmyard",
      href: `/${locale}/spaces/farmyard`,
      image: "/images/farm.jpg",
    },
  ];

  const solutionsItems = {
    byPain: [
      {
        title: t("Solutions.employeeRotation"),
        href: `/${locale}/solutions/employee-rotation`,
      },
      {
        title: t("Solutions.employeeEngagement"),
        href: `/${locale}/solutions/employee-engagement`,
      },
      {
        title: t("Solutions.remoteDisconnection"),
        href: `/${locale}/solutions/remote-disconnection`,
      },
    ],
    byType: [
      {
        title: t("Solutions.dayToDay"),
        href: `/${locale}/solutions/day-to-day-activity`,
      },
      {
        title: t("Solutions.companyEvents"),
        href: `/${locale}/solutions/company-events`,
      },
      {
        title: t("Solutions.funCompetitions"),
        href: `/${locale}/solutions/fun-competitions`,
      },
      {
        title: t("Solutions.customOffice"),
        href: `/${locale}/solutions/custom-office-space`,
      },
    ],
    byRole: [
      {
        title: t("Solutions.forCxos"),
        href: `/${locale}/solutions/for-cxos`,
      },
      {
        title: t("Solutions.forHr"),
        href: `/${locale}/solutions/for-hr`,
      },
      {
        title: t("Solutions.forManagers"),
        href: `/${locale}/solutions/for-managers`,
      },
      {
        title: t("Solutions.forEmployees"),
        href: `/${locale}/solutions/for-employees`,
      },
    ],
  };

  // Get the current hovered space image or use planning as default
  const currentSpaceImage = hoveredSpace
    ? spacesItems.find((item) => item.title === hoveredSpace)?.image
    : "/images/planning.jpg";

  // Handler for language change
  const handleLanguageChange = (newLocale) => {
    // Use the current pathname from usePathname hook
    const currentPathname = pathname || "";
    // Replace the locale segment in the path
    const newPath = currentPathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);

    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-smoke">
      {/* Secondary top navigation - always visible on desktop, collapsible on mobile */}
      <div
        className={`bg-gray-50 transition-all duration-300 ease-in-out border-b border-gray-200 ${
          showTopBar
            ? "opacity-100 max-h-20"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Secondary Navigation - Desktop */}
          <div className="hidden md:flex justify-between items-center h-12">
            {/* Left section - "Create your first meeting" */}
            <Link
              href={`/${locale}`}
              className="text-brand-blue font-semibold hover:text-brand-purple transition-colors"
            >
              {t("Navbar.createFirstMeeting")}
            </Link>

            {/* Right section - utilities */}
            <div className="flex items-center space-x-6">
              {/* Language selector - Simple flags */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`${
                    locale === "en"
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src="/flags/us.svg"
                    alt="English"
                    width={24}
                    height={16}
                    className="rounded"
                  />
                </button>
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`${
                    locale === "es"
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src="/flags/es.svg"
                    alt="Spanish"
                    width={24}
                    height={16}
                    className="rounded"
                  />
                </button>
              </div>

              {/* Login link - now using component */}
              <LoginButton
                text={t("Navbar.login")}
                href="https://app.teamup.works/login"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar - primary navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/svg/new-logo-dark.svg"
              alt="Team Up!"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Spaces dropdown */}
            <div className="relative" ref={spacesMenuRef}>
              <button
                onClick={toggleSpacesMenu}
                className="flex items-center text-gray-space hover:text-brand-purple transition-colors"
              >
                <span className="font-semibold">{t("Navbar.spaces")}</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isSpacesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSpacesOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-[100] flex w-[700px]">
                  {/* Menu items column */}
                  <div className="menu-sub-block bg-gray-cloud w-1/3 py-6 flex-shrink-0">
                    <ul>
                      <li className="menu-sub-title px-6 mb-4">
                        <span className="font-semibold text-gray-graphite uppercase text-sm">
                          {t("Spaces.categories.all", { fallback: "SPACES" })}
                        </span>
                      </li>
                      {spacesItems.map((item, index) => (
                        <li key={index} className="menu-sub-link">
                          <Link
                            href={item.href}
                            className="block px-6 py-2 text-gray-space"
                            onMouseEnter={() => setHoveredSpace(item.title)}
                            onMouseLeave={() => setHoveredSpace(null)}
                            onClick={() => setIsSpacesOpen(false)}
                          >
                            <span className="text-sm font-semibold relative transition-colors duration-200 hover:text-brand-purple group inline-block">
                              {item.title}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column */}
                  <div className="flex-1 flex items-center justify-center p-6 bg-white">
                    <div className="relative w-full max-w-xs h-60 rounded-md overflow-hidden shadow-md">
                      <Image
                        src={currentSpaceImage}
                        alt="Space Preview"
                        fill
                        className="object-cover transition-opacity duration-300"
                        priority
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div className="relative" ref={solutionsMenuRef}>
              <button
                onClick={toggleSolutionsMenu}
                className="flex items-center text-gray-space hover:text-brand-purple transition-colors"
              >
                <span className="font-semibold">{t("Navbar.solutions")}</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 z-[100] flex w-[700px]">
                  {/* By Pain Column */}
                  <div className="w-1/3 border-r border-gray-cloud">
                    <div className="px-4 py-2">
                      <span className="text-xs font-semibold uppercase text-gray-graphite">
                        {t("Solutions.byPain")}
                      </span>
                    </div>
                    {solutionsItems.byPain.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-space hover:bg-gray-cloud hover:text-brand-purple transition-colors"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  {/* By Type Column */}
                  <div className="w-1/3 border-r border-gray-cloud">
                    <div className="px-4 py-2">
                      <span className="text-xs font-semibold uppercase text-gray-graphite">
                        {t("Solutions.byType")}
                      </span>
                    </div>
                    {solutionsItems.byType.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-space hover:bg-gray-cloud hover:text-brand-purple transition-colors"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  {/* By Role Column */}
                  <div className="w-1/3">
                    <div className="px-4 py-2">
                      <span className="text-xs font-semibold uppercase text-gray-graphite">
                        {t("Solutions.byRole")}
                      </span>
                    </div>
                    {solutionsItems.byRole.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-space hover:bg-gray-cloud hover:text-brand-purple transition-colors"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/pricing`}
              className="text-gray-space hover:text-brand-purple transition-colors font-semibold"
            >
              {t("Navbar.pricing")}
            </Link>

            <Link
              href={`/${locale}/about-us`}
              className="text-gray-space hover:text-brand-purple transition-colors font-semibold"
            >
              {t("Navbar.aboutUs")}
            </Link>
          </div>

          {/* CTA Button - changed to medium size */}
          <div className="hidden md:block">
            <Button
              href="https://app.teamup.works/signup"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              {t("Navbar.tryFree")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 bg-gray-100 rounded-md p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 fixed inset-0 top-[72px] overflow-y-auto h-[calc(100vh-72px)] z-50 flex flex-col justify-between">
          {/* Mobile secondary navigation */}
          <div className="flex flex-col flex-grow">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="py-2">
                <Link
                  href={`/${locale}`}
                  className="block text-brand-blue font-semibold hover:text-brand-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("Navbar.createFirstMeeting")}
                </Link>
              </div>

              <div className="mt-2 flex flex-col space-y-2">
                {/* Language selector - mobile */}
                <div className="flex justify-between items-center py-2 border-t border-gray-200">
                  <span className="text-gray-500 text-sm">Language</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className={`${
                        locale === "en" ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      <Image
                        src="/flags/us.svg"
                        alt="English"
                        width={24}
                        height={16}
                        className="rounded"
                      />
                    </button>
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className={`${
                        locale === "es" ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      <Image
                        src="/flags/es.svg"
                        alt="Spanish"
                        width={24}
                        height={16}
                        className="rounded"
                      />
                    </button>
                  </div>
                </div>

                {/* Login - mobile using component */}
                <div className="py-2 border-t border-gray-200">
                  <LoginButton
                    text={t("Navbar.login")}
                    href="https://app.teamup.works/login"
                  />
                </div>
              </div>
            </div>

            {/* Mobile primary navigation */}
            <div className="px-4 pt-3 pb-2 space-y-1 flex-grow">
              <div className="py-2">
                <button
                  type="button"
                  aria-expanded={isSpacesOpen}
                  onClick={() => {
                    setIsSpacesOpen(!isSpacesOpen);
                    setIsSolutionsOpen(false);
                  }}
                  ref={mobileSpacesButtonRef}
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <span className="text-gray-space font-semibold">
                    {t("Navbar.spaces")}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-transform ${
                      isSpacesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSpacesOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-gray-200 mobile-spaces-dropdown">
                    {/* Simple list of spaces for mobile - similar to solutions */}
                    {spacesItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-2 text-gray-space hover:text-brand-purple"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsSpacesOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="py-2 border-t border-gray-100">
                <button
                  type="button"
                  aria-expanded={isSolutionsOpen}
                  onClick={() => {
                    setIsSolutionsOpen(!isSolutionsOpen);
                    setIsSpacesOpen(false);
                  }}
                  ref={mobileSolutionsButtonRef}
                  className="w-full flex justify-between items-center cursor-pointer"
                >
                  <span className="text-gray-space font-semibold">
                    {t("Navbar.solutions")}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-transform ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSolutionsOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-gray-200 mobile-solutions-dropdown">
                    {/* By Pain Section */}
                    <div className="mb-4">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase text-gray-graphite">
                          {t("Solutions.byPain")}
                        </span>
                      </div>
                      {solutionsItems.byPain.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-space hover:text-brand-purple"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    {/* By Type Section */}
                    <div className="mb-4">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase text-gray-graphite">
                          {t("Solutions.byType")}
                        </span>
                      </div>
                      {solutionsItems.byType.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-space hover:text-brand-purple"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    {/* By Role Section */}
                    <div>
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase text-gray-graphite">
                          {t("Solutions.byRole")}
                        </span>
                      </div>
                      {solutionsItems.byRole.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-space hover:text-brand-purple"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSolutionsOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={`/${locale}/pricing`}
                className="block py-2 text-gray-space hover:text-brand-purple font-semibold border-t border-gray-cloud"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Navbar.pricing")}
              </Link>

              <Link
                href={`/${locale}/about-us`}
                className="block py-2 text-gray-space hover:text-brand-purple font-semibold border-t border-gray-cloud"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Navbar.aboutUs")}
              </Link>
            </div>
          </div>

          {/* CTA at the bottom */}
          <div className="px-4 py-4 mt-auto border-t border-gray-200 bg-white">
            <Button
              href="https://app.teamup.works/signup"
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Navbar.tryFree")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
