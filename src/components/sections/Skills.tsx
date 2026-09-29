import { useLang } from '@/i18n/LanguageContext';
import { skillGroups } from '@/data/skills';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  const { t, pick } = useLang();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title.en} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold">{pick(g.title)}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
