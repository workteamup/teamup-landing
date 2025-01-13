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

const Landing = () => {
  const [hasActiveAnnouncement, setHasActiveAnnouncement] = useState(true);

  return (
    <div className="text-blue-950 bg-slate-50">
      <Navbar hasActiveAnnouncement={hasActiveAnnouncement} />
      <Hero />
      <Benefits />
      <What />
      <CTA
        variant="dark"
        title="Ready to transform your team?"
        subtitle="Start your journey towards better team collaboration today."
        buttonText="Get started"
        price="0€"
      />
      <NewSpaces />
      <Features />
      <Events />
      <Avatars />
      <Pricing />
      <CTA
        variant="dark"
        title="Join thousands of happy teams"
        subtitle="Don't miss out on the opportunity to enhance your team's performance."
        buttonText="Try it now"
        price="0€"
      />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Landing;
