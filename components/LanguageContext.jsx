"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import en from "../translations/en.json";
import ar from "../translations/ar.json";

const translations = { en, ar };

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") || "en";
    setLang(savedLang);
    updateDocumentAttribute(savedLang);
  }, []);

  const updateDocumentAttribute = (language) => {
    const t_seo = translations[language].seo;
    if (!t_seo) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    
    // Update Document Title
    document.title = t_seo.title;
    
    // Update all Meta Title tags
    const titleSelectors = [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
      'meta[name="title"]'
    ];
    titleSelectors.forEach(selector => {
      const tags = document.querySelectorAll(selector);
      tags.forEach(tag => tag.setAttribute('content', t_seo.title));
    });
    
    // Update all Meta Description tags
    const descSelectors = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]'
    ];
    descSelectors.forEach(selector => {
      const tags = document.querySelectorAll(selector);
      tags.forEach(tag => tag.setAttribute('content', t_seo.description));
    });

    if (language === "ar") {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  };

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("app_lang", newLang);
    updateDocumentAttribute(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
