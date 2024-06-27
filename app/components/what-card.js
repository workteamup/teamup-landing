"use client";
import Image from "next/image";

const WhatCard = ({ title, text, img }) => {
  return (
    <div className="flex flex-col pt-16 w-full bg-blue-50 rounded-2xl items-center border border-blue-100 cursor-pointer hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-center mb-2">{title}</h2>

      <p className="text-base text-slate-500 text-center mb-14 px-3">{text}</p>
      <div className="h-[280px] w-[75%] bg-[url('https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg')] mx-12 rounded-t-2xl relative border-t-8 border-x-8 border-slate-50 bg-slate-50">
        <Image
          unoptimized
          src={img}
          alt="wtf is this"
          fill
          className="rounded-t-xl"
        />
      </div>
    </div>
  );
};

export default WhatCard;
