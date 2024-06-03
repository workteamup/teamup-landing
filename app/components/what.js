"use client";

import SectionHeader from "./section-header";
import WhatCard from "./what-card";

const cards = [
  {
    title: "Trabaja",
    text: "Texto descriptivo de beneficio de Team Up!",
    // img: "",
  },
  {
    title: "Conecta",
    text: "Texto descriptivo de beneficio de Team Up!",
    // img: "",
  },
  {
    title: "Disfruta",
    text: "Texto descriptivo de beneficio de Team Up!",
    // img: "",
  },
];

const What = () => {
  return (
    <div id="what" className="mb-[200px]">
      <SectionHeader
        tag="Qué es Team Up!"
        heading="Experimenta una nueva manera de trabajar, interactuar y socializar"
        subheading="Team Up! añade una nueva dimensión a tu manera de relacionarte en un entorno remoto, dando lugar a los momentos espontáneos que echamos de menos de la oficina."
        width="800"
      />
      <div className="flex flex-row justify-center mt-14 flex-wrap">
        {cards.map((card, key) => {
          return (
            <WhatCard
              key={key}
              title={card.title}
              text={card.text}
              img={card.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default What;
