import { Check, PlayCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/data/types';
import { useLang } from '@/i18n/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';

type Props = { project: Project; featured?: boolean };

export function ProjectCard({ project, featured = false }: Props) {
  const { t, pick } = useLang();
  const [cover, ...gallery] = project.images;
  const videos = project.links?.videos ?? [];

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      {cover && (
        <img
          src={cover}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-video w-full border-b border-border object-cover"
        />
      )}

      <div className="p-6">
        {featured && <p className="text-sm font-medium text-accent">{t.projects.featured}</p>}
        <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{pick(project.summary)}</p>
        <p className="mt-3 text-sm">
          <span className="text-muted">{t.projects.role}:</span> {project.role}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5 text-sm">
            {project.highlights.map((h) => (
              <li key={h.en} className="flex gap-2">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{pick(h)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        {featured && gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 2}`}
                loading="lazy"
                className="h-44 w-full rounded-lg border border-border bg-bg object-contain"
              />
            ))}
          </div>
        )}

        {(videos.length > 0 || project.links?.github) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {videos.map((url, i) => (
              <ButtonLink key={url} href={url} target="_blank" rel="noreferrer">
                <PlayCircle size={16} /> {t.projects.watchDemo}
                {videos.length > 1 && ` ${i + 1}`}
              </ButtonLink>
            ))}
            {project.links?.github && (
              <ButtonLink href={project.links.github} target="_blank" rel="noreferrer" variant="outline">
                <FaGithub size={16} /> {t.projects.viewGithub}
              </ButtonLink>
            )}
          </div>
        )}

        {project.privateSource && <p className="mt-3 text-xs text-muted">{t.projects.privateNote}</p>}
      </div>
    </article>
  );
}
