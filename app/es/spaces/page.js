"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";

// Spaces data
const spaces = [
  {
    id: "planning",
    title: "Planificación",
    description:
      "Espacio de planificación colaborativa para que los equipos organicen tareas y proyectos",
    image: "/spaces/planning.jpg",
  },
  {
    id: "sailboat-retrospective",
    title: "Retrospectiva de Velero",
    description:
      "Reflexiona sobre el viaje de tu equipo utilizando el método de retrospectiva del velero",
    image: "/spaces/sailboat.jpg",
  },
  {
    id: "campfire",
    title: "Fogata",
    description:
      "Espacio casual para formar equipos y socializar alrededor de una fogata virtual",
    image: "/spaces/campfire.jpg",
  },
  {
    id: "auditorium",
    title: "Auditorio",
    description:
      "Presenta a grandes grupos con un entorno de auditorio virtual atractivo",
    image: "/spaces/auditorium.jpg",
  },
  {
    id: "debate-room",
    title: "Sala de Debate",
    description:
      "Estructura discusiones y debates en un entorno virtual dedicado",
    image: "/spaces/debate.jpg",
  },
  {
    id: "floor-is-lava",
    title: "El Suelo es Lava",
    description:
      "Energiza a tu equipo con este divertido juego virtual basado en un clásico",
    image: "/spaces/floor-is-lava.jpg",
  },
  {
    id: "connect-4",
    title: "Conecta 4",
    description:
      "Juego clásico Conecta 4 para crear vínculos de equipo y competencias amistosas",
    image: "/spaces/connect4.jpg",
  },
  {
    id: "farmyard",
    title: "La Granja",
    description:
      "Espacio virtual con temática rural perfecto para reuniones casuales de equipo",
    image: "/spaces/farmyard.jpg",
  },
];

export default function SpacesPage() {
  const locale = useLocale();

  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Espacios Virtuales
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-graphite mb-16">
          Explora nuestra colección de entornos virtuales personalizados
          diseñados para mejorar tus reuniones de equipo, talleres y eventos.
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
