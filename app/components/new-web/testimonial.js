import Image from "next/image";
import { greyColors } from "../../lib/design-tokens";

/**
 * Testimonial Component
 * A component to display customer testimonials with consistent styling
 *
 * @param {Object} props
 * @param {string} props.quote - The testimonial text
 * @param {string} props.name - The name of the person giving the testimonial
 * @param {string} props.jobTitle - The job title of the person
 * @param {string} props.companyLogo - The path to the company logo image
 * @param {string} props.companyName - The name of the company (for alt text)
 * @param {string} props.align - Alignment of the testimonial ("left" or "center"), defaults to center
 */
export default function Testimonial({
  quote,
  name,
  jobTitle,
  companyLogo,
  companyName,
  align = "center",
}) {
  return (
    <div className="max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
      <div
        className={`flex flex-col ${
          align === "center"
            ? "items-center text-center"
            : "items-start text-left"
        }`}
      >
        {/* Quote mark */}
        <div className="mb-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-purple"
          >
            <path
              d="M14.6 6C6.8 11.6 2 19.2 2 28.8C2 37.6 7.4 42 14.2 42C20.2 42 24.8 37.4 24.8 31.4C24.8 25.4 20.6 21.6 15 21.6C13.8 21.6 12.6 21.8 11.8 22C12.6 16.4 17 11.2 23 8L14.6 6ZM38.6 6C30.8 11.6 26 19.2 26 28.8C26 37.6 31.4 42 38.2 42C44.2 42 48.8 37.4 48.8 31.4C48.8 25.4 44.6 21.6 39 21.6C37.8 21.6 36.6 21.8 35.8 22C36.6 16.4 41 11.2 47 8L38.6 6Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-phantom mb-8 w-full max-w-[98%] sm:max-w-[95%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {quote}
        </blockquote>

        {/* Author info and company logo in a horizontal line */}
        <div className="flex items-center justify-center gap-6">
          {companyLogo && (
            <div className="relative w-40 h-16">
              <Image
                src={companyLogo}
                alt={`${companyName} logo`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <div className="text-left">
            <div className="font-semibold text-gray-phantom">{name}</div>
            <div className="text-gray-space">{jobTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
