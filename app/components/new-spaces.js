"use client";
import { useTranslations } from "../contexts/TranslationContext";
import { spaces } from "../consts";
import SectionHeader from "./section-header";
import Tag from "./tag";
import { useState } from "react";
import Button from "./button";

const NewSpaces = ({ locale }) => {
  const t = useTranslations();
  const [selectedSpace, setSelectedSpace] = useState(Object.keys(spaces)[0]);

  const handleSpaceClick = (key) => {
    setSelectedSpace(key);
    // Only apply scroll behavior on mobile
    if (window.innerWidth < 768) {
      // 768px matches the 'md:' breakpoint in Tailwind
      setTimeout(() => {
        const element = document.getElementById(`space-content-${key}`);
        if (element) {
          const navbarHeight = 115;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <section id="spaces" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag={t("Spaces.sectionHeader.tag", { fallback: "Espacios" })}
        heading={t("Spaces.sectionHeader.heading", {
          fallback: "Espacios para cada tipo de reunión, actividad o evento",
        })}
        subheading={t("Spaces.sectionHeader.subheading", {
          fallback:
            "¡No echarás de menos ningún espacio en Team Up! Todos los escenarios posibles que puedas necesitar para tu actividad están (o estarán) aquí.",
        })}
        width="800"
      />

      <div className="max-w-[1440px] mx-auto mt-8 md:mt-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Image - Only visible on desktop */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="h-[500px] rounded-3xl overflow-hidden">
              <img
                src={spaces[selectedSpace].img}
                alt={spaces[selectedSpace].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Expandables */}
          <div className="divide-y divide-gray-200">
            {Object.entries(spaces).map(([key, space], index) => (
              <div
                key={key}
                className={`py-3 md:p-4 cursor-pointer transition-all ${
                  selectedSpace === key ? "" : "hover:text-blue-500"
                }`}
                onClick={() => handleSpaceClick(key)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-medium">
                    {t(`Spaces.spaces.${key}.title`, {
                      fallback: space.title,
                    })}
                  </h3>
                  <span
                    className={`text-2xl text-gray-400 ${
                      selectedSpace === key ? "" : "hover:text-blue-950"
                    }`}
                  >
                    {selectedSpace === key ? "−" : "+"}
                  </span>
                </div>

                {selectedSpace === key && (
                  <div id={`space-content-${key}`} className="mt-4 space-y-4">
                    {/* Image - Only visible on mobile */}
                    <div className="md:hidden h-[300px] rounded-3xl overflow-hidden">
                      <img
                        src={space.img}
                        alt={space.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-2">
                      {space.tags.map((tag, index) => (
                        <Tag key={index}>
                          {t(`Spaces.tags.${tag}`, { fallback: tag })}
                        </Tag>
                      ))}
                    </div>
                    <p className="text-slate-500">
                      {t(`Spaces.spaces.${key}.description`, {
                        fallback: space.description,
                      })}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-12">
          <Button
            variant="secondary"
            type="button"
            size="lg"
            onClick={() =>
              window.open("https://app.teamup.works/demo", "_blank")
            }
          >
            {t("Spaces.viewSpacesDemo", { fallback: "View spaces in demo" })}
          </Button>
          <Button
            variant="primary"
            type="button"
            size="lg"
            onClick={() => window.open("/signup", "_blank")}
          >
            {t("Spaces.signUpFree", { fallback: "Sign up for free" })}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewSpaces;
