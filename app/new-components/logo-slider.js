"use client";

export default function LogoSlider() {
  // Array of logo paths - you can add more as you get them
  const logos = Array(10).fill("/svg/logos/teamup-logo-black.svg");

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 bg-white" />
      <div className="animate-slide flex w-[calc(250px*20)]">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="group mx-8 flex w-[250px] items-center justify-center"
          >
            <div className="text-dark-steel transition-colors duration-300 group-hover:text-dark-graphite">
              <img src={logo} alt="Team Up! Logo" className="h-auto w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
