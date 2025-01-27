import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useTranslations } from "../contexts/TranslationContext";
import SectionHeader from "./section-header";
import Button from "./button";
import SketchyCheckbox from "./sketchy-checkbox";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Events() {
  const t = useTranslations();
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      name: t("Events.tabs.customRooms.name"),
      title: t("Events.tabs.customRooms.title"),
      description: t("Events.tabs.customRooms.description"),
      features: t("Events.tabs.customRooms.features"),
    },
    {
      name: t("Events.tabs.mixers.name"),
      title: t("Events.tabs.mixers.title"),
      description: t("Events.tabs.mixers.description"),
      features: t("Events.tabs.mixers.features"),
    },
  ];

  return (
    <section className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag={t("Events.tag")}
        heading={t("Events.heading")}
        subheading={t("Events.subheading")}
        width="800"
      />

      <div className="max-w-[1440px] mx-auto mt-8 md:mt-14 px-4">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex gap-4 p-1 focus:outline-none focus:ring-0">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    "py-3 md:p-4 text-lg md:text-xl font-medium transition-all w-full text-center",
                    "focus:outline-none focus:ring-0 ring-0",
                    selected
                      ? "relative text-blue-500"
                      : "text-slate-500 hover:text-blue-500"
                  )
                }
              >
                {({ selected }) => (
                  <span
                    className={classNames(
                      "relative focus:outline-none focus:ring-0",
                      selected &&
                        "after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                    )}
                  >
                    {tab.name}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.name}
                className="space-y-6 focus:outline-none focus:ring-0 ring-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      {tab.title}
                    </h3>
                    <p className="text-lg text-slate-500">{tab.description}</p>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">
                        Key features
                      </h4>
                      <ul className="mt-4 space-y-4">
                        {tab.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <SketchyCheckbox />
                            <span className="ml-3 text-slate-500">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Column - Now visible on mobile */}
                  <div className="mt-6 md:mt-0">
                    <div className="flex items-center justify-center bg-gray-50">
                      <img
                        src={`/images/${
                          selectedTab === 0
                            ? "custom-room-events"
                            : "mixer-events"
                        }.png`}
                        alt={tab.name}
                        className="w-full object-contain max-w-full"
                        style={{ maxWidth: "max-content" }}
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="flex justify-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              window.open("https://app.teamup.works/signup", "_blank")
            }
          >
            {t("Events.ctaButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}
