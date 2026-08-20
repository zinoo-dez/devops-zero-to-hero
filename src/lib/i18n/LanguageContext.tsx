"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Language, translations } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const currentLang = (params?.lang as Language) || "en";
  const [language, setLanguageState] = useState<Language>(currentLang);

  // Sync state if URL changes
  useEffect(() => {
    if (currentLang === "en" || currentLang === "my") {
      setLanguageState(currentLang);
    }
  }, [currentLang]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (!pathname) return;
    
    // Replace the current locale in the path with the new one
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "my") {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
