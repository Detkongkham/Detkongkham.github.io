import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '@/hooks/useTheme';
import { useLang } from '@/i18n/LanguageContext';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const dark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.theme}
      aria-pressed={dark}
      className="grid size-9 cursor-pointer place-items-center overflow-hidden rounded-full border border-border bg-surface/60 text-muted transition hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-95"
    >
      {/* ໄອຄອນໝູນ + ຈາງເຂົ້າ/ອອກ ເວລາປ່ຽນ */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: 14, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid"
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
