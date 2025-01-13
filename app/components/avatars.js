import { useTranslations } from "../contexts/TranslationContext";
import SectionHeader from "./section-header";
import Button from "./button";
import SketchyCheckbox from "./sketchy-checkbox";

export default function Avatars() {
  const t = useTranslations();

  const features = t("Avatars.features");

  return (
    <section className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag={t("Avatars.sectionHeader.tag")}
        heading={t("Avatars.sectionHeader.heading")}
        subheading={t("Avatars.sectionHeader.subheading")}
        width="800"
      />

      <div className="max-w-[1440px] mx-auto mt-8 md:mt-14 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">
              {t("Avatars.customizeTitle")}
            </h3>
            <ul className="mt-4 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <div className="min-w-[24px] min-h-[24px]">
                    <SketchyCheckbox />
                  </div>
                  <span className="ml-3 text-slate-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="flex items-center justify-center bg-gray-50"
              >
                <img
                  src={`/images/avatar-${
                    num === 1 ? "left" : num === 2 ? "middle" : "right"
                  }.png`}
                  alt={t("Avatars.imageAlt").replace("${num}", num)}
                  className="object-contain h-[300px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
          >
            {t("Avatars.createButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}
