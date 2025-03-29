"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import { spaces } from "../../data/spaces";

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
