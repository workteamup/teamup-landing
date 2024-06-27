"use client";
import { features } from "../consts";
import SectionHeader from "./section-header";
import Tag from "./tag";
import UnknownIcon from "./icons/unknown-icon";

const FeatureTag = ({ icon, title }) => {
  return (
    <div className="flex items-center h-12 bg-blue-50 border border-blue-100 hover:border-blue-200 px-4 rounded-full m-2 space-x-3 text-blue-800 group cursor-pointer hover:text-blue-500">
      {icon && <div className="w-5 h-5 ">{icon}</div>}
      <div className="text-base font-medium">{title}</div>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag="Funcionalidades"
        heading="Descubre la solución integral para una colaboración más eficiente y divertida"
        subheading="Todas las funcionalidades que necesitas para que tus reuniones de trabajo sean más eficientes, tus experiencias sociales más divertidas y tus eventos más entretenidos."
        width="1200"
        className="max-w-[1200px]"
      />
      <div className="flex flex-wrap justify-center mt-14 md:max-w-[960px] m-auto">
        {features.map((feature, key) => {
          return (
            <FeatureTag
              key={key}
              icon={<UnknownIcon width="20" height="20" path={feature.icon} />}
              title={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
