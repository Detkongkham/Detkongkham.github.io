import { useLang } from '@/i18n/LanguageContext';

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'lo' : 'en')}
      aria-label="Switch language"
      className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted transition hover:bg-surface hover:text-fg"
    >
      {lang === 'en' ? 'ລາວ' : 'EN'}
    </button>
  );
}
