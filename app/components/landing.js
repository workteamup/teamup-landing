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
      <CTA 
        variant="dark"
        title="Ready to transform your team?"
        subtitle="Start your journey towards better team collaboration today."
        buttonText="Get started"
        price="0€"
      />
      <Spaces />
      <Features />
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
