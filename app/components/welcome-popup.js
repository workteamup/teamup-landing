"use client";

import { X } from "lucide-react";
import Button from "./button";
import { useTranslations } from "../contexts/TranslationContext";

const WelcomePopup = ({ isOpen, onDismiss, onNeverShow, onCTAClick }) => {
  const t = useTranslations();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg w-full max-w-[425px] p-6 pt-12">
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative w-full rounded-lg overflow-hidden mb-6">
          <img
            src="/images/sorteoencuesta.png"
            alt="Sorteo iPad Air + Apple Pencil Pro"
            className="w-full h-auto"
          />
        </div>

        <div className="flex gap-2 justify-end">
          <Button variant="secondary" onClick={onNeverShow}>
            {t("WelcomePopup.neverShow")}
          </Button>
          <Button variant="primary" onClick={onCTAClick}>
            {t("WelcomePopup.goToLink")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
