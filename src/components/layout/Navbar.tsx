import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { LangToggle } from '@/components/ui/LangToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const SECTIONS = ['projects', 'skills', 'experience', 'contact'] as const;

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors ${
        scrolled || open ? 'border-border bg-bg/80' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-semibold">
          DS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-muted transition hover:text-fg">
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="rounded-lg p-2 text-muted hover:bg-surface md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border px-4 py-2 md:hidden">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-muted hover:text-fg"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
