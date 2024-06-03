"use client";
import { features } from "../consts";
import PrimaryButton from "./primary-button";
import SectionHeader from "./section-header";
import Tag from "./tag";

const FeatureTag = ({ icon, title }) => {
  return (
    <div className="flex items-center h-12 bg-blue-50 border border-blue-200 px-4 rounded-lg m-2">
      <div className="text-base font-medium text-indigo-700">{title}</div>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="mb-[200px]">
      <SectionHeader
        tag="Funcionalidades"
        heading="Experimenta la solución para colaboración todo-en-1"
        subheading="Todas las funcionalidades que necesitas para que tus reuniones de trabajo sean más eficientes, tus experiencias sociales más divertidas y tus eventos más entretenidos."
        width="800"
      />
      <div className="flex flex-wrap justify-center mt-14 md:max-w-[960px] m-auto">
        {features.map((feature, key) => {
          return <FeatureTag icon={feature.icon} title={feature.title} />;
        })}
      </div>
    </div>
  );
};

export default Features;
