"use client";
import { spaces } from "../consts";
import PrimaryButton from "./primary-button";
import SectionHeader from "./section-header";
import Tag from "./tag";
import Image from "next/image";

const SpaceCard = ({ img, tags, title, description, url }) => {
  console.log(img);
  return (
    <div className="w-full sm:w-[400px] m-3">
      <div className="h-[200px] bg-cover rounded-t-lg relative overflow-hidden">
        <Image src={img} alt="wtf is this" fill />
      </div>
      <div className="rounded-b-lg border-x border-b border-solid border-gray-300 p-6 ">
        <div className="flex flex-col space-y-2 mb-6">
          {/* <img>{img}</img> */}
          <div className="inline-flex space-x-1">
            {tags &&
              tags.map((tag, key) => {
                return <Tag>{tag}</Tag>;
              })}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mb-6 text-slate-400">{description}</p>
        </div>
        <div>
          <PrimaryButton
            iconRight=""
            type="button"
            onClick={() =>
              window.open("https://app.teamup.works/demo", "_blank")
            }
          >
            Ver más
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const Spaces = () => {
  return (
    <div id="spaces" className="mb-[200px]">
      <SectionHeader
        tag="Espacios"
        heading="Espacios para cada tipo de reunión, actividad o evento"
        subheading="No echarás de menos ningún espacio dentro de Team Up! Todos los posibles escenarios que puedas necesitar para tu actividad están (o estarán) aquí."
        width="800"
      />
      <div className="flex flex-wrap justify-center items-stretch mt-14">
        {Object.values(spaces).map((space) => {
          return (
            <SpaceCard
              img={space.img}
              tags={space.tags}
              title={space.title}
              description={space.description}
              url={space.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Spaces;
