"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "../contexts/TranslationContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./button";
import { HamburgerIcon, CloseIcon } from "./icons/navbar-icons";
import TeamUpLogo from "./teamup-logo";
import NewLogo from "./new-logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isLandingPage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      id: "benefits",
      title: t("Navbar.benefits"),
      href: isLandingPage ? "#benefits" : `/${locale}#benefits`,
    },
    {
      id: "what",
      title: t("Navbar.whatIsTeamUp"),
      href: isLandingPage ? "#what" : `/${locale}#what`,
    },
    {
      id: "spaces",
      title: t("Navbar.spaces"),
      href: isLandingPage ? "#spaces" : `/${locale}#spaces`,
    },
    {
      id: "features",
      title: t("Navbar.features"),
      href: isLandingPage ? "#features" : `/${locale}#features`,
    },
    {
      id: "pricing",
      title: t("Navbar.pricing"),
      href: isLandingPage ? "#pricing" : `/${locale}#pricing`,
    },
    {
      id: "blog",
      title: t("Navbar.blog"),
      href: `/${locale}/blog`,
    },
  ];

  const LanguageSelector = () => {
    const isEnglish = pathname.startsWith("/en");
    const isSpanish = pathname.startsWith("/es");

    const handleLanguageChange = (newLocale) => {
      const currentPathname = pathname.replace(/^\/[a-z]{2}/, "");
      router.push(`/${newLocale}${currentPathname}`);
    };

    return (
      <div className="flex space-x-2 text-sm">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`${
            isEnglish ? "font-semibold text-blue-500" : "text-slate-600"
          } hover:text-blue-500`}
        >
          EN
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => handleLanguageChange("es")}
          className={`${
            isSpanish ? "font-semibold text-blue-500" : "text-slate-600"
          } hover:text-blue-500`}
        >
          ES
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="z-50 hidden lg:block fixed w-full p-4">
        <div className="w-full mx-auto bg-slate-50/70 backdrop-blur-lg rounded-2xl border border-slate-200 p-4">
          <div className="flex justify-between items-center relative">
            <div className="flex items-center space-x-4">
              <div className="text-indigo-800 flex items-center">
                <Link href={isLandingPage ? "#hero" : `/${locale}`}>
                  <NewLogo className="h-10" />
                </Link>
              </div>
              <LanguageSelector />
            </div>
            <div className="absolute left-1/2 -translate-x-2/4">
              <ul className="flex flex-row justify-center space-x-2 height-10 p-1 rounded-lg">
                {navLinks.map((link, key) => {
                  return (
                    <li id={`#${link.id}`} key={key}>
                      <a
                        href={link.href}
                        className="text-sm px-3 h-10 flex justify-center items-center font-medium hover:text-blue-600 rounded-md text-center"
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
                  window.open("https://app.teamup.works/", "_blank")
                }
                variant="tertiary"
                size="md"
              >
                {t("Navbar.login")}
              </Button>
              <Button
                type="button"
                onClick={() =>
                  window.open("https://app.teamup.works/signup", "_blank")
                }
                variant="primary"
                size="md"
              >
                {t("Navbar.register")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-50 flex flex-col ${
          isMenuOpen ? "h-dvh" : ""
        } justify-between w-full lg:hidden bg-slate-50 backdrop-blur-lg border-b border-slate-200 fixed`}
      >
        <div className="flex justify-between items-center p-4 bg-slate-50">
          <div className="flex items-center space-x-4">
            <div className="text-indigo-800 flex items-center">
              <Link
                href={isLandingPage ? "#hero" : `/${locale}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <NewLogo className="h-6" />
              </Link>
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
              window.open("https://app.teamup.works/", "_blank")
            }
            variant="tertiary"
            size="md"
          >
            {t("Navbar.login")}
          </Button>
          <Button
            type="button"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
            variant="primary"
            size="md"
          >
            {t("Navbar.register")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
