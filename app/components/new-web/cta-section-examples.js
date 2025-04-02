"use client";

import CTASection from "./cta-section";

/**
 * CTA Section Examples
 * Demonstrates the different variants and configurations of the CTA Section component
 */
export default function CTASectionExamples() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-semibold mb-4 font-poppins">
        CTA Section Component
      </h2>
      <p className="mb-6 text-gray-space">
        The CTA Section component provides a versatile call-to-action element
        with customizable alignment, theme, and background. It supports primary
        and secondary buttons, custom icons, different text sizes, and optional
        subtext.
      </p>

      <div className="space-y-8">
        {/* Example 1: Default centered light theme */}
        <div className="border border-gray-smoke rounded-lg overflow-hidden">
          <CTASection
            title="Ready to transform your remote team experience?"
            description="Join thousands of teams already using Team Up! to create more connected, productive, and happy remote workplaces."
            buttonText="Start Your Free Trial"
            buttonUrl="https://app.teamup.works/signup"
            align="center"
            theme="light"
          />
        </div>

        {/* Example 2: Left-aligned with secondary button (tertiary) */}
        <div className="border border-gray-smoke rounded-lg overflow-hidden">
          <CTASection
            title="Get started with Team Up!"
            description="Transform your team's collaboration with our innovative platform."
            buttonText="Sign Up Free"
            buttonUrl="/signup"
            secondaryButtonText="Learn More"
            secondaryButtonUrl="/features"
            secondaryButtonVariant="tertiary"
            align="left"
            theme="light"
            background="#f8fafc"
          />
        </div>

        {/* Example 3: Right-aligned with gradient background and subtext */}
        <div className="border border-gray-smoke rounded-lg overflow-hidden">
          <CTASection
            title="Ready for better meetings?"
            description="Try Team Up free for 60 days and see the difference."
            subtext="No credit card required. Cancel anytime."
            buttonText="Get Started"
            buttonUrl="/signup"
            buttonVariant="secondary"
            align="right"
            theme="light"
            background="linear-gradient(to right, #f0fbff, #efeffe)"
          />
        </div>

        {/* Example 4: Dark theme centered with custom title size */}
        <div className="border border-gray-smoke rounded-lg overflow-hidden">
          <CTASection
            title="Elevate your team experience"
            description="Join over 10,000 teams who've improved their remote work experience with Team Up."
            buttonText="Start Free Trial"
            buttonUrl="/signup"
            buttonVariant="secondary"
            titleSize="xl"
            align="center"
            theme="dark"
          />
        </div>

        {/* Example 5: Dark theme with brand gradient and tertiary button */}
        <div className="border border-gray-smoke rounded-lg overflow-hidden">
          <CTASection
            title="Want to customize your own space?"
            description="Contact our team to create a tailored solution for your specific needs."
            subtext="Enterprise customers receive priority support and custom implementation assistance."
            buttonText="Contact Us"
            buttonUrl="/contact"
            buttonVariant="secondary"
            buttonSize="xl"
            secondaryButtonText="View Examples"
            secondaryButtonUrl="/examples"
            secondaryButtonVariant="tertiary"
            secondaryButtonSize="lg"
            align="center"
            theme="dark"
            background="linear-gradient(to right, #67DAFA, #3F89F6, #635DF5)"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-2 font-poppins">Usage</h3>
        <pre className="bg-gray-cloud p-4 rounded-lg overflow-x-auto">
          <code>{`import CTASection from "../components/new-web/cta-section";

// Basic usage
<CTASection 
  title="Ready to get started?"
  description="Join today and transform your team collaboration."
  buttonText="Sign Up Free"
  buttonUrl="/signup"
/>

// Full configuration example
<CTASection 
  title="Want a custom solution?"
  description="Talk to our sales team about enterprise options."
  subtext="Enterprise plans include priority support and custom onboarding."
  titleSize="lg"          // "sm", "md", "lg", "xl"
  buttonText="Contact Sales"
  buttonUrl="/contact"
  buttonVariant="primary"  // "primary", "secondary", "outline", etc.
  buttonSize="lg"          // "sm", "md", "lg", "xl", "extralarge"
  secondaryButtonText="Read Documentation"
  secondaryButtonUrl="/docs"
  secondaryButtonVariant="tertiary"
  secondaryButtonSize="md"
  align="left"             // "left", "center", "right"
  theme="dark"             // "light" or "dark"
  background="linear-gradient(to right, #635DF5, #3F89F6)"
  customClasses="my-custom-class"
  icon={<YourIconComponent />}
/>`}</code>
        </pre>
      </div>
    </div>
  );
}
