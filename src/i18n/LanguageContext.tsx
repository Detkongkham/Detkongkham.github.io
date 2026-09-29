import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang, Localized } from '@/data/types';
import { en, type Dict } from './en';
import { lo } from './lo';

const dicts: Record<Lang, Dict> = { en, lo };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** ຂໍ້ຄວາມ UI */
  t: Dict;
  /** ເລືອກພາສາຈາກຂໍ້ມູນໃນ data/ */
  pick: (value: Localized) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'lo') return saved;
  } catch {
    // ignore
  }
  return navigator.language.startsWith('lo') ? 'lo' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value: LangContextValue = {
    lang,
    setLang,
    t: dicts[lang],
    pick: (v) => v[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang() must be used inside <LanguageProvider>');
  return ctx;
}
