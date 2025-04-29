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
            <img
              src={logo}
              alt="Team Up! Logo"
              className="h-auto w-full transition-colors duration-300"
              style={{
                filter: "brightness(0) invert(0.6)", // dark-steel
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(0) invert(0.2)"; // dark-graphite
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(0) invert(0.6)"; // dark-steel
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
