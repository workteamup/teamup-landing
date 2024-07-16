"use client";

import SectionHeader from "./section-header";
import WhatCard from "./what-card";

const cards = [
  {
    title: "Trabaja",
    text: "Potencia tus reuniones con un entorno interactivo que maximiza la productividad y el engagement.",
    src: "/images/trabaja.mp4",
  },
  {
    title: "Conecta",
    text: "Forja vínculos más fuertes con espacios diseñados para conversaciones auténticas y colaboración natural.",
    src: "/images/conecta.mp4",
  },
  {
    title: "Disfruta",
    text: "Recarga energías y fortalece lazos de equipo con juegos y actividades que fomentan la diversión y el compañerismo.",
    src: "/images/disfruta.mp4",
  },
];

const What = () => {
  return (
    <div id="what" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag="Qué es Team Up!"
        heading="Descubre una nueva forma de trabajar, interactuar y socializar en un entorno remoto"
        subheading="Team Up! revoluciona tu experiencia laboral remota, recreando los momentos espontáneos y las conexiones que echas de menos de la oficina."
        width="960"
        className="mb-14"
      />
      <div className="max-w-[1440px] m-auto p-4">
        <div className="flex flex-row flex-wrap justify-center -m-2">
          {cards.map((card, key) => {
            return (
              <div
                key={key}
                className="p-2 basis-full sm:basis-1/2 xl:basis-1/3"
              >
                <WhatCard title={card.title} text={card.text} src={card.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default What;
