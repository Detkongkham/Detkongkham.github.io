import { motion } from 'motion/react';
import { useLang } from '@/i18n/LanguageContext';
import type { Lang } from '@/data/types';

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'lo', label: 'ລາວ' },
];

/** ປຸ່ມເລືອກພາສາແບບ segmented: ພື້ນສີຟ້າເລື່ອນໄປຫາພາສາທີ່ເລືອກ */
export function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.nav.lang} className="flex rounded-full border border-border bg-surface/60 p-0.5 text-xs font-semibold">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`relative min-h-8 cursor-pointer rounded-full px-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            lang === o.value ? 'text-bg' : 'text-muted hover:text-fg'
          }`}
        >
          {lang === o.value && (
            <motion.span
              layoutId="lang-thumb"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute inset-0 rounded-full bg-linear-to-r from-accent to-accent-3 shadow-md shadow-accent/30"
              aria-hidden="true"
            />
          )}
          <span className="relative">{o.label}</span>
        </button>
      ))}
    </div>
  );
}
