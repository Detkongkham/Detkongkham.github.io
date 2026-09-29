import { useRef } from 'react';
import { Award, Briefcase, Building2, CalendarDays, CheckCircle2, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useLang } from '@/i18n/LanguageContext';
import { timeline } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { trackSpotlight } from '@/components/ui/spotlight';

const kindIcon = { work: Briefcase, education: GraduationCap };

export function Experience() {
  const { t, pick } = useLang();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  // ເສັ້ນ timeline ເຕີມສີຕາມການເລື່ອນ
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const counts = (['work', 'education'] as const).map((kind) => ({
    kind,
    n: timeline.filter((i) => i.kind === kind).length,
  }));

  return (
    <Section
      id="experience"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      subtitle={t.experience.subtitle}
      gradientTitle
      aside={
        <ul className="flex gap-2">
          {counts.map(({ kind, n }) => {
            const Icon = kindIcon[kind];
            return (
              <li key={kind} className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-sm">
                <Icon size={16} className="text-accent" aria-hidden="true" />
                <span className="font-semibold tabular-nums">{n}</span>
                <span className="text-muted">{t.experience[kind]}</span>
              </li>
            );
          })}
        </ul>
      }
    >
      <div ref={listRef} className="relative overflow-x-clip [overflow-clip-margin:2rem]">
        {/* ເສັ້ນພື້ນ + ເສັ້ນໄລ່ສີທີ່ເຕີມຕາມການເລື່ອນ */}
        <div className="absolute inset-y-0 left-5 w-0.5 -translate-x-1/2 rounded-full bg-border md:left-1/2" aria-hidden="true" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : fill }}
          className="absolute inset-y-0 left-5 w-0.5 origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-accent via-accent-2 to-accent-3 shadow-[0_0_12px_var(--accent)] md:left-1/2"
        />

        <ol className="relative space-y-10 md:space-y-16">
          {timeline.map((item, i) => {
            const Icon = kindIcon[item.kind];
            const left = i % 2 === 0;
            return (
              <li key={item.title.en} className="relative grid pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                {/* ຈຸດເທິງເສັ້ນ: ໄອຄອນຕາມປະເພດ, ອັນລ່າສຸດມີແສງກະພິບ */}
                <span className="absolute left-5 top-5 z-10 -translate-x-1/2 md:left-1/2" aria-hidden="true">
                  {i === 0 && (
                    <span className="absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-ping" />
                  )}
                  <span className="relative grid size-10 place-items-center rounded-full bg-linear-to-br from-accent to-accent-3 text-bg shadow-lg shadow-accent/30 ring-4 ring-bg">
                    <Icon size={18} />
                  </span>
                </span>

                {/* ຊ່ວງເວລາໂຕໃຫຍ່ຢູ່ຝັ່ງກົງກັນຂ້າມ (ຈໍໃຫຍ່) */}
                <div
                  className={`row-start-1 hidden items-start pt-6 md:flex ${
                    left ? 'col-start-2 justify-start' : 'col-start-1 justify-end'
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-gradient text-3xl font-bold tabular-nums">{item.period}</span>
                </div>

                <motion.article
                  initial={reduce ? false : { opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  onMouseMove={trackSpotlight}
                  className={`spotlight glass row-start-1 rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent/10 ${
                    left ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-accent">
                      <Icon size={12} aria-hidden="true" /> {t.experience[item.kind]}
                    </span>
                    {i === 0 && (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400">
                        {t.experience.latest}
                      </span>
                    )}
                    {/* ຈໍໃຫຍ່ສະແດງຊ່ວງເວລາຝັ່ງກົງກັນຂ້າມແລ້ວ ຈຶ່ງເຫຼືອໄວ້ໃຫ້ screen reader */}
                    <span className="inline-flex items-center gap-1.5 text-muted md:sr-only">
                      <CalendarDays size={12} aria-hidden="true" /> {item.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug">{pick(item.title)}</h3>
                  <p className="mt-1.5 flex items-start gap-1.5 text-sm text-muted">
                    <Building2 size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {pick(item.place)}
                  </p>

                  {item.badge && (
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-accent/15 to-accent-3/15 px-3 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/20">
                      <Award size={15} aria-hidden="true" /> {pick(item.badge)}
                    </p>
                  )}

                  {item.details && (
                    <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                      {item.details.map((d) => (
                        <li key={d.en} className="flex gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                          <span>{pick(d)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
