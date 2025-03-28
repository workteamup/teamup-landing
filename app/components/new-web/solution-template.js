"use client";

import Image from "next/image";
import { useTranslations } from "../../contexts/TranslationContext";
import { semanticColors } from "../../lib/design-tokens";

/**
 * A reusable template for all solution pages
 *
 * @param {Object} props Component properties
 * @param {string} props.title The solution title
 * @param {string} props.description A brief description of the solution
 * @param {Array} props.blocks Array of content blocks with title, description, and image
 * @param {React.ReactNode} props.children Optional additional content
 */
const SolutionTemplate = ({ title, description, blocks, children }) => {
  const t = useTranslations();

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-graphite">
          {description}
        </p>
      </section>

      {/* Content Blocks - Alternating Layout */}
      <section className="container mx-auto px-4 space-y-24 py-8">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-phantom">
                {block.title}
              </h2>
              <p className="text-gray-graphite">{block.description}</p>

              {block.bulletPoints && (
                <ul className="space-y-2 mt-4">
                  {block.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-space">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Additional Content */}
      {children}
    </div>
  );
};

export default SolutionTemplate;
