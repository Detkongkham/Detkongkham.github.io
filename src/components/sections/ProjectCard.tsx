import { lazy, Suspense, useState, type PointerEvent, type ReactNode } from 'react';
import { Briefcase, Check, Images, Layers, ListChecks, Lock, PlayCircle, Sparkles, ZoomIn } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '@/data/types';
import { useLang } from '@/i18n/LanguageContext';
import { ButtonLink } from '@/components/ui/Button';
import { EngineeringGrid, FeatureTabs } from './ProjectDetails';

const Gallery = lazy(() => import('@/components/ui/Gallery'));

type Props = { project: Project; index: number; featured?: boolean };

/** ຕັ້ງຕຳແໜ່ງເມົ້າໃຫ້ .spotlight (ແສງ + ຂອບໄລ່ສີ) */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/** ກອບໜ້າຕ່າງໂປຣແກຣມ ສຳລັບຮູບປົກ */
function WindowFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg shadow-2xl shadow-accent/15">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="mx-auto truncate pr-10 text-[11px] text-muted">{label}</span>
      </div>
      {children}
    </div>
  );
}

function SectionLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold text-accent uppercase">
      <span className="text-accent">{icon}</span>
      {children}
    </p>
  );
}

export function ProjectCard({ project, index, featured = false }: Props) {
  const { t, pick } = useLang();
  const [cover, ...gallery] = project.images;
  const videos = project.links?.videos ?? [];
  const moreCount = project.moreImages?.length ?? 0;

  // Lightbox ເລື່ອນເບິ່ງໄດ້ທັງຮູບໃນການ໌ດ ແລະ moreImages
  const allImages = [...project.images, ...(project.moreImages ?? [])];
  const slides = allImages.map((src, i) => ({ src, alt: `${project.title} screenshot ${i + 1}` }));
  const phoneAt = project.phoneCover ? allImages.indexOf(project.phoneCover) : -1;

  const [openAt, setOpenAt] = useState(-1);
  const [loaded, setLoaded] = useState(false);

  function open(i: number) {
    setLoaded(true);
    setOpenAt(i);
  }

  const number = String(index).padStart(2, '0');

  const media = cover && (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-accent/15 via-accent-soft to-accent-2/10 p-4 sm:p-6">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className={`relative ${phoneAt >= 0 ? 'mr-10 sm:mr-16' : ''}`}>
        <WindowFrame label={project.title}>
          <button
            type="button"
            onClick={() => open(0)}
            aria-label={`${t.projects.viewAll}: ${project.title}`}
            className={`group/cover relative block w-full cursor-zoom-in overflow-hidden ${focusRing}`}
          >
            <img
              src={cover}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="aspect-video w-full object-cover object-top transition duration-500 motion-safe:group-hover/cover:scale-[1.03]"
            />
            <span className="absolute inset-0 grid place-items-center bg-accent/0 transition duration-300 group-hover/cover:bg-accent/10">
              <span className="flex size-11 scale-90 items-center justify-center rounded-full bg-bg/90 text-accent opacity-0 shadow-lg transition duration-300 group-hover/cover:scale-100 group-hover/cover:opacity-100">
                <ZoomIn size={20} />
              </span>
            </span>
          </button>
        </WindowFrame>
      </div>

      {phoneAt >= 0 && (
        <button
          type="button"
          onClick={() => open(phoneAt)}
          aria-label={`${project.title} mobile screenshot`}
          className={`absolute right-3 bottom-3 w-20 cursor-zoom-in rounded-[1.4rem] sm:right-5 sm:bottom-5 sm:w-28 ${focusRing}`}
        >
          <span className="motion-safe:animate-float relative block rounded-[1.4rem] border-[3px] border-fg bg-fg p-0.5 shadow-2xl shadow-accent/30">
            <span aria-hidden="true" className="absolute top-2 left-1/2 z-10 h-1.5 w-6 -translate-x-1/2 rounded-full bg-fg" />
            <img
              src={project.phoneCover}
              alt=""
              loading="lazy"
              className="aspect-[9/19.5] w-full rounded-[1.1rem] object-cover object-top"
            />
          </span>
        </button>
      )}
    </div>
  );

  const thumbs = gallery.length > 0 && (
    <div
      className={
        featured
          ? 'flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]'
          : 'grid grid-cols-3 gap-3'
      }
    >
      {gallery.map((src, i) => {
        const isLast = i === gallery.length - 1 && moreCount > 0;
        return (
          <button
            key={src}
            type="button"
            onClick={() => open(i + 1)}
            className={`group/thumb relative shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-lg border border-border bg-surface transition duration-200 hover:border-accent/60 hover:shadow-md hover:shadow-accent/10 ${focusRing} ${featured ? 'h-24 w-40' : 'aspect-video'}`}
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${i + 2}`}
              loading="lazy"
              className="size-full object-contain transition duration-300 motion-safe:group-hover/thumb:scale-105"
            />
            {isLast && (
              <span className="absolute inset-0 grid place-items-center bg-slate-950/65 text-sm font-semibold text-white backdrop-blur-[2px]">
                +{moreCount} {t.projects.more}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );

  const highlights = project.highlights.length > 0 && (
    <div className="mt-6">
      <SectionLabel icon={<ListChecks size={14} />}>{t.projects.highlights}</SectionLabel>
      <ul className={`mt-3 text-sm ${featured ? 'grid gap-3 sm:grid-cols-2' : 'space-y-2.5'}`}>
        {project.highlights.map((h) => (
          <li
            key={h.en}
            className={`flex gap-2.5 ${featured ? 'rounded-xl border border-border bg-bg/60 p-3 transition-colors hover:border-accent/40 sm:last:odd:col-span-2' : ''}`}
          >
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-accent-soft text-accent ring-1 ring-accent/20">
              <Check size={13} strokeWidth={3} />
            </span>
            <span className="leading-relaxed">{pick(h)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const stack = (
    <div className="mt-6">
      <SectionLabel icon={<Layers size={14} />}>{t.projects.stack}</SectionLabel>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent transition-colors hover:border-accent/50"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );

  const intro = (
    <>
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-semibold text-accent">{number}</span>
        <span className="h-px flex-1 bg-linear-to-r from-accent/40 to-transparent" aria-hidden="true" />
        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-accent to-accent-2 px-3.5 py-1.5 text-sm font-semibold text-white shadow-md shadow-accent/25 dark:text-bg">
            <Sparkles size={15} /> {t.projects.featured}
          </span>
        )}
      </div>

      <h3
        className={`mt-4 font-bold tracking-tight ${
          featured
            ? 'bg-linear-to-r from-accent to-accent-2 bg-clip-text pb-1 text-3xl text-transparent sm:text-4xl'
            : 'text-xl transition-colors group-hover:text-accent'
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{pick(project.summary)}</p>

      <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm">
        <Briefcase size={15} className="text-accent" />
        <span className="text-accent">{t.projects.role}:</span>
        <span className="font-semibold text-accent">{project.role}</span>
      </p>
    </>
  );

  const actions = (videos.length > 0 || project.links?.github || slides.length > 1 || project.privateSource) && (
    <div className="mt-6 border-t border-border pt-5">
      <div className="flex flex-wrap items-center gap-3">
        {videos.map((url, i) => (
          <ButtonLink
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            variant={i === 0 ? 'primary' : 'soft'}
            className={i === 0 ? 'shadow-md shadow-accent/25' : ''}
          >
            <PlayCircle size={16} /> {t.projects.watchDemo}
            {videos.length > 1 && ` ${i + 1}`}
          </ButtonLink>
        ))}
        {project.links?.github && (
          <ButtonLink href={project.links.github} target="_blank" rel="noreferrer" variant="soft">
            <FaGithub size={16} /> {t.projects.viewGithub}
          </ButtonLink>
        )}
        {slides.length > 1 && (
          <button
            type="button"
            onClick={() => open(0)}
            className={`inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-accent transition hover:bg-accent-soft ${focusRing}`}
          >
            <Images size={16} /> {t.projects.viewAll} ({slides.length})
          </button>
        )}
      </div>

      {project.privateSource && (
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
          <Lock size={13} /> {t.projects.privateNote}
        </p>
      )}
    </div>
  );

  return (
    <article
      onPointerMove={trackPointer}
      className={`spotlight group flex h-full flex-col rounded-3xl transition duration-300 ${
        featured
          ? 'featured-card p-4 sm:p-6 xl:-mx-12'
          : 'border border-border bg-surface/80 p-3 backdrop-blur hover:shadow-2xl hover:shadow-accent/10 sm:p-4 motion-safe:hover:-translate-y-1'
      }`}
    >
      {featured ? (
        <>
          {/* ຄວາມສູງສອງຖັນໃກ້ຄຽງກັນ; ຈຸດເດັ່ນຍ້າຍລົງແຖບເຕັມກວ້າງ ເພື່ອບໍ່ໃຫ້ມີຊ່ອງວ່າງໃຕ້ຮູບ */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="min-w-0 space-y-4 lg:col-span-7">
              {media}
              {thumbs}
              <div className="px-2 lg:px-0 [&>div]:mt-2">{stack}</div>
            </div>
            <div className="flex min-w-0 flex-col px-2 lg:col-span-5 lg:px-0 lg:py-2 lg:pr-2">
              {intro}
              <div className="mt-auto">{actions}</div>
            </div>
          </div>
          {project.features ? (
            <div className="mt-8 space-y-10 border-t border-accent/15 px-2 pt-8 pb-2">
              <FeatureTabs groups={project.features} />
              {project.engineering && <EngineeringGrid notes={project.engineering} />}
            </div>
          ) : (
            <div className="px-2 pb-2 lg:-mt-2">{highlights}</div>
          )}
        </>
      ) : (
        <>
          {media}
          <div className="flex flex-1 flex-col px-2 pt-5 pb-2 sm:px-3">
            {intro}
            {highlights}
            {stack}
            <div className="mt-6">{thumbs}</div>
            <div className="mt-auto">{actions}</div>
          </div>
        </>
      )}

      {loaded && (
        <Suspense fallback={null}>
          <Gallery slides={slides} index={openAt} onClose={() => setOpenAt(-1)} />
        </Suspense>
      )}
    </article>
  );
}
