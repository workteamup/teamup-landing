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
}) => {
  return (
    <div
      className={`m-auto flex flex-col justify-center items-center space-y-4 max-w-[${width}px] pt-[96px] px-4`}
    >
      {tag && (
        <div className="inline-flex items-center">
          <Label>{tag}</Label>
        </div>
      )}
      {heading && (
        <h1 className="text-2xl md:text-4xl text-center font-semibold">
          {heading}
        </h1>
      )}
      {subheading && (
        <p className="text-xl text-slate-400 text-center">{subheading}</p>
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
