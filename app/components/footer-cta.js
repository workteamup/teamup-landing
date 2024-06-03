"use client";

import SecondaryButton from "./secondary-button.js";
import PrimaryButton from "./primary-button.js";
import Label from "./label.js";
import Image from "next/image";
import CTAImage from "../../public/images/cta-img.png";

const FooterCTA = ({
  tag,
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  width,
}) => {
  return (
    <div
      className={`m-auto flex flex-col justify-center items-center space-y-8 max-w-[${width}px] pt-[96px] mb-[200px]`}
    >
      <Image src={CTAImage} alt="wtf is this" />
      <h1 className="text-2xl md:text-4xl text-center font-semibold px-4">
        Crea ya una cultura que saque lo mejor de tu equipo
      </h1>
      <div className="flex flex-col space-y-2 w-full sm:flex-row sm:space-x-2 sm:space-y-0 justify-center px-4">
        <PrimaryButton
          type="button"
          onClick={() => window.open("https://teamup.works/signup", "_blank")}
        >
          Empezar ya gratis
        </PrimaryButton>
        <SecondaryButton
          type="button"
          onClick={() =>
            window.open("https://teamup-ignacio.youcanbook.me/", "_blank")
          }
        >
          Programar una demo
        </SecondaryButton>
      </div>
    </div>
  );
};

export default FooterCTA;
