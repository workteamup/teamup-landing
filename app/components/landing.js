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
import { useState, useEffect } from "react";
import InfoBar from "./info-bar";
import { useTranslations } from "../contexts/TranslationContext";
import WelcomePopup from "./welcome-popup";

const Landing = () => {
  const [hasActiveAnnouncement, setHasActiveAnnouncement] = useState(true);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    // Check if user has explicitly chosen to never show the popup
    const neverShowPopup = localStorage.getItem("neverShowWelcomePopup");
    if (!neverShowPopup) {
      setShowWelcomePopup(true);
    }
  }, []);

  const handleNeverShow = () => {
    // This is the "Never show again" button
    setShowWelcomePopup(false);
    localStorage.setItem("neverShowWelcomePopup", "true");
  };

  const handleClose = () => {
    // This is for the X button
    setShowWelcomePopup(false);
    // No localStorage set here
  };

  const handlePopupCTA = () => {
    // This is the "Go to link" button
    window.open("https://forms.gle/zUqNf1wbz8KhUyCr8", "_blank");
    setShowWelcomePopup(false);
    // No localStorage set here
  };

  return (
    <div className="text-blue-950 bg-slate-50">
      <WelcomePopup
        isOpen={showWelcomePopup}
        onDismiss={handleClose}
        onNeverShow={handleNeverShow}
        onCTAClick={handlePopupCTA}
      />
      {hasActiveAnnouncement && (
        <InfoBar
          message={t("InfoBar.message")}
          buttonText={t("InfoBar.button")}
          buttonAction={() =>
            window.open("https://forms.gle/zUqNf1wbz8KhUyCr8", "_blank")
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
