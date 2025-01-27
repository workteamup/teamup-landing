"use client";

import { useTranslations } from "../contexts/TranslationContext";
import SectionHeader from "./section-header";
import Label from "./label";
import Button from "./button";

const video =
  //"https://www.youtube.com/embed/Iy5Z4RMn8ZQ?&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&rel=0&playlist=Iy5Z4RMn8ZQ";
  "https://www.youtube.com/embed/D2UXMuX8Blc?&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&rel=0&playlist=D2UXMuX8Blc";

const primaryButton = {
  text: "",
};

const ResponsiveVideoComponent = ({ videoUrl }) => {
  return (
    <div className="mx-auto relative pb-[56.25%] w-full h-0 pointer-events-none">
      <iframe
        className="w-full h-full absolute top-0 left-0 border-0"
        src={videoUrl}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Hero = () => {
  const t = useTranslations();

  return (
    <div id="hero" className="mb-24 md:mb-[200px] px-4">
      <div className="m-auto flex flex-col justify-center items-center max-w-[800px] mb-[80px]">
        <div className="inline-flex justify-center mt-[100px] md:mt-[200px]">
          <Label>{t("Hero.label")}</Label>
        </div>
        <h1 className="text-5xl md:text-7xl mt-2 text-center mb-4 font-semibold">
          {t("Hero.title")}
        </h1>
        <p className="text-xl sm:text-2xl text-slate-400 text-center">
          {t("Hero.description")}
        </p>
        <div className="flex flex-col space-y-2 w-full sm:flex-row sm:space-x-4 sm:space-y-0 justify-center mt-10">
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
          >
            {t("Hero.primaryButton")}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() =>
              window.open("https://teamup-ignacio.youcanbook.me/", "_blank")
            }
          >
            {t("Hero.secondaryButton")}
          </Button>
        </div>
      </div>
      <div className="xl:max-w-[1200px] lg:max-w-[960px] mx-auto overflow-hidden rounded-xl shadow-xl">
        <ResponsiveVideoComponent videoUrl={video} />
      </div>
    </div>
  );
};

export default Hero;
