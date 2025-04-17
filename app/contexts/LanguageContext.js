"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Create the language context
const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
  // Get the initial language from the URL path
  const pathname = usePathname();
  const initialLanguage = pathname?.startsWith("/es") ? "es" : "en";
  
  // State to track the current language
  const [language, setLanguage] = useState(initialLanguage);
  const router = useRouter();

  // Effect to handle language changes
  useEffect(() => {
    // When language changes, update the URL
    if (language && pathname) {
      const currentPathname = pathname;
      // Replace the locale segment in the path
      const newPath = currentPathname.replace(/^\/[a-z]{2}/, `/${language}`);
      
      // Only navigate if the path would change
      if (newPath !== currentPathname) {
        router.push(newPath);
      }
    }
  }, [language, pathname, router]);

  // Provide the language context value
  const value = {
    language,
    setLanguage,
    isSpanish: language === "es",
    isEnglish: language === "en",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 