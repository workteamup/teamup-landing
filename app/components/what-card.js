"use client";

const WhatCard = ({ title, text, src, videoOnRight = true }) => {
  return (
    <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row w-full md:max-w-[1200px] items-start cursor-pointer group mx-auto">
      <div
        className={`flex flex-1 order-1 basis-1/2 ${
          videoOnRight ? "md:order-1 md:text-right" : "md:order-2 md:text-left"
        }`}
      >
        <div className="flex flex-col md:p-8 space-y-2 md:space-y-8">
          <h2
            className={`w-fit text-3xl md:text-5xl font-semibold mb-4 
              relative
              after:block after:absolute 
              after:left-0 after:bottom-0 after:w-full 
              after:h-12 after:bg-teal-200
              after:transform after:-skew-y-[2deg]
              after:clip-path-[polygon(0_0,5%_20%,95%_10%,100%_0%,100%_100%,95%_90%,5%_100%,0%_90%)]
              after:-z-10
              text-blue-600 lowercase
              ${videoOnRight ? "md:ml-auto" : "md:mr-auto"}`}
            style={{ isolation: "isolate" }}
          >
            #{title}
          </h2>
          <p className="text-base md:text-2xl text-slate-400">{text}</p>
        </div>
      </div>

      <div
        className={`flex-1 md:p-8 order-2 w-full basis-1/2 ${
          videoOnRight ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="h-full md:h-[360px] w-full rounded-[48px] relative">
          <video
            alt={`${title} video loop`}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover rounded-3xl "
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default WhatCard;
