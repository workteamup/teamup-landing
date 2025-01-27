"use client";

import { X } from "lucide-react";
import { useTranslations } from "../contexts/TranslationContext";
import Button from "./button";

const InfoBar = ({ message, buttonText, buttonAction, onDismiss }) => {
  const t = useTranslations();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-100 text-blue-800">
      <div className="max-w-screen-xl mx-auto px-4 h-16 lg:h-12 flex items-center justify-between">
        <div className="flex items-center gap-x-3 text-xs lg:text-sm">
          <p className="line-clamp-2 sm:line-clamp-1">{message}</p>
          {buttonText && (
            <Button variant="secondary" size="xs" onClick={buttonAction}>
              {buttonText}
            </Button>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="shrink-0 p-1 hover:bg-blue-200 rounded-full"
          aria-label={t("InfoBar.dismiss")}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
