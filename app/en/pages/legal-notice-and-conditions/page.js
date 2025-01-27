"use client";

import { useTranslations } from '../../../contexts/TranslationContext';
import LegalPageTemplate from "../../../components/legal-page-template";

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
  const t = useTranslations();

  return (
    <LegalPageTemplate title={t("LegalNotice.title")}>
      <Heading2>{t("LegalNotice.generalInfo.title")}</Heading2>
      <Paragraph>{t("LegalNotice.generalInfo.paragraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.generalInfo.paragraph2")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("LegalNotice.generalInfo.address")}</ListItem>
        <ListItem>{t("LegalNotice.generalInfo.phone")}</ListItem>
        <ListItem>{t("LegalNotice.generalInfo.email")}</ListItem>
      </UnorderedList>

      <Heading2>{t("LegalNotice.termsAndConditions.title")}</Heading2>
      <Heading3>{t("LegalNotice.termsAndConditions.objectTitle")}</Heading3>
      <Paragraph>{t("LegalNotice.termsAndConditions.objectParagraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.objectParagraph2")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.objectParagraph3")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.objectParagraph4")}</Paragraph>

      <Heading3>{t("LegalNotice.termsAndConditions.userTitle")}</Heading3>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph2")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("LegalNotice.termsAndConditions.userListItem1")}</ListItem>
        <ListItem>{t("LegalNotice.termsAndConditions.userListItem2")}</ListItem>
      </UnorderedList>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph3")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph4")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph5")}</Paragraph>
      <Paragraph>{t("LegalNotice.termsAndConditions.userParagraph6")}</Paragraph>

      <Heading2>{t("LegalNotice.accessAndNavigation.title")}</Heading2>
      <Paragraph>{t("LegalNotice.accessAndNavigation.paragraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.accessAndNavigation.paragraph2")}</Paragraph>
      <Paragraph>{t("LegalNotice.accessAndNavigation.paragraph3")}</Paragraph>

      <Heading2>{t("LegalNotice.linkPolicy.title")}</Heading2>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph2")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph3")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph4")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph5")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph6")}</Paragraph>
      <Paragraph>{t("LegalNotice.linkPolicy.paragraph7")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("LegalNotice.linkPolicy.listItem1")}</ListItem>
        <ListItem>{t("LegalNotice.linkPolicy.listItem2")}</ListItem>
        <ListItem>{t("LegalNotice.linkPolicy.listItem3")}</ListItem>
        <ListItem>{t("LegalNotice.linkPolicy.listItem4")}</ListItem>
      </UnorderedList>

      <Heading2>{t("LegalNotice.intellectualProperty.title")}</Heading2>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph2")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph3")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph4")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph5")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph6")}</Paragraph>
      <Paragraph>{t("LegalNotice.intellectualProperty.paragraph7")}</Paragraph>

      <Heading2>{t("LegalNotice.legalActions.title")}</Heading2>
      <Paragraph>{t("LegalNotice.legalActions.paragraph1")}</Paragraph>
      <Paragraph>{t("LegalNotice.legalActions.paragraph2")}</Paragraph>
    </LegalPageTemplate>
  );
}
