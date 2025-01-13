"use client";

import Benefits from "./benefits";
import Hero from "./hero";
import Spaces from "./spaces";
import Features from "./features";
import Footer from "./footer";
import What from "./what";
import FooterCTA from "./footer-cta";
import CTA from "./cta";
import Pricing from "./pricing";
import NewSpaces from "./new-spaces";
import Events from "./events";
import Avatars from "./avatars";
import Navbar from "./navbar";
import { useState } from "react";
import InfoBar from "./info-bar";
import { useTranslations } from "../contexts/TranslationContext";

const Landing = () => {
  const [hasActiveAnnouncement, setHasActiveAnnouncement] = useState(false);
  const t = useTranslations();

  return (
    <div className="text-blue-950 bg-slate-50">
      {hasActiveAnnouncement && (
        <InfoBar
          message={t("InfoBar.message")}
          buttonText={t("InfoBar.button")}
          buttonAction={() =>
            window.open("https://example.com/webinar", "_blank")
          }
          onDismiss={() => setHasActiveAnnouncement(false)}
        />
      )}
      <Navbar hasActiveAnnouncement={hasActiveAnnouncement} />
      <Hero />
      <Benefits />
      <What />
      <CTA
        variant="dark"
        title="CTA.primary.title"
        subtitle="CTA.primary.subtitle"
        buttonText="CTA.primary.button"
        price="0€"
      />
      <NewSpaces />
      <Features />
      <Events />
      <Avatars />
      <Pricing />
      <CTA
        variant="dark"
        title="CTA.secondary.title"
        subtitle="CTA.secondary.subtitle"
        buttonText="CTA.secondary.button"
        price="0€"
      />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Landing;
