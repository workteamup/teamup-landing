"use client";
import WebLayout from "../components/new-web/layout";
import { useTranslations } from "../contexts/TranslationContext";
import Image from "next/image";
import Button from "../components/new-web/button";
import LogoCarousel from "../components/new-web/logo-carousel";
import TargetAudienceCards from "../components/new-web/target-audience-cards";
import UseCasesSection from "../components/new-web/use-cases-section";
import Hero from "../components/new-web/hero";
import ProductTour from "../components/new-web/product-tour";
import Testimonial from "../components/new-web/testimonial";
import BookingEmbed from "../components/new-web/booking-embed";
import Features from "../components/new-web/features";
import CTASection from "../components/new-web/cta-section";
import ContactSalesCTA from "../components/new-web/contact-sales-cta";
import { semanticColors } from "../lib/design-tokens";

// Metadata needs to be handled differently with client components
// Either through a separate metadata.js file or by removing the client directive
export default function HomePage() {
  const t = useTranslations();

  // Use cases data
  const useCasesData = [
    {
      title: t("UseCases.cases.teamBuilding.title"),
      description: t("UseCases.cases.teamBuilding.description"),
      image: "/images/team-building-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.remoteMeetings.title"),
      description: t("UseCases.cases.remoteMeetings.description"),
      image: "/images/remote-meetings-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.onboarding.title"),
      description: t("UseCases.cases.onboarding.description"),
      image: "/images/onboarding-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.companyEvents.title"),
      description: t("UseCases.cases.companyEvents.description"),
      image: "/images/company-events-case.jpg",
      bulletPoints: [],
    },
  ];

  return (
    <WebLayout>
      {/* Hero Section */}
      <Hero />

      {/* Logo Carousel - Dark Variant */}
      <LogoCarousel variant="dark" logoCount={12} />

      {/* Product Tour Section */}
      <ProductTour
        bgImage="/images/debate.jpg"
        videoSrc="/videos/placeholder.mp4"
      />

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <Testimonial
          quote="With Dovetail, the work we've done in the past is always available so that the work we do in the future isn't redundant."
          name="Roy Olende"
          jobTitle="Head of UX Research"
          companyLogo="/svg/new-logo-dark.svg"
          companyName="Team Up"
          align="center"
        />
      </div>

      {/* Target Audience Cards */}
      <TargetAudienceCards
        title="Team Up is the Perfect Solution For Your Team"
        description="Discover how Team Up can help different roles in your organization improve team engagement and productivity."
        language="en"
      />

      {/* Features Section */}
      <Features />

      {/* Use Cases Section */}
      <UseCasesSection
        title={t("UseCases.sectionTitle")}
        description={t("UseCases.sectionDescription")}
        useCases={useCasesData}
        primaryCTAText={t("UseCases.primaryCTA")}
        secondaryCTAText={t("UseCases.secondaryCTA")}
      />

      {/* Custom Space CTA Section */}
      <CTASection
        title="Want to customize your own virtual space?"
        buttonText="Contact Sales"
        buttonUrl="/contact"
        buttonVariant="secondary"
        buttonSize="lg"
        secondaryButtonText="View Examples"
        secondaryButtonUrl="/examples"
        secondaryButtonVariant="tertiary"
        align="left"
        theme="dark"
        background="radial-gradient(circle at 30% 30%, #3F89F6, transparent 60%), 
                   radial-gradient(circle at 70% 60%, #635DF5, transparent 70%), 
                   radial-gradient(circle at 10% 75%, #252E4B, transparent 60%), 
                   linear-gradient(45deg, #252E4B, #193762, #282562)"
        titleSize="xl"
      />

      {/* Add an ID and key to the BookingEmbed component */}
      <div id="booking-section">
        <BookingEmbed key="booking-embed-en" />
      </div>

      {/* Features section */}
      <section className="py-16 bg-gray-cloud rounded-xl my-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
          Why Teams Love Our Virtual Office
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Team Building
            </h3>
            <p className="text-gray-space">
              Foster meaningful connections in your remote team with
              collaborative virtual spaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Productivity
            </h3>
            <p className="text-gray-space">
              Streamline workflows and enhance productivity with our intuitive
              virtual environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Engagement
            </h3>
            <p className="text-gray-space">
              Keep your team engaged and motivated with interactive activities
              and fun competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTASection
        title="Ready to transform your remote team experience?"
        description="Join thousands of teams already using Team Up! to create more connected, productive, and happy remote workplaces."
        buttonText="Start Your Free Trial"
        buttonUrl="https://app.teamup.works/signup"
        buttonSize="lg"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonUrl="/demo"
        secondaryButtonVariant="tertiary"
        align="center"
        theme="light"
        background="linear-gradient(to right, #f0fbff, #f5f5ff)"
      />
    </WebLayout>
  );
}
