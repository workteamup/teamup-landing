"use client";

import SecondaryButton from "./secondary-button.js";
import PrimaryButton from "./primary-button.js";
import Label from "./label.js";

const SectionHeader = ({
  tag,
  heading,
  subheading,
  primaryButton,
  secondaryButton,
  width,
  className,
}) => {
  return (
    <div
      className={`m-auto flex flex-col items-start md:justify-center md:items-center space-y-4 max-w-[${width}px] pt-[96px] w-full px-4 ${className} `}
    >
      {tag && (
        <div className="inline-flex items-center">
          <Label>{tag}</Label>
        </div>
      )}
      {heading && (
        <h1 className="text-3xl md:text-5xl text-left md:text-center font-semibold">
          {heading}
        </h1>
      )}
      {subheading && (
        <p className="text-lg md:text-xl text-slate-400 text-left md:text-center">
          {subheading}
        </p>
      )}
      {(primaryButton || secondaryButton) && (
        <div>
          {primaryButton && (
            <PrimaryButton
              type={primaryButton.type}
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </PrimaryButton>
          )}
          {secondaryButton && (
            <SecondaryButton
              type={secondaryButton.type}
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </SecondaryButton>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
