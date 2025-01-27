"use client";

import { useTranslations } from "../../../contexts/TranslationContext";
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
    <LegalPageTemplate title={t("PrivacyPolicy.title")}>
      <Heading2>{t("PrivacyPolicy.section1.title")}</Heading2>
      <Paragraph>{t("PrivacyPolicy.section1.intro")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.laws.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.laws.intro")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("PrivacyPolicy.section1.laws.list.item1")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.laws.list.item2")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.laws.list.item3")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.laws.list.item4")}</ListItem>
      </UnorderedList>

      <Heading3>{t("PrivacyPolicy.section1.identity.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.identity.content")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("PrivacyPolicy.section1.identity.list.item1")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.identity.list.item2")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.identity.list.item3")}</ListItem>
      </UnorderedList>

      <Heading3>{t("PrivacyPolicy.section1.dataRegister.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.dataRegister.content")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.principles.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.principles.intro")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item1")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item2")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item3")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item4")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item5")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item6")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.principles.list.item7")}</ListItem>
      </UnorderedList>

      <Heading3>{t("PrivacyPolicy.section1.dataCategories.title")}</Heading3>
      <Paragraph>
        {t("PrivacyPolicy.section1.dataCategories.content")}
      </Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.legalBasis.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.legalBasis.paragraph1")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.legalBasis.paragraph2")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.purposes.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.purposes.paragraph1")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.purposes.paragraph2")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.purposes.paragraph3")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.retentionPeriod.title")}</Heading3>
      <Paragraph>
        {t("PrivacyPolicy.section1.retentionPeriod.paragraph1")}
      </Paragraph>
      <Paragraph>
        {t("PrivacyPolicy.section1.retentionPeriod.paragraph2")}
      </Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.dataRecipients.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.dataRecipients.intro")}</Paragraph>
      <UnorderedList>
        <ListItem>
          {t("PrivacyPolicy.section1.dataRecipients.list.item1")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.dataRecipients.list.item2")}
        </ListItem>
      </UnorderedList>
      <Paragraph>{t("PrivacyPolicy.section1.dataRecipients.outro")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.minorsData.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.minorsData.content")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.secrecy.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.secrecy.paragraph1")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.secrecy.paragraph2")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.secrecy.paragraph3")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section1.secrecy.paragraph4")}</Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.rights.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.rights.intro")}</Paragraph>
      <UnorderedList>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item1")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item2")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item3")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item4")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item5")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item6")}</ListItem>
        <ListItem>{t("PrivacyPolicy.section1.rights.list.item7")}</ListItem>
      </UnorderedList>
      <Paragraph>{t("PrivacyPolicy.section1.rights.exercising")}</Paragraph>
      <UnorderedList>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.exercisingList.item1")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.exercisingList.item2")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.exercisingList.item3")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.exercisingList.item4")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.exercisingList.item5")}
        </ListItem>
      </UnorderedList>
      <Paragraph>{t("PrivacyPolicy.section1.rights.contact")}</Paragraph>
      <UnorderedList>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.contactList.item1")}
        </ListItem>
        <ListItem>
          {t("PrivacyPolicy.section1.rights.contactList.item2")}
        </ListItem>
      </UnorderedList>

      <Heading3>{t("PrivacyPolicy.section1.thirdPartyLinks.title")}</Heading3>
      <Paragraph>
        {t("PrivacyPolicy.section1.thirdPartyLinks.content")}
      </Paragraph>

      <Heading3>{t("PrivacyPolicy.section1.complaints.title")}</Heading3>
      <Paragraph>{t("PrivacyPolicy.section1.complaints.content")}</Paragraph>

      <Heading2>{t("PrivacyPolicy.section2.title")}</Heading2>
      <Paragraph>{t("PrivacyPolicy.section2.paragraph1")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section2.paragraph2")}</Paragraph>
      <Paragraph>{t("PrivacyPolicy.section2.paragraph3")}</Paragraph>
    </LegalPageTemplate>
  );
}
