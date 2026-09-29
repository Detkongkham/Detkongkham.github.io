import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Briefcase, FolderKanban, Mail, Menu, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useLang } from '@/i18n/LanguageContext';
import { LangToggle } from '@/components/ui/LangToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const SECTIONS = [
  { id: 'projects', icon: FolderKanban },
  { id: 'skills', icon: Sparkles },
  { id: 'experience', icon: Briefcase },
  { id: 'contact', icon: Mail },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

/** ຫາສ່ວນທີ່ກຳລັງເບິ່ງຢູ່: ສ່ວນທີ່ຕັດເສັ້ນກາງຈໍ */
function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));

    // ຢູ່ Hero (ເທິງສຸດ) = ບໍ່ມີເມນູໃດ active
    const onScroll = () => {
      if (els[0] && window.scrollY + window.innerHeight / 2 < els[0].offsetTop) setActive(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return active;
}

export function Navbar() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const headerRef = useRef<HTMLElement>(null);

  // ແຖບຄວາມຄືບໜ້າການເລື່ອນ
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ປິດເມນູມືຖືເມື່ອກົດ Esc ຫຼື ກົດນອກເມນູ
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const floating = scrolled || open;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 h-16 px-2 sm:px-4">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-accent via-accent-2 to-accent-3"
      />

      {/* ເລື່ອນລົງແລ້ວ: ກາຍເປັນແຄບຊູນແກ້ວລອຍຢູ່ກາງ */}
      <nav
        className={`mx-auto flex items-center justify-between gap-3 transition-all duration-300 ease-out ${
          floating
            ? 'glass mt-2 h-12 max-w-4xl rounded-full pl-2 pr-1.5 shadow-lg shadow-accent/10'
            : 'mt-0 h-16 max-w-5xl rounded-none border border-transparent px-2 sm:px-2'
        }`}
      >
        <a
          href="#top"
          aria-label={t.nav.home}
          className="group flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="relative grid size-9 place-items-center rounded-full bg-linear-to-br from-accent to-accent-3 text-sm font-bold text-bg shadow-md shadow-accent/30 transition group-hover:rotate-[-8deg] group-hover:scale-105">
            DS
            <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-bg" />
          </span>
          <span className="hidden text-sm font-semibold leading-tight lg:block">
            Detkongkham<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {SECTIONS.map(({ id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive ? 'text-accent' : 'text-muted hover:text-fg'
                  }`}
                >
                  {/* ພື້ນຫຼັງເມນູ active ເລື່ອນຕາມ */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-accent-soft ring-1 ring-accent/20"
                      aria-hidden="true"
                    />
                  )}
                  <Icon size={15} className="relative" aria-hidden="true" />
                  <span className="relative">{t.nav[id]}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <LangToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-shine hidden items-center gap-1 rounded-full bg-linear-to-r from-accent to-accent-3 px-4 py-2 text-sm font-medium text-bg shadow-md shadow-accent/30 transition hover:shadow-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-95 sm:flex"
          >
            {t.nav.hire}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-border bg-surface/60 text-muted transition hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-95 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="glass mx-auto mt-2 max-w-4xl origin-top rounded-3xl p-2 shadow-xl shadow-accent/10 md:hidden"
          >
            <ul>
              {SECTIONS.map(({ id, icon: Icon }, i) => {
                const isActive = active === id;
                return (
                  <motion.li
                    key={id}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex min-h-12 items-center gap-3 rounded-2xl px-3 font-medium transition focus-visible:outline-2 focus-visible:outline-accent ${
                        isActive ? 'bg-accent-soft text-accent' : 'text-fg hover:bg-surface'
                      }`}
                    >
                      <span
                        className={`grid size-8 place-items-center rounded-xl ${
                          isActive ? 'bg-linear-to-br from-accent to-accent-3 text-bg' : 'bg-surface text-accent'
                        }`}
                      >
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      {t.nav[id]}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-shine mt-2 flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-linear-to-r from-accent to-accent-3 font-medium text-bg shadow-md shadow-accent/30 sm:hidden"
            >
              {t.nav.hire} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
