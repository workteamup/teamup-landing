"use client";
import { spaces } from "../consts";
import UnknownIcon from "./icons/unknown-icon";
import PrimaryButton from "./primary-button";
import SectionHeader from "./section-header";
import Tag from "./tag";
import Image from "next/image";
import Button from "./button";

const iconPath =
  "M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z";

const SpaceCard = ({ img, tags, title, description, url }) => {
  console.log(img);
  return (
    <div className="w-full m-3 rounded-lg hover:shadow-2xl overflow-hidden h-full border border-slate-200">
      <div className="h-[200px] bg-cover rounded-t-lg relative overflow-hidden">
        <Image src={img} alt="wtf is this" fill />
      </div>
      <div className="rounded-b-lg  p-6 flex-col space-between">
        <div className="flex flex-col space-y-2 mb-6 grow">
          <div className="inline-flex space-x-1">
            {tags &&
              tags.map((tag, key) => {
                return <Tag key={key}>{tag}</Tag>;
              })}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mb-6 text-slate-400 grow">{description}</p>
        </div>
        <div>
          <Button
            iconRight={<UnknownIcon width="20" height="20" path={iconPath} />}
            type="button"
            size="sm"
            onClick={() =>
              window.open("https://app.teamup.works/demo", "_blank")
            }
          >
            Ver en demo
          </Button>
        </div>
      </div>
    </div>
  );
};

const Spaces = () => {
  return (
    <div id="spaces" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag="Espacios"
        heading="Espacios para cada tipo de reunión, actividad o evento"
        subheading="No echarás de menos ningún espacio dentro de Team Up! Todos los posibles escenarios que puedas necesitar para tu actividad están (o estarán) aquí."
        width="800"
      />
      <div className="flex flex-wrap justify-center items-stretch mt-14 max-w-[1440px] -m-2">
        {Object.values(spaces).map((space, key) => {
          return (
            <div className="sm:basis-1/2 md:basis-1/3 p-2" key={key}>
              <SpaceCard
                key={key}
                img={space.img}
                tags={space.tags}
                title={space.title}
                description={space.description}
                url={space.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spaces;
