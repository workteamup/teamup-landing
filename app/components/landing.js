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
const Landing = () => {
  return (
    <div className="text-blue-950 bg-slate-50">
      <Hero />
      <Benefits />
      <What />
      <CTA variant="dark" />
      <Spaces />
      <Features />
      {/* Contact CTA */}
      <Pricing />
      <CTA variant="dark" />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Landing;
