import React from "react";
import {
  Building,
  Calendar,
  DollarSign,
  Users,
  Sparkles,
  Globe,
} from "lucide-react";
import {
  brandColors,
  greyColors,
  shadows,
  borderRadius,
} from "../../lib/design-tokens";

/**
 * ComparisonSection Component
 * Displays a side-by-side comparison between traditional solutions and Team Up advantages
 *
 * @returns {JSX.Element} The ComparisonSection component
 */
const ComparisonSection = () => {
  const traditionalSolutions = [
    {
      icon: Calendar,
      title: "Annual team-building retreats",
      description:
        "Expensive, infrequent events that provide limited engagement and temporary team bonding.",
    },
    {
      icon: DollarSign,
      title: "High costs, low ROI",
      description:
        "Significant expenses for travel, accommodation, and event planning with questionable long-term impact.",
    },
    {
      icon: Users,
      title: "One-size-fits-all approach",
      description:
        "Generic activities that don't account for diverse team preferences and personalities.",
    },
  ];

  const teamUpSolutions = [
    {
      icon: Globe,
      title: "Continuous virtual engagement",
      description:
        "Continuous engagement through daily virtual interactions, not just once a year. Our 3D environments create memorable shared experiences at a fraction of the cost.",
    },
    {
      icon: DollarSign,
      title: "Cost-effective solution",
      description:
        "Significantly lower costs with higher engagement rates and measurable team performance improvements.",
    },
    {
      icon: Users,
      title: "Personalized experiences",
      description:
        "Customizable virtual environments and activities that cater to different team dynamics and individual preferences.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-cloud">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-brand-purple bg-opacity-10 px-3 py-1 text-sm text-brand-purple mb-4">
            Reimagining Team Building
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-poppins mb-4">
            Current Solutions vs. Team Up
          </h2>
          <p className="max-w-[700px] text-gray-space md:text-xl">
            See how our innovative approach transforms the team-building
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current Solutions Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-cloud rounded-lg opacity-50"></div>
            <div
              className="relative p-6 md:p-8 rounded-lg border border-gray-smoke h-full"
              style={{ boxShadow: shadows.md, borderRadius: borderRadius.lg }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-cloud flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-gray-graphite" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark font-poppins">
                  How companies are solving this right now
                </h3>
              </div>

              <div className="space-y-6">
                {traditionalSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-cloud flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <solution.icon className="w-5 h-5 text-gray-graphite" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-brand-dark font-poppins">
                        {solution.title}
                      </h4>
                      <p className="text-gray-space">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Up Solution Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 rounded-lg"></div>
            <div
              className="relative p-6 md:p-8 rounded-lg border border-brand-purple border-opacity-20 h-full"
              style={{ boxShadow: shadows.md, borderRadius: borderRadius.lg }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-purple bg-opacity-20 flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark font-poppins">
                  How you can solve it with Team Up!
                </h3>
              </div>

              <div className="space-y-6">
                {teamUpSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-purple bg-opacity-20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <solution.icon className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-brand-dark font-poppins">
                        {solution.title}
                      </h4>
                      <p className="text-gray-space">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
