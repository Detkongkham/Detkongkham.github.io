import { useLang } from '@/i18n/LanguageContext';
import { projects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="space-y-8">
        {featured.map((p) => (
          <Reveal key={p.slug}>
            <ProjectCard project={p} featured />
          </Reveal>
        ))}

        <div className="grid gap-8 md:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
