"use client";

import { useState } from "react";
import Button from "./button";

const navLinks = [
  {
    id: "benefits",
    title: "Beneficios",
    href: "#benefits",
  },
  {
    id: "what",
    title: "¿Qué es Team Up!?",
    href: "#what",
  },
  {
    id: "spaces",
    title: "Espacios",
    href: "#spaces",
  },
  {
    id: "features",
    title: "Funcionalidades",
    href: "#features",
  },
];

const handleLogin = () => {
  window.location.href = "https://app.teamup.works/login";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="z-50 hidden lg:block fixed w-full p-4 bg-white/70 backdrop-blur-sm">
        <div className="flex justify-between items-center relative">
          <div className="text-blue-950">Team Up!</div>
          <div className="absolute left-1/2 -translate-x-2/4">
            <ul className="flex flex-row justify-center space-x-1 height-10 p-1 bg-blue-950 text-white rounded-lg">
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
              Iniciar sesión
            </Button>
            <Button
              type="button"
              onClick={() =>
                window.open("https://app.teamup.works/signup", "_blank")
              }
              variant="primary"
              size="md"
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`z-50 flex flex-col ${
          isMenuOpen ? "h-screen" : ""
        } justify-between w-full lg:hidden bg-white fixed`}
      >
        <div className="flex justify-between items-center p-4 bg-white backdrop-blur-sm">
          <div>Team Up!</div>
          <div className="h-6 w-6 bg-black" onClick={handleIsMenuOpen}></div>
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
                  className="text-xl px-4 h-9 flex justify-center items-center font-medium hover:bg-white hover:text-blue-950 rounded-md text-center my-4"
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
            Iniciar sesión
          </Button>
          <Button
            type="button"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
            variant="primary"
            size="md"
          >
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
