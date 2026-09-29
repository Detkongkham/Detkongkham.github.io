import { useLang } from '@/i18n/LanguageContext';
import { projects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const stats = [
    { value: projects.length, label: t.projects.stats.projects },
    {
      value: projects.reduce((n, p) => n + p.images.length + (p.moreImages?.length ?? 0), 0),
      label: t.projects.stats.screenshots,
    },
    { value: new Set(projects.flatMap((p) => p.stack)).size, label: t.projects.stats.tech },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* ພື້ນຫຼັງຕົກແຕ່ງ: ລາຍຕາຕະລາງ + ແສງຟ້າ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-24 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-1/2 -right-32 size-96 rounded-full bg-accent-2/10 blur-3xl" />
      </div>

      <Section
        id="projects"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        gradientTitle
        aside={
          <dl className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="min-w-24 rounded-2xl border border-accent/20 bg-bg/70 px-4 py-3 text-center backdrop-blur"
              >
                <dt className="text-xs font-medium text-accent">{s.label}</dt>
                <dd className="mt-0.5 bg-linear-to-br from-accent to-accent-2 bg-clip-text text-2xl font-bold text-transparent tabular-nums">
                  <CountUp to={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        }
      >
        <div className="space-y-10">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} index={projects.indexOf(p) + 1} featured />
            </Reveal>
          ))}

          <div className="grid gap-8 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} className="h-full">
                <ProjectCard project={p} index={projects.indexOf(p) + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
