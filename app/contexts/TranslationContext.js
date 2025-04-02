"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import enTranslations from "../../translations/en.json";
import esTranslations from "../../translations/es.json";

const TranslationContext = createContext();

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export function TranslationProvider({ children }) {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";

  const t = (key, inlineTranslations = null) => {
    // If inline translations are provided, use those based on the current locale
    if (
      inlineTranslations &&
      typeof inlineTranslations === "object" &&
      inlineTranslations[locale]
    ) {
      return inlineTranslations[locale];
    }

    // Otherwise, use the standard translation logic from JSON files
    const keys = key.split(".");
    let value = translations[locale];
    for (const k of keys) {
      if (!value || value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationProvider"
    );
  }
  return context.t;
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a TranslationProvider");
  }
  return context.locale;
}
