"use client";
import { useTranslations } from "next-intl";
import { spaces } from "../consts";
import UnknownIcon from "./icons/unknown-icon";
import SectionHeader from "./section-header";
import Tag from "./tag";
import Button from "./button";

const iconPath =
  "M10.8371 3.13074C10.6332 2.94456 10.3169 2.95895 10.1307 3.16289C9.94456 3.36683 9.95895 3.68309 10.1629 3.86927L16.3307 9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H16.3279L10.1629 16.1281C9.95895 16.3143 9.94456 16.6305 10.1307 16.8345C10.3169 17.0384 10.6332 17.0528 10.8371 16.8666L17.7535 10.5526C17.8934 10.4248 17.9732 10.2573 17.993 10.0841C17.9976 10.0568 18 10.0287 18 10C18 9.97313 17.9979 9.94675 17.9938 9.92103C17.9756 9.74512 17.8955 9.57446 17.7535 9.44478L10.8371 3.13074Z";

const SpaceCard = ({ img, tags, title, description, url, locale }) => {
  const t = useTranslations("Spaces");

  return (
    <div className="w-full rounded-lg hover:shadow-2xl overflow-hidden border border-slate-200 hover:cursor-pointer flex flex-col min-h-full group">
      <div
        className="h-[200px] bg-cover rounded-t-lg relative overflow-hidden bg-center"
        style={{ backgroundImage: `url(${img})` }}
        // className="relative h-[164px] "
      >
        {/* <Image src={img} alt="wtf is this" fill /> */}
      </div>
      <div className="flex flex-col space-y-6 flex-grow p-6">
        <div className="inline-flex space-x-1">
          {tags &&
            tags.map((tag, key) => {
              return <Tag key={key}>{t(`tags.${tag}`, { fallback: tag })}</Tag>;
            })}
        </div>
        <div className="flex flex-col space-y-2 flex-grow">
          <h3 className="text-xl font-semibold group-hover:text-blue-00">
            {t(`spaces.${title}.title`, { fallback: spaces[title].title })}
          </h3>
          <p className="text-sm text-slate-400 grow">
            {t(`spaces.${title}.description`, {
              fallback: spaces[title].description,
            })}
          </p>
        </div>
        <Button
          variant="primary"
          iconRight={<UnknownIcon width="20" height="20" path={iconPath} />}
          type="button"
          size="sm"
          onClick={() => window.open(url, "_blank")}
        >
          {t("viewDemo", { fallback: "Ver en demo" })}
        </Button>
      </div>
    </div>
  );
};

const Spaces = ({ locale }) => {
  const t = useTranslations("Spaces");

  return (
    <div id="spaces" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag={t("sectionHeader.tag", { fallback: "Espacios" })}
        heading={t("sectionHeader.heading", {
          fallback: "Espacios para cada tipo de reunión, actividad o evento",
        })}
        subheading={t("sectionHeader.subheading", {
          fallback:
            "¡No echarás de menos ningún espacio en Team Up! Todos los escenarios posibles que puedas necesitar para tu actividad están (o estarán) aquí.",
        })}
        width="800"
      />
      <div className="max-w-[1440px] mx-auto mt-14 p-4">
        <div className="flex flex-wrap justify-center items-stretch -m-2">
          {Object.entries(spaces).map(([key, space], index) => {
            return (
              <div className="sm:basis-1/2 lg:basis-1/3 p-2" key={index}>
                <SpaceCard
                  key={index}
                  img={space.img}
                  tags={space.tags}
                  title={key}
                  description={space.description}
                  url={space.url}
                  locale={locale}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Spaces;
