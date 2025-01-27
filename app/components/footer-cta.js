"use client";

import { useTranslations } from "../contexts/TranslationContext";
import Button from "./button.js";
import Label from "./label.js";
import Image from "next/image";

const FooterCTA = ({
  tag,
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  width,
}) => {
  const t = useTranslations();

  return (
    <div
      className={`m-auto flex flex-col justify-center items-center space-y-8 max-w-[${width}px] pt-[96px] mb-[200px]`}
    >
      <Image
        src="/images/cta-img.png"
        alt={t("imageAlt")}
        width={219}
        height={274}
      />
      <h1 className="text-3xl md:text-4xl text-center font-semibold px-4">
        {t("FooterCTA.heading")}
      </h1>
      <div className="flex flex-col space-y-2 w-full sm:flex-row sm:space-x-4 sm:space-y-0 justify-center px-4">
        <Button
          type="button"
          onClick={() =>
            window.open("https://app.teamup.works/signup", "_blank")
          }
          variant="primary"
          size="lg"
        >
          {t("FooterCTA.primaryButton")}
        </Button>
        <Button
          type="button"
          onClick={() =>
            window.open("https://teamup-ignacio.youcanbook.me/", "_blank")
          }
          variant="secondary"
          size="lg"
        >
          {t("FooterCTA.secondaryButton")}
        </Button>
      </div>
    </div>
  );
};

export default FooterCTA;
