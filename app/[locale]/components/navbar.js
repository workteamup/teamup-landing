"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./button";
import { HamburgerIcon, CloseIcon } from "./icons/navbar-icons";
import TeamUpLogo from "./teamup-logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      id: "benefits",
      title: t("benefits"),
      href: "#benefits",
    },
    {
      id: "what",
      title: t("whatIsTeamUp"),
      href: "#what",
    },
    {
      id: "spaces",
      title: t("spaces"),
      href: "#spaces",
    },
    {
      id: "features",
      title: t("features"),
      href: "#features",
    },
  ];

  const LanguageSelector = () => {
    const isEnglish = pathname.startsWith("/en");
    const isSpanish = pathname.startsWith("/es");

    return (
      <div className="flex space-x-2 text-sm">
        <Link
          href="/en"
          className={`${
            isEnglish ? "font-semibold text-blue-500" : "text-slate-600"
          } hover:text-blue-500`}
        >
          EN
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/es"
          className={`${
            isSpanish ? "font-semibold text-blue-500" : "text-slate-600"
          } hover:text-blue-500`}
        >
          ES
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="z-50 hidden lg:block fixed w-full p-4 bg-slate-50/70 backdrop-blur-lg">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center space-x-4">
            <div className="text-indigo-800 h-5">
              <a href="#hero">
                <TeamUpLogo />
              </a>
            </div>
            <LanguageSelector />
          </div>
          <div className="absolute left-1/2 -translate-x-2/4">
            {/* <ul className="flex flex-row justify-center space-x-1 height-10 p-1 bg-blue-950 text-white rounded-lg">
              {navLinks.map((link, key) => {
                return (
                  <li id={`#${link.id}`} key={key}>
                    <a
                      href={link.href}
                      className="text-sm px-4 h-9 flex justify-center items-center font-medium hover:bg-white hover:text-blue-950 rounded-md text-center"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul> */}
            <ul className="flex flex-row justify-center space-x-2 height-10 p-1 rounded-lg">
              {navLinks.map((link, key) => {
                return (
                  <li id={`#${link.id}`} key={key}>
                    <a
                      href={link.href}
                      className="text-sm px-3 h-10 flex justify-center items-center font-medium hover:bg-blue-50  hover:text-blue-600 hover:shadow-sm rounded-md text-center"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex space-x-2">
            <Button
              type="button"
              onClick={() =>
                window.open("https://app.teamup.works/login", "_blank")
              }
              variant="tertiary"
              size="md"
            >
              {t("login")}
            </Button>
            <Button
              type="button"
              onClick={() =>
                window.open("https://app.teamup.works/signup", "_blank")
              }
              variant="primary"
              size="md"
            >
              {t("register")}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`z-50 flex flex-col ${
          isMenuOpen ? "h-dvh" : ""
        } justify-between w-full lg:hidden bg-slate-50 fixed`}
      >
        <div className="flex justify-between items-center p-4 bg-slate-50 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="text-indigo-800 h-4">
              <a href="#hero" onClick={() => setIsMenuOpen(false)}>
                <TeamUpLogo />
              </a>
            </div>
            <LanguageSelector />
          </div>
          <div className="h-6 w-6 text-blue-950" onClick={handleIsMenuOpen}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col justify-around justify-self-stretch height-10 p-1 text-blue-950 rounded-lg`}
        >
          {navLinks.map((link, key) => {
            return (
              <li id={`#${link.id}`} key={key}>
                <a
                  href={link.href}
                  className="text-2xl px-4 h-9 flex justify-center items-center font-medium hover:bg-slate-50 hover:text-blue-950 rounded-md text-center my-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col space-y-2 m-4`}
        >
          <Button
            type="button"
            onClick={() =>
              window.open("https://app.teamup.works/login", "_blank")
            }
            variant="tertiary"
            size="md"
          >
            {t("login")}
          </Button>
          <Button
            type="button"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
            variant="primary"
            size="md"
          >
            {t("register")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
