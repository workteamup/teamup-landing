"use client";

import SectionHeader from "./section-header";
import WhatCard from "./what-card";

const cards = [
  {
    title: "Trabaja",
    text: "Ten reuniones de trabajo más efectivas apoyándote en el entorno de Team Up!",
    img: "/images/gif-trabaja.gif",
  },
  {
    title: "Conecta",
    text: "Conoce más a fondo y estrecha vínculos con espacios óptimos para conversar",
    img: "/images/gif-conecta.gif",
  },
  {
    title: "Disfruta",
    text: "Desconecta, relájate y pasa buen rato con nuestros juegos y actividades",
    img: "/images/gif-disfruta.gif",
  },
];

const What = () => {
  return (
    <div id="what" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag="Qué es Team Up!"
        heading="Experimenta una nueva manera de trabajar, interactuar y socializar"
        subheading="Team Up! añade una nueva dimensión a tu manera de relacionarte en un entorno remoto, dando lugar a los momentos espontáneos que echamos de menos de la oficina."
        width="800"
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
                <WhatCard title={card.title} text={card.text} img={card.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default What;
