"use client";

const WhatCard = ({ title, text, img }) => {
  return (
    <div className="flex flex-col pt-16 w-full sm:w-[440px] bg-indigo-50 rounded-2xl hover:shadow-lg m-3 items-center">
      <h2 className="text-2xl font-semibold text-center mb-2">{title}</h2>

      <p className="text-base text-slate-400 text-center mb-14">{text}</p>
      <div className="h-[280px] w-[75%] bg-[url('https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/04/55/9b.jpg')] mx-12 rounded-t-lg">
        {img}
      </div>
    </div>
  );
};

export default WhatCard;
