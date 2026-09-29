import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Building,
  CalendarCheck,
  Check,
  Clock,
  Cpu,
  Gauge,
  LayoutGrid,
  Megaphone,
  MessagesSquare,
  Package,
  Palette,
  ScanText,
  ShieldCheck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import type { EngineeringNote, FeatureGroup, IconKey } from '@/data/types';
import { useLang } from '@/i18n/LanguageContext';

const icons: Record<IconKey, LucideIcon> = {
  calendar: CalendarCheck,
  wallet: Wallet,
  package: Package,
  users: Users,
  megaphone: Megaphone,
  chat: MessagesSquare,
  building: Building,
  clock: Clock,
  shield: ShieldCheck,
  gauge: Gauge,
  scan: ScanText,
  palette: Palette,
};

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

function Heading({ icon: Icon, title, sub }: { icon: LucideIcon; title: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-md shadow-accent/25 dark:text-bg">
        <Icon size={18} />
      </span>
      <div>
        <h4 className="font-semibold text-accent">{title}</h4>
        {sub && <p className="text-sm text-muted">{sub}</p>}
      </div>
    </div>
  );
}

/** ຟີເຈີແບ່ງຕາມໝວດ: ແຖບເລືອກໝວດ + ລາຍການຂອງໝວດນັ້ນ (ລູກສອນ ←/→ ປ່ຽນແຖບໄດ້) */
export function FeatureTabs({ groups }: { groups: FeatureGroup[] }) {
  const { t, pick } = useLang();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const group = groups[active];

  function onKeyDown(e: KeyboardEvent) {
    const last = groups.length - 1;
    const next =
      e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      <Heading icon={LayoutGrid} title={t.projects.features} sub={`${groups.length} ${t.projects.areas} · ${total} ${t.projects.featureCount}`} />

      <div
        role="tablist"
        aria-label={t.projects.features}
        onKeyDown={onKeyDown}
        className="-mx-1 mt-4 flex snap-x gap-2 overflow-x-auto px-1 pt-1 pb-2 [scrollbar-width:thin] sm:flex-wrap sm:overflow-visible"
      >
        {groups.map((g, i) => {
          const Icon = icons[g.icon];
          const selected = i === active;
          return (
            <button
              key={g.title.en}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`inline-flex min-h-11 shrink-0 cursor-pointer snap-start items-center gap-2 rounded-xl border px-3.5 text-sm font-medium transition duration-200 ${focusRing} ${
                selected
                  ? 'border-transparent bg-accent text-white shadow-md shadow-accent/30 dark:text-bg'
                  : 'border-accent/20 bg-bg/60 text-accent hover:border-accent/50 hover:bg-accent-soft'
              }`}
            >
              <Icon size={16} />
              {pick(g.title)}
              <span
                className={`rounded-md px-1.5 text-xs tabular-nums ${selected ? 'bg-white/20 dark:bg-black/15' : 'bg-accent-soft'}`}
              >
                {g.items.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="mt-3 rounded-2xl border border-accent/15 bg-bg/60 p-4 sm:p-5"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="grid gap-3 text-sm sm:grid-cols-2"
          >
            {group.items.map((item) => (
              <li
                key={item.en}
                className="flex gap-2.5 rounded-xl border border-border bg-surface/70 p-3 transition-colors hover:border-accent/40 sm:last:odd:col-span-2"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-accent-soft text-accent ring-1 ring-accent/20">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{pick(item)}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** ຈຸດເດັ່ນດ້ານວິສະວະກຳ: bento grid, ການ໌ດທຳອິດກວ້າງ 2 ຊ່ອງ */
export function EngineeringGrid({ notes }: { notes: EngineeringNote[] }) {
  const { t, pick } = useLang();

  return (
    <div>
      <Heading icon={Cpu} title={t.projects.engineering} sub={t.projects.engineeringSub} />
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((n, i) => {
          const Icon = icons[n.icon];
          return (
            <li
              key={n.title.en}
              className={`group/note relative overflow-hidden rounded-2xl border border-border bg-bg/60 p-4 transition duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 motion-safe:hover:-translate-y-0.5 ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-10 size-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover/note:bg-accent/20"
              />
              <div className="relative flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/20">
                  <Icon size={16} />
                </span>
                <h5 className="font-semibold">{pick(n.title)}</h5>
              </div>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{pick(n.body)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
