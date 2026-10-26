"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type Language = "nl" | "en"

const STORAGE_KEY = "language"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  // geeft de tekst terug in de actieve taal
  t: <T>(nl: T, en: T) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("nl")

  // gekozen taal onthouden tussen bezoeken
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "nl" || stored === "en") setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useCallback(<T,>(nl: T, en: T) => (lang === "nl" ? nl : en), [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
