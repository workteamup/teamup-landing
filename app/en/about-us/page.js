"use client";

import WebLayout from "../../components/new-web/layout";
import Image from "next/image";
import Button from "../../components/new-web/button";

// Founder data
const founders = [
  {
    name: "Maria Rodriguez",
    title: "Co-Founder & CEO",
    description:
      "With over 15 years in product development and remote team management, Maria recognized the need for better virtual collaboration spaces and co-founded Team Up! to bridge the gap between physical and digital teamwork.",
    image: "/about/founder-maria.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Alex Johnson",
    title: "Co-Founder & CTO",
    description:
      "Alex brings 12 years of experience in software engineering and virtual reality development. Their passion for creating immersive digital experiences drives our product innovation and technical excellence.",
    image: "/about/founder-alex.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Priya Sharma",
    title: "Co-Founder & CDO",
    description:
      "As our design visionary, Priya combines her background in UX design and cognitive psychology to create virtual spaces that are not only beautiful but also intuitive and conducive to collaboration.",
    image: "/about/founder-priya.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

export default function AboutUsPage() {
  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
            About Team Up!
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-graphite mb-8">
            We&apos;re on a mission to make remote work more human through
            immersive, collaborative virtual spaces.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/our-story.jpg"
              alt="Team Up! story"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p>
              Team Up! was born out of a simple observation: remote team
              meetings don&apos;t have to be boring, disconnected experiences.
              In 2021, as remote work became the new normal, we noticed that
              while tools for video calls and chat were abundant, there was
              nothing that truly replicated the spatial, collaborative nature of
              in-person meetings.
            </p>
            <p>
              We set out to create virtual spaces that would not only facilitate
              productive meetings but would also foster the human connection
              that&apos;s often missing in remote work. Our goal wasn&apos;t to
              just build another video conferencing tool, but to create virtual
              environments where teams could collaborate, socialize, and have
              fun—just like they would in physical spaces.
            </p>
            <p>
              Today, Team Up! is used by teams in over 30 countries, helping
              them to connect, collaborate, and build stronger relationships
              regardless of physical distance. We continue to innovate with new
              spaces and features, always guided by our mission to make remote
              work more human.
            </p>
          </div>
        </div>

        {/* Founders section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Founders</h2>

          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-64 h-64 relative rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {founder.title}
                  </p>
                  <p className="text-gray-700 mb-4">{founder.description}</p>

                  <div className="flex">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Human Connection First</h3>
              <p className="text-gray-700">
                We believe technology should enhance human connection, not
                replace it. Every feature we build aims to bring people closer
                together, even when they&apos;re physically apart.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Innovation with Purpose
              </h3>
              <p className="text-gray-700">
                We don&apos;t innovate for the sake of it. We create solutions
                to real problems, always asking how our technology can make
                remote work more engaging, efficient, and enjoyable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Accessibility & Inclusivity
              </h3>
              <p className="text-gray-700">
                We design our spaces to be accessible and inclusive for all team
                members, regardless of their location, technical expertise, or
                background.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <p className="text-gray-700">
                We&apos;re never satisfied with the status quo. We constantly
                gather feedback, iterate on our product, and strive to create
                ever better experiences for our users.
              </p>
            </div>
          </div>
        </div>

        {/* Join us CTA */}
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re on a mission to make remote work more connected,
            collaborative, and fun. Join thousands of teams already using Team
            Up! to transform their virtual meetings.
          </p>
          <Button href="https://app.teamup.works/signup" size="lg">
            Try Free for 2 Months
          </Button>
        </div>
      </div>
    </WebLayout>
  );
}
