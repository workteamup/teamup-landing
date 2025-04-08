"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import { spaces } from "../../data/spaces";
import PageTitle from "../../components/new-web/page-title";

// Spanish translations for space descriptions
const spaceTranslations = {
  planning: {
    title: "Planificación",
    description:
      "Espacio de planificación colaborativa para que los equipos organicen tareas y proyectos",
  },
  "sailboat-retrospective": {
    title: "Retrospectiva de Velero",
    description:
      "Reflexiona sobre el viaje de tu equipo usando el método de retrospectiva del velero",
  },
  campfire: {
    title: "Fogata",
    description:
      "Espacio casual para team building y socialización alrededor de una fogata virtual",
  },
  auditorium: {
    title: "Auditorio",
    description:
      "Presenta a grupos grandes con un entorno virtual de auditorio atractivo",
  },
  "debate-room": {
    title: "Sala de Debate",
    description:
      "Estructura discusiones y debates en un entorno virtual dedicado",
  },
  "floor-is-lava": {
    title: "El Suelo es Lava",
    description:
      "Energiza a tu equipo con este divertido juego virtual basado en un clásico",
  },
  "connect-4": {
    title: "Conecta 4",
    description:
      "Juego clásico Conecta 4 para fomentar vínculos de equipo y competencia amistosa",
  },
  farmyard: {
    title: "La Granja",
    description:
      "Espacio virtual con temática rural perfecto para reuniones informales de equipo",
  },
};

export default function SpacesPage() {
  const locale = useLocale();

  return (
    <WebLayout>
      <PageTitle
        title="Espacios Virtuales"
        subtitle="Explora nuestra colección de entornos virtuales personalizados diseñados para mejorar tus reuniones de equipo, talleres y eventos."
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
                    alt={spaceTranslations[space.id]?.title || space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-purple transition-colors text-gray-phantom">
                    {spaceTranslations[space.id]?.title || space.title}
                  </h2>
                  <p className="text-gray-space">
                    {spaceTranslations[space.id]?.description ||
                      space.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
