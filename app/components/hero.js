"use client";

import SectionHeader from "./section-header";
import Label from "./label";

const video =
  "https://www.youtube.com/embed/Iy5Z4RMn8ZQ?&autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&rel=0&playlist=Iy5Z4RMn8ZQ";

const primaryButton = {
  text: "",
};

const ResponsiveVideoComponent = ({ videoUrl }) => {
  return (
    <div className="mx-auto relative pb-[56.25%] w-full h-0">
      <iframe
        className="w-full h-full absolute top-0 left-0 border-0"
        src={videoUrl}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="mb-[200px] px-4">
      <div className="m-auto flex flex-col justify-center items-center max-w-[800px] mb-[80px]">
        <div className="inline-flex justify-center mt-[100px] md:mt-[200px]">
          <Label>
            La solución #1 para crear y mantener cultura de empresa en remoto
          </Label>
        </div>
        <h1 className="text-4xl md:text-7xl mt-2 text-center mb-4 font-semibold">
          Tu equipo remoto, más unido que nunca
        </h1>
        <p className="text-2xl text-slate-400 text-center">
          Team Up! te da las herramientas para que saques el máximo partido al
          trabajo remoto manteniendo a tu gente implicada.
        </p>
      </div>
      <div className="max-w-[960px] mx-auto overflow-hidden rounded-xl">
        <ResponsiveVideoComponent videoUrl={video} />
      </div>
    </div>
  );
};

export default Hero;
