import { useLang } from '@/i18n/LanguageContext';
import { timeline } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  const { t, pick } = useLang();

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="relative space-y-10 border-l border-border pl-6">
        {timeline.map((item) => (
          <li key={item.title.en} className="relative">
            {/* ຈຸດເທິງເສັ້ນ timeline */}
            <span className="absolute -left-[33px] top-1 grid size-4 place-items-center rounded-full bg-accent-soft ring-4 ring-bg">
              <span className="size-1.5 rounded-full bg-accent" />
            </span>

            <Reveal>
              <p className="text-sm text-muted">{item.period}</p>
              <h3 className="mt-1 font-semibold">{pick(item.title)}</h3>
              <p className="text-sm text-muted">{pick(item.place)}</p>
              {item.details && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {item.details.map((d) => (
                    <li key={d.en}>{pick(d)}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
