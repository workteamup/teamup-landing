"use client";

import CTASection from "./cta-section";
import { useTranslations } from "../../contexts/TranslationContext";

/**
 * ContactSalesCTA
 * A pre-configured CTA section for contacting sales that can be used across the site.
 * Automatically handles translations based on the current language context.
 *
 * @param {Object} props
 * @param {string} [props.align="center"] - Alignment of the CTA content ("left", "center", "right")
 * @param {string} [props.theme="light"] - Color theme ("light" or "dark")
 * @param {string} [props.background] - Optional custom background (CSS color, gradient, or class name)
 * @param {string} [props.customClasses] - Additional CSS classes to apply to the section
 * @param {string} [props.titleSize="lg"] - Size of the title ("sm", "md", "lg", "xl")
 * @param {string} [props.buttonSize="lg"] - Size of the primary button
 * @param {string} [props.secondaryButtonSize] - Size of the secondary button (defaults to buttonSize)
 * @param {string} [props.subtext] - Optional smaller text below the main description
 */
export default function BUTContactSalesCTA({
  align = "center",
  theme = "light",
  background,
  customClasses,
  titleSize = "lg",
  buttonSize = "lg",
  secondaryButtonSize,
  subtext,
}) {
  const t = useTranslations();
  
  // Default values for each language are defined in the translation context
  return (
    <CTASection
      title={
        t("ContactSalesCTA.title") ||
        "Want to customize your own virtual space?"
      }
      description={
        t("ContactSalesCTA.description") ||
        "Contact our team to create a tailored solution for your specific needs."
      }
      subtext={subtext || t("ContactSalesCTA.subtext") || null}
      buttonText={t("ContactSalesCTA.buttonText") || "Contact Sales"}
      buttonUrl="/contact"
      buttonVariant={theme === "dark" ? "secondary" : "primary"}
      buttonSize={buttonSize}
      secondaryButtonText={
        t("ContactSalesCTA.secondaryButtonText") || "View Examples"
      }
      secondaryButtonUrl="/examples"
      secondaryButtonVariant="tertiary"
      secondaryButtonSize={secondaryButtonSize}
      align={align}
      theme={theme}
      titleSize={titleSize}
      background={
        background ||
        (theme === "dark"
          ? "linear-gradient(to right, #67DAFA, #3F89F6, #635DF5)"
          : "linear-gradient(to right, #f0fbff, #efeffe)")
      }
      customClasses={customClasses}
    />
  );
}
