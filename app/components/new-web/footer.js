"use client";

import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import Link from "next/link";
import Image from "next/image";
import { semanticColors } from "../../lib/design-tokens";

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    {
      title: t("Footer.legalNotice").toLowerCase(),
      href: `/${locale}/legal-notice`,
    },
    {
      title: t("Footer.privacyPolicy").toLowerCase(),
      href: `/${locale}/privacy-policy`,
    },
    {
      title: t("Footer.cookiePolicy").toLowerCase(),
      href: `/${locale}/cookie-policy`,
    },
    {
      title: t("Footer.termsOfService").toLowerCase(),
      href: `/${locale}/terms-of-service`,
    },
  ];

  // Helper function to convert to sentence case
  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/teamupworks",
      icon: "/social/instagram.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/teamupworks",
      icon: "/social/linkedin.svg",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@teamupworks",
      icon: "/social/tiktok.svg",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@teamupworks",
      icon: "/social/youtube.svg",
    },
    {
      name: "X",
      href: "https://x.com/teamupworks",
      icon: "/social/x.svg",
    },
  ];

  return (
    <footer className="bg-brand-dark py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and copyright */}
          <div className="flex flex-col items-start">
            <Link href={`/${locale}`} className="mb-6">
              <Image
                src="/svg/new-logo-light.svg"
                alt="Team Up!"
                width={160}
                height={50}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-gray-steel text-sm">
              © {currentYear} Team Up! All rights reserved.
            </p>
          </div>

          {/* Legal links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-6 text-white font-poppins">
              {t("Footer.legal")}
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-steel hover:text-brand-purple-light transition-colors duration-300"
                  >
                    {toSentenceCase(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-6 text-white font-poppins">
              {t("Footer.followUs")}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white p-2 rounded-full transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="transform transition-all duration-300 hover:scale-125 hover:rotate-6 hover:-translate-y-1 hover:drop-shadow-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-arsenic pt-6">
          <p className="text-gray-steel text-sm text-center md:text-left">
            {t("Footer.builtWithLove")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
