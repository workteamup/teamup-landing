"use client";

import { features } from "../consts";
import PrimaryButton from "./primary-button";
import SectionHeader from "./section-header";
import Tag from "./tag";

const links = [
  {
    title: "Términos y condiciones",
    href: "",
  },
  {
    title: "Política de privacidad",
    href: "",
  },
  {
    title: "Aviso legal",
    href: "",
  },
];

const socials = {
  linkedin: {
    icon: "",
  },
  instagram: {
    icon: "",
  },
  x: {
    icon: "",
  },
  youtube: {
    icon: "",
  },
};

const FooterLink = ({ children }) => {
  return (
    <li className="font-medium hover:text-indigo-600 hover:underline hover:underline-offset-8 text-center">
      {children}
    </li>
  );
};

const SocialsIcon = ({ icon }) => {
  return <div className="w-10 h-10 bg-blue-100 rounded-full"></div>;
};

const Footer = () => {
  return (
    <div id="footer">
      <ul className="flex flex-col space-y-4 sm:flex-row justify-center m-auto sm:space-x-8 sm:space-y-0 mb-8">
        {links.map((link, key) => {
          return (
            <FooterLink>
              <a href={link.href}>{link.title}</a>
            </FooterLink>
          );
        })}
      </ul>
      <div className="flex flex-row justify-center m-auto space-x-3 mb-8">
        {Object.values(socials).map((social, key) => {
          return <SocialsIcon icon={social.icon} />;
        })}
      </div>
      <p className="text-center pb-4">
        {"\u00A9"} 2023 TEAM UP TECH ESPAÑA S.L. Todos los derechos reservados
      </p>
    </div>
  );
};

export default Footer;
