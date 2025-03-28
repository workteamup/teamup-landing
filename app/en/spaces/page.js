"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";

// Spaces data
const spaces = [
  {
    id: "planning",
    title: "Planning",
    description:
      "Collaborative planning space for teams to organize tasks and projects",
    image: "/spaces/planning.jpg",
  },
  {
    id: "sailboat-retrospective",
    title: "Sailboat Retrospective",
    description:
      "Reflect on your team's journey using the sailboat retrospective method",
    image: "/spaces/sailboat.jpg",
  },
  {
    id: "campfire",
    title: "Campfire",
    description:
      "Casual space for team building and socializing around a virtual campfire",
    image: "/spaces/campfire.jpg",
  },
  {
    id: "auditorium",
    title: "Auditorium",
    description:
      "Present to large groups with an engaging virtual auditorium setting",
    image: "/spaces/auditorium.jpg",
  },
  {
    id: "debate-room",
    title: "Debate Room",
    description:
      "Structure discussions and debates in a dedicated virtual environment",
    image: "/spaces/debate.jpg",
  },
  {
    id: "floor-is-lava",
    title: "The Floor is Lava",
    description:
      "Energize your team with this fun virtual game based on a classic",
    image: "/spaces/floor-is-lava.jpg",
  },
  {
    id: "connect-4",
    title: "Connect 4",
    description:
      "Classic Connect 4 game for team bonding and friendly competition",
    image: "/spaces/connect4.jpg",
  },
  {
    id: "farmyard",
    title: "The Farmyard",
    description:
      "Rural-themed virtual space perfect for casual team gatherings",
    image: "/spaces/farmyard.jpg",
  },
];

export default function SpacesPage() {
  const locale = useLocale();

  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Virtual Spaces
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-graphite mb-16">
          Explore our collection of customized virtual environments designed to
          enhance your team meetings, workshops, and events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <Link
              href={`/${locale}/spaces/${space.id}`}
              key={space.id}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-purple transition-colors text-gray-phantom">
                    {space.title}
                  </h2>
                  <p className="text-gray-space">{space.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
