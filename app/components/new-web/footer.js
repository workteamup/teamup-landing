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
      title: t("Footer.legalNotice"),
      href: `/${locale}/legal-notice`,
    },
    {
      title: t("Footer.privacyPolicy"),
      href: `/${locale}/privacy-policy`,
    },
    {
      title: t("Footer.cookiePolicy"),
      href: `/${locale}/cookie-policy`,
    },
    {
      title: t("Footer.termsOfService"),
      href: `/${locale}/terms-of-service`,
    },
  ];

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
    <footer className="bg-gray-cloud pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-start">
            <Link href={`/${locale}`}>
              <Image
                src="/svg/new-logo-dark.svg"
                alt="Team Up!"
                width={160}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-graphite text-sm">
              © {currentYear} Team Up! All rights reserved.
            </p>
          </div>

          {/* Legal links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-phantom">
              {t("Footer.legal")}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-space hover:text-brand-purple transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-phantom">
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
                    className="transform transition-transform duration-300 hover:scale-125 hover:rotate-6 hover:-translate-y-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-steel pt-6 text-left text-gray-graphite text-sm">
          <p>{t("Footer.builtWithLove")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
