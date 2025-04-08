"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import { spaces } from "../../data/spaces";
import PageTitle from "../../components/new-web/page-title";

export default function SpacesPage() {
  const locale = useLocale();

  return (
    <WebLayout>
      <PageTitle
        title="Virtual Spaces"
        subtitle="Explore our collection of customized virtual environments designed to enhance your team meetings, workshops, and events."
        align="center"
        size="large"
        theme="dark"
        gradient="linear-gradient(165deg, #635DF5 0%, #67DAFA 100%)"
      />

      <div className="container mx-auto px-4 py-12">
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
