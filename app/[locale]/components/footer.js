"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { features } from "../consts";
import PrimaryButton from "./primary-button";
import SectionHeader from "./section-header";
import Tag from "./tag";

const links = [
  {
    title: "Aviso legal y condiciones de uso",
    href: "/pages/legal-notice-and-conditions",
  },
  {
    title: "Política de privacidad",
    href: "/pages/privacy-policy",
  },
  {
    title: "Política de cookies",
    href: "/pages/cookie-policy",
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
  const t = useTranslations('Footer');

  return (
    <div id="footer px-4">
      <ul className="flex flex-col space-y-4 sm:flex-row justify-center m-auto sm:space-x-8 sm:space-y-0 mb-8">
        {links.map((link, key) => {
          return (
            <FooterLink key={key}>
              <Link href={link.href} locale={false}>{t(link.title)}</Link>
            </FooterLink>
          );
        })}
      </ul>
      {/* <div className="flex flex-row justify-center m-auto space-x-3 mb-8">
        {Object.values(socials).map((social, key) => {
          return <SocialsIcon key={key} icon={social.icon} />;
        })}
      </div> */}
      <p className="text-center pb-4">
        {t('copyright', { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};

export default Footer;
