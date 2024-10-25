"use client";

import { useTranslations, useLocale } from '../contexts/TranslationContext';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  const links = [
    {
      title: t("Footer.legalNotice"),
      href: "/legal-notice-and-conditions",
    },
    {
      title: t("Footer.privacyPolicy"),
      href: "/privacy-policy",
    },
    {
      title: t("Footer.cookiePolicy"),
      href: "/cookie-policy",
    },
  ];

  return (
    <div id="footer px-4">
      <ul className="flex flex-col space-y-4 sm:flex-row justify-center m-auto sm:space-x-8 sm:space-y-0 mb-8">
        {links.map((link, key) => (
          <li key={key} className="font-medium hover:text-indigo-600 hover:underline hover:underline-offset-8 text-center">
            <Link href={`/${locale}/pages/${link.href}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <p className="text-center pb-4">
        {t('Footer.copyright', { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};

export default Footer;
