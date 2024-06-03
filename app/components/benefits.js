"use client";

import BenefitCard from "./benefit-card";
import SectionHeader from "./section-header";

const benefitsArray = [
  {
    icon: "",
    title: "Crea una cultura más fuerte y atractiva",
    text: "Consigue que el mejor talento quiera trabajar en tu empresa con una cultura fuerte preparada para el futuro del trabajo remoto.",
  },
  {
    icon: "",
    title: "Aumenta la satisfacción del empleado y su retención",
    text: "Mantén a tu equipo conectado y comprometido con actividades divertidas que sí dan ganas de hacer en remoto.",
  },
  {
    icon: "",
    title: "Mejora la productividad y eficiencia del equipo",
    text: "Tu equipo unido y comprometido, junto a la eficiencia que aportan los entornos de Team Up! te permitirán dar un salto en la productividad.",
  },
];

const Benefits = () => {
  return (
    <div className="mb-[200px]" id="benefits">
      <SectionHeader
        tag="Beneficios"
        heading="Acorta la distancia del trabajo en remoto, estimulando un clima de cercanía, dinamismo y sinergia a través de Team Up!"
        width="800"
      />
      <div className="flex flex-wrap justify-center items-stretch mt-14">
        {benefitsArray.map((benefit, key) => {
          return (
            <BenefitCard
              key={`benefit-${key}`}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
