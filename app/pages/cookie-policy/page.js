"use client";

import { useTranslations } from '../../contexts/TranslationContext';
import LegalPageTemplate from "../../components/legal-page-template";

const Heading2 = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold mb-6 mt-10 text-blue-950">
      {children}
    </h2>
  );
};

const Heading3 = ({ children }) => {
  return (
    <h3 className="text-lg md:text-2xl font-semibold mb-3 mt-6 text-blue-950">
      {children}
    </h3>
  );
};

const Paragraph = ({ children }) => {
  return <p className="mt-4 mb-3 text-justify">{children}</p>;
};

const UnorderedList = ({ children }) => {
  return <ul className="list-disc pl-6 mb-3 mt-3 text-justify">{children}</ul>;
};

const ListItem = ({ children }) => {
  return <li className="mb-1">{children}</li>;
};

export default function Page() {
  const t = useTranslations("CookiePolicy");

  return (
    <LegalPageTemplate title={t("title")}>
      <Paragraph>{t("intro.p1")}</Paragraph>
      <Paragraph>{t("intro.p2")}</Paragraph>
      <Paragraph>{t("intro.p3")}</Paragraph>
      <Paragraph>{t("intro.p4")}</Paragraph>
      <Heading3>{t("ownCookies.title")}</Heading3>
      <Paragraph>{t("ownCookies.description")}</Paragraph>
      <Heading3>{t("thirdPartyCookies.title")}</Heading3>
      <Paragraph>{t("thirdPartyCookies.p1")}</Paragraph>
      <Paragraph>{t("thirdPartyCookies.p2")}</Paragraph>
      <Paragraph>{t("thirdPartyCookies.p3")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("thirdPartyCookies.list.item1")}</ListItem>
        <ListItem>{t("thirdPartyCookies.list.item2")}</ListItem>
      </UnorderedList>
      <Paragraph>{t("thirdPartyCookies.p4")}</Paragraph>
      <Heading3>{t("disableCookies.title")}</Heading3>
      <Paragraph>{t("disableCookies.description")}</Paragraph>
    </LegalPageTemplate>
  );
}
