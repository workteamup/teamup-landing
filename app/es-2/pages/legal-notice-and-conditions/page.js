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
  const t = useTranslations('LegalNotice');

  return (
    <LegalPageTemplate title={t('title')}>
      <Heading2>{t('generalInfo.title')}</Heading2>
      <Paragraph>{t('generalInfo.paragraph1')}</Paragraph>
      <Paragraph>{t('generalInfo.paragraph2')}</Paragraph>
      <UnorderedList>
        <ListItem>{t('generalInfo.address')}</ListItem>
        <ListItem>{t('generalInfo.phone')}</ListItem>
        <ListItem>{t('generalInfo.email')}</ListItem>
      </UnorderedList>

      <Heading2>{t('termsAndConditions.title')}</Heading2>
      <Heading3>{t('termsAndConditions.objectTitle')}</Heading3>
      <Paragraph>{t('termsAndConditions.objectParagraph1')}</Paragraph>
      <Paragraph>{t('termsAndConditions.objectParagraph2')}</Paragraph>
      <Paragraph>{t('termsAndConditions.objectParagraph3')}</Paragraph>
      <Paragraph>{t('termsAndConditions.objectParagraph4')}</Paragraph>

      <Heading3>{t('termsAndConditions.userTitle')}</Heading3>
      <Paragraph>{t('termsAndConditions.userParagraph1')}</Paragraph>
      <Paragraph>{t('termsAndConditions.userParagraph2')}</Paragraph>
      <UnorderedList>
        <ListItem>{t('termsAndConditions.userListItem1')}</ListItem>
        <ListItem>{t('termsAndConditions.userListItem2')}</ListItem>
      </UnorderedList>
      <Paragraph>{t('termsAndConditions.userParagraph3')}</Paragraph>
      <Paragraph>{t('termsAndConditions.userParagraph4')}</Paragraph>
      <Paragraph>{t('termsAndConditions.userParagraph5')}</Paragraph>
      <Paragraph>{t('termsAndConditions.userParagraph6')}</Paragraph>

      <Heading2>{t('accessAndNavigation.title')}</Heading2>
      <Paragraph>{t('accessAndNavigation.paragraph1')}</Paragraph>
      <Paragraph>{t('accessAndNavigation.paragraph2')}</Paragraph>
      <Paragraph>{t('accessAndNavigation.paragraph3')}</Paragraph>

      <Heading2>{t('linkPolicy.title')}</Heading2>
      <Paragraph>{t('linkPolicy.paragraph1')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph2')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph3')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph4')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph5')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph6')}</Paragraph>
      <Paragraph>{t('linkPolicy.paragraph7')}</Paragraph>
      <UnorderedList>
        <ListItem>{t('linkPolicy.listItem1')}</ListItem>
        <ListItem>{t('linkPolicy.listItem2')}</ListItem>
        <ListItem>{t('linkPolicy.listItem3')}</ListItem>
        <ListItem>{t('linkPolicy.listItem4')}</ListItem>
      </UnorderedList>

      <Heading2>{t('intellectualProperty.title')}</Heading2>
      <Paragraph>{t('intellectualProperty.paragraph1')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph2')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph3')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph4')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph5')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph6')}</Paragraph>
      <Paragraph>{t('intellectualProperty.paragraph7')}</Paragraph>

      <Heading2>{t('legalActions.title')}</Heading2>
      <Paragraph>{t('legalActions.paragraph1')}</Paragraph>
      <Paragraph>{t('legalActions.paragraph2')}</Paragraph>
    </LegalPageTemplate>
  );
}
