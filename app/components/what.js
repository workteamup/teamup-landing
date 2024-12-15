"use client";

import { useTranslations } from '../contexts/TranslationContext';
import SectionHeader from "./section-header";
import WhatCard from "./what-card";

const What = () => {
  const t = useTranslations();

  const cards = [
    {
      title: t('What.trabaja.title'),
      text: t('What.trabaja.text'),
      src: "/images/trabaja.mp4",
      videoOnRight: true,
    },
    {
      title: t('What.conecta.title'),
      text: t('What.conecta.text'),
      src: "/images/conecta.mp4",
      videoOnRight: false,
    },
    {
      title: t('What.disfruta.title'),
      text: t('What.disfruta.text'),
      src: "/images/disfruta.mp4",
      videoOnRight: true,
    },
  ];

  return (
    <div id="what" className="mb-24 md:mb-[200px]">
      <SectionHeader
        tag={t('What.sectionHeader.tag')}
        heading={t('What.sectionHeader.heading')}
        subheading={t('What.sectionHeader.subheading')}
        width="960"
        className="mb-14"
      />
      <div className="max-w-[1440px] m-auto p-4">
        <div className="flex flex-col gap-12">
          {cards.map((card, key) => (
            <WhatCard
              key={key}
              title={card.title}
              text={card.text}
              src={card.src}
              videoOnRight={card.videoOnRight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default What;
