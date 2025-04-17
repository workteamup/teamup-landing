"use client";

import React, { useState, useEffect } from "react";
import {
  brandColors,
  brand1Shades,
  brand1Tints,
  brand2Shades,
  brand2Tints,
  brand3Shades,
  brand3Tints,
  greyColors,
  typography,
  semanticColors,
  spacing,
  borderRadius,
  shadows,
} from "../lib/design-tokens";

// Import components from new-web folder
import NewWebButton from "./new-web/button";
import ButtonExamples from "./new-web/button-examples";
import CTASection from "./new-web/cta-section";
import CTASectionExamples from "./new-web/cta-section-examples";
import ContactSalesCTA from "./new-web/contact-sales-cta";
import PageTitle from "./new-web/page-title";
import SolutionHero from "./new-web/solution-hero";
import SolutionByRolePage from "./new-web/solution-by-role-page";

const ColorSwatch = ({ colorName, colorValue, onClick }) => {
  return (
    <div
      className="flex flex-col items-center mb-6 cursor-pointer"
      onClick={() => onClick(colorName, colorValue)}
    >
      <div
        className="w-24 h-24 rounded-lg shadow-md mb-2"
        style={{ backgroundColor: colorValue }}
      ></div>
      <div className="text-sm font-medium">{colorName}</div>
      <div className="text-xs text-gray-steel">{colorValue}</div>
    </div>
  );
};

const ColorPalette = ({ title, colors, onClick }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 font-poppins">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(colors).map(([name, value]) => (
          <ColorSwatch
            key={name}
            colorName={name}
            colorValue={value}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

const TypographyDisplay = () => {
  return (
    <div className="space-y-8">
      {/* Font weights */}
      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">
          Font Weights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              Font Weight: Regular (400)
            </div>
            <div className="font-normal text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              Font Weight: Medium (500)
            </div>
            <div className="font-medium text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              Font Weight: Semibold (600)
            </div>
            <div className="font-semibold text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              Font Weight: Bold (700)
            </div>
            <div className="font-bold text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>
      </div>

      {/* Typography on different backgrounds */}
      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">
          Typography on Different Backgrounds
        </h3>
        <div className="space-y-6">
          {/* Light Background */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-sm text-gray-graphite mb-3">
              Light Background
            </div>
            <div className="space-y-3">
              <p className="text-gray-phantom font-semibold">
                Text in gray-phantom (Dark Text)
              </p>
              <p className="text-gray-graphite">
                Text in gray-graphite (Medium Dark Text)
              </p>
              <p className="text-gray-space">
                Text in gray-space (Medium Text)
              </p>
              <p className="text-gray-steel">Text in gray-steel (Light Text)</p>
              <p className="text-brand-purple font-medium">
                Text in brand-purple (Accent)
              </p>
              <p className="text-brand-blue font-medium">
                Text in brand-blue (Accent)
              </p>
            </div>
          </div>

          {/* Dark Background */}
          <div className="p-6 bg-brand-dark rounded-lg shadow-sm">
            <div className="text-sm text-gray-steel mb-3">Dark Background</div>
            <div className="space-y-3">
              <p className="text-white font-semibold">
                Text in white (Bright Text)
              </p>
              <p className="text-gray-cloud">Text in gray-cloud (Light Text)</p>
              <p className="text-gray-smoke">
                Text in gray-smoke (Medium Light Text)
              </p>
              <p className="text-gray-steel">
                Text in gray-steel (Medium Text)
              </p>
              <p className="text-brand-teal-light font-medium">
                Text in brand-teal-light (Accent)
              </p>
              <p className="text-brand-purple-light font-medium">
                Text in brand-purple-light (Accent)
              </p>
            </div>
          </div>

          {/* Colored Background */}
          <div className="p-6 bg-gradient-to-r from-brand-teal to-brand-purple rounded-lg shadow-sm">
            <div className="text-sm text-white opacity-75 mb-3">
              Gradient Background
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold">
                Text in white (Bright Text)
              </p>
              <p className="text-white opacity-90">
                Text in white with opacity (90%)
              </p>
              <p className="text-white opacity-75">
                Text in white with opacity (75%)
              </p>
              <p className="text-white opacity-50">
                Text in white with opacity (50%)
              </p>
              <p className="text-brand-dark font-medium">
                Text in brand-dark (Dark Text on Gradient)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Font sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">Font Sizes</h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              xs (0.75rem / 12px)
            </div>
            <div className="text-xs">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              sm (0.875rem / 14px)
            </div>
            <div className="text-sm">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              base (1rem / 16px)
            </div>
            <div className="text-base">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              lg (1.125rem / 18px)
            </div>
            <div className="text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              xl (1.25rem / 20px)
            </div>
            <div className="text-xl">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              2xl (1.5rem / 24px)
            </div>
            <div className="text-2xl">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              3xl (1.875rem / 30px)
            </div>
            <div className="text-3xl">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              4xl (2.25rem / 36px)
            </div>
            <div className="text-4xl">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              5xl (3rem / 48px)
            </div>
            <div className="text-5xl">The quick brown fox jumps</div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              6xl (3.75rem / 60px)
            </div>
            <div className="text-6xl">The quick brown fox</div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              7xl (4.5rem / 72px)
            </div>
            <div className="text-7xl">The quick brown</div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              8xl (6rem / 96px)
            </div>
            <div className="text-8xl">The quick</div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <div className="text-sm text-gray-graphite mb-2">
              9xl (8rem / 128px)
            </div>
            <div className="text-9xl">The</div>
          </div>
        </div>
      </div>

      {/* Font size and weight combinations */}
      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">Headings</h3>
        <div className="space-y-6">
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h1 className="text-5xl font-bold text-brand-dark font-poppins mb-2">
              Heading 1
            </h1>
            <div className="text-sm text-gray-graphite">
              text-5xl font-bold text-brand-dark font-poppins
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h2 className="text-4xl font-semibold text-brand-dark font-poppins mb-2">
              Heading 2
            </h2>
            <div className="text-sm text-gray-graphite">
              text-4xl font-semibold text-brand-dark font-poppins
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h3 className="text-3xl font-semibold text-brand-dark font-poppins mb-2">
              Heading 3
            </h3>
            <div className="text-sm text-gray-graphite">
              text-3xl font-semibold text-brand-dark font-poppins
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h4 className="text-2xl font-medium text-brand-dark font-poppins mb-2">
              Heading 4
            </h4>
            <div className="text-sm text-gray-graphite">
              text-2xl font-medium text-brand-dark font-poppins
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h5 className="text-xl font-medium text-brand-dark font-poppins mb-2">
              Heading 5
            </h5>
            <div className="text-sm text-gray-graphite">
              text-xl font-medium text-brand-dark font-poppins
            </div>
          </div>
          <div className="p-4 border border-gray-smoke rounded-lg">
            <h6 className="text-lg font-medium text-brand-dark font-poppins mb-2">
              Heading 6
            </h6>
            <div className="text-sm text-gray-graphite">
              text-lg font-medium text-brand-dark font-poppins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpacingDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(spacing)
        .filter(([key]) => !isNaN(key) && Number(key) <= 12)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([key, value]) => (
          <div
            key={key}
            className="flex items-center p-4 border border-gray-smoke rounded-lg"
          >
            <div
              className="bg-brand-purple"
              style={{ width: value, height: value }}
            ></div>
            <div className="ml-4">
              <div className="font-medium">{key}</div>
              <div className="text-sm text-gray-graphite">{value}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

const BorderRadiusDisplay = () => {
  const borderRadiusTailwind = {
    "rounded-none": "border-radius: 0",
    "rounded-sm": "border-radius: 0.125rem (2px)",
    rounded: "border-radius: 0.25rem (4px)",
    "rounded-md": "border-radius: 0.375rem (6px)",
    "rounded-lg": "border-radius: 0.5rem (8px)",
    "rounded-xl": "border-radius: 0.75rem (12px)",
    "rounded-2xl": "border-radius: 1rem (16px)",
    "rounded-3xl": "border-radius: 1.5rem (24px)",
    "rounded-full": "border-radius: 9999px",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(borderRadiusTailwind).map(([className, description]) => (
        <div
          key={className}
          className="p-4 border border-gray-smoke rounded-lg"
        >
          <div
            className={`${className} bg-brand-purple w-full h-20 mb-4`}
          ></div>
          <div className="font-medium">{className}</div>
          <div className="text-sm text-gray-graphite">{description}</div>
        </div>
      ))}
    </div>
  );
};

const ShadowsDisplay = () => {
  const shadowsTailwind = {
    "shadow-sm": "Small shadow",
    shadow: "Default shadow",
    "shadow-md": "Medium shadow",
    "shadow-lg": "Large shadow",
    "shadow-xl": "Extra large shadow",
    "shadow-2xl": "2xl shadow",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(shadowsTailwind).map(([className, description]) => (
        <div key={className} className="p-4">
          <div
            className={`${className} bg-white mb-4 w-full h-20 flex items-center justify-center rounded-lg`}
          >
            <span className="text-sm text-gray-graphite">{className}</span>
          </div>
          <div className="font-medium">{className}</div>
          <div className="text-xs text-gray-steel">{description}</div>
        </div>
      ))}
    </div>
  );
};

const PageTitleExamples = () => {
  return (
    <div className="space-y-12 -mx-6">
      {/* Default Example */}
      <div className="text-sm text-gray-graphite mb-2 px-6">Default Style</div>
      <PageTitle
        title="Welcome to Team Up!"
        subtitle="Discover how we're revolutionizing remote and hybrid work collaboration."
      />

      {/* Dark Theme Example */}
      <div>
        <div className="text-sm text-gray-graphite mb-2 px-6">Dark Theme</div>
        <PageTitle
          title="Enterprise Solutions"
          subtitle="Tailored solutions designed for large organizations and teams."
          theme="dark"
        />
      </div>

      {/* Custom Background Colors */}
      <div>
        <div className="text-sm text-gray-graphite mb-2 px-6">
          Brand Color Backgrounds
        </div>
        <div className="space-y-8">
          <PageTitle
            title="Purple Background"
            subtitle="Using brand-purple as background"
            theme="dark"
            background="brand-purple"
          />
          <PageTitle
            title="Teal Background"
            subtitle="Using brand-teal as background"
            theme="dark"
            background="brand-teal"
          />
        </div>
      </div>

      {/* Centered Alignment */}
      <div>
        <div className="text-sm text-gray-graphite mb-2 px-6">
          Centered Alignment
        </div>
        <PageTitle
          title="Our Services"
          subtitle="Everything you need to transform your remote work experience."
          align="center"
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-8">
        <div>
          <div className="text-sm text-gray-graphite mb-2 px-6">Small Size</div>
          <PageTitle
            title="Latest Features"
            subtitle="Check out what's new in Team Up!"
            size="small"
          />
        </div>

        <div>
          <div className="text-sm text-gray-graphite mb-2 px-6">Large Size</div>
          <PageTitle
            title="Get Started"
            subtitle="Begin your journey with Team Up today."
            size="large"
          />
        </div>
      </div>

      {/* Title Only */}
      <div>
        <div className="text-sm text-gray-graphite mb-2 px-6">
          Title Only (No Subtitle)
        </div>
        <PageTitle title="Frequently Asked Questions" />
      </div>
    </div>
  );
};

const NewWebComponentsGuide = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">Button</h3>
        <ButtonExamples />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">CTA Section</h3>
        <CTASectionExamples />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">
          Contact Sales CTA
        </h3>
        <ContactSalesCTA />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">Page Title</h3>
        <PageTitle
          title="Example Page Title"
          description="This is an example of a page title component with a description."
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">
          Solution Hero
        </h3>
        <SolutionHero
          headline="Example Solution Hero"
          subheadline="This is an example of the Solution Hero component used on role-based solution pages."
          ctaText="Learn More"
          ctaHref="#"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 font-poppins">
          Solution By Role Page
        </h3>
        <p className="mb-4">
          The SolutionByRolePage component is a template for role-based solution
          pages. It accepts a roleData object with the following structure:
        </p>
        <pre className="bg-gray-cloud p-4 rounded-lg overflow-auto text-sm">
          {`{
  title: "Role Title",
  hero: {
    headline: "Hero Headline",
    subheadline: "Hero Subheadline",
    cta: "CTA Text"
  },
  benefits: [
    { title: "Benefit Title", description: "Benefit Description" },
    // ...
  ],
  // ... other sections
}`}
        </pre>
      </div>
    </div>
  );
};

export default function DesignSystem() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeSection, setActiveSection] = useState("colors");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleColorClick = (name, value) => {
    setSelectedColor({ name, value });
    navigator.clipboard.writeText(value);
    // Could add a toast notification here
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const NavItem = ({ id, label }) => (
    <div
      className={`py-2 px-4 cursor-pointer transition-colors rounded-md ${
        activeSection === id
          ? "bg-brand-purple bg-opacity-10 text-brand-purple font-medium"
          : "hover:bg-gray-cloud"
      }`}
      onClick={() => scrollToSection(id)}
    >
      {label}
    </div>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation - Desktop */}
      <div className="w-64 h-screen sticky top-0 p-6 border-r border-gray-smoke hidden lg:block">
        <div className="font-bold text-xl mb-6">Design System</div>
        <nav className="space-y-1">
          <NavItem id="colors" label="Colors" />
          <NavItem id="typography" label="Typography" />
          <NavItem id="spacing" label="Spacing" />
          <NavItem id="borderRadius" label="Border Radius" />
          <NavItem id="shadows" label="Shadows" />
          <NavItem id="components" label="New-Web Components" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto py-12 px-4">
        {/* Mobile Header with Menu Toggle */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h1 className="text-2xl font-bold">Design System</h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-cloud"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white rounded-lg border border-gray-smoke mb-8 lg:hidden">
            <nav className="p-2">
              {[
                ["colors", "Colors"],
                ["typography", "Typography"],
                ["spacing", "Spacing"],
                ["borderRadius", "Border Radius"],
                ["shadows", "Shadows"],
                ["components", "New-Web Components"],
              ].map(([id, label]) => (
                <div
                  key={id}
                  className={`py-3 px-4 cursor-pointer transition-colors rounded-md ${
                    activeSection === id
                      ? "bg-brand-purple bg-opacity-10 text-brand-purple font-medium"
                      : "hover:bg-gray-cloud"
                  }`}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {label}
                </div>
              ))}
            </nav>
          </div>
        )}

        <h1 className="text-4xl font-bold mb-2 hidden lg:block font-poppins">
          Team Up Design System
        </h1>
        <p className="text-xl text-gray-graphite mb-12 hidden lg:block">
          A guide to design tokens and components from the new-web folder
        </p>

        <section id="colors" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Colors</h2>

          <ColorPalette
            title="Brand Colors"
            colors={brandColors}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 1 (Teal) - Shades"
            colors={brand1Shades}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 1 (Teal) - Tints"
            colors={brand1Tints}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 2 (Blue) - Shades"
            colors={brand2Shades}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 2 (Blue) - Tints"
            colors={brand2Tints}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 3 (Purple) - Shades"
            colors={brand3Shades}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Brand 3 (Purple) - Tints"
            colors={brand3Tints}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Grey Colors"
            colors={greyColors}
            onClick={handleColorClick}
          />

          <ColorPalette
            title="Semantic Colors"
            colors={semanticColors}
            onClick={handleColorClick}
          />
        </section>

        <section id="typography" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Typography</h2>
          <TypographyDisplay />
        </section>

        <section id="spacing" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Spacing</h2>
          <SpacingDisplay />
        </section>

        <section id="borderRadius" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">
            Border Radius
          </h2>
          <BorderRadiusDisplay />
        </section>

        <section id="shadows" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Shadows</h2>
          <ShadowsDisplay />
        </section>

        <section id="components" className="mb-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">
            New-Web Components
          </h2>
          <NewWebComponentsGuide />
        </section>

        {selectedColor && (
          <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
            <div className="font-medium">Color copied to clipboard:</div>
            <div className="flex items-center mt-2">
              <div
                className="w-8 h-8 rounded-full mr-2"
                style={{ backgroundColor: selectedColor.value }}
              ></div>
              <div>
                <div>{selectedColor.name}</div>
                <div className="text-sm text-gray-graphite">
                  {selectedColor.value}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
